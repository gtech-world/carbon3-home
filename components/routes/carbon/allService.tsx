import React, {useMemo, useState} from "react";
import {Button} from "@components/common/button";
import SvgTeacher from '@public/teacher.svg'
import SvgTalk from '@public/talk.svg'
import SvgCTag from '@public/c_tag.svg'
import SvgFootprint from '@public/footprint.svg'
import SvgCEstimate from '@public/c_estimate.svg'
import SvgCNeutralization from '@public/c_neutralization.svg'
import SvgEnergy from '@public/energy.svg'
import SvgCAssets from '@public/c_assets.svg'
import {CarbonLayout} from "@components/common/carbonLayout";
import {FaSortDown} from "react-icons/fa";
import classNames from "classnames";
import {useRouter} from "next/router";

function PartInfo(p:{label:string; text: string}){
  return(
    <div className="flex flex-col text-base">
      <label className="font-bold leading-[1.75rem]">{p.label} :</label>
      <span className="text-gray-6 leading-[1.75rem]">{p.text}</span>
    </div>
  )
}
interface ICard{
  data:{
    title: string,
    icon: any
    infos: any
    btn: any
  }
}
function Card(p:ICard){
  const {title,icon,infos,btn} = p.data
  return(
    <div className="bg-white mr-5 box-layout p-5 rounded-lg mt-5 flex flex-col justify-between">
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
      <div className="mt-5 flex">
        {
          btn.map((v: { type: string;text:string;onClick:Function },i:number)=>{
            return(
              v.type === 'primary'?
                <Button key={`btn${i}`} onClick={()=>v.onClick && v.onClick()} className="ml-5 text-lg bg-green-2 text-white rounded-lg flex-1 h-[2.865rem]">{v.text}</Button>
                :
                <Button key={`btn${i}`} onClick={()=>v.onClick && v.onClick()} className="bg-green-2/10 text-lg hover:bg-green-2/20 text-green-2 border-2 border-green-2 rounded-lg flex-1 h-[2.865rem]">{v.text}</Button>
            )
          })
        }
      </div>
    </div>
  )
}

