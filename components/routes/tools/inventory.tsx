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
    },
    {
      title: "产品名称",
      dataIndex: 'productName',
    },
    {
      title: "模型名称",
      dataIndex: 'modelName',
    },
    {
      title: "描述",
      dataIndex: 'description',
      emptyText:'-'
    },
    {
      title: "报告时间",
      dataIndex: 'createTime',
    },
    {
      title: "",
      render: (text:string,record:any)=>{
        return(
          <div className="flex justify-between text-green-2">
              <span className="cursor-pointer" onClick={()=>window.open(`/tools/inventoryNotCalc?id=${record.id}`, "_blank")}>碳足迹结果</span>
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
    console.log(value)
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
        <div className="bg-white p-5 rounded-2xl text-base mt-5 leading-[1.625rem]">
          <Table columns={columns}
                 cellClassName={(item:any,cellIndex:number,rowIndex:number)=>(rowIndex % 2=== 0 ? `bg-gray-16 ${cellIndex === 0 && 'rounded-l-lg'} ${cellIndex === (columns.length-1) && 'rounded-r-lg'}`:'')}
                 data={tableData}
                 loading={loading}
                 className=""
                 headerStyle={{background:'#fff'}}
          />
        </div>
      </div>
      <Pagination className="my-8" onChange={(v:any)=>{setPgNum(v)}} total={value?.total?value.total:0} pgSize={10} pgNum={pgNum} />
    </ToolsLayout>
  );
}

export default Inventory;
