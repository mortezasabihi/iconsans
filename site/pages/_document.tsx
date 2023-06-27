import { Html, Head, Main, NextScript } from "next/document";
import { roboto } from "../styles/theme";

export default function Document() {
  const favIcon =
    process.env.NODE_ENV === "production"
      ? "/iconsans/favicon.ico"
      : "/favicon.ico";

  return (
    <Html lang="en" className={roboto.className}>
      <Head>
        <title>Iconsans - +660 Free Icons for your next project</title>
        <link rel="shortcut icon" href={favIcon} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
