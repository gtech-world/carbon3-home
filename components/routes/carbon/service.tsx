import React, {useMemo, useState} from "react";
import {Button} from "@components/common/button";
import SvgTeacher from '@public/teacher.svg'
import SvgTools from '@public/tools.svg'
import {CarbonLayout} from "@components/common/carbonLayout";
import {FaSortDown} from 'react-icons/fa'
import classNames from "classnames";
import {useRouter} from "next/router";
import SvgFootprint from '@public/footprint.svg'
import SvgTalk from '@public/talk.svg'
import SvgEnergy from '@public/energy.svg'
import SvgCTag from '@public/c_tag.svg'

function PartInfo(p:{label:string; text: string}){
  return(
    <div className="flex flex-col text-base">
      <label className="font-bold leading-[1.75rem]">{p.label} :</label>
      <span className="text-gray-6 leading-[1.75rem]">{p.text}</span>
    </div>
  )
}
interface ICard{
  data:any
}
function Card(p:ICard){
  const {title,icon,infos,btn,tools=[]} = p.data
  return(
    <div className="bg-white mr-5 mo:mr-0 box-layout p-5 rounded-lg mt-5 flex flex-col justify-between mo:w-full">
      <div>
        <div className="flex items-center">
          {
            icon
          }
          <span className="text-xl ml-4 font-semibold">{title}</span>
        </div>
        <div className="mt-5">
          {
            infos.map((v: { label: string; text: string; }, i: number)=>{
              return(
                <PartInfo key={`PartInfo${i}`} label={v.label} text={v.text} />
              )
            })
          }
        </div>
      </div>

      <div className="flex flex-col">
        <div>
          {
            !!tools.length && tools.map((v:any,i:number)=>{
              return(
                <div key={`tools${i}`} className="flex items-center cursor-pointer">
                  {v.icon}
                  <span className="text-blue-0 font-semibold ml-2.5 underline">{v.text}</span>
                </div>
              )
            })
          }
        </div>

        <div className="mt-5 flex mo:flex-col">
          {
            btn.map((v: { type: string;text:string;onClick:Function },i:number)=>{
              return(
                v.type === 'primary'?
                  <Button key={`btn${i}`} onClick={()=>v.onClick && v.onClick()} className="ml-5 mo:ml-0 text-lg bg-green-2 text-white rounded-lg flex-1 min-h-[2.865rem] mo:mt-5">{v.text}</Button>
                  :
                  <Button key={`btn${i}`} onClick={()=>v.onClick && v.onClick()} className="bg-green-2/10 text-lg text-green-2 hover:bg-green-2/20 border-2 border-green-2 rounded-lg flex-1 min-h-[2.865rem]">{v.text}</Button>
              )
            })
          }
        </div>

      </div>
    </div>
  )
}

