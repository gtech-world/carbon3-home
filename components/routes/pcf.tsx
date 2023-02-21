import { PartInfo } from "@components/boms/pcbom";
import { useIsMobile } from "@components/common/context";
import { MainLayout } from "@components/common/mainLayout";
import { Select, useSelectState } from "@components/common/select";
import { genInventoryPhase } from "@components/const";
import { MobileInventoryBreakdown } from "@components/pcf/mobileInventoryBreakdown";
import { PcInventoryBreakdown } from "@components/pcf/pcInventoryBreakdown";
import { useAsyncM } from "@lib/hooks/useAsyncM";
import { useVinCodesState } from "@lib/hooks/useVinCodesState";
import { getPCFInventory, getProductByVIN } from "@lib/http";
import { InventoryPhase } from "@lib/type";
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
  const { current, onChange, items, current_vin } = useVinCodesState();
  const { value: pcfData } = useAsyncM(
    () => (current_vin ? getPCFInventory(current_vin) : Promise.resolve(undefined)),
    [current_vin]
  );
  const { value: productInfo } = useAsyncM(
    () => (current_vin ? getProductByVIN(current_vin) : Promise.resolve(undefined)),
    [current_vin]
  );

  const mData = useMemo(() => {
    if (!pcfData) return undefined;
    const phaseList = genInventoryPhase();
    const phaseMap: { [k: string]: InventoryPhase } = {};
    phaseList.forEach((item) => (phaseMap[item.name] = item));
    pcfData.forEach((p) => {
      p.carbon_emission = 0;
      p.activityTypes.forEach((act) => {
        act.carbon_emission = 0;
        act.inventoryActivityList.forEach((iAct) => {
          act.carbon_emission += iAct.ghgEmission;
        });
        p.carbon_emission += act.carbon_emission;
      });
      phaseMap[p.phase]?.processList?.push(p);
    });
    phaseList.forEach((p) => {
      p.processList.forEach((item) => {
        p.carbon_emission += item.carbon_emission;
      });
    });
    return phaseList;
  }, [pcfData]);

  const totalEmission = useMemo(() => {
    if (!mData) return "-";
    let total = 0;
    mData.forEach((p) => {
      total += p.carbon_emission;
    });
    return total;
  }, [mData]);

  const isMobile = useIsMobile();
  return (
    <MainLayout className="text-black">
      <div className="text-lg font-medium text-gray-6 mb-5 mo:text-[.9375rem]">
        Query PCF Data with Vehicle’s VIN Code:
      </div>
      {productInfo && (
        <>
          <Select current={current} onChange={onChange} items={items} />
          <div className="w-full flex mo:flex-col">
            <div className="w-0 flex-[2] mr-5 mo:w-full">
              <div className="text-2xl font-bold my-5 mo:text-lg mo:my-5">PRODUCT INFO</div>
              <div className="bg-white rounded-lg p-5 h-[14.875rem] flex mo:flex-col mo:h-auto">
                <img className="w-[16.25rem] h-full object-cover rounded-lg border border-solid border-black mo:w-full mo:aspect-[3/2]" />
                <div className="w-0 flex-1 ml-8 mo:ml-0 mo:w-full">
                  <PartInfo label="Product Name" text={productInfo?.displayName || "-"} />
                  <PartInfo label="Product UID" text={productInfo?.uuid || "-"} />
                  <PartInfo label="Product Type" text={productInfo?.type || "-"} />
                  <PartInfo label="VIN Code" text={current_vin || "-"} />
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
                  txt={`${totalEmission} kg`}
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
          {mData && <>{isMobile ? <MobileInventoryBreakdown data={mData} /> : <PcInventoryBreakdown data={mData} />}</>}
        </>
      )}
    </MainLayout>
  );
}

export default PCF;
