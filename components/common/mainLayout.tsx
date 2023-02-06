import SvgCO2 from "@public/co2.svg";
import classNames from "classnames";
import { HTMLAttributes } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { IoCarSportOutline } from "react-icons/io5";
import { RiPieChartLine } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
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
  const lo = useLocation();

  return (
    <MainHeaderLayout className="flex text-black !p-0 ">
      <div className="w-[16.25rem] p-5 bg-white min-h-full mo:hidden">
        {menus.map((item, i) => (
          <Link
            to={item.to}
            key={`menus-${i}`}
            className={classNames("w-full py-3 pl-4 flex items-center flex-nowrap text-black rounded-lg", {
              "!text-green-2 bg-[#A4A4A4]/10": item.to === lo.pathname,
            })}
          >
            <item.icon className="mr-3 text-2xl" />
            <span className="whitespace-nowrap text-lg font-medium">{item.txt}</span>
          </Link>
        ))}
      </div>
      <div className={classNames("flex-1 p-5 min-h-full bg-[#F3F3F3]", className)} {...props}>
        {children}
      </div>
    </MainHeaderLayout>
  );
}
