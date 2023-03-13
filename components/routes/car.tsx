import SVGAicdRound from "@public/aicd-round.svg";
import SVGArrowRight from "@public/arrow-right.svg";
import SVGCar from "@public/car.svg";
import SVGCarbon3 from "@public/carbon3.svg";
import SVGCO2 from "@public/co2.svg";
import SVGLeaf2 from "@public/leaf2.svg";
import SVGLeaf3 from "@public/leaf3.svg";
import { useRouter } from "next/router";

import { useIsMobile } from "@components/common/context";
import { Empty } from "@components/common/empty";
import { HeaderLayout } from "@components/common/headerLayout";
import { Loading } from "@components/common/loading";
import { StepProgress } from "@components/common/progress";
import { CAR_SRC, genSbtPhase, PHASE } from "@components/const";
import { SbtInfo, SbtPhase } from "@lib/@types/type";
import { useAutoAnim } from "@lib/hooks/useAutoAnim";
import { useGoBack } from "@lib/hooks/useGoBack";
import { useT } from "@lib/hooks/useT";
import { getSbgEmissionInventory, getSbtInfo } from "@lib/http";
import { ftmCarbonEmission, ftmTimestamp, genScanTokenUrl } from "@lib/utils";
import classNames from "classnames";
import React, { useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { IoCheckmarkCircleOutline, IoEllipsisHorizontalCircle } from "react-icons/io5";
import { useAsync, useToggle } from "react-use";
interface CarUIProps {
  data: {
    sbt: SbtInfo;
    sbtPhase: SbtPhase[];
    totalEmission: number;
    tonnes: string;
    trees: string;
    recyclable: string;
    use: string;
  };
}

function ItemInfo(p: { label: string; text: string; link?: string }) {
  return (
    <div
      className={classNames(
        "w-full text-base whitespace-normal leading-[1.8rem] mo:text-[.9375rem] mo:leading-[1.6875rem]",
        {
          "text-green-2": p.link,
          "text-gray-6": !p.link,
        }
      )}
    >
      <span className="text-black font-bold">{p.label}:</span>{" "}
      {p.link ? (
        <a href={p.link} target="_blank" rel="noreferrer">
          {p.text}
        </a>
      ) : (
        p.text
      )}
    </div>
  );
}
function CarInfos(p: CarUIProps) {
  const {
    data: { sbt },
  } = p;
  const { t } = useTranslation();
  return (
    <div className="w-full">
      <ItemInfo label={t("Label No")} text={sbt.sbtTokenId} />
      <ItemInfo label={t("Vehicle Identifier Number(VIN)")} text={sbt.serialNumber} />
      <ItemInfo label={t("Vehicle Model")} text={sbt.productName} />
      <ItemInfo label={t("Label Printed Date")} text={ftmTimestamp(sbt.sbtMintTimestamp)} />
      <ItemInfo
        label={t("Label Certified by")}
        text={t("AIAG Automotive Carbon Advisory Commmitee")}
        link="https://aiag.org.cn/ACAC/Automotive-Carbon-Advisory-Committee"
      />
      <ItemInfo
        label={t("Label SBT Address")}
        text={t("View on blockchain explorer")}
        link={genScanTokenUrl(sbt.sbtTokenId)}
      />
    </div>
  );
}

function ItemEmission(p: { icon: React.ReactNode; value: string; sub: string }) {
  const { icon, value, sub } = p;
  return (
    <div className="flex flex-col items-center w-[9.125rem] mo:w-[8.75rem]">
      <div className="text-green-2">{icon}</div>
      <div className="text-2xl font-bold leading-normal">{value}</div>
      <div className="text-base text-center whitespace-pre-wrap leading-normal mo:text-[.9375rem]">{sub}</div>
    </div>
  );
}

function ItemPhase(p: { data: SbtPhase; index: number }) {
  const { data, index } = p;
  const { t } = useTranslation();
  return (
    <div
      className={classNames(
        "flex flex-col w-0 flex-1 h-[11.5rem] p-5 bg-white rounded-lg text-black mo:h-auto mo:w-full mo:mt-5"
      )}
    >
      <StepProgress index={index} className="mb-5 flex-shrink-0" />
      <div className="w-full whitespace-normal font-bold text-base">{t(data.name)}</div>
      <div className="w-full whitespace-nowrap text-sm mt-[.625rem]">{`${ftmCarbonEmission(data.carbon_emission)} / ${
        data.progress
      }%`}</div>
      <div className="flex-1" />
      <div className="flex items-center mt-3">
        {data.verified ? (
          <>
            <IoCheckmarkCircleOutline className="text-2xl mr-3" />
            <div className="text-sm text-green-2">{t("verified")}</div>
          </>
        ) : (
          <>
            <IoEllipsisHorizontalCircle className="text-2xl mr-3" />
            <div className="text-sm text-orange-169">{t("estimated")}</div>
          </>
        )}
      </div>
    </div>
  );
}

function Phases(p: { data: SbtPhase[] }) {
  const isMobile = useIsMobile();
  const { data } = p;
  return (
    <div className="flex items-center h-auto w-full mt-5 mo:flex-col mo:mt-0 bg-white rounded-lg mo:bg-transparent">
      <ItemPhase data={data[0]} index={0} />
      {!isMobile && <SVGArrowRight className="text-green-2 text-[1.875rem] mx-[.9375rem] flex-shrink-0" />}
      <ItemPhase data={data[1]} index={1} />
      {!isMobile && <SVGArrowRight className="text-green-2 text-[1.875rem] mx-[.9375rem] flex-shrink-0" />}
      <ItemPhase data={data[2]} index={2} />
      {!isMobile && <SVGArrowRight className="text-green-2 text-[1.875rem] mx-[.9375rem] flex-shrink-0" />}
      <ItemPhase data={data[3]} index={3} />
    </div>
  );
}

function ItemQA(p: { type: number; sbt: SbtInfo }) {
  const { type, sbt } = p;
  const { t } = useTranslation();
  const content = useMemo(() => {
    return type == 1
      ? t(
          "The AIAG Carbon3 Trust Label is an industry-level certification framework for every vehicle produced under {{value}}. The Trust Label guarantees that any raw data behind the label is verified and recorded in an immutable manner for the ultimate transparency and traceability for the vehicle’s carbon performance."
        ).replace(
          "{{value}}",
          `<a class="text-green-2 cursor-pointer" target="_blank" href="https://aiag.org.cn/ACAC/Automotive-Carbon-Advisory-Committee" rel="noreferrer">${t(
            "AIAG’s carbon reduction / Net Zero 2050 initiatives"
          )}</a>`
        )
      : type == 2
      ? t(
          "AICD is the global, industry-level database for long-term carbon performance traceability and visibility under the 2050 Net Zero commitment. The data on this label is supported by the Automotive Industry Carbon Database. Click {{value}} to query information about this vehicle."
        ).replace(
          "{{value}}",
          `<a class="text-green-2 cursor-pointer" target="_blank" href="/openquery" rel="noreferrer">${t("here")}</a>`
        )
      : t(
          "A Soul-bounded Token (a special type of NFT that is not allowed to transfer after created) has been generated on blockchain to make sure the information in this label is immutable and will be maintain for traceability forever. Check {{value}} to verify the SBT on blockchain explorer."
        ).replace(
          "{{value}}",
          `<a class="text-green-2 cursor-pointer" target="_blank" href="${genScanTokenUrl(sbt.sbtTokenId)}" rel="noreferrer">${t(
            "here"
          )}</a>`
        );
  }, [type, sbt, t]);
  return (
    <div className="flex-1 w-0 p-5 bg-white rounded-lg flex flex-col items-center [&:nth-child(n+2)]:ml-5 mo:!ml-0 mo:w-full mo:mt-5">
      {type === 1 ? (
        <SVGCarbon3 className="text-[5.375rem] mt-[.625rem] mb-[1.875rem]" />
      ) : type === 2 ? (
        <SVGAicdRound className="text-[5.375rem] mt-[.625rem] mb-[1.875rem]" />
      ) : (
        <img src="/nft.png" className="w-[5.8125rem] mt-[.375rem] mb-[1.625rem]" />
      )}
      <div className="text-lg font-bold mb-[.9375rem]">
        {t(
          type === 1
            ? "What is AIAG Carbon3 Trust Label?"
            : type === 2
            ? "The Raw Data Behind Trust Label"
            : "Immutability and Traceability"
        )}
      </div>
      <div className="text-[.9375rem] font-medium text-center" dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

function QAS(p: { sbt: SbtInfo }) {
  const { sbt } = p;
  return (
    <div className="w-full flex mt-5 mo:block mo:mt-0">
      <ItemQA type={1} sbt={sbt} />
      <ItemQA type={2} sbt={sbt} />
      <ItemQA type={3} sbt={sbt} />
    </div>
  );
}

function MobileCar(p: CarUIProps) {
  const { t } = useTranslation();
  const { data } = p;
  const [show, setShow] = useToggle(false);
  const ref = useAutoAnim<HTMLDivElement>();
  const onClickShow = useCallback(() => {
    setShow(true);
    ref.current?.scrollIntoView({ block: "start" });
  }, []);
  return (
    <div className="w-full p-5" ref={ref}>
      <div className="flex px-[.9375rem] mt-5 py-5 rounded-lg bg-white" onClick={() => setShow(false)}>
        <SVGCarbon3 className="mr-[.625rem] text-[5.375rem]" />
        <div className="flex-1 flex flex-col leading-normal">
          <div className="font-bold text-lg w-full">{t("Product Carbon Footprint Certified")}</div>
          <span className="font-medium text-sm">{t("by AIAG")}</span>
        </div>
      </div>
      {!show ? (
        <div className="w-full">
          <div className="flex items-center p-4 w-full bg-white rounded-lg mt-5">
            <img className="object-contain w-[8.75rem]" src={data.sbt.imageUrl || CAR_SRC} />
            <div className="w-0 flex-1 ml-5 whitespace-normal">
              <div
                className="font-semibold text-lg"
                style={{ WebkitLineClamp: 2, display: "-webkit-box", WebkitBoxOrient: "vertical" }}
              >
                {data.sbt.productName}
              </div>
              <div className="text-base">{"VIN #111923789123"}</div>
              <button className="mt-[.625rem] text-green-2 text-base font-semibold" onClick={onClickShow}>
                {t("Check Details")}
              </button>
            </div>
          </div>
          <div className="bg-white rounded-lg mt-5 grid p-5 gap-y-8" style={{ gridTemplateColumns: "repeat(5, 1fr)" }}>
            <div />
            <ItemEmission
              icon={<SVGCO2 className="text-[2.9644rem]" />}
              value={data.tonnes}
              sub={t("tonnes of CO2e Cradle-to-Gate emission")}
            />
            <div />
            <ItemEmission
              icon={<SVGLeaf2 className="text-[2.9506rem] my-[4px]" />}
              value={data.trees}
              sub={t("trees (8-yr old) to absorbe for one year")}
            />
            <div />
            <div />
            <ItemEmission
              icon={<SVGLeaf3 className="text-[2.8213rem] mt-[1px]" />}
              value={data.recyclable}
              sub={t("of the materials used in this vehicle is recyclable")}
            />
            <div />
            <ItemEmission
              icon={<SVGCar className="text-[3.51rem] my-[4px]" />}
              value={data.use}
              sub={t("tonnes of CO2e emission estimated from use")}
            />
            <div />
          </div>
          <Phases data={data.sbtPhase} />
          <div className="text-green-2 cursor-pointer text-[.9375rem] my-6 mb-3 text-center" onClick={onClickShow}>
            {t("Learn More about AIAG’s Carbon3 Trust Label")}
          </div>
        </div>
      ) : (
        <div className="w-full">
          <div className="w-full p-5 rounded-lg bg-white mt-5">
            <div className="text-lg font-bold mb-[.9375rem]">{t("Label Information")}</div>
            <CarInfos data={data} />
          </div>
          <QAS sbt={data.sbt} />
        </div>
      )}
    </div>
  );
}

function PcCar(p: CarUIProps) {
  const { data } = p;
  const { t } = useTranslation();
  return (
    <div className="w-full p-5 max-w-[1480px] mx-auto">
      <div className="text-2xl leading-normal font-bold ">
        {t("Product Carbon Footprint Certified")} <span className="text-base font-medium">{t("by AIAG")}</span>
      </div>
      <div className="flex">
        <div className="w-0 flex-1 p-5 mt-5 mr-5 bg-white rounded-lg flex items-center">
          <img
            className="object-contain w-[16.25rem] h-[12.375rem] mr-5 rounded-lg border-black border border-solid"
            src={data.sbt.imageUrl || CAR_SRC}
          />
          <div className="w-0 flex-1">
            <CarInfos data={data} />
          </div>
        </div>
        <div className="w-0 flex-1 p-5 mt-5 pt-12 bg-white rounded-lg flex justify-between">
          <ItemEmission
            icon={<SVGCO2 className="text-[2.9644rem]" />}
            value={data.tonnes}
            sub={t("tonnes of CO2e Cradle-to-Gate emission")}
          />
          <ItemEmission
            icon={<SVGLeaf2 className="text-[2.9506rem] my-1" />}
            value={data.trees}
            sub={t("trees (8-yr old) to absorbe for one year")}
          />
          <ItemEmission
            icon={<SVGLeaf3 className="text-[2.8213rem] my-[1px]" />}
            value={data.recyclable}
            sub={t("of the materials used in this vehicle is recyclable")}
          />
          <ItemEmission
            icon={<SVGCar className="text-[3.51rem] my-1" />}
            value={data.use}
            sub={t("tonnes of CO2e emission estimated from use")}
          />
        </div>
      </div>
      <Phases data={data.sbtPhase} />
      <QAS sbt={data.sbt} />
    </div>
  );
}

export function Car() {
  const { query } = useRouter();
  const vin: string = query.vin as string;
  const isMobile = useIsMobile();
  const { value, loading } = useAsync(
    () => (!vin ? Promise.resolve(undefined) : Promise.all([getSbtInfo(vin), getSbgEmissionInventory(vin)])),
    [vin]
  );
  const data = useMemo<CarUIProps["data"] | undefined>(() => {
    if (!value) return undefined;
    const [sbt, sbtEmissions] = value;
    if (!sbt || !sbtEmissions) return undefined;
    const sbtPhase = genSbtPhase();
    const mapPhase: { [k: string]: SbtPhase } = {};
    sbtPhase.forEach((item) => (mapPhase[item.name] = item));
    let totalEmission = 0;
    sbtEmissions.forEach((emi) => {
      if (mapPhase[emi.phase]) {
        mapPhase[emi.phase].carbon_emission += emi.ghgEmission;
        totalEmission += emi.ghgEmission;
      }
    });
    sbtPhase.forEach((p) => {
      p.progress = totalEmission > 0 ? Math.round((p.carbon_emission / totalEmission) * 100) : 0;
      p.verified = p.carbon_emission > 0 && p.name !== PHASE.at(PHASE.length - 1);
    });

    return {
      sbt,
      sbtPhase,
      totalEmission,
      tonnes: "1000",
      trees: "80",
      recyclable: "35%",
      use: "100",
    };
  }, [value]);
  const onBack = useGoBack();
  const { t } = useT();
  return (
    <div className="bg-gray-16 flex-1 flex flex-col w-full text-black">
      {isMobile ? (
        <>{loading ? <Loading /> : <>{data ? <MobileCar data={data} /> : <Empty />}</>}</>
      ) : (
        <HeaderLayout className="!px-7">
          {loading ? (
            <Loading />
          ) : (
            <>
              <div className="w-full px-5 max-w-[1480px] mx-auto">
                <button onClick={onBack} className="self-start ml-1">{`< ${t("Back")}`}</button>
              </div>
              {data ? <PcCar data={data} /> : <Empty />}
            </>
          )}
        </HeaderLayout>
      )}
    </div>
  );
}

export default Car;
