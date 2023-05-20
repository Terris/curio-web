import { styled, getCssText, reset, globalStyles, Text } from "@/ui";
import { AuthProvider } from "../context/AuthProvider";
import { Masthead } from "@/layout";

export const metadata = {
  title: "Curio",
  description: "a curious app",
};

const getCssAndReset = () => {
  const css = getCssText();
  reset();
  return css;
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  globalStyles();
  return (
    <html lang="en">
      <head>
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssAndReset() }}
        />
      </head>
      <body>
        <AuthProvider>
          <Masthead />
          <Main>{children}</Main>
        </AuthProvider>
      </body>
    </html>
  );
}

const Main = styled("main", {
  padding: "1rem",
});
