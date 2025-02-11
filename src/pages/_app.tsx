import "@/styles/global.scss";
import type { AppProps } from "next/app";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "@/styles/theme";
import { IndexProvider } from "@/context/IndexContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <IndexProvider>
          <Component {...pageProps} />
        </IndexProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default MyApp;
