import { NavNode } from "@lib/@types/lca";
import { ReactNode, createContext, useCallback, useContext, useState } from "react";

export type SelectNavsState = {
  navs: NavNode[];
  active?: NavNode;
  add: (nav: NavNode) => void;
  del: (nav: NavNode) => void;
  setActive: (nav: NavNode | undefined) => void;
};

const MAX = 20;
const SelectNavsContext = createContext<SelectNavsState | undefined>(undefined);

export function useSelectNavs() {
  return useContext(SelectNavsContext) as SelectNavsState;
}

export function SelectNavsContextProvider(p: { children?: ReactNode | undefined }) {
  const [navs, setNavs] = useState<NavNode[]>([]);
  const [active, setActive] = useState<NavNode | undefined>();
  const add = useCallback(
    (nav: NavNode) => {
      if (!navs.find((item) => item === nav)) {
        if (navs.length >= MAX) setNavs([nav].concat(navs.slice(0, MAX - 1)));
        else setNavs([nav, ...navs]);
      }
      setActive(nav)
    },
    [navs, active]
  );
  const del = useCallback(
    (nav: NavNode) => {
      if (nav === active) {
        setActive(navs[1]);
      }
      setNavs(navs.filter((item) => item !== nav));
    },
    [navs, active]
  );
  return (
    <SelectNavsContext.Provider
      value={{
        navs,
        add,
        del,
        active,
        setActive,
      }}
    >
      {p.children}
    </SelectNavsContext.Provider>
  );
}
