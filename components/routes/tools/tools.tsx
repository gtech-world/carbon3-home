import { ToolsLayout } from "@components/common/toolsLayout";
import { Button } from "@components/common/button";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

function ToolsContent() {
  const { push } = useRouter();
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const data = [
    {
      icon: "alca_icon.svg",
      as: "A-LCA",
      title: "产品生命周期评价工具",
      text: "产品生命周期评价工具“A-LCA”是专门为汽车行业定制的产品生命周期分析与建模工具，帮助用户评估汽车供应链的产品与服务在其生命周期内对环境的影响，为计算产品碳足迹和其他环境声明提供基础。",
      list: ["LCA参考流程数据库、LCIA方法数据库", "建立产品生命周期评价模型", "进行环境影响的分析和评估"],
      link: "/tools/lca",
    },
    {
      icon: "amodel_icon.svg",
      as: "A-Model",
      title: "产品碳足迹模型管理工具",
      text: "碳足迹模型是一个结构化的电子文档，用于帮助汽车供应链的企业计算和跟踪其产品的碳足迹，这些模型通常包含用于收集和计算排放数据的流程、公式、参数和指导说明。",
      list: ["可信存储用户建立的模型", "变更与版本管理", "对模型进行自动化验证", "查看和管理实景数据输入项目"],
      link: "/tools/model",
    },
    {
      icon: "ainventory_icon.svg",
      as: "A-Inventory",
      title: "产品碳足迹实景清单工具",
      text: "碳足迹清单是一个记录和追踪碳排放源的清单，它一般基于事先设立的碳足迹模型以及实际生产过程中获取的实景数据进行计算得到。“A-Inventory”帮助用户获取面向具体产品批次及其真实生产信息的碳足迹结果。",
      list: ["管理实景数据输入项", "基于模型和输入项计算碳足迹结果", "可信隐私计算过程的自动化验证"],
      link: "/tools/inventory",
    },
    {
      icon: "verified_icon.svg",
      as: "",
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
    <ul className="flex justify-between pb-10 mt-5 text-lg mo:flex-col mo:items-center">
      {data.map((v, i) => {
        return (
          <li
            key={`data-${i}`}
            className={`bg-white ml-5 mo:ml-0 mo:mt-5 first:ml-0 w-full mo:h-[33rem] 
             ${windowWidth > 1300 ? "h-[37rem] " : " h-[46rem] "}
             rounded-xl p-5 flex flex-col justify-between`}>
            <div>
              <div className="flex items-center">
                <img width="80" height="80" className="mr-5" src={`/${v.icon}`} alt="" />
                <div className="text-2xl font-semibold">
                  <div> {i !== 3 && `“${v.as}”`}</div>
                  <h4>{v.title}</h4>
                </div>
              </div>
              <p className="mt-6 text-gray-3 leading-[1.725rem]">{v.text}</p>
              <div className="mt-5 leading-[1.725rem] text-[14px]">
                <h5 className="font-semibold"> {i === 3 ? "通过验证管理模块：" : `“${v.as}“工具通常有以下功能`} </h5>
                {v.list.map((child, childIndex) => {
                  return (
                    <p key={`list${childIndex}`} className="text-gray-3">
                      {childIndex + 1}、{child}
                    </p>
                  );
                })}
              </div>
            </div>
            <a
              href={v.link}
              className="flex items-center justify-center flex-1 w-full mt-5 ml-auto text-lg text-white rounded-lg bg-green-2 max-h-14">
              进入
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export function Tools() {
  return (
    <ToolsLayout canBack={true} className="text-black" isNew>
      <h3 className="text-2xl font-semibold mo:text-center">AICP产品碳足迹工具集</h3>
      <ToolsContent />
    </ToolsLayout>
  );
}

export default Tools;
