import React, { FC, useEffect, useState } from "react";
import { Modal } from "@components/common/modal";
import { Table } from "@components/common/table";
import { getAddRealDataList } from "@lib/http";
import { getCurrentDate } from "utils";

type realDataModal = InventoryController.InventoryRealDataList;
const InventoryAddRealDataModal: FC<InventoryController.InventoryAddRealDataModalProps> = ({
  onOpenModal,
  productId,
  realData,
}) => {
  const [tableData, setTableData] = useState<realDataModal[]>([]);

  const getRealDataList = async () => {
    getAddRealDataList(productId)
      .then((res) => {
        const newData = JSON.parse(res.paramDetail);
        console.log();

        setTableData(newData[0]?.parameters);
      })
      .catch((e) => {})
      .finally();
  };
  useEffect(() => {
    getRealDataList();
  }, [productId]);

  const onSubmit = () => {
    const table = document?.getElementById("realDataTable") as HTMLTableElement;
    const rows = table.getElementsByTagName("tr");
    const values: string[][] = [];

    for (let i = 0; i < rows.length; i++) {
      const rowValues = [];
      const inputs = rows[i].getElementsByTagName("input");
      for (let j = 0; j < inputs.length; j++) {
        const inputValue = inputs[j].value;
        rowValues.push(inputValue);
      }
      values.push(rowValues);
    }

    let lcaParamList = [];
    lcaParamList = tableData.map((e, i) => {
      const newArr = {
        processId: e.context["@id"],
        paramValue: values.slice(1)[i][0],
        paramName: e.name,
        dateTime: getCurrentDate(),
      };
      return newArr;
    });

    const result = {
      lcaParamList,
    };
    typeof onOpenModal === "function" && onOpenModal();
    typeof realData === "function" && realData(result);

    console.log("值-----", result, lcaParamList, typeof realData);
  };

  console.log("tadasdsa", tableData);

  type columnsList = InventoryController.InventoryRealDataList;
  const columns = [
    {
      title: "参数名",
      dataIndex: "name",
      width: "9rem",
      render: (text: string) => text,
    },
    {
      title: "过程名称",
      dataIndex: "name",
      width: "7rem",
      render: (text: string, record: columnsList) => record.context.name,
    },
    {
      title: "参考值",
      width: "10rem",
      dataIndex: "value",
      render: (text: string) => text,
    },
    {
      title: "填入值",
      width: "10rem",
      dataIndex: "createTime",
      render: (text: string) => <input type="number" className="w-[10rem] h-[40px] bg-[#F3F3F3]" />,
    },
  ];

  return (
    <Modal
      title="实景数据填报"
      containerClassName={"mx-5 max-w-[1000px] "}
      titleClassName={"text-[20px] leading-5 font-bold"}
      onClose={(typeof onOpenModal === "function" && onOpenModal) || undefined}>
      <div className="mx-5 max-w-[1000px] max-h-96 overflow-y-auto ">
        <Table
          columns={columns}
          tableId="realDataTable"
          columnsHeight={"h-[3.125rem]"}
          mouseHoverKey="id"
          data={tableData}
          isSetBorder={true}
          className=""
          headerClassName={{
            background: "#DDDDDD",
            position: "sticky",
            top: "0",
            fontWeight: "bold",
          }}
        />
      </div>
      <div className="mx-5 ">
        <div className="flex flex-row justify-between gap-5 mt-5">
          <div
            onClick={(typeof onOpenModal === "function" && onOpenModal) || undefined}
            className=" cursor-pointer bg-[#29953A1A] w-[450px] text-[18px] border-2 border-[#29953A] font-normal text-[#29953A] flex h-[50px] rounded-lg justify-center items-center">
            取消
          </div>
          <div
            onClick={() => onSubmit()}
            className="  cursor-pointer bg-[#29953A] w-[450px] text-[18px] font-normal  text-[#FFFFFF] flex h-[50px] rounded-lg justify-center items-center">
            确定
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default InventoryAddRealDataModal;