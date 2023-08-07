import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { description, title as ShubhamTitle, Meta } from "../components/Meta";

function MyApp({ Component, pageProps }: AppProps) {
  const keywords =
    "shubham patil,shubham patil coder,shubham patil coding,shubham patil codeday,shubhampatil.dev,shubham patil blog,shubham patil website";
  return (
    <>
      <Head>
        <meta name="keywords" content={keywords} />
        <link rel="apple-touch-icon" sizes="180x180" href="/logo.png" />
        <link rel="icon" type="image/svg+xml" href="/logo.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/logo.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/logo.png" />
        <link rel="mask-icon" href="/logo.png" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#000000" />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:title" content={ShubhamTitle} />
        <meta property="og:description" content={description} />

        <title>Shubham Patil</title>
        <meta name="description" content={description} />

        <Meta />
      </Head>
      <div className="cursor-default">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
