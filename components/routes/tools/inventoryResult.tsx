import {ToolsLayout} from "@components/common/toolsLayout";
import React, {useEffect, useMemo, useState} from "react";
import {Button} from "@components/common/button";
import {BsCaretUpFill} from 'react-icons/bs'
import classNames from "classnames";
import Chart from "@components/common/Chart";
import {Table} from "@components/common/table";
import {GrDocumentConfig} from 'react-icons/gr'
import {FiSettings} from 'react-icons/fi'
import {RiLeafLine} from 'react-icons/ri'
import {FaFolder} from 'react-icons/fa'
import {CgRuler} from 'react-icons/cg'
import {useAsyncM} from "@lib/hooks/useAsyncM";
import {getLcaResultDetail, noArgs} from "@lib/http";
import {parseRefJson} from "@lib/utils";
import {result} from "lodash";
import {useRouter} from "next/router";

function Expand(p: {text: string; onChange:Function}){
  const [open,setOpen] = useState(true)
  const { text,onChange } = p
  useMemo(()=>{
    onChange && onChange(open)
  },[open])
  return(
    <div className="font-bold inline-block" onClick={()=>setOpen(!open)}>
      <div className="flex items-center cursor-pointer">
        <span>{text}</span>
        <BsCaretUpFill height="7px" className={classNames('ml-1',!open && 'rotate-180')} />
      </div>
    </div>
  )
}

function SumInfo(p:{data:any}){
  const {data} = p
  const list = [
    {label:'产品批次号',text: data.loadNumber},
    {label:'产品名称',text: data.productName},
    {label:'模型名称',text: data.modelName},
    {label:'类别',text: data.productCategory},
    {label:'描述',text: ''},
    {label:'最后更改时间',text: data.lastUpdatedTime},
    {label:'UUID',text: data.uuid}
  ]
  return(
    <div className="bg-white p-5 rounded-2xl mt-8">
      {
        list.map((v:any,i:number)=>{
          return(
            <div className="flex" key={`data-${i}`}>
              <label className="font-medium">{v.label} :</label>
              <span className="ml-1 text-gray-6">{v.text}</span>
            </div>
          )
        })
      }
    </div>
  )
}

