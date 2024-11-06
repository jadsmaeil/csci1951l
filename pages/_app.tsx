import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>CSCI 1951L - Blockchains and Cryptocurrencies</title>
        <meta
          name="description"
          content="The course website for CSCI 1951L - Blockchains and Cryptocurrencies"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
