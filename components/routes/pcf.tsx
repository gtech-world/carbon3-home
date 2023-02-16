import { PartInfo } from "@components/boms/pcbom";
import { useIsMobile } from "@components/common/context";
import { MainLayout } from "@components/common/mainLayout";
import { Select, useSelectState } from "@components/common/select";
import { MobileInventoryBreakdown } from "@components/pcf/mobileInventoryBreakdown";
import { PcInventoryBreakdown } from "@components/pcf/pcInventoryBreakdown";
import SvgCO2e from "@public/co2e.svg";
import SvgLoop from "@public/loop.svg";
import SvgQuality from "@public/quality.svg";
import React, { useMemo } from "react";

function InventoryStat(p: { icon: React.ReactNode; tit: string; txt: string }) {
  const { icon, tit, txt } = p;
  return (
    <div className="flex items-center w-full">
      {icon}
      <div className="ml-[2.6875rem] w-0 flex-1 overflow-hidden text-ellipsis whitespace-nowrap mo:ml-6">
        <div className="font-bold text-lg text-black mo:text-base">{tit}</div>
        <div className="text-gray-6 text-lg mo:text-base">{txt}</div>
      </div>
    </div>
  );
}

export function PCF() {
  const { current, onChange, items } = useSelectState([
    { text: "221817392738975981" },
    { text: "221817392738975678" },
    { text: "221817399287475981" },
  ]);
  const data = useMemo(() => {
    const carbon_emission = 230;
    const items = 18;
    const quality = 30;
    const boms: any[] = [
      { name: "Front Glass", count: 1, calc: "Weight*Ref_Factor", refData: true, carbon_emission: 20 },
      { name: "Front Glass", count: 2, calc: "RefData from Supplier YYY", refData: true, carbon_emission: 23 },
      { name: "Front Glass", count: 1, calc: "RefData from Supplier YYY", refData: true, carbon_emission: 24 },
      { name: "Front Glass", count: 3, calc: "RefData from Supplier YYY", refData: true, carbon_emission: 24 },
      { name: "Front Glass", count: 1, calc: "Item #2: Climate System", refData: true, carbon_emission: 24 },
      { name: "Front Glass", count: 4, calc: "Weight*Ref_Factor", refData: true, carbon_emission: 24 },
      { name: "Front Glass", count: 1, calc: "Weight*Ref_Factor", refData: true, carbon_emission: 24 },
      { name: "Front Glass", count: 3, calc: "Weight*Ref_Factor", refData: true, carbon_emission: 24 },
      { name: "Front Glass", count: 1, calc: "Weight*Ref_Factor", refData: true, carbon_emission: 24 },
    ];
    const sourcings = [
      {
        name: "Sourcing - Emission from Purchased Materials and Products,Sourcing - Emission from Purchased Materials and Products",
        carbon_emission,
        items,
        quality,
        boms,
      },
      { name: "Sourcing - Emission from Purchasing Activities", carbon_emission, items, quality, boms },
      {
        name: "Pre-Processing - Direct Emission from Physical and Chemical Processes",
        carbon_emission,
        items,
        boms,
        quality,
      },
      {
        name: "Pre-Processing - Indirect Emission from Electricity Consumption",
        carbon_emission,
        items,
        boms,
        quality,
      },
      {
        name: "Pre-Processing - Indirect Emission from Electricity Consumption",
        carbon_emission,
        items,
        boms,
        quality,
      },
      {
        name: "Pre-Processing - Indirect Emission from Electricity Consumption",
        carbon_emission,
        items,
        boms,
        quality,
      },
      {
        name: "Pre-Processing - Indirect Emission from Electricity Consumption",
        carbon_emission,
        items,
        boms,
        quality,
      },
      {
        name: "Pre-Processing - Indirect Emission from Electricity Consumption",
        carbon_emission,
        items,
        boms,
        quality,
      },
      {
        name: "Pre-Processing - Indirect Emission from Electricity Consumption",
        carbon_emission,
        items,
        boms,
        quality,
      },
    ];

    const activities = [
      { name: "mater acquisition & pre-processing", sourcings, carbon_emission, quality },
      { name: "production", sourcings: JSON.parse(JSON.stringify(sourcings)), carbon_emission, quality },
      { name: "distribution & storage", sourcings: JSON.parse(JSON.stringify(sourcings)), carbon_emission, quality },
      { name: "use", sourcings: JSON.parse(JSON.stringify(sourcings)), carbon_emission, quality },
    ];

    return activities;
  }, []);
  const isMobile = useIsMobile();
  return (
    <MainLayout className="text-black">
      <div className="text-lg font-medium text-gray-6 mb-5 mo:text-[.9375rem]">
        Query PCF Data with Vehicle’s VIN Code:
      </div>
      <Select current={current} onChange={onChange} items={items} />
      <div className="w-full flex mo:flex-col">
        <div className="w-0 flex-[2] mr-5 mo:w-full">
          <div className="text-2xl font-bold my-5 mo:text-lg mo:my-5">PRODUCT INFO</div>
          <div className="bg-white rounded-lg p-5 h-[14.875rem] flex mo:flex-col mo:h-auto">
            <img className="w-[16.25rem] h-full object-cover rounded-lg border border-solid border-black mo:w-full mo:aspect-[3/2]" />
            <div className="w-0 flex-1 ml-8 mo:ml-0 mo:w-full">
              <PartInfo label="Product Name" text="Ford Match-E RWD 2022" />
              <PartInfo label="Product UID" text="00104" />
              <PartInfo label="Product Type" text="Vehicle Model" />
              <PartInfo label="VIN Code" text="23598989890889" />
              <PartInfo label="Status" text="In Use/Ship-out on 2022-01-18" />
            </div>
          </div>
        </div>
        <div className="w-0 flex-1 mo:w-full">
          <div className="text-2xl font-bold my-5 mo:text-lg mo:my-5">INVENTORY STATS</div>
          <div className="bg-white rounded-lg p-5 pl-8 h-[14.875rem] w-full flex flex-col justify-between mo:pl-6">
            <InventoryStat
              icon={<SvgCO2e className="text-[3.125rem] text-green-2 mr-[.625rem]" />}
              tit="Product CO2e Emission"
              txt="1854.3 kg"
            />
            <InventoryStat
              icon={<SvgLoop className="text-[3.75rem] text-green-2" />}
              tit="Emission Scope"
              txt="Gradle-to-Grave"
            />
            <InventoryStat
              icon={<SvgQuality className="text-[3.125rem] text-green-2 mr-[.625rem]" />}
              tit="Overall Data Quality"
              txt="Primary Data=38.5%"
            />
          </div>
        </div>
      </div>
      <div className="text-2xl font-bold mb-5 mt-8 mo:text-lg mo:my-5">INVENTORY BREAKDOWN</div>
      {isMobile ? <MobileInventoryBreakdown data={data} /> : <PcInventoryBreakdown data={data} />}
    </MainLayout>
  );
}

export default PCF;
