import { ToolsLayout } from "@components/common/toolsLayout";
import React, { useCallback, useRef, useState } from "react";
import { Button } from "@components/common/button";
import AddVerification from "./components/AddOrEditVerification";
import ViewVerification from "./components/ViewVerification";
import { getVerificationManagementList } from "@lib/services/verificationManagement";
import { useStore } from "@components/common/context";
import _ from "lodash";
import { shortStr } from "@lib/utils";
import { Table } from "@components/common/table";
import { TableAction, TableSchema } from "@lib/@types/table";
import { Tooltip } from "react-tippy";

type ListType = VerificationManagementController.VerificationRecord;
export function VerificationManagementList() {
  const { userData } = useStore();
  const [openAddOrEditVerificationModal, setOpenAddOrEditVerificationModal] = useState<boolean>(false);
  const [openViewFileModal, setOpenViewFileModal] = useState<boolean>(false);
  const viewFileRef = useRef<VerificationManagementController.AttachmentFileList[]>([]);
  const tableRef = useRef<TableAction>();

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

  const columns: TableSchema<ListType>[] = [
    {
      title: "验证记录",
      dataIndex: "name",
      width: "10rem",
      render: (text: string) => {
        const props = {
          title: text,
          arrow: true,
          disabled: text.length < 20,
          followCursor: true,
          theme: "light",
          className: "w-[13rem] text-lg leading-[27px] truncate inline-block",
        } as any;
        return <Tooltip {...props}> {text}</Tooltip>;
      },
    },
    {
      title: "验证记录ID",
      dataIndex: "id",
      width: "6rem",
      render: (text: string) => {
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
      render: (_text: string, record) => {
        const props = {
          title: record.createUser.name,
          arrow: true,
          disabled: record.createUser.name.length < 20,
          followCursor: true,
          theme: "light",
          className: "text-lg leading-[27px] max-w-[13rem]  truncate inline-block",
        } as any;
        return <Tooltip {...props}> {record.createUser.name}</Tooltip>;
      },
    },

    {
      title: "组织机构",
      width: "2rem",
      dataIndex: "productName",
      render: (_text: string, record) => {
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
      render: (_text: string, record) => {
        const props = {
          title: record.inventory.loadName,
          arrow: true,
          theme: "light",
          followCursor: true,
          disabled: record.inventory.loadName.length < 11,
          className: "w-[13rem] text-lg leading-[27px] truncate inline-block",
        } as any;
        return <Tooltip {...props}>{record.inventory.loadName}</Tooltip>;
      },
    },
    {
      title: "碳足迹批次ID",
      dataIndex: "loadNumber",
      width: "10rem",
      render: (text: string) => {
        const props = {
          title: text,
          arrow: true,
          followCursor: true,
          theme: "light",
          className: "w-[13rem] text-lg leading-[27px] truncate inline-block",
        } as any;
        return <Tooltip {...props}> {shortStr(text, 8, 8)}</Tooltip>;
      },
    },
    {
      title: "附件",
      dataIndex: "productDescription",
      width: "18.75rem",
      render: (_text: string, record) => {
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
      render: (_text: string, record) => {
        const props = {
          title: record.verifyUser.name,
          arrow: true,
          disabled: record.verifyUser.name.length < 11,
          followCursor: true,
          theme: "light",
          className: "max-w-[11rem] text-lg leading-[27px]  truncate inline-block",
        } as any;
        return <Tooltip {...props}> {record.verifyUser.name}</Tooltip>;
      },
    },
    {
      title: "验证文档",
      dataIndex: "verifyFileList",
      width: "8.125rem",
      render: (_text: string, record) => {
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
      render: (text: string) => {
        return <div className=" text-lg leading-[27px] max-w-[14rem] ">{text ? "已验证" : ""}</div>;
      },
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
      dataIndex: "",
      render: (_text: string, record) => {
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
  ];

  return (
    <ToolsLayout
      isNew
      className="flex flex-col justify-between flex-1 text-black "
      canBack
      link={{ pathName: "/tools/tools", homeTitle: "产品碳足迹工具集", currentTitle: "验证管理" }}>
      <div>
        <Table<VerificationManagementController.VerificationRecord>
          columns={columns}
          columnsHeight={"h-[3.125rem] "}
          mouseHoverKey="id"
          headerTitle={
            <h3 className="flex items-center justify-between mb-5 text-2xl font-semibold">
              <span>验证管理列表</span>
              {userData?.role === "admin" && (
                <Button
                  onClick={() => onOpenModal({})}
                  className="w-40 text-lg font-normal text-white rounded-lg bg-green-2 h-11">
                  新建验证记录
                </Button>
              )}
            </h3>
          }
          tableRef={tableRef}
          api={getVerificationManagementList}
          className=""
          columnsClassName=" cursor-default "
          headerClassName={{ background: "#fff", fontWeight: "700", fontSize: "18px", lineHeight: "27px" }}
        />
      </div>

      {openAddOrEditVerificationModal && editInfoDataRef.current && (
        <AddVerification
          type={editInfoDataRef.current.type}
          recordId={editInfoDataRef.current.recordId}
          closeModal={() => {
            tableRef.current?.reload(1);
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
