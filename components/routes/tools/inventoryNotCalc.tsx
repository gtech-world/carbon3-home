import {ToolsLayout} from "@components/common/toolsLayout";
import React from "react";
import {Button} from "@components/common/button";
import {useRouter} from "next/router";

export function InventoryNotCalc() {
  const router = useRouter()
  const data = [
    {label:'产品批次号',text: '385501102'},
    {label:'产品名称',text: 'PC Transport C'},
    {label:'模型名称',text: 'PC Transport C-Model V1.0'},
    {label:'类别',text: 'PC bottle'},
    {label:'描述',text: ''},
    {label:'最后更改时间',text: '2023-06-05 10:42:04'},
    {label:'UUID',text: '40ff8d3d-d6cb-45d9-ac59-659717dc2d7c'}
  ]
  return (
    <ToolsLayout className="text-black">
      <div className="bg-white p-5 rounded-2xl text-base mt-8 leading-[1.625rem]">
        {
          data.map((v,i)=>{
            return(
              <div className="flex" key={`data-${i}`}>
                <label className="font-medium">{v.label} :</label>
                <span className="ml-1 text-gray-6">{v.text}</span>
              </div>
            )
          })
        }
      </div>
      <div className="w-full flex justify-center">
        <Button onClick={()=>router.push("/tools/inventoryResult")} className="mt-5 text-lg bg-green-2 w-[26.875rem] text-white rounded-lg  h-14">计算碳结果</Button>
      </div>
    </ToolsLayout>
  );
}

export default InventoryNotCalc;
