import {ToolsLayout} from "@components/common/toolsLayout";
import React, {useEffect, useRef, useState} from "react";
import {Table} from "@components/common/table";
import {Modal, ModalHeader} from "@components/common/modal";
import {Button} from "@components/common/button";
import {Pagination} from "@components/common/pagination";

export function Model() {
  const [status,setStatus] = useState(false)
  const [viewReal,setViewReal] = useState(false)
  const [pgNum,setPgNum] = useState(1)
  const fileRef = useRef(null)
  const onFileChange = (file:any)=>{
    console.log(file)
  }
  useEffect(()=>{

  },[])
  const columns = [
    {
      title: "模型名称",
      dataIndex: 'modelName',
    },
    {
      title: "模型ID",
      dataIndex: 'modelId',
    },
    {
      title: "产品名称",
      dataIndex: 'modelId',
    },
    {
      title: "状态",
      dataIndex: 'modelId',
    },
    {
      title: "上传时间",
      dataIndex: 'modelId',
    },
    {
      title: "",
      render: ()=>{
        return(
          <div className="flex flex-1 justify-between text-green-2">
            <span className="cursor-pointer" onClick={()=>{}}>查看模型</span>
            <span className="cursor-pointer" onClick={()=>setViewReal(true)}>查看实景数据</span>
            <span className="cursor-pointer" onClick={()=>setStatus(true)}>更改状态</span>
          </div>
        )
      }
    },
  ]
  const data = [
    {
      modelName: 'PC Transport C-Model V1.0',
      modelId: '100010'
    },
    {
      modelName: 'PC Transport C-Model V1.0',
      modelId: '100010'
    },
    {
      modelName: 'PC Transport C-Model V1.0',
      modelId: '100010'
    }
  ]

  const realColumns = [
    {
      title: "实景输入项",
      dataIndex: 'modelName',
    },
    {
      title: "所属Flow",
      dataIndex: 'modelName',
    },
    {
      title: "类别",
      dataIndex: 'modelName',
    },
    {
      title: "参考值",
      dataIndex: 'modelName',
    },
    {
      title: "单位",
      dataIndex: 'modelName',
    },
    {
      title: "描述",
      dataIndex: 'modelName',
    },
  ]
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
                 cellClassName={(item:any,cellIndex:number,rowIndex:number)=>(rowIndex % 2=== 0 ? `bg-gray-16 ${cellIndex === 0 && 'rounded-l-lg'} ${cellIndex === (columns.length-1) && 'rounded-r-lg'}`:'')}
                 data={data}
                 className=""
                 headerStyle={{background:'#fff'}}
          />
        </div>
      </div>
      <Pagination onChange={(v:any)=>{setPgNum(v)}} className="my-8" total={20} pgSize={2} pgNum={pgNum} />
      {
        status &&
        <Modal title="更改状态" onClose={()=>setStatus(false)}>
          <div className="flex">
            <Button onClick={()=>{}} className="text-lg bg-green-2 w-full text-white rounded-lg flex-1 h-11">激活</Button>
            <Button onClick={()=>{}} className="text-lg border-2 border-green-2 ml-5 bg-green-2/10 w-full text-green-2 hover:text-white hover:bg-green-2 rounded-lg flex-1 h-11">删除</Button>
          </div>
        </Modal>
      }
      {
        viewReal &&
        <Modal title="PC Transport C-Model V1.0模型中的实景输入项" onClose={()=>setViewReal(false)}>
          <div className="flex w-[60rem] min-h-[300px]">
            <Table columns={realColumns} data={[]} />
          </div>
        </Modal>
      }
      <input ref={fileRef} onChange={onFileChange} type="file" hidden/>
    </ToolsLayout>
  );
}

export default Model;
