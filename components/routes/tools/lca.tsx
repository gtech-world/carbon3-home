import {ToolsLayout} from "@components/common/toolsLayout";
import React from "react";

export function Lca() {
  return (
    <ToolsLayout className="text-black">
      <h3 className="text-2xl font-semibold mt-8">AICP产品碳足迹工具集</h3>
      <div className="bg-white p-5 rounded-2xl text-base mt-5 leading-[1.625rem]">
        <h4 className="text-xl font-semibold mb-4">关于生命周期评价</h4>
        <p>
          生命周期评价（Life Cycle Assessment, LCA）是一种用于评估产品在其整个生命周期中，即从原材料的获取、产品的生产直至产品使用后的处置，对环境影响的技术和方法”。 生命周期评价已经纳入ISO14000环境管理系列标准而成为国际上环境管理和产品设计的一个重要支持工具。
        </p>
        <p>
          生命周期评估会条列出所有产品相关产业（如：制造、使用及服务）中使用的能源和材料，并计算出对环境的排放量，进而评估可能对环境的影响。最终目的是为了记录并改善产品对环境的负面影响。
        </p>

        <h4 className="text-xl font-semibold mb-4 mt-8">参考标准</h4>
        <p>
          ISO 14040:2006 环境管理 生命周期评价 原则与框架
        </p>
        <p>
          ISO 14044:2006 环境管理 生命周期评价 要求和导则
        </p>

        <h4 className="text-xl font-semibold mb-4 mt-8">“A-LCA”汽车产品生命周期评价工具</h4>
        <p>
          “A-LCA”是基于汽车行业产品特征进行定制化的产品生命周期评价工具，内置适合于汽车行业碳活动实施要求的参考数据库，包括但不限于LCA参考流程、LCIA方法学、排放因子、PCR要求等。对“A-LCA”的使用将会间接帮助汽车行业在一致和可比的基础上进行产品碳足迹以及其他环境声明的定性和定量分析活动。
        </p>

        <h4 className="text-xl font-semibold mb-4 mt-8">下载”A-LCA”产品生命周期评价工具</h4>
        <div className="bg-gray-20 rounded p-5">
          <p>A-LCA产品生命周期评价工具客户端：<a className="text-green-2" href="">AICP LCA_macOS_Version 1.1.0_2023-05-12.dmg</a></p>
          <p className="mt-3">A-LCA产品生命周期评价工具客户端：<a className="text-green-2" href="">AICP LCA_Windows_x64_Version 1.1.0_2023-05-12.zip</a></p>
        </div>

        <div className="mt-4">
          在开始使用A-LCA之前，请确保您下载并导入了工具所要求的参考数据库。
          <a className="text-blue-0 ml-5 underline" href="">LCI参考数据库</a>
          <a className="text-blue-0 ml-5 underline" href="">LCIA Method库</a>
        </div>
      </div>
    </ToolsLayout>
  );
}

export default Lca;
