import { CARBON_PAGES } from "@components/const";
import { useMenus } from "@lib/hooks/useMenus";
import SvgAICP from "@public/AICP.svg";
import SvgDigital3 from "@public/digital3.svg";
import classNames from "classnames";
import { useRouter } from "next/router";
import { HTMLAttributes } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { PoperMenu } from "../poper";

export function CarbonHeader(p: HTMLAttributes<HTMLDivElement>) {
  const { children, className, ...other } = p;
  const { push } = useRouter();
  const currentMenus = useMenus(CARBON_PAGES);
  return (
    <>
      <div
        className={classNames(
          "w-full relative z-[3] max-w-[90rem] mx-auto text-white flex items-center top-0 px-[7.5rem] h-[4.25rem]",
          className,
        )}
        {...other}>
        <div className="flex items-center cursor-pointer ml-[-1rem] mo:ml-0" onClick={() => push("/")}>
          <SvgAICP className="h-[2.275rem] mo:h-[2rem]" />
          <SvgDigital3 className="h-[1.5rem] mt-2.5 ml-3 mo:h-[1.1rem] mo:mt-3" />
        </div>
        <div className="flex-1" />
        <PoperMenu menus={currentMenus}>
          <button className="text-[2rem] mo:text-2xl">
            <HiOutlineMenu />
          </button>
        </PoperMenu>
      </div>
    </>
  );
}
