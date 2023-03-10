import { initStore, Store, StoreProvider } from "@components/common/context";
import { HeaderTip } from "@components/common/headerTip";
import { LoadingFull } from "@components/common/loading";
import { modalRootRef } from "@components/common/modal";
import { Toast } from "@components/common/toast";
import { SupportLngs } from "@components/const";
import "@lib/env";
import { useAutoAnim } from "@lib/hooks/useAutoAnim";
import { Open_Sans } from "@next/font/google";
import classNames from "classnames";
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect, useState } from "react";
import { I18nextProvider, I18nextProviderProps, initReactI18next } from "react-i18next";
import "../styles/globals.css";

const open_sans = Open_Sans({
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "auto",
  preload: false,
  variable: "--open-sans",
});

const font_classes = [open_sans].map((f) => f.variable).join(" ");

async function initI18n() {
  return await new Promise<I18nextProviderProps["i18n"]>((resolve) => {
    const ns = ["frontend", "backend"];
    i18n
      .use(Backend)
      .use(LanguageDetector)
      .use(initReactI18next)
      .init({
        initImmediate: false,
        load: "currentOnly",
        preload: SupportLngs,
        supportedLngs: SupportLngs,
        ns: ns,
        fallbackLng: SupportLngs[0],
        defaultNS: ns[0],
        backend: {
          loadPath: "https://static-i18n.gtech.world/I18N/{{lng}}/{{ns}}.json",
          crossDomain: true,
        },
      });
    i18n.on("loaded", (data) => {
      let loaded = 0;
      SupportLngs.forEach((lng) => {
        ns.forEach((ns) => {
          if (data[lng] && data[lng][ns]) loaded++;
        });
      });
      if (loaded === SupportLngs.length * ns.length) {
        resolve(i18n);
        const data = i18n.store.data["zh-CN"].frontend as any;
        if (data) data["{{value}} with authenticated account*"] = "??????????????????????????????*</br>{{value}}";
      }
    });
  });
}

function ModalRoot() {
  const ref = useAutoAnim<HTMLDivElement>("r-side");
  useEffect(() => {
    modalRootRef.current = ref.current;
  }, [ref]);
  return <div ref={ref} id="modal_root" style={{ position: "absolute", top: 0, right: 0 }} />;
}

function InitProvider(p: { children: React.ReactNode }) {
  const [data, setData] = useState<[I18nextProviderProps["i18n"], Store]>();
  useEffect(() => {
    Promise.all([initI18n(), initStore()]).then(setData);
  }, []);
  if (!data) return <LoadingFull />;
  const [i18n, store] = data;
  return (
    <I18nextProvider i18n={i18n}>
      <StoreProvider init={store}>{p.children}</StoreProvider>
    </I18nextProvider>
  );
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div suppressHydrationWarning id="__app" className={classNames("App font-OpenSans relative", font_classes)}>
      <Head>
        <title>AICD</title>
        <meta name="description" content="AICD Home" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <InitProvider>
        <HeaderTip/>
        <Component {...pageProps} />
        <Toast />
      </InitProvider>
      <ModalRoot />
    </div>
  );
}
