import { IsMobileProvider, ToastProvider, UserProvider } from "@components/common/context";
import { Toast } from "@components/common/toast";
import "@lib/env";
import { Open_Sans } from "@next/font/google";
import classNames from "classnames";
import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";

const open_sans = Open_Sans({
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "auto",
  preload: true,
  variable: "--open-sans",
});

const font_classes = [open_sans].map((f) => f.variable).join(" ");

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div suppressHydrationWarning id="__app" className={classNames("App font-OpenSans relative", font_classes)}>
      <Head>
        <title>AICD</title>
        <meta name="description" content="AICD Home" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ToastProvider>
        <IsMobileProvider>
          <UserProvider>
            <Component {...pageProps} />
          </UserProvider>
        </IsMobileProvider>
        <Toast />
      </ToastProvider>
    </div>
  );
}