export function Service() {
  const [inProgressOpen,setInProgressOpen] = useState(true)
  const [completedOpen,setCompletedOpen] = useState(true)
  const {push} = useRouter()
  const inProgress =[
    {
      title: <span>[AT04]<span className="text-green-2">[2023030491]</span>系列培训-数字化低碳</span>,
      icon: <SvgTeacher className="w-[3.45rem]" />,
      infos:[
        {label:'培训内容介绍',text:'AT04培训项目为针对双碳主题基础知识的入门培训。培训内容包括全球应对气候问题的现状、碳排放的计量与报告、监管法规与资本市场要求、制造业如何减碳……等等'},
        {label:'培训形式与时长',text:'在线Webinar、现场培训。时长4小时。'},
        {label:'完成培训要求',text:'由用户厂商Carbon Champion人员参与培训，并通过考试。'},
      ],
      btn:[
        {text:'查看详情',onClick:()=>{}},
        {text:'继续课程',type:'primary',onClick:()=>{}},
      ]
    },
    {
      title: <span>[AI08]<span className="text-green-2">[20235017701]</span>产品碳足迹-Sample Model</span>,
      icon: <SvgFootprint className="w-[3.45rem]" />,
      infos:[
        {label:'产品号',text:'Sample Model - 整车类型'},
        {label:'实施依据',text:'ISO 14067, ISO 14040'},
        {label:'实施内容',text:'产品碳足迹模型，产品碳足迹测算'},
      ],
      tools:[
        {
          icon: <SvgTools />,
          text:'PCF数字化工具',
          onClick:()=>{}
        }
      ],
      btn:[
        {text:'查看详情',onClick:()=>{}},
        {text:'进入工具页面',type:'primary',onClick:()=>push('/tools/dashboard')},
      ]
    },
    {
      title: <span>[AC02]<span className="text-green-2">[20234401]</span>咨询服务-设定科学双碳目标</span>,
      icon: <SvgTalk className="w-[3.45rem]" />,
      infos:[
        {label:'服务内容介绍',text:'针对企业应对双碳问题的现状梳理与科学碳目标设定。服务可涉及通用的气候治理架构、应对双碳问题的战略框架、减碳目标、碳中和等，也可为企业参与常见的目标、承诺或倡议活动提供辅导与支持，例如SBTi、RE100等。'},
        {label:'服务供应商',text:'YYY'}
      ],
      btn:[
        {text:'查看详情',onClick:()=>{}},
      ]
    },
    {
      title: <span>[AM01]<span className="text-green-2">[20230029391]</span>绿色能源转型</span>,
      icon: <SvgEnergy className="w-[3.45rem]" />,
      infos:[
        {label:'服务内容',text:'AICP整合全方位的绿色能源转型方案，包括绿色电力接入、工业园区支持、能源管理系统方案等。'},
        {label:'服务供应商',text:'ZZZ'}
      ],
      btn:[
        {text:'查看详情',onClick:()=>{}},
      ]
    }
  ]
  const completed =[
    {
      title: <span>[AI01]<span className="text-green-2">[202303444101]</span>公司碳核查</span>,
      icon: <SvgCTag className="w-[3.45rem]" />,
      infos:[
        {label:'实施内容',text:'范围一碳排放核查，公司组织层级。'},
        {label:'依据标准',text:'ISO 14064:2018'},
        {label:'服务产出',text:'温室气体核查报告、温室气体核查声明。'},
        {label:'AICP标签',text:'基于数字认证产出标签。'},
      ],
      btn:[
        {text:'查看详情',onClick:()=>{}},
      ]
    },
    {
      title: <span>[AI01]<span className="text-green-2">[202303443042]</span>公司碳核查</span>,
      icon: <SvgCTag className="w-[3.45rem]" />,
      infos:[
        {label:'实施内容',text:'范围二碳排放核查，公司组织层级。'},
        {label:'依据标准',text:'ISO 14064:2018'},
        {label:'服务产出',text:'温室气体核查报告、温室气体核查声明。'},
        {label:'AICP标签',text:'基于数字认证产出标签。'},
      ],
      btn:[
        {text:'查看详情',onClick:()=>{}},
      ]
    }
  ]
  return (
    <CarbonLayout className="bg-gray-16">
      <div className="flex items-start flex-col">
        <div className="flex flex-wrap items-center cursor-pointer" onClick={()=>setInProgressOpen(!inProgressOpen)}>
          <span className="text-lg font-bold">进行中/实施中 (4)</span>
          <FaSortDown className={classNames('ml-2 mt-[-0.45rem] text-2xl',inProgressOpen && 'rotate-180 mb-[-1.2rem]')} />
        </div>
        {
          inProgressOpen &&
          <div className="flex flex-wrap mr-[-20px] mo:flex-col  mo:mr-0">
            {
              inProgress.map((v,i)=>{
                return(
                  <Card key={`inProgress${i}`} data={v} />
                )
              })
            }
          </div>
        }

      </div>
      <div className="mt-5 flex items-start flex-col flex-1">
        <div className="flex flex-wrap items-center cursor-pointer" onClick={()=>setCompletedOpen(!completedOpen)}>
          <span className="text-lg font-bold">已完成 (2)</span>
          <FaSortDown className={classNames('ml-2 mt-[-0.45rem] text-2xl',completedOpen && 'rotate-180 mb-[-1.2rem]')} />
        </div>
        {
          completedOpen &&
            <div className="w-full">
              <div className="flex flex-wrap flex-1 mr-[-20px] mo:flex-col  mo:mr-0">
                {
                  completed.map((v,i)=>{
                    return(
                      <Card key={`inProgress${i}`} data={v} />
                    )
                  })
                }
              </div>
            </div>
        }

      </div>
    </CarbonLayout>
  );
}

export default Service;
