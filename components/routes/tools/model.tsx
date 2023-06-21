import {ToolsLayout} from "@components/common/toolsLayout";
import React, {useEffect, useMemo, useRef, useState} from "react";
import {Table} from "@components/common/table";
import {Modal} from "@components/common/modal";
import {Button} from "@components/common/button";
import {Pagination} from "@components/common/pagination";
import {useAsyncM} from "@lib/hooks/useAsyncM";
import {getLcaModelList, noArgs, updateLcaModelState} from "@lib/http";

export function Model() {
  const [status,setStatus] = useState<any>(null)
  const [viewReal,setViewReal] = useState<any>(null)
  const [pgNum,setPgNum] = useState(1)
  const fileRef = useRef(null)
  const onFileChange = (file:any)=>{
    console.log(file)
  }

  const { value, loading } = useAsyncM(
    noArgs(() => getLcaModelList({pgNum}), [pgNum]),
    [pgNum]
  );
  const tableData = useMemo(()=>{
    if(!value?.records) return []
    let arr:any = []
    value.records.map((v:any)=>{
      arr.push({
        id: v.id,
        modelName: v.modelName,
        modelUuid: v.modelUuid,
        productName: v.product.name,
        state: v.state,
        createTime: v.createTime,
        paramDetail: (JSON.parse(v.paramDetail))[0].parameters.map((item:any)=>{
          return {
            context: item.name,
            parameter: item.context.name,
            amount: item.value,
            uncertainty: item?.uncertainty?.distributionType || null,
            description: item.description,
          }
        }),
      })
    })
    return arr
  },[value])
  const columns = [
    {
      title: "模型名称",
      dataIndex: 'modelName',
    },
    {
      title: "模型ID",
      dataIndex: 'modelUuid',
    },
    {
      title: "产品名称",
      dataIndex: 'productName',
    },
    {
      title: "状态",
      dataIndex: 'state',
      render: (text:number)=>{
        let stateText = ''
        switch (text){
          case 0:
            stateText = '弃用'
            break;
          case 1:
            stateText = '激活'
            break;
          case -1:
            stateText = '草稿'
            break;
        }
        return(
          <span>{stateText}</span>
        )
      }
    },
    {
      title: "上传时间",
      dataIndex: 'createTime',
    },
    {
      title: "",
      render: (text:string,record:any)=>{
        return(
          <div className="flex flex-1 justify-between text-green-2">
            <span className="cursor-pointer" onClick={()=>{}}>查看模型</span>
            <span className="cursor-pointer" onClick={()=>setViewReal(record)}>查看实景数据</span>
            <span className="cursor-pointer" onClick={()=>setStatus(record)}>更改状态</span>
          </div>
        )
      }
    },
  ]

  const realColumns = [
    {
      title: "实景输入项",
      dataIndex: 'context',
    },
    {
      title: "过程名称",
      dataIndex: 'parameter',
    },
    {
      title: "参考值",
      dataIndex: 'amount',
    },
    {
      title: "不确定性",
      dataIndex: 'uncertainty',
    },
    {
      title: "描述",
      dataIndex: 'description',
    },
  ]
  const doActivation = async ()=>{
    await updateLcaModelState(status.id,status.state === 1?0:1)
  }
  return (
    <ToolsLayout className="text-black flex flex-col justify-between flex-1">
      <div>
        <h3 className="text-2xl font-semibold mt-8 flex justify-between items-center">
          <span>产品碳足迹模型管理</span>
          {/*@ts-ignore*/}
          <Button onClick={()=>fileRef.current.click()} className="text-lg bg-green-2 w-40 text-white rounded-lg h-11 font-normal">上传碳足迹模型</Button>
        </h3>
        <div className="bg-white p-5 rounded-2xl text-base mt-5 leading-[1.625rem]">
          <Table columns={columns}
                 loading={loading}
                 cellClassName={(item:any,cellIndex:number,rowIndex:number)=>(rowIndex % 2=== 0 ? `bg-gray-16 ${cellIndex === 0 && 'rounded-l-lg'} ${cellIndex === (columns.length-1) && 'rounded-r-lg'}`:'')}
                 data={tableData}
                 className=""
                 headerStyle={{background:'#fff'}}
          />
        </div>
      </div>
      <Pagination onChange={(v:any)=>{setPgNum(v)}} className="my-8" total={value?.total?value.total:0} pgSize={10} pgNum={pgNum} />
      {
        !!status &&
        <Modal title="更改状态" onClose={()=>setStatus(null)}>
          <div className="flex">
            <Button onClick={()=>doActivation()} className="text-lg bg-green-2 w-full text-white rounded-lg flex-1 h-11">{status.state === 1?'弃用':'激活'}</Button>
            {
              status === -1 &&
              <Button onClick={()=>{}} className="text-lg border-2 border-green-2 ml-5 bg-green-2/10 w-full text-green-2 hover:text-white hover:bg-green-2 rounded-lg flex-1 h-11">删除</Button>
            }
          </div>
        </Modal>
      }
      {
        !!viewReal &&
        <Modal title="PC Transport C-Model V1.0模型中的实景输入项" onClose={()=>setViewReal(null)}>
          <div className="flex w-[60rem] min-h-[300px]">
            <Table columns={realColumns} data={viewReal.paramDetail} />
          </div>
        </Modal>
      }
      <input ref={fileRef} onChange={onFileChange} type="file" hidden/>
    </ToolsLayout>
  );
}

export default Model;
