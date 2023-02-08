import { MobileActivites } from "@components/carbonActivities/mobileActivities";
import { PcActivities } from "@components/carbonActivities/pcActivities";
import { useIsMobile } from "@components/common/context";
import { MainLayout } from "@components/common/mainLayout";
import { Select, useSelectState } from "@components/common/select";
import React, { useMemo } from "react";

export function CarbonActivities() {
  const { current, onChange, items } = useSelectState([
    { text: "Ford/CQM/Ford Match-E RWD 2022" },
    { text: "Ford/CQM/Ford Match-E RWD 2022" },
    { text: "Ford/CQM/Ford Match-E RWD 2022" },
  ]);
  const isMobile = useIsMobile()

  const data = useMemo(() => {
    const sourcings = [
      {
        name: "Sourcing - Emission from Purchased Materials and Products,Sourcing - Emission from Purchased Materials and Products",
      },
      { name: "Sourcing - Emission from Purchasing Activities" },
      { name: "Pre-Processing - Direct Emission from Physical and Chemical Processes" },
      { name: "Pre-Processing - Indirect Emission from Electricity Consumption" },
      { name: "Pre-Processing - Indirect Emission from Electricity Consumption" },
      { name: "Pre-Processing - Indirect Emission from Electricity Consumption" },
      { name: "Pre-Processing - Indirect Emission from Electricity Consumption" },
      { name: "Pre-Processing - Indirect Emission from Electricity Consumption" },
      { name: "Pre-Processing - Indirect Emission from Electricity Consumption" },
    ];
    const activities = [
      { name: "mater acquisition & pre-processing", sourcings },
      { name: "production", sourcings: JSON.parse(JSON.stringify(sourcings)) },
      { name: "distribution & storage", sourcings: JSON.parse(JSON.stringify(sourcings)) },
      { name: "use", sourcings: JSON.parse(JSON.stringify(sourcings)) },
    ]
    return activities;
  }, []);

  return (
    <MainLayout className="text-black">
      <div className="text-lg font-medium text-gray-6 mb-5 mo:text-[.9375rem]">
        Carbon Activities are subordinate to Products. Select a Product to view its Carbon Activites accountable for the
        PCF Inventory.
      </div>
      <Select current={current} onChange={onChange} items={items} className="mo:w-full mo:text-sm"/>
      <div className="text-2xl font-bold mb-5 mt-8 mo:text-lg mo:my-5">ACTIVITY DEFINITION</div>
      { isMobile ? <MobileActivites data={data}/> : <PcActivities data={data}/>}
    </MainLayout>
  );
}
