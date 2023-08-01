import { Descriptor, NavNode } from "@lib/@types/lca";
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
      setActive(nav);
    },
    [navs, active],
  );
  const del = useCallback(
    (nav: NavNode) => {
      const nList = navs.filter((item) => item !== nav);
      setNavs(nList);
      if (!nList.find((item) => item === active)) setActive(nList[0]);
    },
    [navs, active],
  );
  return (
    <SelectNavsContext.Provider
      value={{
        navs,
        add,
        del,
        active,
        setActive,
      }}>
      {p.children}
    </SelectNavsContext.Provider>
  );
}

/* NavigationTreeContext */

export type NavigationTreeState = {
  descriptores: { [k: string]: { [k: string]: Descriptor[] } };
};
export const NavigationTreeContext = createContext<NavigationTreeState>({
  descriptores: {},
});
