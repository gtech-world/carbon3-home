import { ToolsLayout } from "@components/common/toolsLayout";
import React from "react";

export function Lca() {
  return (
    <ToolsLayout
      canBack
      isNew
      className="text-black"
      link={{ pathName: "/tools/tools", homeTitle: "产品碳足迹工具集", currentTitle: "产品生命周期评价工具" }}>
      <h3 className="text-2xl font-semibold">“A-LCA”产品生命周期评价工具</h3>
      <div className="bg-white p-5 rounded-2xl text-base mt-5 leading-[1.625rem]">
        <h4 className="mb-4 text-xl font-semibold">关于生命周期评价</h4>
        <p>
          生命周期评价（Life Cycle Assessment,
          LCA）是一种用于评估产品在其整个生命周期中，即从原材料的获取、产品的生产直至产品使用后的处置，对环境影响的技术和方法”。
          生命周期评价已经纳入ISO14000环境管理系列标准而成为国际上环境管理和产品设计的一个重要支持工具。
        </p>
        <p>
          生命周期评估会条列出所有产品相关产业（如：制造、使用及服务）中使用的能源和材料，并计算出对环境的排放量，进而评估可能对环境的影响。最终目的是为了记录并改善产品对环境的负面影响。
        </p>

        <h4 className="mt-8 mb-4 text-xl font-semibold">参考标准</h4>
        <p>ISO 14040:2006 环境管理 生命周期评价 原则与框架</p>
        <p>ISO 14044:2006 环境管理 生命周期评价 要求和导则</p>

        <h4 className="mt-8 mb-4 text-xl font-semibold">“A-LCA”汽车产品生命周期评价工具</h4>
        <p>
          “A-LCA”是基于汽车行业产品特征进行定制化的产品生命周期评价工具，内置适合于汽车行业碳活动实施要求的参考数据库，包括但不限于LCA参考流程、LCIA方法学、排放因子、PCR要求等。对“A-LCA”的使用将会间接帮助汽车行业在一致和可比的基础上进行产品碳足迹以及其他环境声明的定性和定量分析活动。
        </p>

        <h4 className="mt-8 mb-4 text-xl font-semibold">下载”A-LCA”产品生命周期评价工具</h4>
        <div className="p-5 rounded bg-gray-20">
          <p>
            A-LCA产品生命周期评价工具客户端：
            <a
              className="text-green-2"
              target="_blank"
              rel="noreferrer"
              href="https://gtech-lca-1317970565.cos.ap-shanghai.myqcloud.com/aicpLCA_macOS_x64_1.0.3_2023-09-14.dmg">
              aicpLCA_macOS_x64_1.0.3_2023-09-14.dmg
            </a>
          </p>
          <p className="mt-3">
            A-LCA产品生命周期评价工具客户端：
            <a
              className="text-green-2"
              target="_blank"
              rel="noreferrer"
              href="https://gtech-lca-1317970565.cos.ap-shanghai.myqcloud.com/aicpLCA_WINDOWS_X64_1.0.3_2023-09-14.exe">
              aicpLCA_WINDOWS_X64_1.0.3_2023-09-14.exe
            </a>
          </p>
        </div>

        <div className="mt-4">
          在开始使用A-LCA之前，请确保您下载并导入了工具所要求的参考数据库。
          <a
            className="ml-5 underline text-blue-0"
            rel="noreferrer"
            target="_blank"
            href="https://github.com/gtech-world/olca-app/releases/tag/v1.0.3">
            请点击此处下载
          </a>
          {/* <a className="ml-5 underline text-blue-0" rel="noreferrer" target="_blank" href="https://gtech-lca-1317970565.cos.ap-shanghai.myqcloud.com/AICP_LCA_LCIA_Method_202306.zolca">LCIA Method库</a> */}
        </div>
      </div>
    </ToolsLayout>
  );
}

export default Lca;
