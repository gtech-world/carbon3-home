import { Button } from "@components/common/button";
import { Modal } from "@components/common/modal";
import { Pagination } from "@components/common/pagination";
import { Table } from "@components/common/table";
import { ToolsLayout } from "@components/common/toolsLayout";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Loading } from "@components/common/loading";
import { EditorProductSystem } from "@components/modal/EditorProductSystem";
import { NewProductSystem } from "@components/modal/NewProductSystem";
import { ProduceSystemController } from "@lib/@types/produceSystem";
import { useUnVerifier } from "@lib/hooks/useUser";
import { getLcaProductList, updateLcaModelState } from "@lib/http";
import { shortStr, sleep } from "@lib/utils";
import classNames from "classnames";
import { handleContentRender, scrollToTop } from "utils";

export function Model() {
  const [status, setStatus] = useState<any>(null);
  const [viewReal, setViewReal] = useState<any>(null);
  const [editorProductSystem, setEditorProductSystem] = useState<any>();
  const [opResult, setOpResult] = useState<any>(null);
  const [createProductView, setCreateProductView] = useState<boolean>(false);
  const [pgNum, setPgNum] = useState(1);
  const [productViewSelectedIndex, setProductViewSelectedIndex] = useState<number>(-1);
  const [reload, setReload] = useState(0);
  const [tableData, setTableData] = useState<Partial<ProduceSystemController.ProduceSystemList>>({});
  const [productList, setProductList] = useState<any>([]);
  const [tableLoading, setTableLoading] = useState<boolean>(true);
  const queryLcaProductList = async () => {
    const res = await getLcaProductList(pgNum);
    setTableData(res);
    setTableLoading(false);
  };
  useEffect(() => {
    let stop = false;
    const task = async () => {
      while (true) {
        if (stop) return;
        try {
          await queryLcaProductList();
          await sleep(10000);
        } catch (e) {
          continue;
        }
      }
    };
    task();
    return () => {
      stop = true;
    };
  }, [pgNum]);

  const columns = useMemo(
    () => [
      {
        title: "产品系统",
        dataIndex: "name",
        width: "200px",
        render: (text: string) => {
          return (
            <span
              data-tooltip-id="tooltip"
              data-tooltip-place="top-start"
              data-tooltip-content={handleContentRender(text, 20)}
              className="w-[200px] font-normal  text-lg leading-[27px] truncate inline-block">
              {text}
            </span>
          );
        },
      },
      {
        title: "产品系统ID",
        dataIndex: "uuid",
        width: "15rem",
        render: (text: string) => {
          return (
            <span
              data-tooltip-id="tooltip"
              data-tooltip-content={text}
              className="text-lg w-[15rem] truncate inline-block font-normal leading-[27px]">
              {shortStr(text, 8, 8)}
            </span>
          );
        },
      },
      {
        title: "操作人",
        dataIndex: "name",
        width: "8rem",
        render: (text: string, record: ProduceSystemController.ListRecords) => {
          return (
            <span className="w-[8rem] text-lg truncate inline-block font-normal leading-[27px]">
              {record.updateUser.name}
            </span>
          );
        },
      },
      {
        title: "描述",
        dataIndex: "description",
        width: "14rem",
        render: (text: string) => {
          return (
            <div
              data-tooltip-content={handleContentRender(text, 11)}
              data-tooltip-id="tooltip"
              className="w-[14rem] text-lg truncate inline-block font-normal leading-[27px]">
              {text || "-"}
            </div>
          );
        },
      },
      {
        title: "上传时间",
        dataIndex: "createTime",
        width: "13rem",
        render: (text: string) => {
          return <span className="w-[13rem] text-lg truncate inline-block font-normal leading-[27px]">{text}</span>;
        },
      },
      {
        title: "",
        width: "20rem",
        render: (text: string, record: any) => {
          return (
            <div className="flex justify-between flex-1 ml-10 text-green-2 break-keep">
              <div
                className="flex items-center font-normal justify-center cursor-pointer text-lg leading-[27px]"
                onClick={() => setEditorProductSystem(record)}>
                查看
              </div>
            </div>
          );
        },
      },
    ],
    [],
  );

  const realColumns = useMemo(
    () => [
      {
        title: "实景输入项",
        dataIndex: "context",
        width: "20%",
      },
      {
        title: "过程名称",
        dataIndex: "parameter",
        width: "30%",
      },
      {
        title: "参考值",
        dataIndex: "amount",
        width: "20%",
      },
      {
        title: "不确定性",
        dataIndex: "uncertainty",
        emptyText: "-",
        width: "30%",
      },
      // {
      //   title: "描述",
      //   dataIndex: 'description',
      //   emptyText:'-'
      // },
    ],
    [],
  );
  const doChangeState = async (state: number) => {
    const title = "更改状态";
    setOpResult({
      title,
      loading: true,
    });
    await updateLcaModelState(status.id, state);
    setReload(reload + 1);
    setOpResult({
      title,
      loading: false,
      resultText: "操作成功",
    });
    setStatus(null);
  };

  const unVerifier = useUnVerifier();

  const onSuccess = () => {
    setPgNum(1);
    if (pgNum === 1) {
      queryLcaProductList();
    }
  };

  return (
    <ToolsLayout
      isNew
      canBack
      link={{ pathName: "/tools/tools", homeTitle: "产品碳足迹工具集", currentTitle: "产品碳足迹模型管理工具" }}
      className="flex flex-col justify-between flex-1 pb-12 text-black ">
      <div className="">
        <h3 className="flex items-center justify-between text-2xl font-semibold">
          <span>我的产品系统</span>
          {unVerifier && (
            <Button
              onClick={() => setCreateProductView(true)}
              className={classNames(
                "w-40 text-lg font-normal text-white rounded-lg bg-green-2 h-11 hover:bg-green-28",
              )}>
              新建产品系统
            </Button>
          )}
        </h3>
        <div className="w-full p-5 mt-5 bg-white rounded-2xl">
          <div className="pb-6 mt-5 overflow-x-auto">
            <div className="min-h-[20.25rem] text-base leading-[1.625rem] min-w-[68.25rem]">
              <Table
                loading={tableLoading}
                columns={columns}
                columnsHeight={"h-[3.125rem]"}
                mouseHoverKey={"id"}
                data={tableData?.records || []}
                columnsClassName=" cursor-pointer "
                headerClassName={{ background: "#fff", fontWeight: "700", fontSize: "18px", lineHeight: "27px" }}
              />
            </div>
          </div>
        </div>
      </div>
      <Pagination
        onChange={(v: any) => {
          setPgNum(v);
          scrollToTop();
          setTableLoading(true);
        }}
        className="my-8"
        total={tableData?.total || 0}
        pgSize={10}
        pgNum={pgNum}
      />
      {status !== null && (
        <Modal title="更改状态" onClose={() => setStatus(null)}>
          <div className="flex">
            {opResult?.loading ? (
              <Loading />
            ) : (
              <div className="flex flex-1">
                {status.state > -2 && (
                  <Button
                    onClick={() => doChangeState(status.state === 1 ? 0 : 1)}
                    className="flex-1 w-full text-lg text-white rounded-lg bg-green-2 h-11">
                    {status.state === 1 ? "弃用" : "激活"}
                  </Button>
                )}
                {status.state === -1 && (
                  <Button
                    onClick={() => doChangeState(-2)}
                    className="flex-1 w-full ml-5 text-lg border-2 rounded-lg border-green-2 bg-green-2/10 text-green-2 hover:bg-green-2/20 h-11">
                    删除
                  </Button>
                )}
              </div>
            )}
          </div>
        </Modal>
      )}
      {!!viewReal && (
        <Modal title={viewReal.modelName + "模型中的实景输入项"} onClose={() => setViewReal(null)}>
          <div className="flex w-[60rem] min-h-[16rem] flex-col pb-2">
            <ul className="flex mb-1">
              {realColumns.map((v: any, i: number) => {
                return (
                  <li key={`columns${i}`} className="px-3 text-lg font-bold" style={{ width: v.width }}>
                    {v.title}
                  </li>
                );
              })}
            </ul>
            <div className="max-h-[15rem] min-h-[5rem] overflow-y-auto">
              <Table size="big" hiddenHeader={true} columns={realColumns} data={viewReal.paramDetail} />
            </div>
          </div>
        </Modal>
      )}
      {opResult && (
        <Modal title={opResult?.title || "操作"} onClose={() => setOpResult(null)}>
          <div className="pb-2 text-center">{opResult.loading ? <Loading /> : <span>{opResult.resultText}</span>}</div>
        </Modal>
      )}
      {createProductView && (
        <NewProductSystem onClose={() => setCreateProductView(false)} onSuccess={() => onSuccess()} />
      )}
      {editorProductSystem && (
        <EditorProductSystem
          psId={editorProductSystem.id}
          title={editorProductSystem.name}
          onClose={() => setEditorProductSystem(undefined)}
          onSuccess={() => onSuccess()}
        />
      )}
      {productViewSelectedIndex > -1 && (
        <Modal title="查看产品" onClose={() => setProductViewSelectedIndex(-1)}>
          <ul className="text-lg max-w-[32rem]">
            <li className="flex">
              <label className="inline-block min-w-[5.625rem]">产品名称 :</label>
              <span className="break-all text-gray-6">{productList[productViewSelectedIndex]?.text}</span>
            </li>
            <li className="my-5">
              <label className="inline-block w-[5.625rem]">产品类型 :</label>
              <span className="text-gray-6">{productList[productViewSelectedIndex]?.type}</span>
            </li>
            <li className="flex">
              <label className="inline-block min-w-[5.625rem]">描述 :</label>
              <span className="break-all text-gray-6">
                {productList[productViewSelectedIndex]?.desc ? productList[productViewSelectedIndex]?.desc : "-"}
              </span>
            </li>
          </ul>
        </Modal>
      )}
    </ToolsLayout>
  );
}

export default Model;