function GeneralInfo(p:{data:any}){
  const [open,setOpen] = useState(true)
  const {data} = p
  const list = [
    {label: '产品名称',text: data.productSystemName},
    {label: '分配方法',text: 'As defined in processes'},
    {label: '目标数量',text: data.targetAmount},
    {label: '影响评价方法',text:data.methodName}
  ]
  return(
    <div>
      <Expand text="一般信息" onChange={(v:boolean)=>setOpen(v)} />
      {
        open &&
        <div className="mt-4">
          {
            list.map((v:any,i:number)=>{
              return(
                <div className="flex" key={`data-${i}`}>
                  <label className="">{v.label} :</label>
                  <span className="ml-1 text-gray-6">{v.text}</span>
                </div>
              )
            })
          }
        </div>
      }
    </div>
  )
}
function Result(p:{data:any}){
  const [open,setOpen] = useState(true)
  const {data} = p
  return(
    <div className="mt-4">
      <Expand text="碳足迹结果" onChange={(v:boolean)=>setOpen(v)} />
      {
        open &&
        <div className="text-[1.75rem] font-semibold mt-4">
          {data}
        </div>
      }
    </div>
  )
}
function ContributionTree(p:{data:any}){
  const [open,setOpen] = useState(true)
  const {data} = p
  console.log('data')
  console.log(data)
  const columns = [
    {
      title: '贡献',
      dataIndex: 'contribution',
      width: '100px',
    },
    {
      title: '过程',
      dataIndex: 'process',
      render: (text:string)=>{
        return(
          <div className="flex items-center">
            <GrDocumentConfig className="svg-purple"/>
            <span className="ml-1">{text}</span>
          </div>
        )
      }
    },
    {
      title: '所需数量',
      dataIndex: 'requiredAmount',
    },
    {
      title: '结果',
      dataIndex: 'result',
    },
  ]
  const chartOptions = useMemo(() => {

    // if(!data || !data.length) return {}
    const arr = data[0]?.children || []
    const colors = ['#EB505B','#4780C6','#FFCE5D','#3F9F4A','#7B41A0','#757475']
    const legendData:any = []
    const seriesData:any = []
    arr.map((v:any,i:number)=>{
      if(i<5){
        const legend = v.requiredAmount+';'+v.process
        legendData.push(legend)
        const data = []
        for(let j=0;j<=i; j++){
          if(j<i) data.push(0)
          else {
            data.push(v.result)
          }
        }
        seriesData.push(
          {
            name: legend,
            color: colors[i],
            type:'bar',
            barWidth: 40,
            stack: '设备',
            data: data
          },
        )
      }
    })
    return {
      grid:{top:20,left:50,right:700},
      xAxis: {
        // show: false,
        type: 'category',
        axisLine:{
          show:true,
          lineStyle: {
            color: '#999999',    // 坐标轴线线的颜色
            // width: '5',    // 坐标轴线线宽
            // type: 'solid',     // 坐标轴线线的类型（'solid'，实线类型；'dashed'，虚线类型；'dotted',点状类型）
          },
        },
        axisTick: {
          show: false,    // 是否显示坐标轴刻度
        },
        axisLabel:{
          show:false
        }
      },
      legend: {
        orient: 'vertical',
        right: 0,
        y: 'center',
        data:legendData,
        itemHeight: 6,
        itemWidth: 40,
        itemGap: 20,
        textStyle: {
          padding: 6
        }
      },
      yAxis: {
        type: 'value',
        // type: 'category',
        axisLine:{
          show:true,
          lineStyle: {
            color: '#999999',    // 坐标轴线线的颜色
            // width: '5',    // 坐标轴线线宽
            // type: 'solid',     // 坐标轴线线的类型（'solid'，实线类型；'dashed'，虚线类型；'dotted',点状类型）
          },
        },
        splitLine:{
          show:false
        },
        axisTick: {
          show: true,    // 是否显示坐标轴刻度
          // inside: true,     // 坐标轴刻度是否朝内，默认朝外
          length: 5,    // 坐标轴刻度的长度
          // lineStyle: {
          //   color: '#9999',     // 刻度线的颜色
          //   type: 'solid',     // 坐标轴线线的类型（'solid'，实线类型；'dashed'，虚线类型；'dotted',点状类型）
          // },
        },
      },
      series: seriesData
    }
  },[data])
  return(
    <div className="mt-4">
      <Expand text="贡献树" onChange={(v:boolean)=>setOpen(v)} />
      {
        open &&
        <div>
          <div className="mt-4">
            <Table
              size="small"
              columns={columns}
              data={data}
              cellClassName={(item:any,cellIndex:number,rowIndex:number)=>(rowIndex % 2=== 0 ? `bg-gray-16 ${cellIndex === 0 && 'rounded-l-md'} ${cellIndex === (columns.length-1) && 'rounded-r-md'}`:'')}
              headerStyle={{background:'#fff'}}
            />
          </div>
          <div className="mt-4">
            <h4>对影响类别结果的前5个贡献 - 概述</h4>
            <Chart option={chartOptions} />
          </div>
        </div>
      }
    </div>
  )
}

