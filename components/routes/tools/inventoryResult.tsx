import Chart from "@components/common/Chart";
import { Button } from "@components/common/button";
import { Loading } from "@components/common/loading";
import { ToolsLayout } from "@components/common/toolsLayout";
import { exportLcaResultExcel, getLcaProductDetailList, getLcaResultDetail } from "@lib/http";
import { BomNode, deepSetBomChild, isTagType } from "@lib/tagtools";
import { tryParse } from "@lib/utils";
import CarbonFooter from "@public/carbon_footer.svg";
import classNames from "classnames";
import { EChartsOption, SankeySeriesOption } from "echarts";
import _ from "lodash";
import { useRouter } from "next/router";
import { ReactNode, useEffect, useMemo, useState } from "react";
import { toPng } from "html-to-image";
const pdfMake = require("pdfmake");

function MCard(p: { children?: ReactNode; tit: string; className?: string }) {
  const { children, tit, className } = p;
  return (
    <div
      className={classNames("flex w-full flex-col bg-white min-h-[6.25rem]", className)}
      style={{
        boxShadow: "0px 3px 0px 0px #29953A inset, 0px 2px 10px 0px rgba(26, 62, 31, 0.10)",
      }}>
      <div
        className="w-full h-[4.1875rem] flex justify-center items-center text-xl font-semibold text-black"
        style={{
          background: "linear-gradient(180deg, rgba(41, 149, 58, 0.12) 0%, rgba(41, 149, 58, 0) 100%)",
        }}>
        {tit}
      </div>
      {children}
    </div>
  );
}

function InfoItem(p: { tit: string; value: string }) {
  const { tit, value } = p;
  return (
    <div className="flex justify-between">
      <div className="flex gap-2.5 items-center text-green-2 text-base">
        <div className="w-1 h-1 shrink-0 rounded-sm bg-green-2 overflow-hidden" />
        <span className="whitespace-nowrap">{tit}</span>
      </div>
      <div className="text-base text-gray-6 text-right">{value}</div>
    </div>
  );
}

