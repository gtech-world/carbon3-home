import { IsMobileProvider, ToastProvider, UserProvider } from "@components/common/context";
import { Toast } from "@components/common/toast";
import "@lib/env";
import { Open_Sans } from "@next/font/google";
import classNames from "classnames";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect } from "react";
import "../styles/globals.css";
import i18n from "i18next";
import { initReactI18next, I18nextProvider } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { useToggle } from "react-use";
import { LoadingFull } from "@components/common/loading";

const open_sans = Open_Sans({
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "auto",
  preload: true,
  variable: "--open-sans",
});

const font_classes = [open_sans].map((f) => f.variable).join(" ");

function WrapI18nProvider(p: { children: React.ReactNode }) {
  const [inited, setInited] = useToggle(false);
  useEffect(() => {
    i18n
      .use(Backend)
      .use(LanguageDetector)
      .use(initReactI18next)
      .init({})
      .then(() => setInited(true));
  });
  if (!inited) return <LoadingFull />;
  return <I18nextProvider i18n={i18n}>{p.children}</I18nextProvider>;
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
      <WrapI18nProvider>
        <ToastProvider>
          <IsMobileProvider>
            <UserProvider>
              <Component {...pageProps} />
            </UserProvider>
          </IsMobileProvider>
          <Toast />
        </ToastProvider>
      </WrapI18nProvider>
    </div>
  );
}
