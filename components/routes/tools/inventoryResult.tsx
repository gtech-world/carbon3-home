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
import {getLcaResultDetail, getLcaResultList, noArgs} from "@lib/http";

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

function SumInfo(){
  const data = [
    {label:'产品批次号',text: '385501102'},
    {label:'产品名称',text: 'PC Transport C'},
    {label:'模型名称',text: 'PC Transport C-Model V1.0'},
    {label:'类别',text: 'PC bottle'},
    {label:'描述',text: ''},
    {label:'最后更改时间',text: '2023-06-05 10:42:04'},
    {label:'UUID',text: '40ff8d3d-d6cb-45d9-ac59-659717dc2d7c'}
  ]
  return(
    <div className="bg-white p-5 rounded-2xl mt-8">
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
  )
}

function GeneralInfo(){
  const [open,setOpen] = useState(true)
  const data = [
    {label: '产品名称',text:'PC Transport C'},
    {label: '分配方法',text:'As defined in processes'},
    {label: '目标数量',text:'1000.0 Item(s) PC Bottle at POS'},
    {label: '影响类别',text:'IPCC GWP 100a'}
  ]
  return(
    <div>
      <Expand text="一般信息" onChange={(v:boolean)=>setOpen(v)} />
      {
        open &&
        <div className="mt-4">
          {
            data.map((v,i)=>{
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
function Result(){
  const [open,setOpen] = useState(true)
  return(
    <div className="mt-4">
      <Expand text="碳足迹结果" onChange={(v:boolean)=>setOpen(v)} />
      {
        open &&
        <div className="text-[1.75rem] font-semibold mt-4">
          IPCC GWP 100a：762.6978803566114	kg CO2 eq
        </div>
      }
    </div>
  )
}
function ContributionTree(){
  const [open,setOpen] = useState(true)
  const { value, loading } = useAsyncM(
    noArgs(() => getLcaResultDetail(4), []),
    []
  );
  useMemo(()=>{
    if(value){
      console.log(JSON.parse(value.lcaResult))
    }
  },[value])
  //https://pre-api.gtech.world/api/product-lca/result/detail/id=1
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
      dataIndex: 'amount',
    },
    {
      title: '结果',
      dataIndex: 'result',
    },
  ]
  const data = [
    {
      contribution: '100%',
      process: 'Pc bottle all',
      amount: '1000.0000 item(s)',
      result: '762.7687kg CO2 eq',
      children:[
        {
          contribution: '100%',
          process: 'Polycarbonate granulate (pc), production mix, at plant - RER',
          amount: '60.00000 kg',
          result: '762.69788 kg CO2 eq',
          children:[
            {
              contribution: '100%',
              process: 'children',
              amount: '60.00000 kg',
              result: '762.69788 kg CO2 eq',
            }
          ]
        },
        {
          contribution: '100%',
          process: 'Polycarbonate granulate (pc), production mix, at plant - RER',
          amount: '60.00000 kg',
          result: '762.69788 kg CO2 eq',
        },
      ]
    },
    {
      contribution: '90%',
      process: 'Pc1 bottle all',
      amount: '1000.0000 item(s)',
      result: '762.7687kg CO2 eq',
      children:[
        {
          contribution: '100%',
          process: 'Polycarbonate2 granulate (pc), production mix, at plant - RER',
          amount: '60.00000 kg',
          result: '762.69788 kg CO2 eq',
        },
        {
          contribution: '100%',
          process: 'Polycarbonate2 granulate (pc), production mix, at plant - RER',
          amount: '60.00000 kg',
          result: '762.69788 kg CO2 eq',
        },
      ]
    },
    {
      contribution: '100%',
      process: '测试',
      amount: '60.00000 kg',
      result: '762.69788 kg CO2 eq',
    },
  ]
  const chartOptions = useMemo(() => {
    const colors = ['#EB505B','#4780C6','#FFCE5D','#3F9F4A','#7B41A0','#757475']
    return {
      grid:{top:20,left:50,right:700},
      // grid:{
      //   left: '3%',
      //   right: '20%',
      //   bottom: '3%',
      //   // containLabel: true
      // },
      xAxis: {
        show: false,
        type: 'category',
      },
      legend: {
        orient: 'vertical',
        // x: 'right',
        right: 0,
        y: 'center',
        // width: 40,
        // height: 6,
        data:[
          '3.289E-7 kg: Electricity grid mix 1kV-60kV, consumption mix, at consumer, AC, 1kV - 60kV - EU - 27',
          '3.289E-8 kg: Electricity grid mix 1kV-60kV, consumption mix, at consumer, AC, 1kV - 60kV - EU - 27',
          '3.289E-9 kg: Electricity grid mix 1kV-60kV, consumption mix, at consumer, AC, 1kV - 60kV - EU - 27',
          '3.289E-10 kg: Electricity grid mix 1kV-60kV, consumption mix, at consumer, AC, 1kV - 60kV - EU - 27'
        ],
        itemHeight: 6,
        itemWidth: 40,
        itemGap: 20,
        textStyle: {
          padding: 6
        }
      },
      yAxis: {
        // type: 'value',
      },
      series: [
        {
          name:'3.289E-8 kg: Electricity grid mix 1kV-60kV, consumption mix, at consumer, AC, 1kV - 60kV - EU - 27',
          stack: '设备',
          type:'bar',
          barWidth: 40,
          data:[128],
        },
        {
          name:'3.289E-7 kg: Electricity grid mix 1kV-60kV, consumption mix, at consumer, AC, 1kV - 60kV - EU - 27',
          type:'bar',
          barWidth: 40,
          stack: '设备',
          data:[0, 27]
        },
        {
          name:'3.289E-9 kg: Electricity grid mix 1kV-60kV, consumption mix, at consumer, AC, 1kV - 60kV - EU - 27',
          type:'bar',
          barWidth: 40,
          stack: '设备',
          data:[0, 0, 7]
        },
        {
          name:'3.289E-10 kg: Electricity grid mix 1kV-60kV, consumption mix, at consumer, AC, 1kV - 60kV - EU - 27',
          type:'bar',
          barWidth: 40,
          stack: '设备',
          data:[0, 0, 0,80]
        }
      ]
    }
  },[])
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


function List(){
  const [open,setOpen] = useState(true)
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
      }
    },
    {
      title:'种类',
      dataIndex:'category'
    },
    {
      title:'数量',
      dataIndex:'amount'
    },
    {
      title:'单位',
      dataIndex:'unit'
    },
  ]
  const data = [
    {
      name:'drinking water',
      category:'abc',
      amount: 100,
      unit: 'wu',
      children:[
        {
          name:'Electricity grid mix 1kV-60kV, consumption mix, at consumer, AC, 1kV - 60kV - EU - 27',
          category:'abc',
          amount: 100,
          unit: 'wu',
        }
      ]
    },
    {name:'drinking water',category:'Drinking water,production mix'},
    {name:'drinking water',category:'Drinking water,production mix'},
  ]
  return(
    <div>
      <div className="mt-4">
        <Expand text="清单列表" onChange={(v:boolean)=>setOpen(v)} />
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

function SumRequire(){
  const [open,setOpen] = useState(true)
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
      }
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
      }
    },
    {
      title:'数量',
      dataIndex:'amount'
    },
    {
      title:'单位',
      dataIndex:'unit'
    },
  ]
  const data = [
    {
      process:'process',
      product:'product',
      amount: 100,
      unit: 'wu',
      children:[
        {
          process:'PC',
          children:[
            {
              process:'process',
              product:'product',
              amount: 100,
              unit: 'wu',
            },
            {
              process:'process',
              product:'product',
              amount: 100,
              unit: 'wu',
            },
            {
              process:'process',
              product:'product',
              amount: 100,
              unit: 'wu',
            }
          ]
        }
      ]
    }
  ]
  return(
    <div className="mt-4">
      <Expand text="总需求" onChange={(v:boolean)=>setOpen(v)} />
      {
        open &&
        <Table
          size="small"
          columns={columns}
          data={data}
          cellClassName={(item:any,cellIndex:number,rowIndex:number)=>(rowIndex % 2=== 0 ? `bg-gray-16 ${cellIndex === 0 && 'rounded-l'} ${cellIndex === (columns.length-1) && 'rounded-r'}`:'')}
          headerStyle={{background:'#fff'}}
        />
      }
    </div>
  )
}

export function InventoryResult() {
  return (
    <ToolsLayout className="text-black text-lg">
      <SumInfo />
      <h3 className="text-2xl font-semibold my-5">碳足迹结果</h3>
      <div className="bg-white p-5 rounded-2xl">
        <GeneralInfo />
        <Result />
        <ContributionTree />
        <IO />
        <List />
        <SumRequire />
      </div>
      <div className="w-full flex justify-center mt-5 mb-10">
        <Button onClick={()=>window.open("", "_blank")} className="mt-5 text-lg bg-green-2 w-[26.875rem] text-white rounded-lg  h-14">导出Excel</Button>
      </div>
    </ToolsLayout>
  );
}

export default InventoryResult;
