import { MAIN_PAGES } from "@components/const";
import { useAutoAnim } from "@lib/hooks/useAutoAnim";
import classNames from "classnames";
import { useRouter } from "next/router";
import { HTMLAttributes, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { MainHeaderLayout } from "../headerLayout";
import { useHeaderTipHeight } from "../headerTip";
import { FiChevronLeft } from "react-icons/fi";
import SvgFootprint from '@public/footprint.svg'
import {Header} from "@components/common/header";
import {ToolsHeader} from "@components/common/toolsLayout/header";
import {useIsMobile} from "@components/common/context";

interface IMenu {
  icon: any;
  txt: string;
  to: `/${string}`;
}

function useMenus() {
  const { t } = useTranslation();
  return useMemo<IMenu[]>(() => MAIN_PAGES.map((item) => ({ ...item, txt: t(item.txt) })), [t]);
}

export function ToolsLayout(p: HTMLAttributes<HTMLDivElement>) {
  const { className, children, ...props } = p;
  const { push, pathname } = useRouter();
  const menus = useMenus();
  const ref = useAutoAnim<HTMLDivElement>();
  const h = useHeaderTipHeight();
  return (
    <div className="flex-1 w-full flex h-full flex-col min-h-fit bg-gray-16 relative">
      <ToolsHeader
        showQuery={true}
        style={{ top: `${h}px` }}
        className="!sticky px-[3.125rem] py-4 !max-w-none bg-green-2 mo:px-4 mo:h-[4.25rem]"
      />
      <div className={classNames("z-[2] h-full flex-1 w-full flex", className)} {...props}>
        <div className="relative w-[16.25rem] p-5 bg-white min-h-full mo:hidden">
          <div style={{ top: `calc(5.5rem + ${h}px)`}} className="w-full sticky top-[5.5rem]">
            <div className="flex items-center mb-2.5 text-sm cursor-pointer" onClick={()=>push('/carbon/service')}>
              <FiChevronLeft className="text-lg" />
              返回
            </div>
            <div className="flex items-center bg-gray-bg rounded-lg py-4 px-1 mb-5">
              <SvgFootprint className="w-[3.05rem]" />
              <div className="flex flex-col ml-2 text-lg font-semibold">
                <span>产品碳足迹-</span>
                <span className="mt-[-0.2rem]">Sample Model</span>
              </div>
            </div>
            {menus.map((item, i) => (
              <div
                onClick={(e) => {
                  e.preventDefault();
                  push(item.to);
                }}
                key={`menus-${i}`}
                className={classNames(
                  "cursor-pointer w-full py-3 pl-4 flex items-center flex-nowrap text-black rounded-lg",
                  {
                    "!text-green-2 bg-green-2/10": item.to === pathname,
                  }
                )}
              >
                <item.icon className="mr-3 text-2xl" />
                <span className="whitespace-nowrap text-lg font-medium">{item.txt}</span>
              </div>
            ))}
          </div>
        </div>
        <div ref={ref}className={classNames("flex-1 p-5 min-h-fit bg-gray-16 mo:w-full", className)} {...props}>
          <div className="hidden mo:flex h-full items-center bg-white text-lg mb-5 px-1 py-3 rounded-lg">
            <img className="h-[2.75rem]" src="/footprint.svg" alt=""/>
            <span className="font-semibold ml-2.5">产品碳足迹-Sample Model</span>
          </div>
          {children}
        </div>
      </div>
    </div>
    // <MainHeaderLayout menus={MAIN_PAGES} className="flex text-black bg-white">
    // </MainHeaderLayout>
  );
}
