import { ToolsLayout } from "@components/common/toolsLayout";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Table } from "@components/common/table";
import { Pagination } from "@components/common/pagination";
import { getResultList } from "@lib/http";
import { Button } from "@components/common/button";
import { RealData } from "@components/modal/RealData";
import InventoryResultModal from "./inventoryResultModal";
import classNames from "classnames";

type RealDataType = Pick<InventoryController.Records, "param" | "paramDetail">;
export function Inventory() {
  const [pgNum, setPgNum] = useState(1);
  const [tableData, setTableData] = useState<Partial<InventoryController.InventoryList>>({});
  const [openResultModal, setOpenResultModal] = useState<boolean>(false);
  const [openViewRealDataModal, setOpenViewRealDataModal] = useState<boolean>(false);
  const [listLoading, setListLoading] = useState<boolean>(false);
  const paramDetailRef = useRef<{ inputData: string; data: string }>({ inputData: "", data: "" });

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
          return <span className="max-w-[14rem] truncate inline-block">{text}</span>;
        },
      },
      {
        title: "实景数据",
        dataIndex: "productName",
        width: "6rem",
        render: (text: string, render: any) => {
          return (
            <div className="flex  w-[6rem] text-green-2" onClick={() => onViewRealDataModal(render)}>
              <span className="cursor-pointer ">查看实景数据</span>
            </div>
          );
        },
      },
      {
        title: "批次结果ID",
        dataIndex: "loadNumber",
        width: "7.5rem",
        render: (text: string) => {
          return (
            <span data-tooltip-content={text} data-tooltip-id="tooltip" className="max-w-[14rem] truncate inline-block">
              {text}
            </span>
          );
        },
      },

      {
        title: "产品系统名称",
        width: "2em",
        dataIndex: "productName",
        render: (text: string) => text,
      },
      {
        title: "系统产品ID",
        width: "8.125rem",
        dataIndex: "productUuid",
        render: (text: string) => {
          return (
            <span
              data-tooltip-content={text}
              data-tooltip-id="tooltip"
              className="max-w-[14rem]  truncate inline-block">
              {text}
            </span>
          );
        },
      },
      {
        title: "产品系统版本",
        width: "1rem",
        dataIndex: "productVersion",
        render: (text: string) => <span>{text}</span>,
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
              className="max-w-[14rem]  truncate inline-block">
              {text}
            </span>
          );
        },
      },
      {
        title: "操作人",
        dataIndex: "operator",
        width: "6.25rem",
        render: (text: string) => text,
      },
      {
        title: "生成时间",
        dataIndex: "calculateSuccessTime",
        width: "18.625rem",
        render: (text: string) => {
          return <span className="max-w-[14rem]  truncate inline-block">{text}</span>;
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
              <span
                className="cursor-pointer"
                onClick={() =>
                  record.state === 1 && window.open(`/tools/inventoryResult?id=${record.loadNumber}`, "_blank")
                }>
                {record.state === 0 ? "等待计算" : record.state === 1 ? "查看结果" : "计算失败"}
              </span>
            </div>
          );
        },
      },
      {
        title: "组织名称",
        dataIndex: "orgName",
        width: "8.125rem",
        render: (text: string) => text,
      },
      {
        title: "组织编号",
        dataIndex: "orgSerialNumber",
        width: "8.125rem",
        emptyText: "-",
        render: (text: string) => text,
      },
    ],
    [],
  );

  const getList = async () => {
    try {
      setListLoading(true);
      const res = await getResultList(pgNum);
      setTableData(res);
    } catch (e) {
      console.log("eeee", e);
    } finally {
      setListLoading(false);
    }
  };

  useEffect(() => {
    getList();
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
                columns={columns}
                columnsHeight={"h-[3.125rem]"}
                mouseHoverKey="loadNumber"
                data={tableData?.records || []}
                loading={listLoading}
                className=""
                headerClassName={{ background: "#fff" }}
              />
            </div>
          </div>
        </div>
      </div>
      <Pagination
        className="my-8"
        onChange={(v: any) => {
          setPgNum(v);
        }}
        total={tableData.total || 0}
        pgSize={10}
        pgNum={pgNum}
      />

      {openResultModal && (
        <InventoryResultModal openResultModal={() => setOpenResultModal(false)} getList={() => getList()} />
      )}
      {openViewRealDataModal && (
        <RealData {...paramDetailRef.current} onClose={() => setOpenViewRealDataModal(false)} />
      )}
    </ToolsLayout>
  );
}

export default Inventory;
