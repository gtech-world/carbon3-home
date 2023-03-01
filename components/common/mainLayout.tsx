import { useAutoAnim } from "@lib/hooks/useAutoAnim";
import SvgCO2 from "@public/co2.svg";
import classNames from "classnames";
import { useRouter } from "next/router";
import { HTMLAttributes } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { IoCarSportOutline } from "react-icons/io5";
import { RiPieChartLine } from "react-icons/ri";
import { MainHeaderLayout } from "./headerLayout";

interface IMenu {
  icon: any;
  txt: string;
  to: `/${string}`;
}

const menus: IMenu[] = [
  { icon: AiOutlineUser, txt: "User Dashboard", to: "/dashboard" },
  { icon: IoCarSportOutline, txt: "Product Definition", to: "/product" },
  { icon: SvgCO2, txt: "Carbon Activities", to: "/activities" },
  { icon: RiPieChartLine, txt: "PCF Inventories", to: "/pcf" },
];

export function MainLayout(p: HTMLAttributes<HTMLDivElement>) {
  const { className, children, ...props } = p;
  const { push, pathname } = useRouter();
  const ref = useAutoAnim<HTMLDivElement>();
  return (
    <MainHeaderLayout className="flex text-black !p-0 bg-white">
      <div className="sticky self-start top-[4.25rem] w-[16.25rem] p-5 min-h-full mo:hidden">
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
      <div ref={ref} className={classNames("flex-1 p-5 min-h-full bg-gray-16 mo:w-full", className)} {...props}>
        {children}
      </div>
    </MainHeaderLayout>
  );
}
