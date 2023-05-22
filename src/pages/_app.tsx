import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { AuthProvider } from "../context/AuthProvider";
import { Masthead, Main } from "@/template";
import { client } from "@/lib/apollo";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <ApolloProvider client={client}>
        <Masthead />
        <Main>
          <Component {...pageProps} />
        </Main>
      </ApolloProvider>
    </AuthProvider>
  );
}
