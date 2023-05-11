import React, { useMemo } from "react";
import {Button} from "@components/common/button";
import SvgTeacher from '@public/teacher.svg'
import {ProductQrcode} from "@components/common/productQrcode";
import Link from "next/link";
import { UrlObject } from "url";
import {CarbonLayout} from "@components/common/carbonLayout";

function PartInfo(p: { label: string; text: string }) {
  return (
    <div className="flex flex-col text-base">
      <label className="font-bold">{p.label} :</label>
      <span className="text-gray-6">{p.text}</span>
    </div>
  )
}

interface ICard {
  data: {
    title: string,
    icon: any
    by: string
    id: string
    link: any
    qrcodeDisable: boolean
  }
}

function Card(p: ICard) {
  const {title, icon,qrcodeDisable, by, id, link} = p.data
  return (
    <div className="bg-white mr-5 w-[22.875rem] p-5 rounded-lg mb-5 text-base mo:mr-0">
      <ProductQrcode qrcodeDisable={qrcodeDisable} />
      <div className="flex flex-col mt-5">
        <h3 className="text-xl font-semibold">{title}</h3>
        <span>{by}</span>
        <span>标签ID : {id}</span>
      </div>
      <div className="flex flex-col text-blue-0 underline mt-2.5 font-semibold">
        {
          link.map((v: { href: string; text:string;target:string },i:number)=>{
            return(
              <Link key={`link${i}`} target={v.target} className="mt-2.5" href={v.href}>{v.text}</Link>
            )
          })
        }
      </div>
    </div>
  )
}

export function Tag() {
  const tagData =[
    {
      title: '完成[AT01]系列培训-双碳基础 认证',
      icon: <SvgTeacher className="w-[2.75rem]" />,
      by: '2023年4月30日签发 by AIAG',
      id: '144095402',
      qrcodeDisable: true,
      link:[
        {text:'标签信息',href:''},
        {text:'在区块链浏览器查看',target:'',href:''},
      ]
    },
    {
      title: '完成[AI09]产品碳足迹测算',
      icon: <SvgTeacher className="w-[2.75rem]" />,
      by: '2023年4月30日签发 by AIAG',
      id: '144049913',
      qrcodeDisable: false,
      link:[
        {text:'标签信息',href:'https://aicp.gtech.world/car?vin=1500101202311001'},
        {text:'在区块链浏览器查看',target:'_blank',href:'https://aicp.gtech.world/blockchain?tokenId=4000000'},
      ]
    }
  ]
  return (
    <CarbonLayout className="bg-gray-16 h-full">
      <div className="flex flex-wrap">
        {
          tagData.map((v,i)=>{
            return(
              <Card key={`tagData${i}`} data={v} />
            )
          })
        }
      </div>
    </CarbonLayout>
  );
}

export default Tag;
