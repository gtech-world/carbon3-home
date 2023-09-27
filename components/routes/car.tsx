import SVGAicdRound from "@public/aicp-round.svg";
import SVGArrowRight from "@public/arrow-right.svg";
import SVGCar from "@public/car.svg";
import SVGCarbon3 from "@public/carbon3.svg";
import Nft from "@public/Nft.svg";

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
import { useAsyncM } from "@lib/hooks/useAsyncM";
import { useAutoAnim } from "@lib/hooks/useAutoAnim";
import { useGoBack } from "@lib/hooks/useGoBack";
import { useT } from "@lib/hooks/useT";
import { getSbgEmissionInventory, getSbtInfo, noArgs } from "@lib/oldHttp";
import { ftmCarbonEmission, ftmTimestamp, genScanUrl, handleCarbonStr } from "@lib/utils";
import classNames from "classnames";
import React, { Fragment, useCallback, useEffect, useMemo, useState } from "react";
import { IoCheckmarkCircleOutline, IoEllipsisHorizontalCircle } from "react-icons/io5";
import { useToggle } from "react-use";
import { FiChevronLeft } from "react-icons/fi";
import DivText from "@components/common/DivText";
import { getSbtUUIDInfo } from "@lib/services/carbonTag";
import { dealResult } from "utils";
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
        },
      )}>
      <span className="font-bold text-black">{p.label}:</span>{" "}
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
  const { t } = useT();
  return (
    <div className="w-full">
      <ItemInfo label={t("Label No.")} text={sbt.sbtTokenId} />
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
        // link={genScanTokenUrl(sbt.sbtTokenId)}
        link={"/blockchain?tokenId=" + sbt.sbtTokenId}
      />
    </div>
  );
}

function ItemEmission(p: { icon: React.ReactNode; value: string; sub: string }) {
  const { icon, value, sub } = p;
  return (
    <div className="flex flex-col items-center w-[9.125rem] mo:w-[8.75rem]">
      <div className="text-green-2 h-[2.825rem]">{icon}</div>
      <div className="text-2xl font-bold leading-normal">{value}</div>
      <div className="text-base text-center whitespace-pre-wrap leading-normal mo:text-[.9375rem]">{sub}</div>
    </div>
  );
}

