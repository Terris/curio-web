import { Html, Head, Main, NextScript } from "next/document";
import { getCssText, reset, globalStyles } from "@/ui";

const getResetAndCss = () => {
  const css = getCssText();
  reset();
  globalStyles();
  return css;
};
export default function Document() {
  return (
    <Html>
      <Head>
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getResetAndCss() }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
