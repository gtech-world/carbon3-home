import {ToolsLayout} from "@components/common/toolsLayout";
import React, {useMemo} from "react";
import {Button} from "@components/common/button";
import {useRouter} from "next/router";
import {useAsyncM} from "@lib/hooks/useAsyncM";
import {getLcaResultDetail, noArgs} from "@lib/http";
import {Loading} from "@components/common/loading";

export function InventoryNotCalc() {
  const router = useRouter()
  const {query} = router
  console.log(router)
  const { value, loading } = useAsyncM(
    noArgs(() => getLcaResultDetail(query?.id || 'all'), [query]),
    [query]
  );
  const val = useMemo(()=>{
    let baseInfo = {
      loadNumber: '',
      productName: '',
      modelName: '',
      lastUpdatedTime: '',
      productCategory: '',
      desc: '',
      uuid: ''
    }
    if(value){
      baseInfo = {
        loadNumber: value.loadNumber,
        productName: value.product.name,
        modelName: value.model.modelName,
        lastUpdatedTime: value.model.updateTime,
        desc: value.model.description,
        productCategory: value.productCategory.name,
        uuid: value.model.productSystemUuid
      }
    }
    return baseInfo
  },[value])
  const data = [
    {label:'产品批次号',text: val.loadNumber},
    {label:'产品名称',text: val.productName},
    {label:'模型名称',text: val.modelName},
    {label:'类别',text: val.productCategory},
    {label:'描述',text: val.desc},
    {label:'最后更改时间',text: val.lastUpdatedTime},
    {label:'UUID',text: val.uuid}
  ]
  return (
    <ToolsLayout className="text-black">
      {
        loading?<div className="h-[100vh] w-full items-center"><Loading /></div>:
          <div>
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
              <Button onClick={()=>router.push(`/tools/inventoryResult?id=${query.id}`)} className="mt-5 text-lg bg-green-2 w-[26.875rem] text-white rounded-lg  h-14">计算碳结果</Button>
            </div>
          </div>
      }
    </ToolsLayout>
  );
}

export default InventoryNotCalc;
