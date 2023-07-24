import { i18n } from "i18next";
import { createContext, useContext, useMemo } from "react";
import { UseTranslationOptions } from "react-i18next";

export const MI18Context = createContext<undefined | i18n>(undefined);

export function useT(ns?: string | string[], opt?: UseTranslationOptions<undefined>) {
  const mI18n = useContext(MI18Context);
  return useMemo(() => {
    // console.info('store:', uto.i18n.store)
    if (!mI18n) {
      return { t: () => "", i18n: { language: "zh-CN" } };
    }

    return {
      t: (key: string, opts: any = {}) => {
        return mI18n.t(key, { ns: ns || "frontend", ...opt });
      },
      i18n: mI18n,
    };
  }, [mI18n]);
}

export function useBackendT(opt?: UseTranslationOptions<undefined>) {
  return useT("backend", opt);
}
