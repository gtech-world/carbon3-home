import { ToolsLayout } from "@components/common/toolsLayout";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Table } from "@components/common/table";
import { Pagination } from "@components/common/pagination";
import { getResultList } from "@lib/http";
import { Button } from "@components/common/button";
import classNames from "classnames";
import AButton from "@components/common/aButton";
import AddVerification from "./components/AddOrEditVerification";
import ViewVerification from "./components/ViewVerification";

type RealDataType = Pick<InventoryController.Records, "param" | "paramDetail">;
export function verificationManagementList() {
  const [pgNum, setPgNum] = useState(1);
  const [tableData, setTableData] = useState<Partial<InventoryController.InventoryList>>({});
  const [openAddOrEditVerificationModal, setOpenAddOrEditVerificationModal] = useState<boolean>(false);
  const [openViewFileModal, setOpenViewFileModal] = useState<boolean>(false);
  const paramDetailRef = useRef<InventoryController.ParamDetailType>({ inputData: "", data: "" });
  const editInfoDataRef = useRef({});

  const onViewFile = (data?: RealDataType) => {
    setOpenViewFileModal(true);
  };

  const columns = useMemo(
    () => [
      {
        title: "验证记录",
        dataIndex: "loadName",
        width: "10rem",
        render: (text: string) => {
          return <span className="w-[13rem] text-lg leading-[27px] truncate inline-block">{text}</span>;
        },
      },
      {
        title: "验证记录ID",
        dataIndex: "productName",
        width: "6rem",
        render: (text: string, render: any) => {
          return (
            <div className="flex justify-center text-lg leading-[27px]  w-[8rem] bg-[#F1F1F1] rounded">
              <span className="cursor-pointer ">查看实景数据</span>
            </div>
          );
        },
      },
      {
        title: "发起人",
        dataIndex: "loadNumber",
        width: "8rem",
        render: (text: string) => {
          return (
            <span
              data-tooltip-content={text}
              data-tooltip-id="tooltip"
              className=" text-lg leading-[27px] w-[13rem]  truncate inline-block">
              {text}
            </span>
          );
        },
      },

      {
        title: "组织机构",
        width: "2rem",
        dataIndex: "productName",
        render: (text: string) => {
          return <span className=" text-lg leading-[27px] max-w-[14rem] ">{text}</span>;
        },
      },
      {
        title: "碳足迹批次",
        dataIndex: "loadName",
        width: "10rem",
        render: (text: string) => {
          return <span className="w-[13rem] text-lg leading-[27px] truncate inline-block">{text}</span>;
        },
      },
      {
        title: "碳足迹批次ID",
        dataIndex: "loadName",
        width: "10rem",
        render: (text: string) => {
          return <span className="w-[13rem] text-lg leading-[27px] truncate inline-block">{text}</span>;
        },
      },
      {
        title: "附件",
        dataIndex: "productDescription",
        width: "18.75rem",
        render: (text: string) => {
          return (
            <div onClick={() => onViewFile()} className="w-[112px] flex flex-row bg-[#F1F1F1] justify-center rounded">
              <img src="/vector_icon.svg" />
              <div className="ml-2 ">验证文件</div>
            </div>
          );
        },
      },
      {
        title: "最后编辑",
        dataIndex: "operator",
        width: "6.25rem",
        render: (text: string) => <span className=" text-lg leading-[27px] max-w-[14rem] ">{text}</span>,
      },
      {
        title: "验证人",
        dataIndex: "calculateSuccessTime",
        width: "18.625rem",
        render: (text: string) => {
          return <span className="max-w-[11rem] text-lg leading-[27px]  truncate inline-block">{text}</span>;
        },
      },
      {
        title: "验证文档",
        dataIndex: "description",
        width: "8.125rem",
        render: (text: string) => {
          return (
            <div className="w-[112px] flex flex-row bg-[#F1F1F1] justify-center rounded">
              <img src="/vector_icon.svg" />
              <div className="ml-2 ">验证文件</div>
            </div>
          );
        },
      },
      {
        title: "验证状态",
        dataIndex: "orgName",
        width: "8.125rem",
        render: (text: string) => <span className=" text-lg leading-[27px] max-w-[14rem] ">{text}</span>,
      },
      {
        title: "验证时间",
        dataIndex: "orgSerialNumber",
        width: "8.125rem",
        emptyText: "-",
        render: (text: string) => <span className=" text-lg leading-[27px] max-w-[14rem] ">{text}</span>,
      },
      {
        title: "",
        width: "20rem",
        render: (text: string, record: any) => {
          return (
            <div className="flex justify-between flex-1 text-green-2 break-keep">
              <div
                className="flex items-center font-normal justify-center cursor-pointer text-lg leading-[27px]"
                onClick={() => onOpenModal(record)}>
                编辑
              </div>
            </div>
          );
        },
      },
    ],
    [],
  );

  const getList = async () => {
    try {
      const res = await getResultList(pgNum);
      setTableData(res);
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

  const onOpenModal = (record?: any) => {
    setOpenAddOrEditVerificationModal(true);
    editInfoDataRef.current = record;
  };

  return (
    <ToolsLayout isNew className="flex flex-col justify-between flex-1 text-black ">
      <div className="">
        <h3 className="flex items-center justify-between mt-8 text-2xl font-semibold">
          <span>验证管理列表</span>
          <Button
            onClick={() => onOpenModal({})}
            className="w-40 text-lg font-normal text-white rounded-lg bg-green-2 h-11">
            新建验证记录
          </Button>
        </h3>
        <div className="w-full p-5 mt-5 bg-white rounded-2xl">
          <div className="pb-6 mt-5 overflow-x-auto">
            <div className="text-base leading-[1.625rem] min-w-[62.25rem]">
              <Table
                columns={columns}
                columnsHeight={"h-[3.125rem] "}
                mouseHoverKey="loadNumber"
                data={tableData?.records || []}
                className=""
                headerClassName={{ background: "#fff", fontWeight: "700", fontSize: "18px", lineHeight: "27px" }}
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
      {openAddOrEditVerificationModal && (
        <AddVerification
          title={JSON.stringify(editInfoDataRef.current) === "{}" ? "新建验证记录" : "编辑验证记录"}
          isSingle={JSON.stringify(editInfoDataRef.current) !== "{}"}
          singleBtnTitle={""}
          editInfoData={editInfoDataRef.current}
          closeModal={() => {
            setOpenAddOrEditVerificationModal(false);
            editInfoDataRef.current = {};
          }}
        />
      )}
      {openViewFileModal && (
        <ViewVerification
          closeModal={() => {
            setOpenViewFileModal(false);
          }}
        />
      )}
    </ToolsLayout>
  );
}

export default verificationManagementList;
