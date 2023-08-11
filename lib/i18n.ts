import { SupportLngs } from "@components/const";
import I18next from "i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
const ns = ["frontend", "backend"];

import zhCNbackend from "@public/locale/zh-CN-backend.json";
import zhCNfrontend from "@public/locale/zh-CN-frontend.json";

I18next
  // .use(I18NextChainedBackend)
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next)
  .init({
    initImmediate: false,
    load: "currentOnly",
    preload: SupportLngs,
    supportedLngs: SupportLngs,
    ns: ns,
    fallbackLng: SupportLngs[0],
    defaultNS: ns[0],
    lng: "zh-CN",
    resources: {
      "zh-CN": {
        frontend: zhCNfrontend,
        backend: zhCNbackend,
      },
    },
    react: {
      useSuspense: false,
    },
  });

export const i18n = I18next;
