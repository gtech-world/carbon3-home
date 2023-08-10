import { Btn } from "@components/common/button";
import { Modal } from "@components/common/modal";
import { Table } from "@components/common/table";
import React, { FC, useEffect, useState } from "react";
import { getCurrentDate } from "utils";

const InventoryAddRealDataModal: FC<InventoryController.InventoryAddRealDataModalProps> = ({
  onOpenModal,
  realData,
  tableData,
  realArr,
}) => {
  const [allTableData, setAllTableData] = useState<InventoryController.InventoryRealDataList[]>(tableData);
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
    lcaParamList = tableData?.map((e, i) => {
      const newArr = {
        processId: e.context["@id"],
        paramValue: values.slice(1)[i][0] || e.value.toString(),
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
  };

  useEffect(() => {
    const newTableData = tableData?.map((item, index) => {
      return realArr?.length && realArr[index].paramName === item.name
        ? { ...item, inputValue: realArr[index].paramValue }
        : { ...item };
    });
    setAllTableData(newTableData);
  }, [realArr, tableData]);

  type columnsList = InventoryController.InventoryRealDataList;
  const columns = [
    {
      title: "参数名",
      dataIndex: "name",
      width: "9rem",
      render: (text: string) => (
        <div className=" flex items-center h-[33px] font-normal leading-[21px] text-[14px] ">{text}</div>
      ),
    },
    {
      title: "过程名称",
      dataIndex: "name",
      width: "7rem",
      render: (text: string, record: columnsList) => (
        <div className="flex items-center  h-[33px] font-normal leading-[21px] text-[14px] ">{record.context.name}</div>
      ),
    },
    {
      title: "参考值",
      width: "10rem",
      dataIndex: "value",
      render: (text: string) => (
        <div className="flex items-center h-[33px] font-normal leading-[21px] text-[14px] ">{text}</div>
      ),
    },
    {
      title: "填入值",
      width: "10rem",
      dataIndex: "createTime",
      render: (text: string, record: columnsList) => (
        <input
          defaultValue={record.inputValue}
          type="number"
          className="font-normal  leading-[21px] text-[14px] w-[10rem] h-[33px] "
        />
      ),
    },
  ];

  return (
    <Modal
      title="实景数据填报"
      containerClassName={"mx-5 max-w-[640px]"}
      titleClassName={"text-[20px] leading-5 font-bold"}
      onClose={(typeof onOpenModal === "function" && onOpenModal) || undefined}>
      <div className=" mx-5 w-[640px] max-h-[400px] overflow-y-auto ">
        <Table
          columns={columns}
          tableId="realDataTable"
          data={allTableData || []}
          isSetBorder={true}
          headerClassName={{
            background: "#DDDDDD",
            position: "sticky",
            top: "0",
            fontWeight: "700",
            fontSize: "18px",
            lineHeight: "30px",
            height: "50px",
          }}
        />
      </div>
      <div className="mx-5 ">
        <div className="flex flex-row justify-between gap-5 mt-5">
          <Btn
            onClick={(typeof onOpenModal === "function" && onOpenModal) || undefined}
            defStyle="btn-primary-1"
            className="flex-1  font-normal  h-[50px] border-2 text-[18px]">
            取消
          </Btn>
          <Btn className="flex-1 h-[50px]  font-normal  text-[18px]" onClick={onSubmit}>
            确定
          </Btn>
        </div>
      </div>
    </Modal>
  );
};

export default InventoryAddRealDataModal;
