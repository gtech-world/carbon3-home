import {useRouter} from "next/router";
import {useTranslation} from "react-i18next";
import {useMemo} from "react";
import {FiHome, FiLogIn, FiLogOut, FiSearch} from "react-icons/fi";
import {VscAccount} from "react-icons/vsc";
import {handleCarbonStr} from "@lib/utils";
import {CARBON_PAGES} from "@components/const";
import {useIsMobile, useUser} from "@components/common/context";
import {MenuItem} from "@components/common/poper";

export function useMenus(data:any[] = []) {
  const isMobile = useIsMobile();
  const { user, setUser } = useUser();
  const { push, pathname } = useRouter();
  const { t, i18n } = useTranslation();
  const lng = i18n.language;
  return useMemo(() => {
    const menus: MenuItem[] = [];
    menus.push({ icon: <FiHome />, text: t("AICP Home"), to: "/" });
    menus.push({ icon: <FiSearch />, text: t("AICP Open Query"), to: "/openquery" });
    if (user && !data.find((item) => item.to === pathname)) {
      menus.push({ icon: <VscAccount />, text: handleCarbonStr(t("AICP Digital3 Carbon System")), to: CARBON_PAGES[0].to });
    }
    if (isMobile && user) {
      data.map<MenuItem>((item) => ({
        icon: <item.icon />,
        text: t(item.txt),
        to: item.to,
        selected: pathname === item.to,
      })).forEach((item) => menus.push(item));
    }
    // menus.push({
    //   topSplit: true,
    //   icon: <IoLanguageOutline />,
    //   text: LngsText[lng],
    //   onClick: () => {
    //     // alert(11)
    //     // alert(SupportLngs.find((item) => item !== lng))
    //     i18n.changeLanguage(SupportLngs.find((item) => item !== lng));
    //   },
    // });
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