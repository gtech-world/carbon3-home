import { ToolsLayout } from "@components/common/toolsLayout";
import React, { useMemo, useState } from "react";
import { Table } from "@components/common/table";
import { Pagination } from "@components/common/pagination";
import { useAsyncM } from "@lib/hooks/useAsyncM";
import { getLcaResultList, noArgs } from "@lib/http";
import { Button } from "@components/common/button";
import { Modal } from "@components/common/modal";

export function Inventory() {
  const [pgNum, setPgNum] = useState(1);
  const [tableData, setTableData] = useState([]);
  const [openResultModal, setOpenResultModal] = useState<boolean>(false);

  const columns = [
    {
      title: "碳足迹批次",
      dataIndex: "loadNumber",
      width: "18.75rem",
      render: (text: string) => {
        return (
          <span
            className="max-w-[14rem] truncate inline-block"
            data-tooltip-id="tooltip"
            data-tooltip-content={text}
          >
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
          <span
            className="max-w-[14rem] truncate inline-block"
            data-tooltip-id="tooltip"
            data-tooltip-content={text}
          >
            {text}
          </span>
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
              onClick={() =>
                window.open(`/tools/inventoryResult?id=${record.id}`, "_blank")
              }
            >
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
  const { value, loading } = useAsyncM(
    noArgs(() => getLcaResultList({ pgNum }), [pgNum]),
    [pgNum]
  );
  useMemo(() => {
    if (!value?.records) return [];
    // console.log(JSON.parse(value.records[0].lcaResult))
    let arr: any = [];
    value.records.map((v: any) => {
      arr.push({
        id: v.id,
        createTime: v.createTime,
        loadNumber: v.loadNumber,
        productName: v.product.name,
        modelName: v.model.modelName,
        description: v.model.description,
      });
    });
    setTableData(arr);
  }, [value]);
  return (
    <ToolsLayout
      isNew
      className="flex flex-col justify-between flex-1 text-black "
    >
      <div className="">
        <h3 className="flex items-center justify-between mt-8 text-2xl font-semibold">
          <span>我的产品碳足迹结果</span>
          {/*@ts-ignore*/}
          <Button
            onClick={() => setOpenResultModal(true)}
            className="w-40 text-lg font-normal text-white rounded-lg bg-green-2 h-11"
          >
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
                loading={loading}
                className=""
                headerStyle={{ background: "#fff" }}
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
        total={value?.total ? value.total : 0}
        pgSize={10}
        pgNum={pgNum}
      />

      {openResultModal ? (
        <Modal
          className="rounded-lg"
          containerStyle={"mx-5 max-w-[640px] "}
          titleStyle={"text-[20px] leading-5 font-bold"}
          title={"新建碳足迹结果"}
          onClose={() => setOpenResultModal(false)}
        >
          <div className="mx-5 max-w-[640px] ">
            <span className="font-normal leading-6 ">碳足迹批次：</span>
            <input className="w-full mb-[20px] mt-[10px] border border-[#DDDDDD]  h-[50px]  bg-[#F8F8F8] rounded-lg" />
            <span className="font-normal leading-6 ">产品系统：</span>
            <select id="select" className="w-full mb-[20px] mt-[10px] border border-[#DDDDDD]  h-[50px]  bg-[#F8F8F8] rounded-lg">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
            <span className="font-normal leading-6 ">实景数据填报：</span>
            <div onClick={()=>{alert('点击了')}} className=" cursor-pointer rounded-[4px] mt-[10px] bg-[#F1F1F1] max-w-[84px] max-h-[24px]  text-center">
              前往填写
              </div> 
            <div className="flex flex-row justify-between gap-5 mt-5">
              <div onClick={()=>setOpenResultModal(false)} className=" cursor-pointer bg-[#29953A1A] w-[310px] text-[18px] border-2 border-[#29953A]   font-normal  text-[#29953A] flex h-[50px] rounded-lg justify-center items-center">取消</div>
              <div className="  cursor-pointer bg-[#29953A] w-[310px] text-[18px] font-normal  text-[#FFFFFF] flex h-[50px] rounded-lg justify-center items-center">计算碳结果</div>
            </div>


          </div>
        </Modal>
      ) : null}
    </ToolsLayout>
  );
}

export default Inventory;