export function AllService() {
  const [trainOpen,setTrainOpen] = useState(true)
  const [implementOpen,setImplementOpen] = useState(true)
  const [marketOpen,setMarketOpen] = useState(true)
  const {push} = useRouter()
  const train =[
    {
      title: '[AT01]系列培训-了解双碳基础A',
      icon: <SvgTeacher className="w-[3.45rem]" />,
      infos:[
        {label:'培训内容介绍',text:'AT01培训项目为针对双碳主题基础知识的入门培训。培训内容包括全球应对气候问题的现状、碳排放的计量与报告、监管法规与资本市场要求、制造业如何减碳……等等'},
        {label:'培训形式与时长',text:'在线Webinar、现场培训。时长4小时。'},
        {label:'完成培训要求',text:'由用户厂商Carbon Champion人员参与培训，并通过考试。'},
      ],
      btn:[
        {text:'了解详情',onClick:()=>{}},
        {text:'参与培训',type:'primary',onClick:()=>{}},
      ]
    },
    {
      title: '[AT04]系列培训-数字化低碳',
      icon: <SvgTeacher className="w-[3.45rem]" />,
      infos:[
        {label:'培训内容介绍',text:'AT04培训项目为针对数字化低碳主题基础知识的入门培训。培训内容包括双碳数字化现状、数字化工具、可追溯性要求、应对双碳数字化规划等。'},
        {label:'培训形式与时长',text:'在线Webinar、现场培训。时长5小时。'},
        {label:'完成培训要求',text:'由用户厂商Carbon Champion与Digital Champion人员参与培训，并通过考试。'},
      ],
      btn:[
        {text:'了解详情',onClick:()=>{}},
        {text:'参与培训',type:'primary',onClick:()=>{}},
      ]
    },
    {
      title: '[AC02]咨询服务-设定科学双碳目标',
      icon: <SvgTalk className="w-[3.45rem]" />,
      infos:[
        {label:'服务内容介绍',text:'针对企业应对双碳问题的现状梳理与科学碳目标设定。服务可涉及通用的气候治理架构、应对双碳问题的战略框架、减碳目标、碳中和等，也可为企业参与常见的目标、承诺或倡议活动提供辅导与支持，例如SBTi、RE100等。'},
        {label:'服务形式',text:'咨询、评估分析、培训等。'}
      ],
      btn:[
        {text:'了解详情',onClick:()=>{}},
      ]
    },
    {
      title: '[AC03]咨询服务-其他双碳/低碳发展主题',
      icon: <SvgTalk className="w-[3.45rem]" />,
      infos:[
        {label:'服务内容介绍',text:'针对汽车行业各类企业可能需要的双碳/低碳发展主题提供的咨询服务。包括：企业碳减排方案、ISCC国际可持续与碳认证、CDP/GRI碳披露、能源管理体系、ESG信息披露与核查等。'},
        {label:'服务形式',text:'咨询、评估分析、培训、认证等。'}
      ],
      btn:[
        {text:'了解详情',onClick:()=>{}},
      ]
    }
  ]
  const implement =[
    {
      title: '[AI01]公司碳核查',
      icon: <SvgCTag className="w-[3.45rem]" />,
      infos:[
        {label:'实施内容',text:'包含范围一、范围二、范围三的公司组织层级碳排放核查。'},
        {label:'依据标准',text:'ISO 14064-1:2018'},
        {label:'服务产出',text:'温室气体核查报告、温室气体核查声明。'},
        {label:'AICP标签',text:'基于数字认证产出完成核查标签。'},
      ],
      btn:[
        {text:'了解详情',onClick:()=>{}},
        {text:'发起碳核查',type:'primary',onClick:()=>{}},
      ]
    },
    {
      title: '[AI02]产品碳足迹',
      icon: <SvgFootprint className="w-[3.45rem]" />,
      infos:[
        {label:'实施内容',text:'车企碳足迹清单、产品碳足迹模型(依据PCR规则定义固化模型)、产品碳足迹测算等。'},
        {label:'依据标准',text:'ISO 14067:2018'},
        {label:'服务产出',text:'碳足迹盘查报告、产品碳足迹证书'},
        {label:'AICP标签',text:'基于数字认证产出产品碳足迹标签。'},
      ],
      btn:[
        {text:'了解详情',onClick:()=>{}},
        {text:'发起碳足迹测算',type:'primary',onClick:()=>{}},
      ]
    },
    {
      title: '[AI03]碳减排量测算与评估',
      icon: <SvgCEstimate className="w-[3.45rem]" />,
      infos:[
        {label:'实施内容',text:'实施产品层级、项目层级、技术层级等碳减排的减排量测算。'},
        {label:'依据标准',text:'ISO 14064-1:2018, ISO 14064-2:2019等'},
        {label:'服务产出',text:'温室气体减排评估报告、减碳证书等'},
        {label:'AICP标签',text:'基于数字认证产出减碳标签。'},
      ],
      btn:[
        {text:'了解详情',onClick:()=>{}},
      ]
    },
    {
      title: '[AI04]碳中和',
      icon: <SvgCNeutralization className="w-[3.45rem]" />,
      infos:[
        {label:'实施内容',text:'碳中和测算工具、碳中和路径与目标评估等。'},
        {label:'依据标准',text:'PAS 2060, ISO 14068'},
        {label:'服务产出',text:'碳中和评估报告、碳中和证书。'},
        {label:'AICP标签',text:'基于数字认证产出碳中和标签或阶段成就标签。'},
      ],
      btn:[
        {text:'了解详情',onClick:()=>{}},
      ]
    }
  ]
  //：
  //
  // ：
  const market =[
    {
      title: '[AM01]绿色能源转型',
      icon: <SvgEnergy className="w-[3.45rem]" />,
      infos:[
        {label:'服务内容',text:'AICP整合全方位的绿色能源转型方案，包括绿色电力接入、工业园区支持、能源管理系统方案等。'},
        {label:'服务形式',text:'咨询服务、绿色能源转型方案以及资源对接。'},
      ],
      btn:[
        {text:'了解详情',onClick:()=>{}},
      ]
    },
    {
      title: '[AM05]碳资产开发',
      icon: <SvgCAssets className="w-[3.45rem]" />,
      infos:[
        {label:'服务内容',text:'基于减碳活动产生的碳信用(Carbon Credit)资产的开发管理。服务可包含：前期咨询评估、开发管理、市场资源。'},
        {label:'服务形式',text:'咨询服务、评估、开发管理、资源对接等。'},
      ],
      btn:[
        {text:'了解详情',onClick:()=>{}},
      ]
    },
    //：
    //
    // ：
    {
      title: '[AM06]自愿碳市场交易服务',
      icon: <SvgCAssets className="w-[3.45rem]" />,
      infos:[
        {label:'服务内容',text:'帮助用户在自愿碳市场购买和交易碳信用类资产，并完成碳抵销(Carbon Offsetting)活动。'},
        {label:'服务形式',text:'咨询服务、市场资源、评估、认证。'},
      ],
      btn:[
        {text:'了解详情',onClick:()=>{}},
      ]
    }
  ]
  return (
    <CarbonLayout className="bg-gray-16">
      <div className="flex items-start flex-col">
        <div className="flex flex-wrap items-center cursor-pointer" onClick={()=>setTrainOpen(!trainOpen)}>
          <span className="text-lg font-bold">类别-培训与咨询 (4)</span>
          <FaSortDown className={classNames('ml-2 mt-[-0.45rem] text-2xl',trainOpen && 'rotate-180 mb-[-1.2rem]')} />
        </div>
        {
          trainOpen &&
          <div className="flex flex-wrap mr-[-20px]">
            {
              train.map((v,i)=>{
                return(
                  <Card key={`inProgress${i}`} data={v} />
                )
              })
            }
          </div>
        }

      </div>
      <div className="mt-5 flex items-start flex-col">
        <div className="flex flex-wrap items-center cursor-pointer" onClick={()=>setImplementOpen(!implementOpen)}>
          <span className="text-lg font-bold">类别-双碳实施 (4)</span>
          <FaSortDown className={classNames('ml-2 mt-[-0.45rem] text-2xl',implementOpen && 'rotate-180 mb-[-1.2rem]')} />
        </div>
        {
          implementOpen &&
          <div className="flex flex-wrap mr-[-20px]">
            {
              implement.map((v,i)=>{
                return(
                  <Card key={`implement${i}`} data={v} />
                )
              })
            }
          </div>
        }

      </div>
      <div className="mt-5 flex items-start flex-col">
        <div className="flex flex-wrap items-center cursor-pointer" onClick={()=>setMarketOpen(!marketOpen)}>
          <span className="text-lg font-bold">类别-市场化支持 (3)</span>
          <FaSortDown className={classNames('ml-2 mt-[-0.45rem] text-2xl',marketOpen && 'rotate-180 mb-[-1.2rem]')} />
        </div>
        {
          marketOpen &&
          <div className="flex flex-wrap mr-[-20px]">
            {
              market.map((v,i)=>{
                return(
                  <Card key={`market${i}`} data={v} />
                )
              })
            }
          </div>
        }

      </div>
    </CarbonLayout>
  );
}

export default AllService;
