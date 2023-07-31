import { CarbonHeader } from "@components/common/carbonLayout/header";
import { CARBON_PAGES } from "@components/const";
import { useAutoAnim } from "@lib/hooks/useAutoAnim";
import { useT } from "@lib/hooks/useT";
import classNames from "classnames";
import { useRouter } from "next/router";
import {  FC,  useMemo, useState } from "react";
import { useHeaderTipHeight } from "../headerTip";

interface IMenu {
  icon: any;
  txt: string;
  to: string;
}
function useCarbonMenus() {
  const { t } = useT();
  return useMemo<IMenu[]>(() => CARBON_PAGES.map((item) => ({ ...item, txt: t(item.txt) })), [t]);
}
export const CarbonLayout :FC<{className:any,children:any}> =({className, children, ...props} ) =>{

  const { push, pathname } = useRouter();
  const menus = useCarbonMenus()
  const ref = useAutoAnim<HTMLDivElement>();
  const h = useHeaderTipHeight();
  
 
  return (
    <div className="relative flex flex-col flex-1 w-full bg-gray-16">
      <CarbonHeader
        style={{ top: `${h}px` }}
        className="!sticky px-[3.125rem] h-full py-4 !max-w-none bg-green-2 mo:px-4 mo:h-[4.25rem]"
      />
        
      <div className={classNames("z-[2] flex-1 flex", className)} {...props}>
        <div className="w-[16.25rem] min-w-[16.25rem] bg-white p-5 min-h-full mo:hidden">
          <div style={{ top: `calc(5.5rem + ${h}px)`}} className="w-full left-0 sticky top-[5.5rem]">
            {menus.map((item, i:number) => (
              <div
                onClick={(e) => {
                  e.preventDefault();
                  item.to && push(item.to);
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
                <span className="text-lg font-semibold whitespace-nowrap">{item.txt}</span>
              </div>
            ))}
          </div>
        </div>
        <div ref={ref} className={classNames("flex-1", className)} {...props}>
          <div className="flex-1 p-5 bg-gray-16 mo:w-full ">
            {children}
          </div>
        </div>
      </div>
    </div>
    // <MainHeaderLayout showQuery={false} className="flex text-black bg-white">

    // </MainHeaderLayout>
  );
}