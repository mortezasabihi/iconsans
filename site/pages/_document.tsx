import { Html, Head, Main, NextScript } from "next/document";
import { roboto } from "../styles/theme";

export default function Document() {
  return (
    <Html lang="en" className={roboto.className}>
      <Head>
        <title>Iconsans - +320 Free Icons for your next project</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
