import { MAIN_PAGES } from "@components/const";
import { useAutoAnim } from "@lib/hooks/useAutoAnim";
import classNames from "classnames";
import { useRouter } from "next/router";
import { HTMLAttributes, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { MainHeaderLayout } from "./headerLayout";
import { useHeaderTipHeight } from "./headerTip";
import { FiChevronLeft } from "react-icons/fi";
import SvgFootprint from '@public/footprint.svg'

interface IMenu {
  icon: any;
  txt: string;
  to: `/${string}`;
}

function useMenus() {
  const { t } = useTranslation();
  return useMemo<IMenu[]>(() => MAIN_PAGES.map((item) => ({ ...item, txt: t(item.txt) })), [t]);
}

export function MainLayout(p: HTMLAttributes<HTMLDivElement>) {
  const { className, children, ...props } = p;
  const { push, pathname } = useRouter();
  const menus = useMenus();
  const ref = useAutoAnim<HTMLDivElement>();
  const h = useHeaderTipHeight();
  return (
    <MainHeaderLayout className="flex text-black bg-white">
      <div className="self-start relative w-[16.25rem] p-5 min-h-full mo:hidden">
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
      <div ref={ref} className={classNames("flex-1 p-5 bg-gray-16 mo:w-full", className)} {...props}>
        {children}
      </div>
    </MainHeaderLayout>
  );
}
