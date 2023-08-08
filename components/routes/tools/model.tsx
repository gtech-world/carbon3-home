import { Button } from "@components/common/button";
import { Modal } from "@components/common/modal";
import { Pagination } from "@components/common/pagination";
import { Table } from "@components/common/table";
import { ToolsLayout } from "@components/common/toolsLayout";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { useToast, useUser } from "@components/common/context";
import { Loading } from "@components/common/loading";
import { Select } from "@components/common/select";
import { SelectTree } from "@components/common/selectTree";
import {
  getLcaModelList,
  getLcaProductList,
  getLcaProductTypeList,
  upsertLcaProduct,
  updateLcaModelState,
  uploadLcaModel,
} from "@lib/http";
import { shortStr } from "@lib/utils";
import _ from "lodash";
import { NewProductSystem } from "@components/modal/NewProductSystem";
import { EditorProductSystem } from "@components/modal/EditorProductSystem";

function formatToTree(ary: any, pid?: number) {
  return ary
    .filter((item: any) => (pid === undefined ? item.parentId === 0 : item.parentId === pid))
    .map((item: any) => {
      // 通过父节点ID查询所有子节点
      item.children = formatToTree(ary, item.id);
      return item;
    });
}

export function Model() {
  const [status, setStatus] = useState<any>(null);
  const [viewReal, setViewReal] = useState<any>(null);
  // const [uploadView, setUploadView] = useState(false);
  const [editorProductSystem, setEditorProductSystem] = useState<any>();
  const [opResult, setOpResult] = useState<any>(null);
  const [createProductView, setCreateProductView] = useState<boolean>(false);
  const [pgNum, setPgNum] = useState(1);
  const [productName, setProductName] = useState<any>("");
  const [productSelectedType, setProductSelectedType] = useState<any>(null);
  const [description, setDescription] = useState<any>("");
  const [productSelectedIndex, setProductSelectedIndex] = useState<any>(null);
  const [uploadFile, setUploadFile] = useState<any>(null);
  const [modelName, setModelName] = useState("");
  const [productViewSelectedIndex, setProductViewSelectedIndex] = useState<number>(-1);
  const [productNameFilter, setProductNameFilter] = useState(-1);
  const [reload, setReload] = useState(0);
  const [reloadProduct, setReloadProduct] = useState(0);
  const [tableData, setTableData] = useState<Partial<ProduceSystemController.ProduceSystemList>>({});
  const [tableDataTotal, setTableDataTotal] = useState(0);
  const [productType, setProductType] = useState([]);
  const [productList, setProductList] = useState<any>([]);
  const fileRef = useRef(null);
  const { user } = useUser();

  const queryLcaProductTypeList = async () => {
    const res = await getLcaProductTypeList();
    setProductType(res ? formatToTree(res?.records, 0) : []);
  };

  const queryLcaProductList = async () => {
    try {
      const res = await getLcaProductList(pgNum);
      setTableData(res);
    } catch (e) {
      console.log("eee", e);
    }
  };

  // useEffect(() => {
  //   queryLcaModelList();
  // }, [productNameFilter, reload, pgNum]);
  useEffect(() => {
    queryLcaProductList();
  }, [pgNum]);
  useEffect(() => {
    queryLcaProductTypeList();
  }, []);
  const onFileChange = async (file: any) => {
    setUploadFile(file.target.files[0]);
  };

  const columns = useMemo(
    () => [
      {
        title: "产品系统",
        dataIndex: "name",
        width: "20rem",
        render: (text: string) => {
          return (
            <span
              data-tooltip-id="tooltip"
              data-tooltip-content={text}
              className="w-[20rem] font-normal  text-lg leading-[27px] truncate inline-block">
              {text}
            </span>
          );
        },
      },
      {
        title: "产品系统ID",
        dataIndex: "uuid",
        width: "20rem",
        render: (text: string) => {
          return (
            <span
              data-tooltip-id="tooltip"
              data-tooltip-content={text}
              className="text-lg w-[13rem] font-normal leading-[27px]">
              {shortStr(text, 8, 8)}
            </span>
          );
        },
      },
      {
        title: "变更人",
        dataIndex: "name",
        width: "12.5rem",
        render: (text: string, record: ProduceSystemController.ListRecords) => {
          return (
            <span className="w-[13rem] text-lg truncate inline-block font-normal leading-[27px]">
              {record.updateUser.name}
            </span>
          );
        },
      },
      {
        title: "变更时间",
        dataIndex: "updateTime",
        width: "12.5rem",
        render: (text: string) => {
          return (
            <div className="text-lg  w-[13rem]  font-normal leading-[27px] break-keep whitespace-nowrap">{text}</div>
          );
        },
      },
      {
        title: "版本",
        dataIndex: "version",
        width: "9.375rem",
        render: (text: string) => {
          return <span className="text-lg  font-normal leading-[27px]">{text}</span>;
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
                编辑
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

  // const doAddProduct = async () => {
  //   if (!productSelectedType?.id) return false;

  //   const findResult = _.find(productList, (item: any) => {
  //     return item.text === productName;
  //   });
  //   if (findResult) {
  //     toast({ type: "error", msg: "产品名称已经存在" });
  //     return false;
  //   }
  //   setCreateProductView(false);
  //   await insertLcaProduct({
  //     name: productName,
  //     categoryId: productSelectedType?.id,
  //     orgId: user.orgId,
  //     description: description,
  //   });
  //   toast({ type: "info", msg: "新建成功！" });
  //   const dom = document.getElementById("productList");
  //   if (dom) dom.scrollTop = dom.scrollHeight;
  //   setReloadProduct(reloadProduct + 1);
  // };
  // const doUpload = async () => {
  //   const formData = new FormData();
  //   formData.append("name", modelName);
  //   formData.append("file", uploadFile);
  //   formData.append("productId", productList[productSelectedIndex].id);
  //   const title = "上传碳足迹模型";
  //   setOpResult({
  //     title,
  //     loading: true,
  //   });
  //   // @ts-ignore
  //   fileRef.current.value = "";
  //   setUploadView(false);
  //   const res = await uploadLcaModel(formData);
  //   if (res) {
  //     setOpResult({
  //       title,
  //       loading: false,
  //       resultText: "上传成功！",
  //     });
  //     setUploadView(false);
  //     setPgNum(1);
  //     setReload(reload + 1);
  //   } else {
  //     setOpResult({
  //       title,
  //       loading: false,
  //       resultText: "上传失败！",
  //     });
  //   }
  // };
  // useEffect(() => {
  //   if (!uploadView) {
  //     setProductSelectedIndex(null);
  //     setUploadFile(null);
  //   }
  // }, [uploadView]);
  const canUpload = useMemo(() => {
    return !!uploadFile && !!modelName && productSelectedIndex > -1;
  }, [uploadFile, modelName, productSelectedIndex]);
  const canCreateProduct = useMemo(() => {
    return !!productName && !!productSelectedType;
  }, [productName, productSelectedType]);
  const onProductChange = useCallback((val: any) => {
    setProductName(val.target.value);
  }, []);

  return (
    <ToolsLayout isNew={true} className="flex flex-col justify-between flex-1 pb-12 text-black ">
      <div className="">
        <h3 className="flex items-center justify-between mt-8 text-2xl font-semibold">
          <span>我的产品系统</span>
          {/*@ts-ignore*/}
          <Button
            onClick={() => setCreateProductView(true)}
            className="w-40 text-lg font-normal text-white rounded-lg bg-green-2 h-11">
            新建产品系统
          </Button>
        </h3>
        <div className="w-full p-5 mt-5 bg-white rounded-2xl">
          <div className="pb-6 mt-5 overflow-x-auto">
            <div className="min-h-[20.25rem] text-base leading-[1.625rem] min-w-[68.25rem]">
              <Table
                columns={columns}
                columnsHeight={"h-[3.125rem]"}
                mouseHoverKey={"id"}
                data={tableData?.records || []}
                className=""
                headerClassName={{ background: "#fff", fontWeight: "700", fontSize: "18px", lineHeight: "27px" }}
              />
            </div>
          </div>
        </div>
      </div>
      <Pagination
        onChange={(v: any) => {
          setPgNum(v);
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
        <NewProductSystem onClose={() => setCreateProductView(false)} onSuccess={() => queryLcaProductList()} />
      )}
      {editorProductSystem && (
        <EditorProductSystem
          psId={editorProductSystem.id}
          onClose={() => setEditorProductSystem(undefined)}
          onSuccess={() => queryLcaProductList()}
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
