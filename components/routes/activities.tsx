import { MobileActivites } from "@components/carbonActivities/mobileActivities";
import { PcActivities } from "@components/carbonActivities/pcActivities";
import { useIsMobile } from "@components/common/context";
import { MainLayout } from "@components/common/mainLayout";
import { Select } from "@components/common/select";
import { genPhase } from "@components/const";
import { useAsyncM } from "@lib/hooks/useAsyncM";
import { useProductsState } from "@lib/hooks/useProductsState";
import { getProductActivityDefination } from "@lib/http";
import { Phase } from "@lib/@types/type";
import { useMemo } from "react";
import { Loading } from "@components/common/loading";

export function CarbonActivities() {
  const { current, items, onChange, current_product, loading: load0 } = useProductsState();
  const isMobile = useIsMobile();
  const { value: list, loading: load1 } = useAsyncM(() => {
    if (current_product) {
      return getProductActivityDefination(current_product.id);
    } else {
      return Promise.resolve(undefined);
    }
  }, [current_product]);
  const mData = useMemo(() => {
    if (!list) return undefined;
    const phaseList = genPhase();
    const phaseMap: { [k: string]: Phase } = {};
    phaseList.forEach((item) => (phaseMap[item.name] = item));
    list.forEach((p) => phaseMap[p.phase]?.processList?.push(p));
    return phaseList;
  }, [list]);
  const loading = load0 || load1 || list == undefined;
  return (
    <MainLayout className="text-black">
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="text-lg font-medium text-gray-6 mb-5 mo:leading-5 mo:text-[.9375rem]">
            Carbon Activities are subordinate to Products. Select a Product to view its Carbon Activites accountable for
            the PCF Inventory.
          </div>
          <Select current={current} onChange={onChange} items={items} />
          <div className="text-2xl font-bold mb-5 mt-8 mo:text-lg mo:my-5">ACTIVITY DEFINITION</div>
          {mData && <>{isMobile ? <MobileActivites data={mData} /> : <PcActivities data={mData} />}</>}
        </>
      )}
    </MainLayout>
  );
}

export default CarbonActivities;
