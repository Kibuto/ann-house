import Head from "next/head";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import "../styles/container.scss";
import dynamic from "next/dynamic";

const LayoutsWithNoSSR = dynamic(() => import("@/components/Layouts"), {
  ssr: false,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Ann House</title>
        <meta name="description" content="Ann house" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LayoutsWithNoSSR>
        <Component {...pageProps} />
      </LayoutsWithNoSSR>
    </>
  );
}

export default MyApp;
