import { MobileActivites } from "@components/carbonActivities/mobileActivities";
import { PcActivities } from "@components/carbonActivities/pcActivities";
import { useIsMobile } from "@components/common/context";
import { MainLayout } from "@components/common/mainLayout";
import { Select } from "@components/common/select";
import { useAsyncM } from "@lib/hooks/useAsyncM";
import { useProductsState } from "@lib/hooks/useProductsState";
import { getProductActivityDefination } from "@lib/http";
import { useMemo } from "react";

export function CarbonActivities() {
  const { current, items, onChange, current_product } = useProductsState()
  const isMobile = useIsMobile();
  const { value: list } = useAsyncM(() => {
    if(current_product){
      return getProductActivityDefination(current_product.id)
    }else{
      return Promise.resolve(undefined)
    }
  },[current_product])
  const mData = useMemo(() => {
    if(!list || list.length === 0) return undefined
    return list
  },[list])

  const data = useMemo(() => {
    const boms: any[] = [
      { name: "Front Glass", count: 1, calc: "Weight*Ref_Factor", refData: true },
      { name: "Front Glass", count: 2, calc: "RefData from Supplier YYY", refData: true },
      { name: "Front Glass", count: 1, calc: "RefData from Supplier YYY", refData: true },
      { name: "Front Glass", count: 3, calc: "RefData from Supplier YYY", refData: true },
      { name: "Front Glass", count: 1, calc: "Item #2: Climate System", refData: true },
      { name: "Front Glass", count: 4, calc: "Weight*Ref_Factor", refData: true },
      { name: "Front Glass", count: 1, calc: "Weight*Ref_Factor", refData: true },
      { name: "Front Glass", count: 3, calc: "Weight*Ref_Factor", refData: true },
      { name: "Front Glass", count: 1, calc: "Weight*Ref_Factor", refData: true },
    ];
    const sourcings = [
      {
        name: "Sourcing - Emission from Purchased Materials and Products,Sourcing - Emission from Purchased Materials and Products",
        boms,
      },
      { name: "Sourcing - Emission from Purchasing Activities", boms },
      { name: "Pre-Processing - Direct Emission from Physical and Chemical Processes", boms },
      { name: "Pre-Processing - Indirect Emission from Electricity Consumption", boms },
      { name: "Pre-Processing - Indirect Emission from Electricity Consumption", boms },
      { name: "Pre-Processing - Indirect Emission from Electricity Consumption", boms },
      { name: "Pre-Processing - Indirect Emission from Electricity Consumption", boms },
      { name: "Pre-Processing - Indirect Emission from Electricity Consumption", boms },
      { name: "Pre-Processing - Indirect Emission from Electricity Consumption", boms },
    ];
    const activities = [
      { name: "mater acquisition & pre-processing", sourcings },
      { name: "production", sourcings: JSON.parse(JSON.stringify(sourcings)) },
      { name: "distribution & storage", sourcings: JSON.parse(JSON.stringify(sourcings)) },
      { name: "use", sourcings: JSON.parse(JSON.stringify(sourcings)) },
    ];
    return activities;
  }, []);

  return (
    <MainLayout className="text-black">
      <div className="text-lg font-medium text-gray-6 mb-5 mo:text-[.9375rem]">
        Carbon Activities are subordinate to Products. Select a Product to view its Carbon Activites accountable for the
        PCF Inventory.
      </div>
      <Select current={current} onChange={onChange} items={items} />
      <div className="text-2xl font-bold mb-5 mt-8 mo:text-lg mo:my-5">ACTIVITY DEFINITION</div>
      {isMobile ? <MobileActivites data={data} /> : <PcActivities data={data} />}
    </MainLayout>
  );
}

export default CarbonActivities