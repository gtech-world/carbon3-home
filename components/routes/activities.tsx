import { MobileActivites } from "@components/carbonActivities/mobileActivities";
import { PcActivities } from "@components/carbonActivities/pcActivities";
import { useIsMobile } from "@components/common/context";
import { MainLayout } from "@components/common/mainLayout";
import { Select } from "@components/common/select";
import { useAsyncM } from "@lib/hooks/useAsyncM";
import { useProductsState } from "@lib/hooks/useProductsState";
import { getProductActivityDefination } from "@lib/http";
import { Phase } from "@lib/type";
import { useMemo } from "react";

export function CarbonActivities() {
  const { current, items, onChange, current_product } = useProductsState();
  const isMobile = useIsMobile();
  const { value: list } = useAsyncM(() => {
    if (current_product) {
      return getProductActivityDefination(current_product.id);
    } else {
      return Promise.resolve(undefined);
    }
  }, [current_product]);
  const mData = useMemo(() => {
    if (!list || list.length === 0) return undefined;
    const phaseMap: { [k: string]: Phase } = {};
    list.forEach((p) => {
      if (!phaseMap[p.phase]) {
        phaseMap[p.phase] = {
          name: p.phase,
          processList: [p],
        };
      } else {
        phaseMap[p.phase].processList.push(p);
      }
    });
    return Object.values(phaseMap);
  }, [list]);

  return (
    <MainLayout className="text-black">
      <div className="text-lg font-medium text-gray-6 mb-5 mo:text-[.9375rem]">
        Carbon Activities are subordinate to Products. Select a Product to view its Carbon Activites accountable for the
        PCF Inventory.
      </div>
      <Select current={current} onChange={onChange} items={items} />
      <div className="text-2xl font-bold mb-5 mt-8 mo:text-lg mo:my-5">ACTIVITY DEFINITION</div>
      {mData && <>{isMobile ? <MobileActivites data={mData} /> : <PcActivities data={mData} />}</>}
    </MainLayout>
  );
}

export default CarbonActivities;