function ItemPhase(p: { data: SbtPhase; index: number }) {
  const { data, index } = p;
  const { t } = useT();
  return (
    <div
      className={classNames(
        "flex flex-col w-0 flex-1 h-[11.5rem] p-5 bg-white rounded-lg text-black mo:h-auto mo:w-full mo:mt-5",
      )}>
      <StepProgress index={index} className="flex-shrink-0 mb-5" />
      <div className="w-full text-base font-bold whitespace-normal">{t(data.name)}</div>
      <div className="w-full whitespace-nowrap text-sm mt-[.625rem]">{`${ftmCarbonEmission(data.carbon_emission)} / ${
        data.progress
      }%`}</div>
      <div className="flex-1" />
      <div className="flex items-center mt-3">
        {data.verified ? (
          <>
            <IoCheckmarkCircleOutline className="mr-3 text-2xl" />
            <div className="text-sm text-green-2">{t("verified")}</div>
          </>
        ) : (
          <>
            <IoEllipsisHorizontalCircle className="mr-3 text-2xl" />
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
    <div className="flex items-center w-full h-auto mt-5 bg-white rounded-lg mo:flex-col mo:mt-0 mo:bg-transparent">
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
  const { t } = useT();
  const content = useMemo(() => {
    return type == 1
      ? handleCarbonStr(
          t(
            "The AIAG Digital3 Carbon Trust Label is an industry-level certification framework for every vehicle produced under {{value}}. The Trust Label guarantees that any raw data behind the label is verified and recorded in an immutable manner for the ultimate transparency and traceability for the vehicle’s carbon performance.",
          ).replace(
            "{{value}}",
            `<a class="text-green-2 cursor-pointer" target="_blank" href="https://aiag.org.cn/ACAC/Automotive-Carbon-Advisory-Committee" rel="noreferrer">${t(
              "AIAG’s carbon reduction / Net Zero 2050 initiatives",
            )}</a>`,
          ),
        )
      : type == 2
      ? t(
          "AICP is the global, industry-level platform for long-term carbon performance traceability and visibility under the 2050 Net Zero commitment. The data on this label is supported by the Automotive Industry Carbon Platform. Click {{value}} to query information about this vehicle.",
        ).replace(
          "{{value}}",
          `<a class="text-green-2 cursor-pointer"  href="/openquery" rel="noreferrer">${t("here")}</a>`,
        )
      : t(
          "A Soul-bounded Token (a special type of NFT that is not allowed to transfer after created) has been generated on blockchain to make sure the information in this label is immutable and will be maintain for traceability forever. Check {{value}} to verify the SBT on blockchain explorer.",
        ).replace(
          "{{value}}",
          `<a class="text-green-2 cursor-pointer" target="_blank" href="/blockchain?tokenId=1000000" rel="noreferrer">${t(
            "here",
          )}</a>`,
        );
  }, [type, sbt, t]);
  return (
    <div className="flex-1 w-0 p-5 bg-white rounded-lg flex flex-col items-center [&:nth-child(n+2)]:ml-5 mo:!ml-0 mo:w-full mo:mt-5">
      {type === 1 ? (
        <SVGCarbon3 className="text-[5.375rem] w-[5.375rem] mt-[.625rem] mb-[1.875rem]" />
      ) : type === 2 ? (
        <SVGAicdRound className="text-[5.375rem] w-[5.375rem] mt-[.625rem] mb-[1.875rem]" />
      ) : (
        <img src="/nft.png" className="w-[5.8125rem] mt-[.375rem] mb-[1.625rem]" />
      )}
      <div
        className="text-lg font-bold mb-[.9375rem]"
        dangerouslySetInnerHTML={{
          __html: handleCarbonStr(
            t(
              type === 1
                ? "What is AIAG Digital3 Carbon Trust Label?"
                : type === 2
                ? "The Raw Data Behind Trust Label"
                : "Immutability and Traceability",
            ),
          ),
        }}></div>
      <div className="text-[.9375rem] font-medium text-center" dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

function QAS(p: { sbt: SbtInfo }) {
  const { sbt } = p;
  return (
    <div className="flex w-full mt-5 mo:block mo:mt-0">
      <ItemQA type={1} sbt={sbt} />
      <ItemQA type={2} sbt={sbt} />
      <ItemQA type={3} sbt={sbt} />
    </div>
  );
}

function MobileCar(p: CarUIProps) {
  const { t } = useT();
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
        <SVGCarbon3 className="mr-[.625rem] max-w-[5.3rem] text-[5.375rem]" />
        <div className="flex flex-col flex-1 leading-normal">
          <div className="w-full text-lg font-bold">{t("Product Carbon Footprint Certified")}</div>
          <span className="text-sm font-medium">{t("by AIAG")}</span>
        </div>
      </div>
      {!show ? (
        <div className="w-full">
          <div className="flex items-center w-full p-4 mt-5 bg-white rounded-lg">
            <img className="object-contain w-[8.75rem]" src={data.sbt.imageUrl || CAR_SRC} />
            <div className="flex-1 w-0 ml-5 whitespace-normal">
              <div
                className="text-lg font-semibold"
                style={{
                  WebkitLineClamp: 2,
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                }}>
                {data.sbt.productName}
              </div>
              <div className="text-base">{"VIN #111923789123"}</div>
              <button className="mt-[.625rem] text-green-2 text-base font-semibold" onClick={onClickShow}>
                {t("Check Details")}
              </button>
            </div>
          </div>
          <div className="grid p-5 mt-5 bg-white rounded-lg gap-y-8" style={{ gridTemplateColumns: "repeat(5, 1fr)" }}>
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
              icon={<SVGLeaf3 className="text-[2.8213rem] mt-[4px]" />}
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
          <div
            className="text-green-2 cursor-pointer text-[.9375rem] my-6 mb-3 text-center"
            onClick={onClickShow}
            dangerouslySetInnerHTML={{
              __html: handleCarbonStr(t("Learn More about AIAG’s Digital3 Carbon Trust Label")),
            }}></div>
        </div>
      ) : (
        <div className="w-full">
          <div className="w-full p-5 mt-5 bg-white rounded-lg">
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
  const { t } = useT();
  return (
    <div className="w-full p-5 max-w-[1480px] mx-auto">
      大大说
      <div className="text-2xl font-bold leading-normal ">
        {t("Product Carbon Footprint Certified")} <span className="text-base font-medium">{t("by AIAG")}</span>
      </div>
      <div className="flex">
        <div className="flex items-center flex-1 w-0 p-5 mt-5 mr-5 bg-white rounded-lg">
          <img
            className="object-contain w-[16.25rem] h-[12.375rem] mr-5 rounded-lg border-black border border-solid"
            src={data.sbt.imageUrl || CAR_SRC}
          />
          <div className="flex-1 w-0">
            <CarInfos data={data} />
          </div>
        </div>
        <div className="flex justify-between flex-1 w-0 p-5 pt-12 mt-5 bg-white rounded-lg">
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
  const [loading, setLoading] = useState<boolean>(true);
  const [tagList, setTagList] = useState<SbtTokenController.TagList>();
  const {
    evaluationAgency = "-",
    evaluationExpireTime = "-",
    evaluationType = "-",
    loadNumber = "-",
    orgName = " ",
    productName = "-",
    tokenId = "-",
    uuid = "-",
    functionalUnit = "-",
    evaluationBoundary = "-",
    evaluationBasis = "-",
    pcfResult = "-",
  } = tagList || {};
  const productInfo = [
    { text: "标签编号", value: uuid },
    { text: "产品型号", value: productName },
    { text: "产品唯一标识符", value: loadNumber },
    { text: "标签申请主体", value: orgName },
  ];

  const productTagInfo = [
    { text: "评价类型", value: evaluationType },
    { text: "功能单位", value: functionalUnit },
    { text: "评价边界", value: evaluationBoundary },
    { text: "评价依据", value: evaluationBasis },
    { text: "评价机构", value: evaluationAgency },
    { text: "评价有效期", value: evaluationExpireTime },
    {
      text: "区块链SBT证书编号",
      value: tokenId,
      link: genScanUrl("address", "0x7BC6afe0cDc6DE9191dfC6d68A3bad45E270F695"),
    },
  ];

  const getTagList = useCallback(async () => {
    try {
      const res = await getSbtUUIDInfo(vin);
      setTagList(res || {});
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }, [vin]);

  useEffect(() => {
    getTagList();
  }, [getTagList]);

  const onBack = useGoBack();
  const { t } = useT();

  const noHeader = () => {
    return (
      <Fragment>
        <div className="flex w-full gap-5 mo:flex-none mo:flex-col ">
          <div className="w-[420px] max-h-[350px]  mo:h-[126px] bg-[#FFFFFF]   flex justify-center mo:justify-start   mo:flex-row mo:w-full flex-col items-center rounded-lg ">
            <SVGCarbon3 className="text-[5.375rem] w-[5.375rem] mt-[.625rem] mb-5 mo:ml-[15px]" />
            <div className="mo:ml-[2.5rem]">
              <div className="text-[#29953A] text-[1.75rem] leading-8 font-semibold">{dealResult(pcfResult)}</div>
              <div className="font-[1.75rem] leading-8   ">二氧化碳等效排放</div>
            </div>
          </div>
          <div className="w-[420px]  mo:w-full  max-h-[350px] bg-[#FFFFFF] mo:max-h-[350px] rounded-lg">
            <div className="mx-5 mt-5 mb-5">
              <div className="mb-5 mo:mb-[15px]  font-bold mo:text-[18px] text-[20px] leading-7">产品信息</div>
              <DivText textArray={productInfo} />
            </div>
          </div>
          <div className="w-[420px]  mo:w-full  max-h-[350px] bg-[#FFFFFF] mo:max-h-[350px] rounded-lg">
            <div className="mx-5 mt-5 mb-5">
              <div className="mb-5 mo:mb-[15px]   font-bold mo:text-[18px] text-[20px] leading-7">
                产品碳足迹评价信息
              </div>
              <DivText textArray={productTagInfo} />
            </div>
          </div>
        </div>
        <div className="flex gap-5 mt-5 mo:flex-none mo:flex-col ">
          <div className="w-[640px]  h-[18.125rem] mo:w-full bg-[#FFFFFF] flex mo:flex-none justify-center mo:justify-start flex-col items-center rounded-lg mo:h-[313px]">
            <SVGCarbon3 className="text-[5.375rem] w-[5.375rem] mt-[.625rem] mb-5 mo:mt-[30px] " />
            <div className="text-lg font-bold mb-[.9375rem]  "> {t("What is AIAG Digital3 Carbon Trust Label?")}</div>
            <div
              className="text-[.9375rem] font-normal text-center mx-5"
              dangerouslySetInnerHTML={{
                __html: handleCarbonStr(
                  t(
                    "The AIAG Digital3 Carbon Trust Label is an industry-level certification framework for every vehicle produced under {{value}}. The Trust Label guarantees that any raw data behind the label is verified and recorded in an immutable manner for the ultimate transparency and traceability for the vehicle’s carbon performance.",
                  ).replace(
                    "{{value}}",
                    `<a class="text-green-2 cursor-pointer" target="_blank" href="https://aiag.org.cn/ACAC/Automotive-Carbon-Advisory-Committee" rel="noreferrer">${t(
                      "AIAG’s carbon reduction / Net Zero 2050 initiatives",
                    )}</a>`,
                  ),
                ),
              }}
            />
          </div>

          <div className="w-[640px] h-[18.125rem] mo:w-full bg-[#FFFFFF] flex mo:flex-none justify-center mo:justify-start flex-col items-center rounded-lg mo:h-[313px]">
            <img src="/nft.png" className="w-[5.8125rem] mt-[.375rem] mb-[1.625rem]" />
            <div className="text-lg font-bold mb-[.9375rem]"> {t("Immutability and Traceability")}</div>
            <div
              className="text-[.9375rem] font-normal text-center mx-5"
              dangerouslySetInnerHTML={{
                __html: t(
                  "A Soul-bounded Token (a special type of NFT that is not allowed to transfer after created) has been generated on blockchain to make sure the information in this label is immutable and will be maintain for traceability forever. Check {{value}} to verify the SBT on blockchain explorer.",
                ).replace(
                  "{{value}}",
                  `<a class="text-green-2 cursor-pointer" target="_blank" href="/blockchain?tokenId=${tokenId}" rel="noreferrer">${t(
                    "here",
                  )}</a>`,
                ),
              }}
            />
          </div>
        </div>
      </Fragment>
    );
  };

  return (
    <Fragment>
      {isMobile ? (
        <div className="w-full py-5 px-[3.125rem] max-w-[1480px] mx-auto mo:p-5 bg-[#F3F3F3]">{noHeader()}</div>
      ) : (
        <HeaderLayout nopx className={` !px-7 bg-[#F3F3F3] w-full h-full `}>
          {!isMobile && (
            <Fragment>
              <div className="w-full py-5 px-[3.125rem] max-w-[1480px] mx-auto mo:p-5">
                {loading ? (
                  <Loading />
                ) : (
                  <Fragment>
                    <div
                      className="flex items-center mb-2.5 text-sm cursor-pointer"
                      onClick={() => {
                        onBack();
                      }}>
                      <FiChevronLeft className="text-lg" />
                      返回
                    </div>
                    <div className="mb-5 text-2xl font-bold leading-normal">
                      {t("Product Carbon Footprint Certified")}{" "}
                      <span className="text-base font-medium">
                        {t("by {{value}}").replace("{{value}}", orgName || "")}
                      </span>
                    </div>
                    {noHeader()}
                  </Fragment>
                )}
              </div>
            </Fragment>
          )}
        </HeaderLayout>
      )}
    </Fragment>
  );
}
