import React, { useMemo } from "react";
import {Button} from "@components/common/button";
import SvgTeacher from '@public/teacher.svg'
import {ProductQrcode} from "@components/common/productQrcode";
import Link from "next/link";
import { UrlObject } from "url";
import { HeaderLayout } from "@components/common/headerLayout";
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
    updatedDate: string
    total: any
    btn: any
  }
}

function Card(p: ICard) {
  const {title, updatedDate, total, btn} = p.data
  return (
    <div className="bg-white mr-5 w-[35rem] p-5 rounded-lg mt-5 text-base">
      <h3 className="text-xl font-semibold">{title}</h3>
      <div className="mt-5">
        <div>
          文档摘要 :
          <span className="text-green-2">{total.folder}</span>子文件夹;
          <span className="text-green-2">{total.file}</span>文件;
          <span className="text-green-2">{total.collaborate}</span>用户协作;
          <span className="text-green-2">{total.auth}</span>项活跃开放授权;
          公开非公开混合权限
        </div>
        <div>
          最后更新 : 2023年5月1日
        </div>
      </div>
      {

      }
      <Button className="mt-5 bg-green-2 w-full text-white rounded-lg flex-1 h-[2.865rem]">{btn.text}</Button>
    </div>
  )
}

export function Document() {
  const docData =[
    {
      title: 'PCF-Model Sample [AI09] 协作隐私文档',
      updatedDate: '2023年5月1日',
      total:{
        folder: 4,
        file: 26,
        collaborate: 5,
        auth: 0
      },
      btn: {text: '验证并进入隐私文档',onClick:()=>{}}
    },
    {
      title: 'PCF-低碳车身车壳认证项目 [AI10] 协作隐私文档',
      updatedDate: '2023年5月1日',
      total:{
        folder: 3,
        file: 10,
        collaborate: 3,
        auth: 1
      },
      btn: {text: '验证并进入隐私文档',onClick:()=>{}}
    },
  ]
  return (
    <CarbonLayout className="bg-gray-16 h-full">
      <h3 className="text-lg font-bold">项目文档管理</h3>
      <div className="flex flex-wrap">
        {
          docData.map((v,i)=>{
            return(
              <Card key={`tagData${i}`} data={v} />
            )
          })
        }
      </div>
    </CarbonLayout>
  );
}

export default Document;
