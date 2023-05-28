import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { ApolloProvider } from "@apollo/client";
import { AuthProvider } from "../context/AuthProvider";
import { client } from "@/lib/apollo";
import { reset, globalStyles, lightTheme } from "@/ui";
import "./fonts.css";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  reset();
  globalStyles();

  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <ThemeProvider
      disableTransitionOnChange
      attribute="class"
      value={{ light: lightTheme.className, dark: "dark-theme" }}
      defaultTheme="system"
    >
      <AuthProvider>
        <ApolloProvider client={client}>
          {getLayout(<Component {...pageProps} />)}
        </ApolloProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
