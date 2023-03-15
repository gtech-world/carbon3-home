import { useGoBack } from "@lib/hooks/useGoBack";
import SvgAICD from "@public/AICD.svg";
import classNames from "classnames";
import { useRouter } from "next/router";
import { ChangeEvent, HTMLAttributes, useCallback, useMemo, useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { IoIosArrowBack } from "react-icons/io";
import { useIsMobile, useLastInputVin, useOnError, useUser } from "./context";
import { MenuItem, PoperMenu } from "./poper";

import { LngsText, MAIN_PAGES, SupportLngs } from "@components/const";
import { textTo2 } from "@lib/utils";
import { useTranslation } from "react-i18next";
import { FiHome, FiLogIn, FiLogOut, FiSearch } from "react-icons/fi";
import { IoLanguageOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";

function useMenus() {
  const isMobile = useIsMobile();
  const { user, setUser } = useUser();
  const { push, pathname } = useRouter();
  const { t, i18n } = useTranslation();
  const lng = i18n.language;
  return useMemo(() => {
    const menus: MenuItem[] = [];
    menus.push({ icon: <FiHome />, text: t("AICD Home"), to: "/" });
    menus.push({ icon: <FiSearch />, text: t("AICD Open Query"), to: "/openquery" });
    if (user && !MAIN_PAGES.find((item) => item.to === pathname)) {
      menus.push({ icon: <VscAccount />, text: t("AICD Traceability"), to: MAIN_PAGES[0].to });
    }
    if (isMobile && user) {
      MAIN_PAGES.map<MenuItem>((item) => ({
        icon: <item.icon />,
        text: t(item.txt),
        to: item.to,
        selected: pathname === item.to,
      })).forEach((item) => menus.push(item));
    }
    menus.push({
      topSplit: true,
      icon: <IoLanguageOutline />,
      text: LngsText[lng],
      onClick: () => {
        i18n.changeLanguage(SupportLngs.find((item) => item !== lng));
      },
    });
    menus.push({
      icon: user ? <FiLogOut /> : <FiLogIn />,
      text: user ? t("Log Out") : t("Log In"),
      to: user ? undefined : "/login",
      onClick: () => {
        push("/").then(() => setUser(undefined));
      },
    });
    return menus;
  }, [user, isMobile, pathname, t, lng]);
}

export function Header(p: HTMLAttributes<HTMLDivElement> & { tits?: string | null; showQuery?: boolean }) {
  const { children, className, tits, showQuery, ...other } = p;
  const { t } = useTranslation();
  const mTit = tits || t("Automotive Industry Carbon Database") || "";
  const mTits = useMemo(() => textTo2(mTit), [mTit]);
  const { push } = useRouter();
  const menus = useMenus();
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
    <>
      <div
        className={classNames(
          "w-full relative z-[3] max-w-[90rem] mx-auto text-white flex items-center top-0 px-[7.5rem] h-[4.25rem]",
          className
        )}
        {...other}
      >
        <div onClick={() => push("/")} className="flex items-center cursor-pointer">
          <SvgAICD className="h-9 mo:h-[1.75rem]" />
          <div className={classNames("flex flex-col ml-4 text-base leading-snug mo:text-[.8rem] mo:ml-[.8rem]", {})}>
            {mTits.map((tit, i) => (
              <span className="whitespace-nowrap" key={`tit_${i}`}>{tit}</span>
            ))}
          </div>
        </div>
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
    </>
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
      <SvgAICD className="h-[1.75rem]" />
      <div className="flex-1" />
      <PoperMenu menus={menus}>
        <button className="text-2xl">
          <HiOutlineMenu />
        </button>
      </PoperMenu>
    </div>
  );
}
