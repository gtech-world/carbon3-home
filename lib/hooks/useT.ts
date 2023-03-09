import { useTranslation, UseTranslationOptions } from "react-i18next";

export function useT(ns?: string | string[], opt?: UseTranslationOptions<undefined>) {
  return useTranslation(ns, opt);
}

export function useBackendT(opt?: UseTranslationOptions<undefined>) {
  return useT("backend", opt);
}
