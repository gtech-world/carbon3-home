import { useGoBack } from "@lib/hooks/useGoBack";
import SvgAICP from "@public/AICP.svg";
import SvgDigital3 from "@public/digital3.svg";
import classNames from "classnames";
import { useRouter } from "next/router";
import { ChangeEvent, HTMLAttributes, useCallback, useMemo, useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { IoIosArrowBack } from "react-icons/io";
// import { useIsMobile, useLastInputVin, useOnError, useUser } from "./context";
import { MenuItem, PoperMenu } from "../poper";

import { LngsText, MAIN_PAGES,CARBON_PAGES, SupportLngs } from "@components/const";
import {handleCarbonStr, textTo2} from "@lib/utils";
import { useTranslation } from "react-i18next";
import { FiHome, FiLogIn, FiLogOut, FiSearch } from "react-icons/fi";
import { VscAccount } from "react-icons/vsc";
import {useMenus} from "@lib/hooks/useMenus";
import {useIsMobile} from "@components/common/context";

export function CarbonHeader(p: HTMLAttributes<HTMLDivElement>) {
  const { children, className,...other } = p;
  const { t } = useTranslation();
  const { push } = useRouter();
  const currentMenus = useMenus(CARBON_PAGES);
  return (
    <>
      <div
        className={classNames(
          "w-full relative z-[3] max-w-[90rem] mx-auto text-white flex items-center top-0 px-[7.5rem] h-[4.25rem]",
          className
        )}
        {...other}
      >
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
