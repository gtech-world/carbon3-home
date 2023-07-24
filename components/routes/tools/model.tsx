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
  insertLcaProduct,
  updateLcaModelState,
  uploadLcaModel,
} from "@lib/http";
import { shortStr } from "@lib/utils";
import classNames from "classnames";
import _ from "lodash";

function formatToTree(ary: any, pid?: number) {
  return ary
    .filter((item: any) =>
      pid === undefined ? item.parentId === 0 : item.parentId === pid
    )
    .map((item: any) => {
      // 通过父节点ID查询所有子节点
      item.children = formatToTree(ary, item.id);
      return item;
    });
}

export function Model() {
  const [status, setStatus] = useState<any>(null);
  const [viewReal, setViewReal] = useState<any>(null);
  const [uploadView, setUploadView] = useState(false);
  const [opResult, setOpResult] = useState<any>(null);
  const [createProductView, setCreateProductView] = useState<boolean>(false);
  const [pgNum, setPgNum] = useState(1);
  const [productName, setProductName] = useState<any>("");
  const [productSelectedType, setProductSelectedType] = useState<any>(null);
  const [description, setDescription] = useState<any>("");
  const [productSelectedIndex, setProductSelectedIndex] = useState<any>(null);
  const [uploadFile, setUploadFile] = useState<any>(null);
  const [modelName, setModelName] = useState("");
  const [productViewSelectedIndex, setProductViewSelectedIndex] =
    useState<number>(-1);
  const [productNameFilter, setProductNameFilter] = useState(-1);
  const [reload, setReload] = useState(0);
  const [reloadProduct, setReloadProduct] = useState(0);

  const [tableData, setTableData] = useState([]);
  const [tableDataLoading, setTableDataLoading] = useState(false);
  const [tableDataTotal, setTableDataTotal] = useState(0);
  const [productType, setProductType] = useState([]);
  const [productList, setProductList] = useState<any>([]);
  const fileRef = useRef(null);
  const { user } = useUser();
  const { toast } = useToast();
  const queryLcaModelList = async () => {
    setTableDataLoading(true);
    const res = await getLcaModelList({ pgNum, productId: productNameFilter });
    setTableDataLoading(false);
    let arr: any = [];
    res.records.map((v: any) => {
      arr.push({
        id: v.id,
        modelName: v.modelName,
        modelUuid: v.modelUuid,
        productName: v.product.name,
        state: v.state,
        createTime: v.createTime,
        paramDetail:
          JSON.parse(v.paramDetail)[0]?.parameters?.map((item: any) => {
            return {
              context: item.name,
              parameter: item.context.name,
              amount: item.value,
              uncertainty: item?.uncertainty?.distributionType || null,
              description: item.description,
            };
          }) || [],
      });
    });
    setTableDataTotal(res.total);
    // console.log("arrrr", arr);

    setTableData(arr);
  };

  const queryLcaProductTypeList = async () => {
    const res = await getLcaProductTypeList();
    setProductType(res ? formatToTree(res?.records, 0) : []);
  };
  const queryLcaProductList = async () => {
    const res = await getLcaProductList();
    // console.log("resres", res);

    let arr: any = [];
    res.records.map((v: any) => {
      arr.push({
        id: v.id,
        text: v.name,
        type: v.category.name,
        desc: v.description,
      });
    });
    setProductList(arr);
  };
  useEffect(() => {
    queryLcaModelList();
  }, [productNameFilter, reload, pgNum]);
  useEffect(() => {
    queryLcaProductList();
  }, [reloadProduct]);
  useEffect(() => {
    queryLcaProductTypeList();
  }, []);
  const onFileChange = async (file: any) => {
    setUploadFile(file.target.files[0]);
  };
  const columns = useMemo(() => [
    {
      title: "模型名称",
      dataIndex: "modelName",
      width: "14rem",
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
      title: "模型ID",
      dataIndex: "modelUuid",
      width: "13rem",
      render: (text: string) => {
        return (
          <span data-tooltip-id="tooltip" data-tooltip-content={text}>
            {shortStr(text, 8, 8)}
          </span>
        );
      },
    },
    {
      title: "产品名称",
      dataIndex: "productName",
      width: "14rem",
      filterOptions: productList,
      onFilterChange: (data: any) => {
        setProductNameFilter(data ? data.id : -1);
      },
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
      title: "状态",
      dataIndex: "state",
      width: "100px",
      render: (text: number) => {
        let stateText = "";
        switch (text) {
          case 0:
            stateText = "弃用";
            break;
          case 1:
            stateText = "激活";
            break;
          case -1:
            stateText = "草稿";
            break;
        }
        return <span>{stateText}</span>;
      },
    },
    {
      title: "上传时间",
      dataIndex: "createTime",
      width: "13rem",
      render: (text: string) => {
        return <div className="break-keep whitespace-nowrap">{text}</div>;
      },
    },
    {
      title: "",
      width: "20rem",
      render: (text: string, record: any) => {
        return (
          <div className="flex justify-between flex-1 text-green-2 break-keep">
            <a
              href={`/model?id=${record.id}`}
              className="flex items-center justify-center cursor-pointer"
            >
              查看模型
            </a>
            <span
              className="mx-2 cursor-pointer"
              onClick={() => setViewReal(record)}
            >
              查看实景数据
            </span>
            <span className="cursor-pointer" onClick={() => setStatus(record)}>
              更改状态
            </span>
          </div>
        );
      },
    },
  ],[]);

  const realColumns = useMemo(() => [
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
  ], []);
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
  const doAddProduct = async () => {
    if (!productSelectedType?.id) return false;

    const findResult = _.find(productList, (item: any) => {
      return item.text === productName;
    });
    if (findResult) {
      toast({ type: "error", msg: "产品名称已经存在" });
      return false;
    }
    setCreateProductView(false);
    await insertLcaProduct({
      name: productName,
      categoryId: productSelectedType?.id,
      orgId: user.orgId,
      description: description,
    });
    toast({ type: "info", msg: "新建成功！" });
    const dom = document.getElementById("productList");
    if (dom) dom.scrollTop = dom.scrollHeight;
    setReloadProduct(reloadProduct + 1);
  };
  const doUpload = async () => {
    const formData = new FormData();
    formData.append("name", modelName);
    formData.append("file", uploadFile);
    formData.append("productId", productList[productSelectedIndex].id);
    const title = "上传碳足迹模型";
    setOpResult({
      title,
      loading: true,
    });
    // @ts-ignore
    fileRef.current.value = "";
    setUploadView(false);
    const res = await uploadLcaModel(formData);
    if (res) {
      setOpResult({
        title,
        loading: false,
        resultText: "上传成功！",
      });
      setUploadView(false);
      setPgNum(1);
      setReload(reload + 1);
    } else {
      setOpResult({
        title,
        loading: false,
        resultText: "上传失败！",
      });
    }
  };
  useEffect(() => {
    if (!uploadView) {
      setProductSelectedIndex(null);
      setUploadFile(null);
    }
  }, [uploadView]);
  const canUpload = useMemo(() => {
    return !!uploadFile && !!modelName && productSelectedIndex > -1;
  }, [uploadFile, modelName, productSelectedIndex]);
  const canCreateProduct = useMemo(() => {
    return !!productName && !!productSelectedType;
  }, [productName, productSelectedType]);
  const onProductChange = useCallback((val: any) => {
    setProductName(val.target.value);
  },[]);
  return (
    <ToolsLayout className="flex flex-col justify-between flex-1 pb-12 text-black">
      <div className="">
        <div>
          <h3 className="flex items-center justify-between pb-5 mt-8 text-2xl font-semibold">
            <span>产品定义</span>
            <Button
              onClick={() => setCreateProductView(true)}
              className="text-lg bg-green-2 w-[7.25rem] text-white rounded-lg h-11 font-normal"
            >
              新建产品
            </Button>
          </h3>
          <div className="max-h-[15.5rem] overflow-y-auto" id="productList">
            <ul className="flex flex-wrap ml-[-1.25rem]">
              {productList.map((v: any, i: number) => {
                return (
                  <li
                    key={`productList${i}`}
                    onClick={() => setProductViewSelectedIndex(i)}
                    className={classNames(
                      "bg-white px-5 py-2.5 border rounded-lg ml-5 mb-5 cursor-pointer hover:border-green-2 hover:text-green-2",
                      productViewSelectedIndex === i
                        ? "border-green-2 text-green-2"
                        : "border-white"
                    )}
                  >
                    <div className="">{v.text}</div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <h3 className="flex items-center justify-between mt-6 text-2xl font-semibold">
          <span>产品碳足迹模型管理</span>
          {/*@ts-ignore*/}
          <Button
            onClick={() => setUploadView(true)}
            className="w-40 text-lg font-normal text-white rounded-lg bg-green-2 h-11"
          >
            上传碳足迹模型
          </Button>
        </h3>
        <div className="w-full p-5 mt-5 bg-white rounded-2xl">
          <div className="pb-6 mt-5 overflow-x-auto">
            <div className="min-h-[20.25rem] text-base leading-[1.625rem] min-w-[68.25rem]">
              <Table
                columns={columns}
                loading={tableDataLoading}
                // size="big"
                cellClassName={(
                  item: any,
                  cellIndex: number,
                  rowIndex: number
                ) =>
                  rowIndex % 2 === 0
                    ? `bg-gray-16 ${cellIndex === 0 && "rounded-l-lg"} ${
                        cellIndex === columns.length - 1 && "rounded-r-lg"
                      }`
                    : ""
                }
                data={tableData}
                className=""
                headerStyle={{ background: "#fff" }}
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
        total={tableDataTotal}
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
                    className="flex-1 w-full text-lg text-white rounded-lg bg-green-2 h-11"
                  >
                    {status.state === 1 ? "弃用" : "激活"}
                  </Button>
                )}
                {status.state === -1 && (
                  <Button
                    onClick={() => doChangeState(-2)}
                    className="flex-1 w-full ml-5 text-lg border-2 rounded-lg border-green-2 bg-green-2/10 text-green-2 hover:bg-green-2/20 h-11"
                  >
                    删除
                  </Button>
                )}
              </div>
            )}
          </div>
        </Modal>
      )}
      {!!viewReal && (
        <Modal
          title={viewReal.modelName + "模型中的实景输入项"}
          onClose={() => setViewReal(null)}
        >
          <div className="flex w-[60rem] min-h-[16rem] flex-col pb-2">
            <ul className="flex mb-1">
              {realColumns.map((v: any, i: number) => {
                return (
                  <li
                    key={`columns${i}`}
                    className="px-3 text-lg font-bold"
                    style={{ width: v.width }}
                  >
                    {v.title}
                  </li>
                );
              })}
            </ul>
            <div className="max-h-[15rem] min-h-[5rem] overflow-y-auto">
              <Table
                size="big"
                hiddenHeader={true}
                columns={realColumns}
                data={viewReal.paramDetail}
              />
            </div>
          </div>
        </Modal>
      )}
      {opResult && (
        <Modal
          title={opResult?.title || "操作"}
          onClose={() => setOpResult(null)}
        >
          <div className="pb-2 text-center">
            {opResult.loading ? (
              <Loading />
            ) : (
              <span>{opResult.resultText}</span>
            )}
          </div>
        </Modal>
      )}
      {createProductView && (
        <Modal title="新建产品" onClose={() => setCreateProductView(false)}>
          <div className="flex items-center">
            <label className="mr-2">产品名称 :</label>
            <input
              maxLength={30}
              type="text"
              onChange={onProductChange}
              className="border border-gray-14 bg-gray-28 w-[21.5rem] h-[3.125rem] rounded-lg px-3"
            />
          </div>
          <div className="flex items-center mt-6">
            <label className="mr-2">产品类型 :</label>
            <SelectTree
              classname="border border-gray-14 bg-gray-28 w-[21.5rem] h-[3.125rem]"
              onChange={setProductSelectedType}
              node={productType}
            />
          </div>
          <div className="flex items-center my-6">
            <label className="mr-10">描述 :</label>
            <input
              maxLength={100}
              className="border border-gray-14 rounded-lg bg-gray-28 px-3 w-[21.5rem] h-[3.125rem]"
              onChange={(val: any) => {
                setDescription(val.target.value);
              }}
            />
          </div>
          <div className="flex">
            <Button
              onClick={() => setCreateProductView(false)}
              className="text-lg flex-1 bg-green-2/10 border-2 border-green-2 text-green-2 w-40 rounded-lg h-[2.875rem] font-normal hover:bg-green-2/20"
            >
              取消
            </Button>
            <Button
              onClick={() => canCreateProduct && doAddProduct()}
              className={classNames(
                "text-lg ml-5 flex-1 bg-green-2 w-40 text-white rounded-lg h-[2.875rem] font-normal",
                !canCreateProduct && "bg-[#CECECE] hover:bg-[#CECECE]"
              )}
            >
              确定
            </Button>
          </div>
        </Modal>
      )}
      {uploadView && (
        <Modal title="上传碳足迹模型" onClose={() => setUploadView(false)}>
          <div className="flex items-center">
            <label className="mr-2">产品名称 : </label>
            <Select
              className="border border-gray-14 bg-gray-28 w-[21.5rem] py-[0.935rem] "
              items={productList}
              current={productSelectedIndex}
              onChange={(val) => {
                setProductSelectedIndex(val);
              }}
            />
          </div>
          <div className="flex items-center mt-6">
            <label className="mr-2">模型名称 : </label>
            <input
              type="text"
              maxLength={30}
              onChange={(val) => {
                setModelName(val.target.value);
              }}
              className="border border-gray-14 bg-gray-28 rounded-lg h-[3.125rem] w-[21.5rem] px-3"
            />
          </div>
          <div className="flex items-center my-6">
            <label className="mr-2">碳足迹模型 : </label>
            {/*@ts-ignore*/}
            <div className="cursor-pointer underline text-blue-0 max-w-[20rem] truncate" data-tooltip-id="tooltip" data-tooltip-content={uploadFile ? uploadFile.name : ''} onClick={() => fileRef.current.click()}>
              {
                !!uploadFile ? uploadFile.name : '选择文件'
              }
            </div>

            
          </div>
          <input ref={fileRef} onChange={onFileChange} type="file" hidden />

          <div className="flex">
            <Button
              onClick={() => setUploadView(false)}
              className="text-lg flex-1 bg-green-2/10 border-2 border-green-2 text-green-2 w-40 rounded-lg h-[2.875rem] font-normal hover:bg-green-2/20"
            >
              取消
            </Button>
            <Button
              onClick={() => canUpload && doUpload()}
              className={classNames(
                "text-lg ml-5 flex-1 bg-green-2 w-40 text-white rounded-lg h-[2.875rem] font-normal",
                !canUpload && "bg-[#CECECE] hover:bg-[#CECECE]"
              )}
            >
              确定
            </Button>
          </div>
        </Modal>
      )}
      {productViewSelectedIndex > -1 && (
        <Modal title="查看产品" onClose={() => setProductViewSelectedIndex(-1)}>
          <ul className="text-lg max-w-[32rem]">
            <li className="flex">
              <label className="inline-block min-w-[5.625rem]">
                产品名称 :
              </label>
              <span className="break-all text-gray-6">
                {productList[productViewSelectedIndex]?.text}
              </span>
            </li>
            <li className="my-5">
              <label className="inline-block w-[5.625rem]">产品类型 :</label>
              <span className="text-gray-6">
                {productList[productViewSelectedIndex]?.type}
              </span>
            </li>
            <li className="flex">
              <label className="inline-block min-w-[5.625rem]">描述 :</label>
              <span className="break-all text-gray-6">
                {productList[productViewSelectedIndex]?.desc
                  ? productList[productViewSelectedIndex]?.desc
                  : "-"}
              </span>
            </li>
          </ul>
        </Modal>
      )}
    </ToolsLayout>
  );
}

export default Model;
