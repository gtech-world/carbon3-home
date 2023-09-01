import { ToolsLayout } from "@components/common/toolsLayout";
import React from "react";
import classNames from "classnames";

function ToolsContent(item: any) {
  const { data: v, i } = item;
  return (
    <li className={classNames("bg-white  rounded-xl w-full p-5 mr-5 flex flex-col justify-between mt-5 ", {})}>
      <div className="">
        <div className="flex items-center h-20 md:m-5">
          <img width="80" height="90" className="mr-5" src={`/${v.icon}`} alt="" />
          <div className=" font-semibold lg:text-[20px] md:text-[18px]">
            <div className=""> {i !== 3 && `\u201C${v.as}\u201D`}</div>
            <h4>{v.title}</h4>
          </div>
        </div>
        <p className="mt-[40px] text-[#333333] leading-[21px] font-normal lg:text-[18px] md:text-[16px]">{v.text}</p>
        <div className="mt-10 leading-[21px]   md:text-[16px] md:text-lg lg:text-[18px] ">
          <h5 className="font-semibold">
            {v.as && `\u201C${v.as}\u201D`} {v.secondText}
          </h5>
          {v.list?.map((child: any, childIndex: any) => {
            return (
              <p key={`list${childIndex}`} className="font-normal text-gray-3">
                {childIndex + 1}、{child}
              </p>
            );
          })}
        </div>
      </div>
      <a
        href={v.link}
        className="flex items-center justify-center w-full h-[50px] p-4 mt-5 ml-auto text-lg text-white rounded-lg shrink-0 bg-green-2 ">
        进入
      </a>
    </li>
  );
}

export function Tools() {
  const data = [
    {
      icon: "alca_icon.svg",
      as: "A-LCA",
      secondText: "工具提供以下功能 :",
      title: "产品生命周期评价工具",
      text: "产品生命周期评价工具“A-LCA”是专门为汽车行业定制的产品生命周期分析与建模工具，帮助用户评估汽车供应链的产品与服务在其生命周期内对环境的影响，为计算产品碳足迹和其他环境声明提供基础。",
      list: ["LCA参考流程数据库、LCIA方法数据库", "建立产品生命周期评价模型", "进行环境影响的分析和评估"],
      link: "/tools/lca",
    },
    {
      icon: "amodel_icon.svg",
      as: "A-Model",
      secondText: "工具提供以下功能 :",
      title: "产品碳足迹模型管理工具",
      text: "碳足迹模型是一个结构化的电子文档，用于帮助汽车供应链的企业计算和跟踪其产品的碳足迹，这些模型通常包含用于收集和计算排放数据的流程、公式、参数和指导说明。",
      list: ["可信存储用户建立的模型", "变更与版本管理", "对模型进行自动化验证", "查看和管理实景数据输入项目"],
      link: "/tools/model",
    },
    {
      icon: "ainventory_icon.svg",
      as: "A-Inventory",
      secondText: "工具提供以下功能 :",
      title: "产品碳足迹实景清单工具",
      text: "碳足迹清单是一个记录和追踪碳排放源的清单，它一般基于事先设立的碳足迹模型以及实际生产过程中获取的实景数据进行计算得到。“A-Inventory”帮助用户获取面向具体产品批次及其真实生产信息的碳足迹结果。",
      list: ["管理实景数据输入项", "基于模型和输入项计算碳足迹结果", "可信隐私计算过程的自动化验证"],
      link: "/tools/inventory",
    },
    {
      icon: "verified_icon.svg",
      secondText: "通过验证管理模块 :",
      title: "验证管理",
      text: "验证管理模块用于帮助用户建立和维护碳足迹结果的第三方验证记录，确保相关行为留痕可查。",
      list: [
        "用户可发起建立验证项，指定需要提交第三方验证的碳足迹结果",
        "用户可添加碳足迹结果相关的所有报告、材料、文档等",
        "经授权的第三方验证人可在完成相关核查、验证工作后提交验证信息",
      ],
      link: "/tools/verificationManagement",
    },
  ];

  return (
    <ToolsLayout canBack={true} className="text-black" isNew>
      <h3 className=" text-[20px] leading-6 font-semibold mo:text-center">AICP产品碳足迹工具集</h3>
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data.map((v, i) => {
          return <ToolsContent key={`inProgress${i}`} data={v} i={i} />;
        })}
      </ul>
      {/* <a
        href={"/tools/newInventory"}
        className="flex items-center justify-center w-full h-[50px] p-4 mt-5 ml-auto text-lg text-white rounded-lg shrink-0 bg-green-2 ">
        进入
      </a> */}
    </ToolsLayout>
  );
}

export default Tools;