function IO(){
  const [open,setOpen] = useState(true)
  const columns = [
    {
      title:'所属Flow',
      dataIndex:'flow',
      render: (text:string)=>{
        return(
          <div className="flex items-center">
            <FiSettings stroke="#0084FF" className="svg-blue text-sm"/>
            <span className="ml-1">{text}</span>
          </div>
        )
      }
    },
    {
      title:'种类',
      dataIndex:'gategory'
    },
    {
      title:'数量',
      dataIndex:' amount'
    },
    {
      title:'单位',
      dataIndex:'unit',
      render: (text: string)=>{
        return(
          <div className="flex items-center">
            <CgRuler className="text-sm"/>
            <span className="ml-1">{text}</span>
          </div>
        )
      }
    },
    {
      title:'成本/收益',
      dataIndex:'costs'
    },
    {
      title:'不确定性',
      dataIndex:'uncertainty'
    },
    {
      title:'避免浪费',
      dataIndex:'waste'
    },
    {
      title:'提供者',
      dataIndex:'provider',
      render: (text:string)=>{
        return(
          <div className="flex items-center">
            <GrDocumentConfig className="svg-purple"/>
            <span className="ml-1">{text}</span>
          </div>
        )
      }
    },
    {
      title:'数据质量',
      dataIndex:'quality'
    },
    {
      title:'位置',
      dataIndex:'location'
    },
    {
      title:'描述',
      dataIndex:'description'
    },
  ]
  const data = [
    {flow:'drinking water',provider:'Drinking water,production mix',unit: 'kg'},
    {flow:'drinking water',provider:'Drinking water,production mix',unit: 'kg'},
    {flow:'drinking water',provider:'Drinking water,production mix',unit: 'kg'},
  ]
  return(
    <div>
      <div className="mt-4">
        <Expand text="输入/输出" onChange={(v:boolean)=>setOpen(v)} />
        {
          open &&
            <div>
              <h4 className="mt-4 mb-3">输入</h4>
              <Table
                size="small"
                columns={columns}
                data={data}
                cellClassName={(item:any,cellIndex:number,rowIndex:number)=>(rowIndex % 2=== 0 ? `bg-gray-16 ${cellIndex === 0 && 'rounded-l'} ${cellIndex === (columns.length-1) && 'rounded-r'}`:'')}
                headerStyle={{background:'#fff'}}
              />
              <h4 className="mt-4 mb-3">输出</h4>
              <Table
                size="small"
                columns={columns}
                data={data}
                cellClassName={(item:any,cellIndex:number,rowIndex:number)=>(rowIndex % 2=== 0 ? `bg-gray-16 ${cellIndex === 0 && 'rounded-l'} ${cellIndex === (columns.length-1) && 'rounded-r'}`:'')}
                headerStyle={{background:'#fff'}}
              />
            </div>
        }
      </div>
    </div>
  )
}


function List(p:{data:any}){
  const [open,setOpen] = useState(true)
  const {data} = p
  const columns = [
    {
      title:'名称',
      dataIndex:'name',
      render: (text:string)=>{
        return(
          <div className="flex items-center">
            <RiLeafLine fill="#29953A" className="text-sm"/>
            <span className="ml-1">{text}</span>
          </div>
        )
      },
      width: '40%'
    },
    {
      title:'种类',
      dataIndex:'category',
      width: '30%'
    },
    {
      title:'数量',
      dataIndex:'amount',
      width: '20%'
    },
    {
      title:'单位',
      dataIndex:'unit',
      width: '10%'
    },
  ]
  return(
    <div>
      <div className="mt-4">
        <Expand text="清单列表" onChange={(v:boolean)=>setOpen(v)} />
        {
          open &&
          <div>
            <h4 className="mt-4 mb-3">输入</h4>
            <ul className="flex mb-1">
              {
                columns.map((v:any,i:number)=>{
                  return(
                    <li key={`columns${i}`} className="px-3 text-sm font-bold" style={{width: v.width}}>{v.title}</li>
                  )
                })
              }
            </ul>
            <div className="max-h-[15rem] overflow-y-auto">
              <Table
                size="small"
                hiddenHeader={true}
                columns={columns}
                data={data.inputData}
                cellClassName={(item:any,cellIndex:number,rowIndex:number)=>(rowIndex % 2=== 0 ? `bg-gray-16 ${cellIndex === 0 && 'rounded-l'} ${cellIndex === (columns.length-1) && 'rounded-r'}`:'')}
                headerStyle={{background:'#fff'}}
                maxHeight="300px"
              />
            </div>


            <h4 className="mt-4 mb-3">输出</h4>
            <div className="max-h-[20rem] overflow-y-auto">
              <ul className="flex mb-1">
                {
                  columns.map((v:any,i:number)=>{
                    return(
                      <li key={`columns${i}`} className="px-3 text-sm font-bold" style={{width: v.width}}>{v.title}</li>
                    )
                  })
                }
              </ul>
              <div className="max-h-[15rem] overflow-y-auto">
                <Table
                  size="small"
                  hiddenHeader={true}
                  columns={columns}
                  data={data.outputData}
                  cellClassName={(item:any,cellIndex:number,rowIndex:number)=>(rowIndex % 2=== 0 ? `bg-gray-16 ${cellIndex === 0 && 'rounded-l'} ${cellIndex === (columns.length-1) && 'rounded-r'}`:'')}
                  headerStyle={{background:'#fff'}}
                />
              </div>

            </div>
          </div>
        }
      </div>
    </div>
  )
}