export function InventoryResult() {
  const { query } = useRouter();
  const [exportLoading, setExportLoading] = useState(false);
  const [value, setValue] = useState<{
    lca: InventoryController.InventoryDetail;
    bominfo: string;
  }>();
  const [loading, setLoading] = useState<any>(true);

  const getList = async () => {
    const res = await getLcaResultDetail(query.id);
    if (!res) return;
    const { modelBomInfo } = await getLcaProductDetailList(res.modelId);
    setValue({ lca: res, bominfo: modelBomInfo });
    setLoading(false);
  };

  useEffect(() => {
    getList();
  }, [query.id]);

  const { generalInfo, carbonResult, chartData } = useMemo(() => {
    let generalInfo: any = [];
    let referenceUnit = "";
    let carbonResult: [string, string] = ["", ""];

    let chartData: EChartsOption = {};
    if (value) {
      // general infos
      const { lca, bominfo } = value;
      const val = tryParse<any>(lca.lcaResult);
      // console.info("val::", val);
      if (val) {
        const splited = (val.extra?.targetAmount || "").split("Item(s)");
        generalInfo = {
          productSystemName: val.extra?.productSystemName,
          methodName: val.extra?.methodName,
          targetName: splited[1] || val.extra?.productSystemName,
          targetAmount: `${Math.round(splited[0] || 1)} (件)`,
          calculateSuccessTime: lca.calculateSuccessTime,
          loadNumber: lca.loadNumber,
          loadName: lca.loadName,
        };
        referenceUnit = (val.totalImpacts && val.totalImpacts[0]?.impact.referenceUnit) || "";
        const total = _.round(val.totalResult || val.treeNode?.result || 0, 2);
        carbonResult = [`${total || 0}`, referenceUnit];
      }

      // mermaid data
      const boms = tryParse<BomNode[]>(bominfo);
      const tagResult = tryParse<{ result: number; processId: string; flowId: string }[]>(lca.lcaTagResult);
      // console.info("booms:", boms);
      // console.info("tagRes:", tagResult);
      if (boms && tagResult) {
        const mapTagResult = _.groupBy(tagResult, "flowId");
        const mapBoms = _.groupBy(boms, "flowId");
        deepSetBomChild(boms);
        const sortBoms = boms;
        chartData = {
          padding: 20,
          tooltip: {
            trigger: "item",
            formatter: (item: any) => {
              const content = `${item.name} ${item.value}(${referenceUnit})`;
              if (item.marker) return `${item.marker} ${content}`;
              return content;
            },
          },
          series: {
            type: "sankey",
            data: [],
            links: [],
          },
        };
        const getOtherName = (item: BomNode) => {
          if (isTagType(item.tagType, "STAGE01")) return "使用环节";
          if (isTagType(item.tagType, "STAGE02")) return "运输销售环节";
          if (isTagType(item.tagType, "STAGE03")) return "生产制造环节";
          return "";
        };

        const getOtherNameForDeep = (item: BomNode) => {
          if (isTagType(item.tagType, "REFERENCE")) return "使用环节";
          if (isTagType(item.tagType, "STAGE")) {
            if (item._depth === 1) return "生产制造环节";
            if (item._depth === 2) return "运输销售环节";
          }
          return "";
        };
        const NameFlag: { [k: string]: boolean } = {};

        // data and links
        sortBoms.forEach((item) => {
          if (isTagType(item.tagType, "REFERENCE")) generalInfo.targetName = item.flowName;
          const links = (chartData.series as SankeySeriesOption).links;
          const data = (chartData.series as SankeySeriesOption).data;
          const value = _.first(mapTagResult[item.flowId])?.result || 0;

          // add data
          if (!NameFlag[item.flowName]) {
            NameFlag[item.flowName] = true;
            data?.push({ name: item.flowName, value: _.round(value, 2), depth: item._depth });
          }

          // add links
          if (item.childFlowIds && item.childFlowIds.length) {
            item.childFlowIds.forEach((flowId) => {
              const flowRes = _.first(mapTagResult[flowId]);
              const flowBom = _.first(mapBoms[flowId]);
              if (flowBom && flowRes) {
                const bomV = _.first(mapTagResult[flowBom.flowId]);
                const ftmValue = _.round(bomV?.result || 0, 2);
                links?.push({ target: item.flowName, source: flowBom.flowName, value: ftmValue });
              }
            });
          }
          // add other
          const other = _.round(
            value - _.sumBy(item.childFlowIds || [], (flowId) => mapTagResult[flowId][0]?.result),
            2,
          );

          const otherName = getOtherName(item);
          if (otherName && item._depth > 0) {
            if (!NameFlag[otherName]) {
              NameFlag[otherName] = true;
              data?.push({ name: otherName, depth: item._depth - 1 });
            }
            links?.push({ target: item.flowName, source: otherName, value: other });
          } else if (other > 0 && item._depth > 0) {
            const otherNameDeep = getOtherNameForDeep(item);
            if (otherNameDeep) {
              if (!NameFlag[otherNameDeep]) {
                NameFlag[otherNameDeep] = true;
                data?.push({ name: otherNameDeep, depth: item._depth - 1 });
              }
              links?.push({ target: item.flowName, source: otherNameDeep, value: other });
            }
          }
        });
      }
    }
    console.info("cd:", chartData);
    return {
      generalInfo,
      carbonResult,
      chartData,
    };
  }, [value]);

  const doExport = async () => {
    if (!query.id) return false;
    setExportLoading(true);
    const res: any = await exportLcaResultExcel(query.id);
    if (res.headers) {
      const contentDisposition = res.headers.get("content-disposition");
      if (contentDisposition) {
        const filenameMatch = contentDisposition.match(/filename=(.+)/);
        if (filenameMatch) {
          setExportLoading(false);
          const blob = new Blob([res.data]); //处理文档流
          const eLink = document.createElement("a");
          eLink.download = filenameMatch[1];
          eLink.style.display = "none";
          eLink.href = URL.createObjectURL(blob);
          document.body.appendChild(eLink);
          eLink.click();
          URL.revokeObjectURL(eLink.href); // 释放URL 对象
          document.body.removeChild(eLink);
        }
      }
    }
  };

  const doExportPDF = async () => {
    const el = document.getElementById("inventory-result-content");
    if (!el) return;
    const name = `PCF-${generalInfo.loadName}.pdf`;
    toPng(el)
      .then((png) =>
        pdfMake.createPdf({
          content: [{ image: png, width: 515 }],
        }),
      )
      .then((pdf) => pdf.download(name))
      .catch(console.error);
  };

  return (
    <ToolsLayout className="text-lg text-black">
      {loading ? (
        <div className="h-[100vh] w-full items-center">
          <Loading />
        </div>
      ) : (
        <div className="pt-8 mo:break-all w-full max-w-[1000px] mx-auto" id="inventory-result-content">
          <div className="grid grid-cols-2 gap-5 mo:grid-cols-1">
            <MCard tit="产品碳足迹">
              <div className="flex items-center flex-1 px-9 mb-9">
                <CarbonFooter />
                <div className="flex-1 flex flex-col justify-center items-center whitespace-nowrap">
                  <span className="font-semibold text-green-2 text-4xl">{carbonResult[0]}</span>
                  <span className="font-semibold text-black text-base">{carbonResult[1]}</span>
                </div>
              </div>
            </MCard>
            <MCard tit="碳足迹评价详情">
              <div className="flex flex-col gap-3 mx-5 mt-3 mb-9">
                <InfoItem tit="目标产品" value={generalInfo.targetName} />
                <InfoItem tit="目标产品数量" value={generalInfo.targetAmount} />
                <InfoItem tit="碳足迹批次" value={generalInfo.loadName} />
                <InfoItem tit="环境影响评价方法" value={"IPCC 2021,GWP 100"} />
                <InfoItem tit="计算结果生成时间" value={generalInfo.calculateSuccessTime} />
              </div>
            </MCard>
            <MCard tit="生命周期环节明细结果" className="col-span-2 mo:col-span-1">
              {chartData && <Chart className="w-full !h-[360px]" option={chartData} />}
            </MCard>
          </div>
          <div className="flex justify-center w-full mt-5 mb-10 gap-5 mo:flex-wrap">
            <Button
              onClick={() => !exportLoading && doExport()}
              className="text-lg bg-green-2 w-[16.5625rem] mo:w-full text-white rounded-lg  h-14 flex items-center justify-center hover:bg-green-28">
              {exportLoading ? (
                <div>
                  <Loading size="2rem" color={"#fff"} />
                </div>
              ) : (
                <span>导出计算明细Excel</span>
              )}
            </Button>
            <Button
              onClick={doExportPDF}
              className="text-lg bg-green-2 w-[16.5625rem] mo:w-full text-white rounded-lg  h-14 flex items-center justify-center hover:bg-green-28">
              将此页面生成PDF
            </Button>
          </div>
        </div>
      )}
    </ToolsLayout>
  );
}

export default InventoryResult;
