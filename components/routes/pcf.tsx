import { PartInfo } from "@components/boms/pcbom";
import { useIsMobile, useOnError } from "@components/common/context";
import { Empty } from "@components/common/empty";
import { Loading } from "@components/common/loading";
import { MainLayout } from "@components/common/mainLayout";
import { CAR_SRC, genInventoryPhase } from "@components/const";
import { MobileInventoryBreakdown } from "@components/pcf/mobileInventoryBreakdown";
import { PcInventoryBreakdown } from "@components/pcf/pcInventoryBreakdown";
import { InventoryPhase } from "@lib/@types/type";
import { useOn } from "@lib/hooks/useOn";
import { getPCFInventory, getProductByVIN } from "@lib/http";
import { ftmCarbonEmission } from "@lib/utils";
import SvgCO2e from "@public/co2e.svg";
import SvgLoop from "@public/loop.svg";
import SvgQuality from "@public/quality.svg";
import { useRouter } from "next/router";
import React, { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { FiSearch } from "react-icons/fi";
import { useAsyncFn } from "react-use";

function InventoryStat(p: { icon: React.ReactNode; tit: string; txt: string }) {
  const { icon, tit, txt } = p;
  return (
    <div className="flex items-center w-full">
      {icon}
      <div className="ml-5 w-0 flex-1 overflow-hidden text-ellipsis whitespace-nowrap mo:ml-6">
        <div className="font-bold text-lg text-black mo:text-base">{tit}</div>
        <div className="text-gray-6 text-lg mo:text-base">{txt}</div>
      </div>
    </div>
  );
}

export function PCF() {
  const { t } = useTranslation();
  const { query } = useRouter();
  const qVin = query["vin"] as string;
  const [vin, setVin] = useState(qVin || "");
  const onError = useOnError();
  const [{ value: [pcfData, productInfo] = [undefined, undefined], loading }, doGet] = useAsyncFn(
    (vin: string) => Promise.all([getPCFInventory(vin), getProductByVIN(vin)]),
    []
  );
  // 记录上次输入用于防止连续两次查询相同的VIN
  // const ref = useRef("");
  const onSearch = useOn((mVin: string = vin || "") => {
    if (loading) return;
    if (!mVin) return onError("Please input VIN Code");
    // if (ref.current === mVin) return onError("Please enter different VIN Code");
    doGet(mVin)
      .then((value) => {
        // ref.current = mVin;
        if (value[0]) {
          // 缓存上次有结果的VIN Code
          localStorage.setItem("last_vin", mVin);
        }
      })
      .catch(onError);
  });
  useEffect(() => {
    const lastVin = localStorage.getItem("last_vin") || "";
    const mVin = qVin || lastVin;
    if (mVin) {
      setVin(mVin);
      onSearch(mVin);
    }
  }, [qVin]);

  const mData = useMemo(() => {
    if (!pcfData) return undefined;
    const phaseList = genInventoryPhase();
    const phaseMap: { [k: string]: InventoryPhase } = {};
    phaseList.forEach((item) => (phaseMap[item.name] = item));
    let total = 0;
    pcfData.forEach((p) => {
      p.carbon_emission = 0;
      p.activityTypes.forEach((act) => {
        act.carbon_emission = 0;
        act.inventoryActivityList.forEach((iAct) => {
          act.carbon_emission += iAct.ghgEmission;
          total += iAct.ghgEmission;
        });
        p.carbon_emission += act.carbon_emission;
      });
      phaseMap[p.phase]?.processList?.push(p);
    });
    phaseList.forEach((p) => {
      p.processList.forEach((item) => {
        p.carbon_emission += item.carbon_emission;
      });
      p.progress = total > 0 ? Math.round((p.carbon_emission / total) * 100) : 0;
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
    <MainLayout className="text-black flex flex-col">
      <div className="text-lg font-medium text-gray-6 mb-5 mo:text-[.9375rem]">
        {t("Query PCF Data with Vehicle’s VIN Code")}:
      </div>
      <div className="relative w-[31.25rem] mo:w-auto rounded-lg overflow-hidden bg-white">
        <input
          className="h-full w-full py-3 pl-5 pr-14 text-lg outline-none"
          maxLength={32}
          type="text"
          onKeyDown={(e) => e.code === "Enter" && onSearch()}
          value={vin}
          onChange={(e) => setVin(e.target.value)}
        />
        <FiSearch className="absolute text-lg top-[1.0625rem] right-5 cursor-pointer" onClick={() => onSearch()} />
      </div>
      {loading ? (
        <Loading className="flex-1" />
      ) : (
        <>
          {productInfo ? (
            <>
              <div className="flex mo:flex-col">
                <div className="w-0 flex-[2] mr-5 mo:w-full">
                  <div className="text-2xl font-bold my-5 mo:text-lg mo:my-5">{t("PRODUCT INFO")}</div>
                  <div className="bg-white rounded-lg p-5 h-[14.875rem] flex mo:flex-col mo:h-auto">
                    <img
                      className="object-contain w-[16.25rem] h-full rounded-lg border border-solid border-black mo:w-full mo:aspect-[3/2]"
                      src={productInfo?.imageUrl || CAR_SRC}
                    />
                    <div className="w-0 flex-1 ml-8 mo:mt-5 mo:ml-0 mo:w-full">
                      <PartInfo label={t("Product Name")} text={productInfo?.displayName || "-"} />
                      <PartInfo label={t("Product UID")} text={productInfo?.uuid || "-"} />
                      <PartInfo label={t("Product Type")} text={productInfo?.type || "-"} />
                      <PartInfo label={t("VIN Code")} text={vin || "-"} />
                      <PartInfo label={t("Status")} text="In Use/Ship-out on 2022-01-18" />
                    </div>
                  </div>
                </div>
                <div className="w-0 flex-1 mo:w-full">
                  <div className="text-2xl font-bold my-5 mo:text-lg mo:my-5">{t("INVENTORY STATS")}</div>
                  <div className="bg-white rounded-lg p-5 pl-8 h-[14.875rem] w-full flex flex-col justify-between mo:pl-6">
                    <InventoryStat
                      icon={<SvgCO2e className="text-[3.125rem] text-green-2 mr-[.625rem]" />}
                      tit={t("Product CO2e Emission")}
                      txt={`${ftmCarbonEmission(totalEmission)}`}
                    />
                    <InventoryStat
                      icon={<SvgLoop className="text-[3.75rem] text-green-2" />}
                      tit={t("Emission Scope")}
                      txt="Gradle-to-Grave"
                    />
                    <InventoryStat
                      icon={<SvgQuality className="text-[3.125rem] text-green-2 mr-[.625rem]" />}
                      tit={t("Overall Data Quality")}
                      txt="Primary Data=38.5%"
                    />
                  </div>
                </div>
              </div>
              <div className="text-2xl font-bold mb-5 mt-8 mo:text-lg mo:my-5">{t("INVENTORY BREAKDOWN")}</div>
              {mData && (
                <>{isMobile ? <MobileInventoryBreakdown data={mData} /> : <PcInventoryBreakdown data={mData} />}</>
              )}
            </>
          ) : vin ? (
            <Empty className="flex-1" />
          ) : null}
        </>
      )}
    </MainLayout>
  );
}

export default PCF;
