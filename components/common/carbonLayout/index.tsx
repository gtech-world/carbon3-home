import {CARBON_PAGES} from "@components/const";
import { useAutoAnim } from "@lib/hooks/useAutoAnim";
import classNames from "classnames";
import { useRouter } from "next/router";
import { HTMLAttributes, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { MainHeaderLayout } from "../headerLayout";
import { useHeaderTipHeight } from "../headerTip";
import {Header} from "@components/common/header";
import {CarbonHeader} from "@components/common/carbonLayout/header";

interface IMenu {
  icon: any;
  txt: string;
  to: string;
}
function useCarbonMenus() {
  const { t } = useTranslation();
  return useMemo<IMenu[]>(() => CARBON_PAGES.map((item) => ({ ...item, txt: t(item.txt) })), [t]);
}
export function CarbonLayout(p: HTMLAttributes<HTMLDivElement>) {
  const { className, children, ...props } = p;
  const { push, pathname } = useRouter();
  const menus = useCarbonMenus()
  const ref = useAutoAnim<HTMLDivElement>();
  const h = useHeaderTipHeight();
  return (
    <div className="flex-1 w-full flex flex-col min-h-fit bg-gray-16 relative">
      <CarbonHeader
        style={{ top: `${h}px` }}
        className="!sticky px-[3.125rem] py-4 !max-w-none bg-green-2 mo:px-4 mo:h-[4.25rem]"
      />
      <div className={classNames("z-[2] flex-1 w-full flex", className)} {...props}>
        <div className="self-start relative w-[16.25rem] bg-white p-5 min-h-full mo:hidden">
          <div style={{ top: `calc(5.5rem + ${h}px)`}} className="w-full sticky top-[5.5rem]">
            {menus.map((item:any, i:number) => (
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
                <span className="whitespace-nowrap text-lg font-semibold">{item.txt}</span>
              </div>
            ))}
          </div>
        </div>
        <div ref={ref} className={classNames("flex-1 p-5 bg-gray-16 mo:w-full", className)} {...props}>
          {children}
        </div>
      </div>
    </div>
    // <MainHeaderLayout showQuery={false} className="flex text-black bg-white">

    // </MainHeaderLayout>
  );
}
