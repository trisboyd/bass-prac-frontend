import { ThemeProvider } from "@mui/material";
import theme from "../../styles/theme";
import CssBaseline from "@mui/material/CssBaseline";
import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
