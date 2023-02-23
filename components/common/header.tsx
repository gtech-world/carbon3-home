import { useGoBack } from "@lib/hooks/useGoBack";
import SvgAICD from "@public/AICD.svg";
import classNames from "classnames";
import { useRouter } from "next/router";
import { HTMLAttributes, useMemo } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineMenu } from "react-icons/hi";
import { IoIosArrowBack } from "react-icons/io";
import { useIsMobile, useUser } from "./context";
import { MenuItem, PoperMenu } from "./poper";
import SvgCO2 from "@public/co2.svg";

import { FiLogOut, FiLogIn, FiHome, FiSearch } from "react-icons/fi";
import { IoCarSportOutline } from "react-icons/io5";
import { RiPieChartLine } from "react-icons/ri";
import { VscAccount } from "react-icons/vsc";

function useMenus() {
  const isMobile = useIsMobile();
  const { user, setUser } = useUser();
  const { push } = useRouter();
  return useMemo(() => {
    const menus: MenuItem[] = [];
    menus.push({ icon: <FiHome />, text: "Home", to: "/" });
    menus.push({ icon: <FiSearch />, text: "AICD Open Query", to: "/openquery" });
    if (user) menus.push({ icon: <VscAccount />, text: "AICD Traceability", to: "/dashboard" });
    if (isMobile && user) {
      menus.push({ icon: <AiOutlineUser />, text: "User Dashboard", to: "/dashboard" });
      menus.push({ icon: <IoCarSportOutline />, text: "Product Definition", to: "/product" });
      menus.push({ icon: <SvgCO2 />, text: "Carbon Activities", to: "/activities" });
      menus.push({ icon: <RiPieChartLine />, text: "PCF Inventories", to: "/pcf" });
    }
    menus.push({
      topSplit: true,
      icon: user ? <FiLogOut /> : <FiLogIn />,
      text: user ? "Log Out" : "Sign in",
      to: user ? undefined : "/login",
      onClick: () => {
        push("/").then(() => setUser(undefined));
      },
    });
    return menus;
  }, [user, isMobile]);
}

export function Header(p: HTMLAttributes<HTMLDivElement> & { tits?: [string, string] }) {
  const { children, className, tits = ["Automotive Industry", "Carbon Database"], ...other } = p;
  const { push } = useRouter();
  const menus = useMenus();
  return (
    <div
      className={classNames(
        "relative z-[3] max-w-[90rem] mx-auto text-white flex items-center top-0 px-[7.5rem] h-[4.25rem]",
        className
      )}
      {...other}
    >
      <div onClick={() => push("/")} className="flex items-center cursor-pointer">
        <SvgAICD className="h-9 mo:h-[1.75rem]" />
        <div className="flex flex-col ml-4 text-base whitespace-nowrap mo:text-[.8rem] mo:ml-[.8rem]">
          <span className="leading-snug">{tits[0]}</span>
          <span className="leading-snug">{tits[1]}</span>
        </div>
      </div>
      <div className="flex-1" />
      <PoperMenu menus={menus}>
        <button className="text-[2rem] mo:text-2xl">
          <HiOutlineMenu />
        </button>
      </PoperMenu>
    </div>
  );
}

export function MobileHeader(p: HTMLAttributes<HTMLDivElement> & { tits?: [string, string] }) {
  const { children, className, tits = ["Automotive Industry", "Carbon Database"], ...other } = p;
  const goBack = useGoBack();
  const menus = useMenus();
  return (
    <div
      className={classNames("sticky z-[3] w-full text-white flex items-center p-4 bg-green-2", className)}
      {...other}
    >
      <button className="text-[2rem]" onClick={goBack}>
        <IoIosArrowBack />
      </button>
      <div className="flex-1" />
      <SvgAICD className="h-[1.75rem] ml-10" />
      <div className="flex-1" />
      <PoperMenu menus={menus}>
        <button className="text-2xl">
          <HiOutlineMenu />
        </button>
      </PoperMenu>
    </div>
  );
}
