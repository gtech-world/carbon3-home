import AButton from "@components/common/aButton";
import { Button } from "@components/common/button";
import { Pagination } from "@components/common/pagination";
import { Table } from "@components/common/table";
import { ToolsLayout } from "@components/common/toolsLayout";
import { RealData } from "@components/modal/RealData";
import { useUnVerifier } from "@lib/hooks/useUser";
import { getResultList } from "@lib/http";
import { shortStr, sleep } from "@lib/utils";
import classNames from "classnames";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { handleContentRender, scrollToTop } from "utils";
import InventoryResultModal from "./inventoryResultModal";

const colorText: any = {
  [-1]: { color: "text-[red]", text: "计算失败" },
  0: { color: "text-[#FF9800]", text: "等待计算" },
  1: { color: "text-green-2", text: "查看结果" },
  2: { color: "text-blue-600", text: "正在计算" },
};

type RealDataType = Pick<InventoryController.Records, "param" | "paramDetail">;
export function Inventory() {
  const [pgNum, setPgNum] = useState(1);
  const [tableData, setTableData] = useState<Partial<InventoryController.InventoryList>>({});
  const [openResultModal, setOpenResultModal] = useState<boolean>(false);
  const [openViewRealDataModal, setOpenViewRealDataModal] = useState<boolean>(false);
  const paramDetailRef = useRef<InventoryController.ParamDetailType>({ inputData: "", data: "" });
  const [tableLoading, setTableLoading] = useState<boolean>(true);

  const onViewRealDataModal = (data: RealDataType) => {
    const { param, paramDetail } = data;
    paramDetailRef.current = { inputData: param, data: paramDetail };
    setOpenViewRealDataModal(true);
  };

  const columns = useMemo(
    () => [
      {
        title: "碳足迹批次",
        dataIndex: "loadName",
        width: "180px",
        render: (text: string) => {
          return (
            <span
              data-tooltip-id="tooltip"
              data-tooltip-place="top-start"
              data-tooltip-content={handleContentRender(text, 9)}
              className="w-[180px] font-normal  text-lg leading-[27px] truncate inline-block">
              {text}
            </span>
          );
        },
      },
      {
        title: "实景数据",
        dataIndex: "productName",
        width: "6rem",
        render: (text: string, render: any) => {
          return (
            <div
              className="flex justify-center text-lg leading-[27px]  w-[8rem] bg-[#F1F1F1] rounded"
              onClick={() => onViewRealDataModal(render)}>
              <span className="cursor-pointer ">查看实景数据</span>
            </div>
          );
        },
      },
      {
        title: "批次结果ID",
        dataIndex: "loadNumber",
        width: "8rem",
        render: (text: string) => {
          return (
            <span
              data-tooltip-content={text}
              data-tooltip-id="tooltip"
              className=" text-lg leading-[27px] w-[13rem]  truncate inline-block">
              {shortStr(text, 8, 8)}
            </span>
          );
        },
      },

      {
        title: "产品系统名称",
        width: "2rem",
        dataIndex: "productName",
        render: (text: string) => {
          return (
            <span
              data-tooltip-content={handleContentRender(text, 15)}
              data-tooltip-id="tooltip"
              className=" text-lg  truncate inline-block leading-[27px] max-w-[14rem] ">
              {text}
            </span>
          );
        },
      },
      {
        title: "系统产品ID",
        width: "7rem",
        dataIndex: "productUuid",
        render: (text: string) => {
          return (
            <span
              data-tooltip-content={text}
              data-tooltip-id="tooltip"
              className="w-[13rem] text-lg leading-[27px]  truncate inline-block">
              {shortStr(text, 8, 8)}
            </span>
          );
        },
      },
      {
        title: "描述",
        dataIndex: "productDescription",
        width: "18.75rem",
        render: (text: string) => {
          return (
            <span
              data-tooltip-content={handleContentRender(text, 11)}
              data-tooltip-id="tooltip"
              className="w-[13rem]  text-lg leading-[27px] truncate inline-block">
              {text || "-"}
            </span>
          );
        },
      },
      {
        title: "操作人",
        dataIndex: "operator",
        width: "6.25rem",
        render: (text: string) => (
          <span
            data-tooltip-content={handleContentRender(text, 19)}
            data-tooltip-id="tooltip"
            className=" truncate inline-block text-lg leading-[27px] max-w-[14rem] ">
            {text}
          </span>
        ),
      },
      {
        title: "生成时间",
        dataIndex: "calculateSuccessTime",
        width: "18.625rem",
        render: (text: string) => {
          return <span className="max-w-[11rem] text-lg leading-[27px]  truncate inline-block">{text}</span>;
        },
      },
      {
        title: "碳足迹结果",
        dataIndex: "description",
        width: "8.125rem",
        render: (text: string, record: InventoryController.Records) => {
          return (
            <div className={classNames(`flex justify-between ${colorText[record?.state]?.color}`)}>
              <AButton
                className="cursor-pointer text-lg leading-[27px]"
                href={record.state === 1 && `/tools/inventoryResult?id=${record.loadNumber}`}>
                {colorText[record?.state]?.text}
              </AButton>
            </div>
          );
        },
      },
      {
        title: "组织名称",
        dataIndex: "orgName",
        width: "8.125rem",
        render: (text: string) => (
          <span
            data-tooltip-content={handleContentRender(text, 11)}
            data-tooltip-id="tooltip"
            className="truncate inline-block text-lg leading-[27px] max-w-[14rem] ">
            {text}
          </span>
        ),
      },
      {
        title: "组织编号",
        dataIndex: "orgSerialNumber",
        width: "8.125rem",
        emptyText: "-",
        render: (text: string) => (
          <span
            data-tooltip-id="tooltip"
            data-tooltip-content={handleContentRender(text, 11)}
            className="truncate inline-block text-lg leading-[27px] max-w-[14rem] ">
            {text}
          </span>
        ),
      },
    ],
    [],
  );

  const getList = useCallback(async () => {
    try {
      const res = await getResultList(pgNum);
      setTableData(res);
      setTableLoading(false);
    } catch (e) {
      console.log("eeee", e);
    }
  }, [pgNum]);

  useEffect(() => {
    let stop = false;
    const task = async () => {
      while (true) {
        if (stop) return;
        try {
          await getList();
          await sleep(10000);
        } catch (e) {
          continue;
        }
      }
    };
    task();
    return () => {
      stop = true;
    };
  }, []);

  const unVerifier = useUnVerifier();

  return (
    <ToolsLayout
      isNew
      className="flex flex-col justify-between flex-1 text-black "
      canBack
      link={{ pathName: "/tools/tools", homeTitle: "产品碳足迹工具集", currentTitle: "产品碳足迹实景清单工具" }}>
      <div className="">
        <h3 className="flex items-center justify-between text-2xl font-semibold">
          <span>我的产品碳足迹结果</span>
          {unVerifier && (
            <Button
              onClick={() => setOpenResultModal(true)}
              className={classNames("w-40 text-lg font-normal text-white rounded-lg bg-green-2 h-11")}>
              新建碳足迹结果
            </Button>
          )}
        </h3>
        <div className="w-full p-5 mt-5 bg-white rounded-2xl">
          <div className="pb-6 mt-5 overflow-x-auto">
            <div className="text-base leading-[1.625rem] min-w-[62.25rem]">
              <Table
                loading={tableLoading}
                columns={columns}
                columnsHeight={"h-[3.125rem] "}
                mouseHoverKey="loadNumber"
                columnsClassName=" cursor-default "
                data={tableData?.records || []}
                className=""
                headerClassName={{
                  background: "#fff",
                  fontWeight: "700",
                  fontSize: "18px",
                  lineHeight: "27px",
                  height: "3.125rem",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <Pagination
        className="my-8"
        onChange={(v: any, count?: number) => {
          setPgNum(v);
          if (v === 1 || !count) return;
          setTableLoading(true);
          scrollToTop();
        }}
        total={tableData.total || 0}
        pgSize={10}
        pgNum={pgNum}
      />

      {openResultModal && (
        <InventoryResultModal
          openResultModal={() => setOpenResultModal(false)}
          getList={() => {
            setPgNum(1);
            if (pgNum === 1) {
              getList();
            }
          }}
        />
      )}
      {openViewRealDataModal && (
        <RealData {...paramDetailRef.current} onClose={() => setOpenViewRealDataModal(false)} />
      )}
    </ToolsLayout>
  );
}

export default Inventory;
