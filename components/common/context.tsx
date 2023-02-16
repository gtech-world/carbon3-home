import { UserData } from "@lib/type";
import { getErrorMsg } from "@lib/utils";
import { useRouter } from "next/router";
import { createContext, useCallback, useContext, useEffect, useState } from "react";

// ****************************** IsMobile *************************************
export const IsMobileContext = createContext<boolean>(false);

export function useIsMobile() {
  return useContext(IsMobileContext);
}

export function IsMobileProvider(p: { children?: React.ReactNode }) {
  const [mobileState, setMobileState] = useState(0);
  useEffect(() => {
    const onResize = () => setMobileState(window.innerWidth <= 900 ? 1 : -1);
    window.addEventListener("resize", onResize);
    onResize();
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);
  return <IsMobileContext.Provider value={mobileState > 0}>{mobileState !== 0 && p.children}</IsMobileContext.Provider>;
}

// ****************************** Toast *************************************
export interface Toast {
  type: "info" | "error";
  msg: string;
}
export const ToastContext = createContext<{ current?: Toast; toast: (t?: Toast) => void }>({ toast: () => {} });

export function useToast() {
  return useContext(ToastContext);
}

export function useOnError() {
  const { toast } = useToast();
  return (err: any) => {
    toast({ type: "error", msg: getErrorMsg(err) });
  };
}

export function ToastProvider(p: { children?: React.ReactNode }) {
  const [current, setToast] = useState<Toast>();
  const toast = useCallback((t?: Toast) => {
    setToast(t);
  }, []);
  return <ToastContext.Provider value={{ current, toast }}>{p.children}</ToastContext.Provider>;
}

// ****************************** UserData *************************************

export function getUserData() {
  const ud = localStorage.getItem("user-data");
  if (!ud) return undefined;
  try {
    return JSON.parse(ud) as UserData;
  } catch (error) {
    return undefined;
  }
}

export const UserContext = createContext<{ user?: UserData; setUser: (user?: UserData) => void }>({
  // user,
  setUser: () => {},
});

export function useUser() {
  return useContext(UserContext);
}

export function UserProvider(p: { children?: React.ReactNode }) {
  const [ud, setUd] = useState<UserData>();
  const [init, setInit] = useState(false);
  const setUser = useCallback((user?: UserData) => {
    if(user) user.loginTime = new Date().getTime();
    setUd(user);
    localStorage.setItem("user-data", user ? JSON.stringify(user) : "");
  }, []);
  useEffect(() => {
    setUd(getUserData());
    setInit(true);
  }, []);
  const { push, pathname } = useRouter();
  useEffect(() => {
    if (
      init &&
      pathname &&
      ["/dashboard", "/product", "/activities", "/pcf"].includes(pathname) &&
      (!ud || (new Date().getTime() - ud.loginTime) > 1000 * 60 * 60)
    ) {
      push("/login");
    }
  }, [pathname, init, ud]);
  if (!init) return null;
  return <UserContext.Provider value={{ user: ud, setUser }}>{p.children}</UserContext.Provider>;
}
