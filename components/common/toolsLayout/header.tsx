import { ChangeEvent, HTMLAttributes, useCallback, useMemo, useState } from "react";
import { useRouter } from "next/router";
import { useIsMobile, useLastInputVin, useOnError } from "@components/common/context";
import classNames from "classnames";
import SvgAICP from "@public/AICP.svg";
import SvgDigital3 from "@public/digital3.svg";
import { IoIosArrowBack } from "react-icons/io";
import { PoperMenu } from "@components/common/poper";
import { HiOutlineMenu } from "react-icons/hi";
import { useMenus } from "@components/common/header";

export function ToolsHeader(
  p: HTMLAttributes<HTMLDivElement> & {
    tits?: string | null;
    showQuery?: boolean;
    isManager?: boolean;
  },
) {
  const { children, className, tits, showQuery, isManager, ...other } = p;
  const { push } = useRouter();
  const currentMenus = useMenus();
  const isMobile = useIsMobile();
  return (
    <>
      <div
        className={classNames(
          "w-full relative z-[3] max-w-[90rem] mx-auto text-white flex items-center top-0  h-[4.25rem] justify-between",
          className,
        )}
        {...other}>
        {
          // isMobile?
          //   <div>
          //     <button className="flex items-center" onClick={()=>{push('/carbon/service')}}>
          //       <IoIosArrowBack className="text-2xl" />
          //       <span className="text-lg">我的碳服务</span>
          //     </button>
          //   </div>
          //   :
          <div className="flex items-center cursor-pointer ml-[-1rem] mo:ml-0" onClick={() => push("/")}>
            <SvgAICP className="h-[2.275rem] mo:h-[2rem]" />
            <SvgDigital3 className="h-[1.5rem] mt-2.5 ml-3 mo:h-[1.1rem] mo:mt-3" />
          </div>
        }
        <PoperMenu menus={currentMenus}>
          <button className="text-[2rem] mo:text-2xl">
            <HiOutlineMenu />
          </button>
        </PoperMenu>
      </div>
    </>
  );
}
