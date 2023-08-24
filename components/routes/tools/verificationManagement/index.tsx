import { ToolsLayout } from "@components/common/toolsLayout";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Table } from "@components/common/table";
import { Pagination } from "@components/common/pagination";
import { Button } from "@components/common/button";
import AddVerification from "./components/AddOrEditVerification";
import ViewVerification from "./components/ViewVerification";
import { getVerificationManagementList } from "@lib/services/verificationManagement";
import { useStore } from "@components/common/context";
import _ from "lodash";
import { handleContentRender } from "utils";
import { shortStr } from "@lib/utils";

type ListType = VerificationManagementController.VerificationRecord;
export function VerificationManagementList() {
  const { userData } = useStore();
  const [pgNum, setPgNum] = useState(1);
  const [tableData, setTableData] = useState<Partial<VerificationManagementController.ListPage>>({});
  const [openAddOrEditVerificationModal, setOpenAddOrEditVerificationModal] = useState<boolean>(false);
  const [openViewFileModal, setOpenViewFileModal] = useState<boolean>(false);
  const viewFileRef = useRef<VerificationManagementController.AttachmentFileList[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const editInfoDataRef = useRef<{
    type: VerificationManagementController.VerificationManagementModal["type"];
    recordId?: number;
  }>();

  const onViewFile = (data: any) => {
    viewFileRef.current = data;
    setOpenViewFileModal(true);
  };
  const onOpenModal = useCallback(
    (record?: any) => {
      setOpenAddOrEditVerificationModal(true);
      editInfoDataRef.current = {
        type: _.isEmpty(record) ? "new" : userData?.role === "verify" ? "verify" : "editor",
        recordId: record.id,
      };
    },
    [userData],
  );
  const columns = useMemo(
    () => [
      {
        title: "验证记录",
        dataIndex: "name",
        width: "10rem",
        render: (text: string) => {
          return (
            <span
              data-tooltip-content={handleContentRender(text, 20)}
              data-tooltip-id="tooltip"
              className="w-[13rem] text-lg leading-[27px] truncate inline-block">
              {text}
            </span>
          );
        },
      },
      {
        title: "验证记录ID",
        dataIndex: "id",
        width: "6rem",
        render: (text: string, render: any) => {
          return (
            <div className="flex  text-lg leading-[27px]  w-[6rem]">
              <span className="">{text}</span>
            </div>
          );
        },
      },
      {
        title: "发起人",
        dataIndex: "loadNumber",
        width: "8rem",
        render: (text: string, record: ListType) => {
          return (
            <span
              data-tooltip-content={handleContentRender(record.createUser.name, 20)}
              data-tooltip-id="tooltip"
              className="text-lg leading-[27px] max-w-[13rem]  truncate inline-block">
              {record.createUser.name}
            </span>
          );
        },
      },

      {
        title: "组织机构",
        width: "2rem",
        dataIndex: "productName",
        render: (text: string, record: ListType) => {
          return (
            <span className=" text-lg leading-[27px] max-w-[14rem] truncate inline-block ">
              {record.organization.name}
            </span>
          );
        },
      },
      {
        title: "碳足迹批次",
        dataIndex: "loadName",
        width: "10rem",
        render: (text: string, record: ListType) => {
          return (
            <span
              data-tooltip-content={handleContentRender(record.inventory.loadName, 11)}
              data-tooltip-id="tooltip"
              className="w-[13rem] text-lg leading-[27px] truncate inline-block">
              {record.inventory.loadName}
            </span>
          );
        },
      },
      {
        title: "碳足迹批次ID",
        dataIndex: "loadNumber",
        width: "10rem",
        render: (text: string) => {
          return (
            <span
              data-tooltip-content={text}
              data-tooltip-id="tooltip"
              className="w-[13rem] text-lg leading-[27px] truncate inline-block">
              {}
              {shortStr(text, 8, 8)}
            </span>
          );
        },
      },
      {
        title: "附件",
        dataIndex: "productDescription",
        width: "18.75rem",
        render: (text: string, record: any) => {
          return (
            <div
              onClick={() => onViewFile(record.attachmentFileList)}
              className="w-[112px] flex flex-row bg-[#F1F1F1] justify-center rounded cursor-pointer">
              <img src="/vector_icon.svg" />
              <div className="ml-2 ">文件夹</div>
            </div>
          );
        },
      },
      {
        title: "最后编辑",
        dataIndex: "updateTime",
        width: "14rem",
        render: (text: string) => <span className=" text-lg leading-[27px] w-[12rem] ">{text}</span>,
      },
      {
        title: "验证人",
        dataIndex: "name",
        width: "18.625rem",
        render: (text: string, record: ListType) => {
          return (
            <span
              data-tooltip-content={handleContentRender(record.verifyUser.name, 11)}
              data-tooltip-id="tooltip"
              className="max-w-[11rem] text-lg leading-[27px]  truncate inline-block">
              {record.verifyUser.name}
            </span>
          );
        },
      },
      {
        title: "验证文档",
        dataIndex: "verifyFileList",
        width: "8.125rem",
        render: (text: string, record: ListType) => {
          return record.verifyFileList.length ? (
            <div
              onClick={() => onViewFile(record.verifyFileList)}
              className="w-[112px] flex flex-row bg-[#F1F1F1] justify-center rounded cursor-pointer">
              <img src="/vector_icon.svg" />
              <div className="ml-2 ">文件夹</div>
            </div>
          ) : null;
        },
      },
      {
        title: "验证状态",
        dataIndex: "state",
        width: "8.125rem",
        render: (text: string) => (
          <span className=" text-lg leading-[27px] max-w-[14rem] ">{text ? "已验证" : ""}</span>
        ),
      },
      {
        title: "验证时间",
        dataIndex: "proofTime",
        width: "8.125rem",
        render: (text: string) => <span className="text-lg leading-[27px] w-[13rem] ">{text}</span>,
      },
      {
        title: "",
        width: "20rem",
        render: (text: string, record: ListType) => {
          return (
            !record.state && (
              <div className="flex justify-between flex-1 text-green-2 break-keep">
                <div
                  className="flex items-center font-normal justify-center cursor-pointer text-lg leading-[27px]"
                  onClick={() => onOpenModal(record)}>
                  编辑
                </div>
              </div>
            )
          );
        },
      },
    ],
    [onOpenModal],
  );

  const getList = async () => {
    try {
      setLoading(true);
      const res = await getVerificationManagementList(pgNum);
      setTableData(res);
    } catch (e) {
      console.log("eeee", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getList();
  }, [pgNum]);

  return (
    <ToolsLayout
      isNew
      className="flex flex-col justify-between flex-1 text-black "
      canBack
      link={{ pathName: "/tools/tools", homeTitle: "产品碳足迹工具集", currentTitle: "验证管理" }}>
      <div className="">
        <h3 className="flex items-center justify-between text-2xl font-semibold">
          <span>验证管理列表</span>
          {userData?.role === "admin" && (
            <Button
              onClick={() => onOpenModal({})}
              className="w-40 text-lg font-normal text-white rounded-lg bg-green-2 h-11">
              新建验证记录
            </Button>
          )}
        </h3>
        <div className="w-full p-5 mt-5 bg-white rounded-2xl">
          <div className="pb-6 mt-5 overflow-x-auto">
            <div className="text-base leading-[1.625rem] min-w-[62.25rem]">
              <Table
                columns={columns}
                loading={loading}
                columnsHeight={"h-[3.125rem] "}
                mouseHoverKey="id"
                data={tableData?.records || []}
                className=""
                columnsClassName=" cursor-default "
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
      {openAddOrEditVerificationModal && editInfoDataRef.current && (
        <AddVerification
          type={editInfoDataRef.current.type}
          recordId={editInfoDataRef.current.recordId}
          closeModal={() => {
            setPgNum(1);
            if (pgNum === 1) {
              getList();
            }
            setOpenAddOrEditVerificationModal(false);
            editInfoDataRef.current = undefined;
          }}
        />
      )}
      {openViewFileModal && (
        <ViewVerification
          fileList={viewFileRef.current}
          closeModal={() => {
            setOpenViewFileModal(false);
          }}
        />
      )}
    </ToolsLayout>
  );
}

export default VerificationManagementList;
