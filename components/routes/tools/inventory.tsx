import {ToolsLayout} from "@components/common/toolsLayout";
import React, {useState} from "react";
import {Table} from "@components/common/table";
import {Pagination} from "@components/common/pagination";
import {useAsyncM} from "@lib/hooks/useAsyncM";
import {getLcaResultList, noArgs} from "@lib/http";

export function Inventory() {
  const [pgNum,setPgNum] = useState(1)
  const columns = [
    {
      title: "产品批次号",
      dataIndex: 'modelName',
    },
    {
      title: "产品名称",
      dataIndex: 'modelId',
    },
    {
      title: "模型名称",
      dataIndex: 'modelId',
    },
    {
      title: "描述",
      dataIndex: 'modelId',
    },
    {
      title: "报告时间",
      dataIndex: 'modelId',
    },
    {
      title: "",
      render: ()=>{
        return(
          <div className="flex justify-between text-green-2">
            <span className="cursor-pointer" onClick={()=>window.open('/tools/inventoryNotCalc', "_blank")}>碳足迹结果</span>
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
  const { value, loading } = useAsyncM(
    noArgs(() => getLcaResultList({pgNum}), [pgNum]),
    [pgNum]
  );
  return (
    <ToolsLayout className="text-black flex flex-col justify-between flex-1">
      <div>
        <h3 className="text-2xl font-semibold mt-8">产品碳足迹实景清单管理</h3>
        <div className="bg-white p-5 rounded-2xl text-base mt-5 leading-[1.625rem]">
          <Table columns={columns}
                 cellClassName={(item:any,cellIndex:number,rowIndex:number)=>(rowIndex % 2=== 0 ? `bg-gray-16 ${cellIndex === 0 && 'rounded-l-lg'} ${cellIndex === (columns.length-1) && 'rounded-r-lg'}`:'')}
                 data={data}
                 loading={loading}
                 className=""
                 headerStyle={{background:'#fff'}}
          />
        </div>
      </div>
      <Pagination className="my-8" onChange={(v:any)=>{setPgNum(v)}} total={10} pgSize={5} pgNum={pgNum} />
    </ToolsLayout>
  );
}

export default Inventory;
