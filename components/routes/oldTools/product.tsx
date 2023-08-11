import { MobileBom } from "@components/boms/mobilebom";
import { PcBom } from "@components/boms/pcbom";
import { useIsMobile } from "@components/common/context";
import { Loading } from "@components/common/loading";
import { Select } from "@components/common/select";
import { ToolsLayout } from "@components/common/toolsLayout";
import { CAR_SRC } from "@components/const";
import { ProductBom } from "@lib/@types/type";
import { useAsyncM } from "@lib/hooks/useAsyncM";
import { useProductsState } from "@lib/hooks/useProductsState";
import { useT } from "@lib/hooks/useT";
import { getProductBomList, getProductPcfAccountable } from "@lib/http";
import { useMemo } from "react";
import { ProfileInfo } from "./dashboard";

export function ProductDefinition() {
  const { t } = useT();
  const { current, items, onChange, current_product, loading: load0 } = useProductsState();
  const { value: pcfAccountable, loading: load1 } = useAsyncM(
    () => (current_product ? getProductPcfAccountable(current_product.id) : Promise.resolve(undefined)),
    [current_product],
  );
  const { value: boms, loading: load2 } = useAsyncM(
    () => (current_product ? getProductBomList(current_product.id) : Promise.resolve(undefined)),
    [current_product],
  );
  const root = useMemo(() => {
    if (!boms || boms.length === 0) return undefined;
    const map: { [k: string]: ProductBom[] } = {};
    let rootBomPartNumber: string = "";
    boms.forEach((bom: any) => {
      if (bom.parentPartNumberId === null) {
        rootBomPartNumber = bom.id + "";
      }
      bom.children = [];
      if (!map[bom.id]) map[bom.id] = [];
      map[bom.id].push(bom);
    });
    boms.forEach((bom: any) => {
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
  const loading = load0 || load1 || pcfAccountable == undefined || load2 || boms == undefined;
  const BomUI = isMobile ? MobileBom : PcBom;
  return (
    <ToolsLayout className="text-black">
      {loading ? (
        <Loading />
      ) : (
        <>
          {current_product && (
            <>
              <Select current={current} items={items} onChange={onChange} />
              <div className="text-2xl font-bold my-5 mo:text-lg">{t("PRODUCT INFO")}</div>
              <div className="w-full bg-white rounded-lg p-5 flex items-center justify-between mo:flex-col mo:items-start">
                <img
                  className="object-contain w-[15.625rem] aspect-square rounded-lg border border-black border-solid mo:w-full mo:aspect-[3/2]"
                  src={current_product.imageUrl || CAR_SRC}
                />
                <div className="py-1 ml-[3.75rem] mo:mt-5 mo:ml-0 mo:py-0">
                  <ProfileInfo label={t("Product Name")} text={current_product.name || "-"} />
                  <ProfileInfo label={t("Display Name")} text={current_product.displayName} />
                  <ProfileInfo label={t("Product UID")} text={current_product.id + ""} />
                </div>
                <div className="py-1 ml-[3.75rem] mo:ml-0 mo:py-0">
                  <ProfileInfo label={t("From Organization")} text={current_product.organization.displayName + ""} />
                  <ProfileInfo label={t("Product Type")} text={current_product.type} />
                  <ProfileInfo
                    label={t("PCF Accountable")}
                    text={pcfAccountable === undefined ? "-" : pcfAccountable ? "YES" : "NO"}
                  />
                </div>
                <div className="py-1 ml-[3.75rem] mo:ml-0 mo:py-0">
                  <ProfileInfo
                    label={t("Manufacturing Status")}
                    text={current_product.manufacturingStatus === 1 ? "Active" : "Inactive"}
                  />
                  <ProfileInfo label={t("Created At")} text={current_product.createTime} />
                  <ProfileInfo label={t("Last Update")} text={current_product.updateTime} />
                </div>
              </div>
              <div className="text-2xl font-bold my-5 mo:text-lg">{t("PRODUCT BOM")}</div>
              {root && <BomUI node={root} />}
            </>
          )}
        </>
      )}
    </ToolsLayout>
  );
}

export default ProductDefinition;
