import { i18n } from "i18next";
import { createContext } from "react";
import { UseTranslationOptions, useTranslation } from "react-i18next";

export const MI18Context = createContext<undefined | i18n>(undefined);

export function useT(ns?: string | string[], opt?: UseTranslationOptions<undefined>) {
  const uto = useTranslation(ns, opt);
  // const mI18n = useContext(MI18Context);
  return uto;
}

export function useBackendT(opt?: UseTranslationOptions<undefined>) {
  return useT("backend", opt);
}
