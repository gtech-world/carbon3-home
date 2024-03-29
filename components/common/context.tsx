import { UserData } from "@lib/@types/type";
import { useOn } from "@lib/hooks/useOn";
import { useT } from "@lib/hooks/useT";
import { getErrorMsg } from "@lib/utils";
import { useRouter } from "next/router";
import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";

export interface Toast {
  type: "info" | "error";
  msg: string;
}
export interface Store {
  inited: boolean;
  userData?: UserData;
  toast?: Toast;
  last_input_vin: string;
  isMobile: boolean;
  show_header_tip: boolean;
}
export const defStore: Store = {
  inited: false,
  last_input_vin: "",
  isMobile: false,
  show_header_tip: false,
};

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

const needLogin = ["/dashboard", "/product", "/activities", "/pcf", "/carbon", "/tools", "/model"];
const matchPath = (list: string[], target: string) => {
  if (!target) return false;
  for (const path of list) {
    if (target === path || target.startsWith(path + "/")) return true;
  }
  return false;
};
function Redrect(p: { children?: React.ReactNode }) {
  const { pathname, replace } = useRouter();
  const { userData, inited } = useStore();
  const needToLogin = useMemo(
    () => inited && !userData && matchPath(needLogin, pathname),
    [inited, userData, pathname],
  );
  if (needToLogin) {
    replace("/login");
    return null;
  }
  return <>{p.children}</>;
}

export function StoreProvider(p: { children?: React.ReactNode; init: Store }) {
  const [state, setState] = useState(p.init || {});
  const unfirst = useRef(false);
  useEffect(() => {
    if (unfirst.current) {
      setState((old) => ({ ...old, ...p.init }));
    }
    unfirst.current = true;
  }, [p.init]);
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
  const start = new Date().getTime();
  const store: Store = {
    inited: true,
    isMobile: window.innerWidth <= 900,
    last_input_vin: sessionStorage.getItem("last_input_vin") || "",
    show_header_tip: !localStorage.getItem("hidden_header_tip"),
  };
  const ud = getUserData();
  if (ud && new Date().getTime() - ud.loginTime < 1000 * 60 * 60 * 24) store.userData = ud;
  console.info("initStore:", new Date().getTime() - start);
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
    [update],
  );
  return { current, toast };
}

export function useOnError() {
  const { toast } = useToast();
  const { t } = useT();
  return useCallback(
    (err: any) => {
      toast({ type: "error", msg: t(getErrorMsg(err)) });
    },
    [t, toast],
  );
}

export function useUser() {
  const { userData, update }: any = useStore();
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
      vin === "1500101202311001" && sessionStorage.setItem("last_input_vin", vin);
    },
    [update],
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
    [update],
  );
  return { show_header_tip, setShowHeaderTip };
}
