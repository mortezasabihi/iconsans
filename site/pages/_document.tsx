import { Html, Head, Main, NextScript } from "next/document";
import { roboto } from "../styles/theme";

export default function Document() {
  return (
    <Html lang="en" className={roboto.className}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
