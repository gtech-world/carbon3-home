import {ToolsLayout} from "@components/common/toolsLayout";
import React, {useMemo, useState} from "react";
import {Table} from "@components/common/table";
import {Pagination} from "@components/common/pagination";
import {useAsyncM} from "@lib/hooks/useAsyncM";
import {getLcaResultList, noArgs} from "@lib/http";

export function Inventory() {
  const [pgNum,setPgNum] = useState(1)
  const [tableData,setTableData] = useState([])
  const columns = [
    {
      title: "产品批次号",
      dataIndex: 'loadNumber',
      width: '14rem',
      render:(text:string)=>{
        return(
          <span className="max-w-[14rem] truncate inline-block" data-tooltip-id="tooltip" data-tooltip-content={text}>{text}</span>
        )
      }
    },
    {
      title: "产品名称",
      dataIndex: 'productName',
      width: '14rem',
      render: (text:string)=>{
        return <span className="max-w-[14rem] truncate inline-block" data-tooltip-id="tooltip" data-tooltip-content={text}>{text}</span>
      }
    },
    {
      title: "模型名称",
      dataIndex: 'modelName',
      width: '12.5rem',
      render:(text:string)=>{
        return <span className="max-w-[12.5rem] truncate inline-block" data-tooltip-id="tooltip" data-tooltip-content={text}>{text}</span>
      }
    },
    // {
    //   title: "描述",
    //   dataIndex: 'description',
    //   emptyText:'-'
    // },
    {
      title: "报告时间",
      width: '12rem',
      dataIndex: 'createTime',
    },
    {
      title: "",
      width: '7.2rem',
      render: (text:string,record:any)=>{
        return(
          <div className="flex justify-between text-green-2">
              <span className="cursor-pointer" onClick={()=>window.open(`/tools/inventoryResult?id=${record.id}`, "_blank")}>碳足迹结果</span>
          </div>
        )
      }
    },
  ]
  const { value, loading } = useAsyncM(
    noArgs(() => getLcaResultList({pgNum}), [pgNum]),
    [pgNum]
  );
  useMemo(()=>{
    if(!value?.records) return []
    // console.log(JSON.parse(value.records[0].lcaResult))
    let arr:any = []
    value.records.map((v:any)=>{
      arr.push({
        id: v.id,
        createTime: v.createTime,
        loadNumber: v.loadNumber,
        productName: v.product.name,
        modelName: v.model.modelName,
        description: v.model.description
      })
    })
    setTableData(arr)
  },[value])
  return (
    <ToolsLayout className="text-black flex flex-col justify-between flex-1">
      <div>
        <h3 className="text-2xl font-semibold mt-8">产品碳足迹实景清单管理</h3>
        <div className="w-full  bg-white p-5 mt-5 rounded-2xl">
          <div className="mt-5 pb-6 overflow-x-auto">
            <div className="text-base leading-[1.625rem] min-w-[62.25rem]">
              <Table columns={columns}
                     cellClassName={(item:any,cellIndex:number,rowIndex:number)=>(rowIndex % 2=== 0 ? `bg-gray-16 ${cellIndex === 0 && 'rounded-l-lg'} ${cellIndex === (columns.length-1) && 'rounded-r-lg'}`:'')}
                     data={tableData}
                     loading={loading}
                     className=""
                     headerStyle={{background:'#fff'}}
              />
            </div>
          </div>
        </div>

      </div>
      <Pagination className="my-8" onChange={(v:any)=>{setPgNum(v)}} total={value?.total?value.total:0} pgSize={10} pgNum={pgNum} />
    </ToolsLayout>
  );
}

export default Inventory;
