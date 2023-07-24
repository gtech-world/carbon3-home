import { SupportLngs } from "@components/const";
import i18next from "i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import I18NextHttpBackend from "i18next-http-backend";
import { I18nextProviderProps, initReactI18next } from "react-i18next";
import I18NextChainedBackend from "i18next-chained-backend";
import I18NextLocalStorageBackend from "i18next-localstorage-backend";

export const i18n = i18next;
export async function initI18n() {
  const start = new Date().getTime();
  return await new Promise<I18nextProviderProps["i18n"]>((resolve) => {
    const ns = ["frontend", "backend"];
    i18n
      .use(I18NextChainedBackend)
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
        backend: {
          backends: [I18NextLocalStorageBackend, I18NextHttpBackend],
          backendOptions: [
            {
              expirationTime: 1 * 60 * 60 * 1000, // 1 hours
            },
            {
              loadPath: "https://static-i18n.gtech-cn.co/I18N/{{lng}}/{{ns}}.json",
              crossDomain: true,
            },
          ],
        },
      });
    resolve(i18n);
    console.info("initI18n:", new Date().getTime() - start);
    i18n.on("loaded", (data) => {
      let loaded = 0;
      SupportLngs.forEach((lng) => {
        ns.forEach((ns) => {
          if (data[lng] && data[lng][ns]) loaded++;
        });
      });
      if (loaded === SupportLngs.length * ns.length) {
        // resolve(i18n);
        const data = i18n.store.data["zh-CN"].frontend as any;
        if (data) data["{{value}} with authenticated account*"] = "使用经认证的专业账户*</br>{{value}}";
      }
    });
  });
}