function SumRequire(p:{data:any}){
  const [open,setOpen] = useState(true)
  const {data} = p
  const columns = [
    {
      title:'过程',
      dataIndex:'process',
      render: (text:string,record: any)=>{
        return(
          <div className="flex items-center">
            {
              record.children ? <FaFolder fill="#9C27B0" className="text-sm"/> : <GrDocumentConfig className="svg-purple"/>
            }
            <span className="ml-1">{text}</span>
          </div>
        )
      },
      width: '40%'
    },
    {
      title:'产品',
      dataIndex:'product',
      render: (text:string)=>{
        return(
          !!text?<div className="flex items-center">
            <FiSettings stroke="#0084FF" className="svg-blue text-sm"/>
            <span className="ml-1">{text}</span>
          </div>:''
        )
      },
      width: '30%'
    },
    {
      title:'数量',
      dataIndex:'amount',
      width: '20%'
    },
    {
      title:'单位',
      dataIndex:'unit',
      width: '10%'
    },
  ]
  // const data = [
  //   {
  //     process:'process',
  //     product:'product',
  //     amount: 100,
  //     unit: 'wu',
  //     children:[
  //       {
  //         process:'PC',
  //         children:[
  //           {
  //             process:'process',
  //             product:'product',
  //             amount: 100,
  //             unit: 'wu',
  //           },
  //           {
  //             process:'process',
  //             product:'product',
  //             amount: 100,
  //             unit: 'wu',
  //           },
  //           {
  //             process:'process',
  //             product:'product',
  //             amount: 100,
  //             unit: 'wu',
  //           }
  //         ]
  //       }
  //     ]
  //   }
  // ]
  return(
    <div className="mt-4">
      <Expand text="总需求" onChange={(v:boolean)=>setOpen(v)} />
      {
        open &&
          <div>
            <ul className="flex mb-1">
              {
                columns.map((v:any,i:number)=>{
                  return(
                    <li key={`columns${i}`} className="px-3 text-sm font-bold" style={{width: v.width}}>{v.title}</li>
                  )
                })
              }
            </ul>
            <div className="max-h-[15rem] overflow-y-auto">
              <Table
                hiddenHeader={true}
                size="small"
                columns={columns}
                data={data}
                cellClassName={(item:any,cellIndex:number,rowIndex:number)=>(rowIndex % 2=== 0 ? `bg-gray-16 ${cellIndex === 0 && 'rounded-l'} ${cellIndex === (columns.length-1) && 'rounded-r'}`:'')}
                headerStyle={{background:'#fff'}}
              />
            </div>
          </div>
      }
    </div>
  )
}

