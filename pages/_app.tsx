import "@lib/env";
import { defStore, initStore, Store, StoreProvider } from "@components/common/context";
import { HeaderTip } from "@components/common/headerTip";
import { modalRootRef } from "@components/common/modal";
import { Toast } from "@components/common/toast";
import { MI18Context } from "@lib/hooks/useT";
import { initI18n } from "@lib/i18n";
import { Open_Sans } from "@next/font/google";
import classNames from "classnames";
import moment from "moment";
import type { AppProps } from "next/app";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { I18nextProviderProps } from "react-i18next";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import "../styles/globals.css";

const open_sans = Open_Sans({
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "auto",
  preload: false,
  variable: "--open-sans",
});

const font_classes = [open_sans].map((f) => f.variable).join(" ");

function InitProvider(p: { children: React.ReactNode }) {
  const [_i18n, setI18n] = useState<I18nextProviderProps["i18n"]>();
  const [_store, setStore] = useState<Store>(defStore);
  useEffect(() => {
    modalRootRef.current = document.body as any;
    initI18n().then(setI18n);
    initStore().then(setStore);
  }, []);
  useEffect(() => {
    _i18n?.language === "zh-CN" && moment.locale("zh-CN");
  }, [_i18n]);
  return (
    <MI18Context.Provider value={_i18n}>
      <StoreProvider init={_store}>{p.children}</StoreProvider>
    </MI18Context.Provider>
  );
}

function InitToolTip() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  return isMounted ? (
    <Tooltip
      className="z-[999999] break-all shadow-[0_10px_10px_0_rgba(0,0,0,0.3)] border border-[#eee] max-w-[22.5rem]"
      style={{ backgroundColor: "rgb(255, 255, 255,1)", opacity: 1, color: "#222" }}
      id="tooltip"
    />
  ) : null;
}
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div suppressHydrationWarning id="__app" className={classNames("App font-OpenSans relative", font_classes)}>
      <Head>
        <title>AICP</title>
        <meta name="description" content="AICP Home" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <InitProvider>
        <HeaderTip />
        <Component {...pageProps} />
        <Toast />
      </InitProvider>
      <InitToolTip />
    </div>
  );
}
