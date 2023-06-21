import { UserData } from "@lib/@types/type";
import { useOn } from "@lib/hooks/useOn";
import { getErrorMsg } from "@lib/utils";
import { useRouter } from "next/router";
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

export interface Toast {
  type: "info" | "error";
  msg: string;
}
export interface Store {
  userData?: UserData;
  toast?: Toast;
  last_input_vin: string;
  isMobile: boolean;
  show_header_tip: boolean;
}

export function getUserData() {
  const ud = localStorage.getItem("user-data");
  if (!ud) return undefined;
  try {
    return JSON.parse(ud) as UserData;
  } catch (error) {
    return undefined;
  }
}

export const StoreContext = createContext<any>({});

export interface UpStore extends Store {
  update: (data: Partial<Store>) => void;
}

export function useStore() {
  return useContext(StoreContext) as UpStore;
}

function Redrect(p: { children?: React.ReactNode }) {
  const { pathname, replace } = useRouter();
  const { userData } = useStore();
  if (!userData && ["/dashboard", "/product", "/activities", "/pcf"].includes(pathname)) {
    replace("/login");
    return null;
  }
  return <>{p.children}</>;
}

export function StoreProvider(p: { children?: React.ReactNode; init: Store }) {
  const [state, setState] = useState(p.init || {});
  const update = useCallback((data: Partial<Store>) => {
    setState((old: any) => ({ ...old, ...data }));
  }, []);
  const value = useMemo(() => ({ ...state, update }), [state]);

  // update IsMobile
  useEffect(() => {
    const onResize = () => update({ isMobile: window.innerWidth <= 900 });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);
  return (
    <StoreContext.Provider value={value}>
      <Redrect>{p.children}</Redrect>
    </StoreContext.Provider>
  );
}

export async function initStore() {
  const store: Store = {
    isMobile: window.innerWidth <= 900,
    last_input_vin: sessionStorage.getItem("last_input_vin") || "",
    show_header_tip: !localStorage.getItem("hidden_header_tip"),
  };
  const ud = getUserData();
  if (ud && new Date().getTime() - ud.loginTime < 1000 * 60 * 60 * 24) store.userData = ud;
  return store;
}

export function useIsMobile() {
  const { isMobile } = useStore();
  return isMobile;
}

export function useToast() {
  const { toast: current, update } = useStore();
  const toast = useCallback(
    (t?: Toast) => {
      update({ toast: t });
    },
    [update]
  );
  return { current, toast };
}

export function useOnError() {
  const { toast } = useToast();
  const { t } = useTranslation();
  return useOn((err: any) => {
    toast({ type: "error", msg: t(getErrorMsg(err)) });
  });
}

export function useUser() {
  const { userData, update } = useStore();
  const setUser = useCallback((user?: UserData, login?: boolean) => {
    if (user && login) user.loginTime = new Date().getTime();
    update({ userData: user });
    localStorage.setItem("user-data", user ? JSON.stringify(user) : "");
  }, []);
  return { user: userData, setUser };
}

export function useLastInputVin() {
  const { last_input_vin, update } = useStore();
  const setLastInputVin = useCallback(
    (vin: string) => {
      update({ last_input_vin: vin });
      vin === '1500101202311001' && sessionStorage.setItem("last_input_vin", vin);
    },
    [update]
  );
  return { last_input_vin, setLastInputVin };
}

export function useShowHeadTip() {
  const { show_header_tip, update } = useStore();
  const setShowHeaderTip = useCallback(
    (show: boolean) => {
      update({ show_header_tip: show });
      localStorage.setItem("hidden_header_tip", show ? "" : "1");
    },
    [update]
  );
  return { show_header_tip, setShowHeaderTip };
}
