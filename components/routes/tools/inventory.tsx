import { ToolsLayout } from "@components/common/toolsLayout";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Table } from "@components/common/table";
import { Pagination } from "@components/common/pagination";
import { getResultList } from "@lib/http";
import { Button } from "@components/common/button";
import { RealData } from "@components/modal/RealData";
import InventoryResultModal from "./inventoryResultModal";
import classNames from "classnames";
import AButton from "@components/common/aButton";
import { shortStr } from "@lib/utils";

type RealDataType = Pick<InventoryController.Records, "param" | "paramDetail">;
export function Inventory() {
  const [pgNum, setPgNum] = useState(1);
  const [tableData, setTableData] = useState<Partial<InventoryController.InventoryList>>({});
  const [openResultModal, setOpenResultModal] = useState<boolean>(false);
  const [openViewRealDataModal, setOpenViewRealDataModal] = useState<boolean>(false);
  const paramDetailRef = useRef<InventoryController.ParamDetailType>({ inputData: "", data: "" });
  const [tableLoading, setTableLoading] = useState<boolean>(false);

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
        width: "10rem",
        render: (text: string) => {
          return (
            <span
              data-tooltip-content={text}
              data-tooltip-id="tooltip"
              className="w-[13rem] text-lg leading-[27px] truncate inline-block">
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
              data-tooltip-content={text}
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
        title: "产品系统版本",
        width: "1rem",
        dataIndex: "productVersion",
        render: (text: string) => <span className=" text-lg leading-[27px] max-w-[1rem] ">{text}</span>,
      },
      {
        title: "描述",
        dataIndex: "productDescription",
        width: "18.75rem",
        render: (text: string) => {
          return (
            <span
              data-tooltip-content={text}
              data-tooltip-id="tooltip"
              className="w-[13rem]  text-lg leading-[27px] truncate inline-block">
              {text}
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
            data-tooltip-content={text}
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
            <div
              className={classNames("flex justify-between", {
                "text-[#FF9800] ": record.state === 0,
                "text-green-2 ": record.state === 1,
                "text-[red] ": record.state === -1,
              })}>
              <AButton
                className="cursor-pointer text-lg leading-[27px]"
                href={record.state === 1 && `/tools/inventoryResult?id=${record.loadNumber}`}>
                {record.state === 0 ? "等待计算" : record.state === 1 ? "查看结果" : "计算失败"}
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
            data-tooltip-content={text}
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
            data-tooltip-content={text}
            data-tooltip-id="tooltip"
            className="truncate inline-block text-lg leading-[27px] max-w-[14rem] ">
            {text}
          </span>
        ),
      },
    ],
    [],
  );

  const getList = async () => {
    try {
      const res = await getResultList(pgNum);
      setTableData(res);
      setTableLoading(false);
    } catch (e) {
      console.log("eeee", e);
    }
  };

  useEffect(() => {
    getList();
    const intervalId = setInterval(() => {
      getList();
    }, 10000);

    return () => {
      clearInterval(intervalId);
    };
  }, [pgNum]);

  return (
    <ToolsLayout isNew className="flex flex-col justify-between flex-1 text-black ">
      <div className="">
        <h3 className="flex items-center justify-between mt-8 text-2xl font-semibold">
          <span>我的产品碳足迹结果</span>
          <Button
            onClick={() => setOpenResultModal(true)}
            className="w-40 text-lg font-normal text-white rounded-lg bg-green-2 h-11">
            新建碳足迹结果
          </Button>
        </h3>
        <div className="w-full p-5 mt-5 bg-white rounded-2xl">
          <div className="pb-6 mt-5 overflow-x-auto">
            <div className="text-base leading-[1.625rem] min-w-[62.25rem]">
              <Table
                loading={tableLoading}
                columns={columns}
                columnsHeight={"h-[3.125rem] "}
                mouseHoverKey="loadNumber"
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
        onChange={(v: any) => {
          setPgNum(v);
          setTableLoading(true);
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
