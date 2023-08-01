import React, { useState } from "react";
import { Modal } from "@components/common/modal";
import { Table } from "@components/common/table";

const InventoryAddRealDataModal = () => {
  const [tableData, setTableData] = useState<Record<string, any>[]>([{ loadNumber: "这手机" }]);

  const onAddInfo = () => {
    setTableData([...tableData, []]);
  };
  const columns = [
    {
      title: "参数名",
      dataIndex: "loadNumber",
      width: "10rem",
      render: (text: string) => {
        return (
          <span className="max-w-[14rem] truncate inline-block" data-tooltip-id="tooltip" data-tooltip-content={text}>
            {text}
          </span>
        );
      },
    },
    {
      title: "描述",
      dataIndex: "productName",
      width: "8.5rem",
      render: (text: string) => {
        return (
          <span className="max-w-[14rem] truncate inline-block" data-tooltip-id="tooltip" data-tooltip-content={text}>
            {text}
          </span>
        );
      },
    },
    {
      title: "过程名称",
      dataIndex: "modelName",
      width: "10rem",
      render: (text: string) => {
        return "PCFI-1";
      },
    },

    {
      title: "类型",
      width: "9rem",
      dataIndex: "createTime",
      render: (text: string) => {
        return "PCFI-1";
      },
    },
    {
      title: "参考值",
      width: "10rem",
      dataIndex: "createTime",
      render: (text: string) => {
        return "PCFI-1";
      },
    },
    {
      title: "填入值",
      width: "10rem",
      dataIndex: "createTime",
      render: (text: string) => {
        return "1";
      },
    },
  ];
  return (
    <Modal title="实景数据填报" containerStyle={"mx-5 max-w-[1000px] "} titleStyle={"text-[20px] leading-5 font-bold"}>
      <div className="mx-5 max-w-[1000px] ">
        <Table
          columns={columns}
          columnsHeight={"h-[3.125rem]"}
          mouseHoverKey="id"
          data={tableData}
          isSetBorder={true}
          // loading={loading}
          className=""
          headerStyle={{ background: "#DDDDDD" }}
        />
        <span onClick={() => onAddInfo()} className="text-[14px] font-normal leading-[21px] text-[#999999]">
          +新增
        </span>

        <div className="flex flex-row justify-between gap-5 mt-5">
          <div className=" cursor-pointer bg-[#29953A1A] w-[450px] text-[18px] border-2 border-[#29953A]   font-normal  text-[#29953A] flex h-[50px] rounded-lg justify-center items-center">
            取消
          </div>
          <div className="  cursor-pointer bg-[#29953A] w-[450px] text-[18px] font-normal  text-[#FFFFFF] flex h-[50px] rounded-lg justify-center items-center">
            确定
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default InventoryAddRealDataModal;
