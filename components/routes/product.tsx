import { MobileBom } from "@components/boms/mobilebom";
import { PcBom } from "@components/boms/pcbom";
import { useIsMobile } from "@components/common/context";
import { MainLayout } from "@components/common/mainLayout";
import { Select } from "@components/common/select";
import { useAsyncM } from "@lib/hooks/useAsyncM";
import { useProductsState } from "@lib/hooks/useProductsState";
import { getProductBomList, getProductPcfAccountable } from "@lib/http";
import { ProductBom } from "@lib/@types/type";
import { useMemo } from "react";
import { ProfileInfo } from "./dashboard";

export function ProductDefinition() {
  const { current, items, onChange, current_product } = useProductsState()
  const { value: pcfAccountable } = useAsyncM(
    () => (current_product ? getProductPcfAccountable(current_product.id) : Promise.resolve(undefined)),
    [current_product]
  );
  const { value: boms } = useAsyncM(
    () => (current_product ? getProductBomList(current_product.id) : Promise.resolve(undefined)),
    [current_product]
  );
  const root = useMemo(() => {
    if (!boms || boms.length === 0) return undefined;
    const map: { [k: string]: ProductBom[] } = {};
    let rootBomPartNumber: string = "";
    boms.forEach((bom) => {
      if (bom.parentPartNumberId === null) {
        rootBomPartNumber = bom.partNumber;
      }
      bom.children = [];
      if (!map[bom.partNumber]) map[bom.partNumber] = [];
      map[bom.partNumber].push(bom);
    });
    boms.forEach((bom) => {
      const parents = map[bom.parentPartNumberId];
      if (parents) {
        parents.forEach((p, index) => {
          p.children.push(index > 0 ? { ...bom } : bom);
        });
      }
    });
    const res = map[rootBomPartNumber];
    if (res && res[0] && res[0].children.length > 0) {
      const root = res[0];
      //set deep and parendId
      root.deep = 0;
      const setDeepAndPid = (node: ProductBom) => {
        for (const item of node.children) {
          item.deep = node.deep + 1;
          item.parent = node;
          setDeepAndPid(item);
        }
      };
      setDeepAndPid(root);
      return root;
    }
    return undefined;
  }, [boms]);
  const isMobile = useIsMobile();
  const BomUI = isMobile ? MobileBom : PcBom;
  return (
    <MainLayout className="text-black">
      {current_product && (
        <>
          <Select current={current} items={items} onChange={onChange} />
          <div className="text-2xl font-bold my-5 mo:text-lg">PRODUCT INFO</div>
          <div className="w-full bg-white rounded-lg p-5 flex items-center justify-between mo:flex-col mo:items-start">
            <img className="w-[15.625rem] aspect-square rounded-lg border border-black border-solid mo:w-full mo:aspect-[3/2]" />
            <div className="py-1 ml-[3.75rem] mo:ml-0 mo:py-0">
              <ProfileInfo label="Product Name" text={current_product.name || "-"} />
              <ProfileInfo label="Display Name" text={current_product.displayName} />
              <ProfileInfo label="Product UID" text={current_product.id + ""} />
            </div>
            <div className="py-1 ml-[3.75rem] mo:ml-0 mo:py-0">
              <ProfileInfo label="From Organization" text={current_product.orgId + ""} />
              <ProfileInfo label="Product Type" text={current_product.type} />
              <ProfileInfo
                label="PCF Accountable"
                text={pcfAccountable === undefined ? "-" : pcfAccountable ? "YES" : "NO"}
              />
            </div>
            <div className="py-1 ml-[3.75rem] mo:ml-0 mo:py-0">
              <ProfileInfo
                label="Manufacturing Status"
                text={current_product.manufacturingStatus === 1 ? "Active" : "Inactive"}
              />
              <ProfileInfo label="Created At" text={current_product.createTime} />
              <ProfileInfo label="Last Update" text={current_product.updateTime} />
            </div>
          </div>
          <div className="text-2xl font-bold my-5 mo:text-lg">PRODUCT BOM</div>
          {root && <BomUI node={root} />}
        </>
      )}
    </MainLayout>
  );
}

export default ProductDefinition;
