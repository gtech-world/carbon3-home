import SVGAicdRound from "@public/aicp-round.svg";
import SVGCarbon3 from "@public/carbon3.svg";
import { useRouter } from "next/router";
import { useIsMobile } from "@components/common/context";
import { HeaderLayout } from "@components/common/headerLayout";
import { Loading } from "@components/common/loading";
import { SbtInfo, SbtPhase } from "@lib/@types/type";
import { useGoBack } from "@lib/hooks/useGoBack";
import { useT } from "@lib/hooks/useT";
import { genScanUrl, handleCarbonStr } from "@lib/utils";
import { Fragment, useCallback, useEffect, useMemo, useState } from "react";
import { FiChevronLeft } from "react-icons/fi";
import DivText from "@components/common/DivText";
import { getSbtUUIDInfo } from "@lib/services/carbonTag";
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

function ItemQA(p: { type: number }) {
  const { type } = p;
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
  }, [type, t]);
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
    { text: "评价类型", value: evaluationType !== "aicp" ? "第三方认证" : "AICP平台审核" },
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

  const bottomTabList = [];
  const noHeader = () => {
    return (
      <Fragment>
        <div className="flex w-full gap-5 mo:flex-none mo:flex-col ">
          <div className="w-[420px] max-h-[450px] p-5 mo:h-auto  bg-[#FFFFFF] text-center  flex justify-center mo:justify-start   mo:flex-row mo:w-full flex-col items-center rounded-lg ">
            <SVGCarbon3 className="text-[5.375rem] w-[5.375rem] mt-[.625rem] mb-5 mo:mb-2  shrink-0" />
            <div className="mo:ml-[2.5rem] mo:flex-1 ">
              <div className="text-[#29953A] text-[1.75rem] leading-8 font-semibold max-w-full break-all">
                {pcfResult}
              </div>
              <div className="font-[1.75rem] leading-8   ">二氧化碳等效排放</div>
            </div>
          </div>
          <div className="w-[420px]  mo:w-full  max-h-[450px] bg-[#FFFFFF] mo:max-h-[350px] rounded-lg">
            <div className="mx-5 mt-5 mb-5 mmd:mt-10">
              <div className="mb-5 mo:mb-[15px]  md:text-[18px]   font-bold mo:text-[18px] text-[20px] leading-7">
                产品信息
              </div>
              <DivText textArray={productInfo} />
            </div>
          </div>
          <div className="w-[420px]  mo:w-full  max-h-[450px] bg-[#FFFFFF] mo:max-h-[350px] rounded-lg">
            <div className="mx-5 mt-5 mb-5 mmd:mt-10">
              <div className="mb-5 mo:mb-[15px] md:text-[18px]   font-bold mo:text-[18px] text-[20px] leading-7">
                产品碳足迹评价信息
              </div>
              <DivText textArray={productTagInfo} />
            </div>
          </div>
        </div>
        <div className="flex gap-5 mt-5 mo:flex-none mo:flex-col ">
          <ItemQA type={1} />
          <ItemQA type={3} />
        </div>
      </Fragment>
    );
  };

  const noData = () => {
    return (
      <div className="flex items-center justify-center w-full h-40">{t("Data not available for this imput.")}</div>
    );
  };

  return (
    <Fragment>
      {isMobile ? (
        <div className="w-full py-5 px-[3.125rem] max-w-[1480px] mx-auto mo:p-5 bg-[#F3F3F3]">
          {!tagList ? noData() : noHeader()}
        </div>
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
                    {!tagList ? (
                      noData()
                    ) : (
                      <Fragment>
                        <div className="mb-5 text-2xl font-bold leading-normal">
                          {t("Product Carbon Footprint Certified")}{" "}
                          <span className="text-base font-medium">{t("by AIAG")}</span>
                        </div>
                        {noHeader()}
                      </Fragment>
                    )}
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
