import type { AppProps } from "next/app";
import { Stylesheet } from "@/ui";
import { AuthProvider } from "../context/AuthProvider";
import { Masthead, Main } from "@/template";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Masthead />
      <Main>
        <Component {...pageProps} />
      </Main>
    </AuthProvider>
  );
}
