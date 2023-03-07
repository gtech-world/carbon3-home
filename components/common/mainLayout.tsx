import { useAutoAnim } from "@lib/hooks/useAutoAnim";
import SvgCO2 from "@public/co2.svg";
import classNames from "classnames";
import { useRouter } from "next/router";
import { HTMLAttributes, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { AiOutlineUser } from "react-icons/ai";
import { IoCarSportOutline } from "react-icons/io5";
import { RiPieChartLine } from "react-icons/ri";
import { MainHeaderLayout } from "./headerLayout";

interface IMenu {
  icon: any;
  txt: string;
  to: `/${string}`;
}

function useMenus() {
  const { t } = useTranslation();
  return useMemo<IMenu[]>(
    () => [
      { icon: AiOutlineUser, txt: t("User Dashboard"), to: "/dashboard" },
      { icon: IoCarSportOutline, txt: t("Product Definition"), to: "/product" },
      { icon: SvgCO2, txt: t("Carbon Activities"), to: "/activities" },
      { icon: RiPieChartLine, txt: t("PCF Inventories"), to: "/pcf" },
    ],
    [t]
  );
}

export function MainLayout(p: HTMLAttributes<HTMLDivElement>) {
  const { className, children, ...props } = p;
  const { push, pathname } = useRouter();
  const menus = useMenus();
  const ref = useAutoAnim<HTMLDivElement>()
  return (
    <MainHeaderLayout className="flex text-black bg-white">
      <div className="self-start relative w-[16.25rem] p-5 min-h-full mo:hidden">
        <div className="w-full sticky top-[5.5rem]">
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
      <div ref={ref} className={classNames("flex-1 p-5 min-h-full bg-gray-16 mo:w-full", className)} {...props}>
        {children}
      </div>
    </MainHeaderLayout>
  );
}
