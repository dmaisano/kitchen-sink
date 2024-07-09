import "@repo/ui/global.css";
import Head from "next/head";

import type { AppProps } from "next/app";

export default function NextApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
