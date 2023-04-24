import { ThemeProvider } from "@mui/material/styles";
import theme from "../styles/theme";
import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
