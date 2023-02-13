import { createContext, useContext, useEffect, useState } from "react";

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