export function InventoryResult() {
  const {query} = useRouter()
  const { value, loading } = useAsyncM(
    noArgs(() => getLcaResultDetail(query.id), []),
    []
  );
  const calcContribution = (val:number,total:number)=>{
    if(val === 0 || total === 0){
      return 0
    }
    if(total<0 && val>0){
      return -(val/total)
    }else {
      return val/total
    }
  }
  const {baseInfo,generalInfo,carbonResult,contributeTreeData,listData,totalRequire}:any = useMemo(()=>{
    let contributeTreeData:any = []
    let generalInfo:any = []
    let totalRequire:any = []
    let baseInfo = {
      loadNumber: '',
      productName: '',
      modelName: '',
      lastUpdatedTime: '',
      productCategory: '',
      desc: '',
      uuid: ''
    }
    let carbonResult:any = ''
    let listData:any = {
      inputData: [],
      outputData: []
    }
    if(value){
      baseInfo = {
        loadNumber: value.loadNumber,
        productName: value.product.name,
        modelName: value.model.modelName,
        lastUpdatedTime: value.model.updateTime,
        productCategory: value.productCategory.name,
        desc: value.model.description,
        uuid: value.model.productSystemUuid
      }
      const val = parseRefJson(JSON.parse(value.lcaResult))
      console.log(val)
      generalInfo = {
        productSystemName: val.extra?.productSystemName,
        methodName: val.extra?.methodName,
        targetAmount: val.extra?.targetAmount,
      }
      const total = val.treeNode?.result
      contributeTreeData = [{
        contribution: ((calcContribution(total,total)*100).toFixed(2))+'%',
        process: val.treeNode?.provider.name,
        requiredAmount : val.treeNode?.requiredAmount,
        result: <span>{val.treeNode?.result}{val.totalImpacts[0].impact.referenceUnit==='m3'?<span>m<sup>3</sup></span>:val.totalImpacts[0].impact.referenceUnit}</span>,
      }]

      carbonResult = <span>{(total || 0)}{val.totalImpacts[0].impact.referenceUnit==='m3'?<span>m<sup>3</sup></span>:val.totalImpacts[0].impact.referenceUnit}</span>
      const handleTree = (items:any)=>{
        items && items.map((v:any)=>{
          v.contribution = ((calcContribution(v.result,total)*100).toFixed(2))+'%'
          v.process = v.provider.name
          v.result = v.result +''+val.totalImpacts[0].impact.referenceUnit
          if(v.children && v.children.length>0){
            handleTree(v.children)
          }
        })
      }
      handleTree(val.treeNode?.children.sort((a:any,b:any)=>a.result-b.result))
      contributeTreeData[0].children = val.treeNode?.children

      // 处理清单列表的数据
      val.totalFlows.map((v:any)=>{
        let item = {
          name: v.flow.name,
          category: v.flow.flowType,
          amount: v.value,
          unit: ''
        }
        if(v.isInput){
          listData.inputData.push(item)
        }else {
          listData.outputData.push(item)
        }
      })
      val.totalRequirements.map((v:any)=>{
        totalRequire.push({
          process: v.provider.name,
          product: v.flow.name,
          amount: v.value,
          unit: ''
        })
      })
    }

    return {baseInfo,generalInfo,carbonResult,contributeTreeData,listData,totalRequire}
  },[value])
  return (
    <ToolsLayout className="text-black text-lg">
      <SumInfo data={baseInfo} />
      <h3 className="text-2xl font-semibold my-5">碳足迹结果</h3>
      <div className="bg-white p-5 rounded-2xl">
        <GeneralInfo data={generalInfo}/>
        <Result data={carbonResult}/>
        <ContributionTree data={contributeTreeData}/>
        {/*<IO />*/}
        <List data={listData}/>
        <SumRequire data={totalRequire} />
      </div>
      <div className="w-full flex justify-center mt-5 mb-10">
        <Button onClick={()=>window.open("", "_blank")} className="mt-5 text-lg bg-green-2 w-[26.875rem] text-white rounded-lg  h-14">导出Excel</Button>
      </div>
    </ToolsLayout>
  );
}

export default InventoryResult;