import AButton from "@components/common/aButton";
import { Button } from "@components/common/button";
import { Table } from "@components/common/table";
import { ToolsLayout } from "@components/common/toolsLayout";
import { RealData } from "@components/modal/RealData";
import { useUnVerifier } from "@lib/hooks/useUser";
import { getResultList } from "@lib/http";
import { shortStr } from "@lib/utils";
import classNames from "classnames";
import { useEffect, useRef, useState } from "react";
import InventoryResultModal from "./inventoryResultModal";
import { TableAction, TableSchema } from "@lib/@types/table";
import { Tooltip } from "react-tippy";

const colorText: any = {
  [-1]: { color: "text-[red]", text: "计算失败" },
  0: { color: "text-[#FF9800]", text: "等待计算" },
  1: { color: "text-green-2", text: "查看结果" },
  2: { color: "text-blue-600", text: "正在计算" },
};

type RealDataType = Pick<InventoryController.Records, "param" | "paramDetail">;
export function Inventory() {
  const [openResultModal, setOpenResultModal] = useState<boolean>(false);
  const [openViewRealDataModal, setOpenViewRealDataModal] = useState<boolean>(false);
  const paramDetailRef = useRef<InventoryController.ParamDetailType>({ inputData: "", data: "" });
  const tableRef = useRef<TableAction>();
  const unVerifier = useUnVerifier();

  const onViewRealDataModal = (data: RealDataType) => {
    const { param, paramDetail } = data;
    paramDetailRef.current = { inputData: param, data: paramDetail };
    setOpenViewRealDataModal(true);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      tableRef.current?.reload();
    }, 10000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const columns: TableSchema<InventoryController.Records>[] = [
    {
      title: "碳足迹批次",
      dataIndex: "loadName",
      width: "L",
      render: (text: string) => {
        const props = {
          title: text,
          arrow: true,
          disabled: text.length < 9,
          theme: "light",
          followCursor: true,
          className: "w-[180px] font-normal  text-lg leading-[27px] truncate inline-block",
        } as any;
        return <Tooltip {...props}> {text}</Tooltip>;
      },
    },
    {
      title: "实景数据",
      dataIndex: "productName",
      width: "6rem",
      render: (_text: string, render) => {
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
      width: "XXXL",
      render: (text: string) => {
        const props = {
          title: text,
          arrow: true,
          theme: "light",
          followCursor: true,
          className: "text-lg leading-[27px] max-w-[15rem]  truncate inline-block",
        } as any;
        return <Tooltip {...props}>{shortStr(text, 8, 8)}</Tooltip>;
      },
    },

    {
      title: "产品系统名称",
      width: "2rem",
      dataIndex: "productName",
      render: (text: string) => {
        const props = {
          title: text,
          arrow: true,
          disabled: text.length < 15,
          followCursor: true,
          theme: "light",
          className: "text-lg  truncate inline-block leading-[27px] max-w-[14rem]",
        } as any;
        return <Tooltip {...props}>{text}</Tooltip>;
      },
    },
    {
      title: "系统产品ID",
      width: "7rem",
      dataIndex: "productUuid",
      render: (text: string) => {
        const props = {
          title: text,
          arrow: true,
          followCursor: true,
          theme: "light",
          className: "w-[13rem] text-lg leading-[27px]  truncate inline-block",
        } as any;
        return <Tooltip {...props}> {shortStr(text, 8, 8)}</Tooltip>;
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
      width: "13rem",
      render: (text: string) => {
        const props = {
          title: text,
          arrow: true,
          disabled: text.length < 11,
          theme: "light",
          followCursor: true,
          className: "w-[11rem]  text-lg leading-[27px] truncate inline-block",
        } as any;
        return <Tooltip {...props}> {text || "-"}</Tooltip>;
      },
    },
    {
      title: "操作人",
      dataIndex: "operator",
      width: "6.25rem",
      render: (text: string) => {
        const props = {
          title: text,
          arrow: true,
          disabled: text.length < 19,
          followCursor: true,
          theme: "light",
        } as any;
        return <Tooltip {...props}> {text}</Tooltip>;
      },
    },
    {
      title: "生成时间",
      dataIndex: "calculateSuccessTime",
      width: "18.625rem",
      render: (text: string) => {
        return <span className="max-w-[13rem] text-lg leading-[27px]  truncate inline-block">{text}</span>;
      },
    },
    {
      title: "碳足迹结果",
      dataIndex: "description",
      width: "8.125rem",
      render: (_text: string, record) => {
        return (
          <div className={classNames(`flex justify-between ${colorText[record?.state]?.color}`)}>
            <AButton
              className="cursor-pointer text-lg leading-[27px]"
              href={record.state === 1 && `/tools/inventoryResult?id=${record.loadNumber}`}>
              {colorText[record?.state]?.text}
            </AButton>
          </div>
        );
      },
    },
    {
      title: "组织名称",
      dataIndex: "orgName",
      width: "8.125rem",
      render: (text: string) => {
        const props = {
          title: text,
          arrow: true,
          theme: "light",
          followCursor: true,
          disabled: text.length < 11,
          className: "truncate inline-block text-lg leading-[27px] max-w-[14rem] ",
        } as any;
        return <Tooltip {...props}> {text}</Tooltip>;
      },
    },
    {
      title: "组织编号",
      dataIndex: "orgSerialNumber",
      width: "8.125rem",
      render: (text: string) => {
        const props = {
          title: text,
          disabled: text.length < 11,
          arrow: true,
          followCursor: true,
          theme: "light",
          className: "truncate inline-block text-lg leading-[27px] max-w-[14rem] ",
        } as any;
        return <Tooltip {...props}> {text}</Tooltip>;
      },
    },
  ];

  return (
    <ToolsLayout
      isNew
      className="flex flex-col justify-between flex-1 text-black "
      canBack
      link={{ pathName: "/tools/tools", homeTitle: "产品碳足迹工具集", currentTitle: "产品碳足迹实景清单工具" }}>
      <div className="">
        <Table<InventoryController.Records>
          headerTitle={
            <h3 className="flex items-center justify-between text-2xl font-semibold">
              <span>我的产品碳足迹结果</span>
              {unVerifier && (
                <Button
                  onClick={() => setOpenResultModal(true)}
                  className={classNames("w-40 text-lg font-normal text-white rounded-lg bg-green-2 h-11")}>
                  新建碳足迹结果
                </Button>
              )}
            </h3>
          }
          noLoading={true}
          tableRef={tableRef}
          columns={columns}
          api={getResultList}
          columnsHeight={"h-[3.125rem] "}
          mouseHoverKey="loadNumber"
          columnsClassName=" cursor-default "
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

      {openResultModal && (
        <InventoryResultModal
          openResultModal={() => setOpenResultModal(false)}
          getList={() => {
            tableRef.current?.reload(1);
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
