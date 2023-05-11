import {ChangeEvent, HTMLAttributes, useCallback, useMemo, useState} from "react";
import {useTranslation} from "react-i18next";
import {handleCarbonStr, textTo2} from "@lib/utils";
import {useRouter} from "next/router";
import {useIsMobile, useLastInputVin, useOnError} from "@components/common/context";
import classNames from "classnames";
import SvgAICP from "@public/AICP.svg";
import SvgDigital3 from "@public/digital3.svg";
import {FiSearch} from "react-icons/fi";
import {PoperMenu} from "@components/common/poper";
import {HiOutlineMenu} from "react-icons/hi";
import {useMenus} from "@lib/hooks/useMenus";
import {MAIN_PAGES} from "@components/const";
import {IoIosArrowBack} from "react-icons/io";

export function ToolsHeader(p: HTMLAttributes<HTMLDivElement> & { tits?: string | null; showQuery?: boolean,isManager?:boolean;}) {
  const { children, className, tits, showQuery,isManager, ...other } = p;
  const { t } = useTranslation();
  // const mTit = tits || t("Automotive Industry Carbon Platform") || "";
  // const mTits = useMemo(() => textTo2(mTit), [mTit]);
  const { push } = useRouter();
  const menus = useMenus(MAIN_PAGES);
  const isMobile = useIsMobile()
  const { last_input_vin, setLastInputVin } = useLastInputVin();
  const [vin, setVin] = useState(last_input_vin);
  const onVinChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setVin(e.target.value || "");
    setLastInputVin(e.target.value);
  }, []);
  const onError = useOnError();
  const onQuery = () => {
    if (!vin) return onError("Please input VIN Code");
    push(`pcf?vin=${vin}`);
  };
  return (
    <div className="">
      <div
        className={classNames(
          "w-full relative z-[3] max-w-[90rem] mx-auto text-white flex items-center top-0 px-[7.5rem] h-[4.25rem]",
          className
        )}
        {...other}
      >
        {
          isMobile?
            <div>
              <button className="flex items-center" onClick={()=>{push('/carbon/service')}}>
                <IoIosArrowBack className="text-2xl" />
                <span className="text-lg">我的碳服务</span>
              </button>
            </div>
            :
            <div className="flex items-center cursor-pointer ml-[-1rem] mo:ml-0" onClick={() => push("/")}>
              <SvgAICP className="h-[2.275rem] mo:h-[2rem]" />
              <SvgDigital3 className="h-[1.5rem] mt-2.5 ml-3 mo:h-[1.1rem] mo:mt-3" />
            </div>
        }
        {/*{*/}
        {/*  isManager?*/}
        {/*    <div className="flex items-center cursor-pointer ml-[-1rem] mo:ml-0" onClick={() => push("/")}>*/}
        {/*      <SvgAICP className="h-[2.275rem] mo:h-[2rem]" />*/}
        {/*      <SvgDigital3 className="h-[1.5rem] mt-2.5 ml-3 mo:h-[1.1rem] mo:mt-3" />*/}
        {/*    </div>*/}
        {/*    :*/}
        {/*    <div onClick={() => push("/")} className="flex items-center cursor-pointer">*/}
        {/*      <SvgAICP className="h-9 mo:h-[1.75rem]" />*/}
        {/*      <div className={classNames("flex flex-col ml-4 text-base leading-snug mo:text-[.8rem] mo:ml-[.8rem]", {})}>*/}
        {/*        {mTits.map((tit, i) => (*/}
        {/*          <span className="whitespace-nowrap" key={`tit_${i}`} dangerouslySetInnerHTML={{__html:handleCarbonStr(tit)}}>*/}
        {/*      </span>*/}
        {/*        ))}*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*}*/}

        <div className="flex-1" />
        {showQuery && (
          <div className="relative text-white text-lg mr-4 mo:hidden">
            <input
              style={{ border: "2px solid #fff" }}
              className="w-[17.5rem] h-[2.25rem] rounded-sm outline-none bg-transparent pl-10 pr-4"
              value={vin}
              maxLength={24}
              onChange={onVinChange}
              onKeyDown={(e) => e.code === "Enter" && onQuery()}
            />
            <FiSearch className="text-[1.75rem] top-1 left-2 absolute cursor-pointer" onClick={onQuery} />
          </div>
        )}
        <PoperMenu menus={menus}>
          <button className="text-[2rem] mo:text-2xl">
            <HiOutlineMenu />
          </button>
        </PoperMenu>
      </div>
    </div>
  );
}