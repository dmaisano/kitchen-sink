import "@repo/ui/global.css";

import type { AppProps } from "next/app";

export default function NextApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
