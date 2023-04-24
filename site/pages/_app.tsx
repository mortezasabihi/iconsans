import { ThemeProvider } from "@mui/material/styles";
import { AppProps } from "next/app";
import theme from "../styles/theme";
import CssBaseline from "@mui/material/CssBaseline";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
