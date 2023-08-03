import { ToolsLayout } from "@components/common/toolsLayout";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Table } from "@components/common/table";
import { Pagination } from "@components/common/pagination";
import { useAsyncM } from "@lib/hooks/useAsyncM";
import { getLcaResultList, getProductSystemAllList, noArgs } from "@lib/http";
import { Button } from "@components/common/button";
import { RealData } from "@components/modal/RealData";
import InventoryResultModal from "./inventoryResultModal";

export function Inventory() {
  const [pgNum, setPgNum] = useState(1);
  const [tableData, setTableData] = useState([]);
  const [openResultModal, setOpenResultModal] = useState<boolean>(false);
  const [openViewRealDataModal, setOpenViewRealDataModal] = useState<boolean>(false);

  const onViewRealDataModal = () => {
    setOpenViewRealDataModal(true);
  };

  const columns = [
    {
      title: "碳足迹批次",
      dataIndex: "loadNumber",
      width: "18.75rem",
      render: (text: string) => {
        return (
          <span className="max-w-[14rem] truncate inline-block" data-tooltip-id="tooltip" data-tooltip-content={text}>
            {text}
          </span>
        );
      },
    },
    {
      title: "实景数据",
      dataIndex: "productName",
      width: "18.75rem",
      render: (text: string) => {
        return (
          <div onClick={() => onViewRealDataModal()} className="max-w-[14rem] truncate inline-block">
            {text}
          </div>
        );
      },
    },
    {
      title: "批次结果ID",
      dataIndex: "modelName",
      width: "7.5rem",
      render: (text: string) => {
        return "PCFI-1";
      },
    },

    {
      title: "产品系统名称",
      width: "18.75rem",
      dataIndex: "createTime",
      render: (text: string) => {
        return "PCFI-1";
      },
    },
    {
      title: "系统产品ID",
      width: "8.125rem",
      dataIndex: "createTime",
      render: (text: string) => {
        return "PCFI-1";
      },
    },
    {
      title: "产品系统版本",
      width: "9.375rem",
      dataIndex: "createTime",
      render: (text: string) => {
        return "1";
      },
    },
    {
      title: "描述",
      dataIndex: "description",
      width: "18.75rem",
      emptyText: "-",
    },
    {
      title: "操作人",
      dataIndex: "description",
      width: "6.25rem",
      emptyText: "-",
    },
    {
      title: "生成时间",
      dataIndex: "description",
      width: "10.625rem",
      emptyText: "-",
    },
    {
      title: "碳足迹结果",
      dataIndex: "description",
      width: "8.125rem",
      render: (text: string, record: any) => {
        return (
          <div className="flex justify-between text-green-2">
            <span
              className="cursor-pointer"
              onClick={() => window.open(`/tools/inventoryResult?id=${record.id}`, "_blank")}>
              查看结果
            </span>
          </div>
        );
      },
    },
    {
      title: "组织名称",
      dataIndex: "description",
      width: "8.125rem",
      emptyText: "-",
    },
    {
      title: "组织编号",
      dataIndex: "description",
      width: "8.125rem",
      emptyText: "-",
    },
    {
      title: "",
      width: "7.2rem",
      render: (text: string, record: any) => {
        return <div className="flex justify-between text-green-2"></div>;
      },
    },
  ];

  const getList = async () => {
    const res = await getLcaResultList(pgNum);
    console.log("valvalueue", res);
  };

  useEffect(() => {
    getList();
  }, [pgNum]);

  return (
    <ToolsLayout isNew className="flex flex-col justify-between flex-1 text-black ">
      <div className="">
        <h3 className="flex items-center justify-between mt-8 text-2xl font-semibold">
          <span>我的产品碳足迹结果</span>
          {/*@ts-ignore*/}
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
                mouseHoverKey="id"
                data={tableData}
                // loading={loading}
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
        total={0}
        pgSize={10}
        pgNum={pgNum}
      />

      {openResultModal && (
        <InventoryResultModal openResultModal={() => setOpenResultModal(false)} getList={() => getList()} />
      )}
      {openViewRealDataModal && <RealData onClose={() => setOpenViewRealDataModal(false)} />}
    </ToolsLayout>
  );
}

export default Inventory;
