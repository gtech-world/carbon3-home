import { InventoryPhase, Phase } from "@lib/@types/type";
import React, { createContext, useCallback, useContext, useEffect, useState } from "react";

export interface CurrentActivity {
  activity: Phase | InventoryPhase | null;
  sourcing: number;
}

export interface UpdateCA {
  update: (ca: Partial<CurrentActivity>) => void;
}

export const CurrentActivitySelectContext = createContext<CurrentActivity & UpdateCA>({
  activity: null,
  sourcing: 0,
  update: () => {},
});

export function useCurrentActivity() {
  return useContext(CurrentActivitySelectContext);
}

export function CurrentActivityProvider(p: { children?: React.ReactNode; init: Partial<CurrentActivity> }) {
  const [value, setValue] = useState<CurrentActivity>({
    activity: null,
    sourcing: 0,
    ...p.init,
  });
  useEffect(() => {
    setValue((old) => ({ ...old, ...p.init }));
  }, [p.init]);
  const update = useCallback((data: Partial<CurrentActivity>) => {
    setValue((old) => ({ ...old, ...data }));
  }, []);
  return (
    <CurrentActivitySelectContext.Provider value={{ ...value, update }}>
      {p.children}
    </CurrentActivitySelectContext.Provider>
  );
}
