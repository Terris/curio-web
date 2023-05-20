import { styled, getCssText, reset, globalStyles } from "@/components";
import { Navigation } from "../components/Navigation";
import { AuthProvider } from "../context/AuthProvider";

export const metadata = {
  title: "Curio",
  description: "a curious app",
};

const getCssAndReset = () => {
  const css = getCssText();
  reset();
  globalStyles();
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
          <Header>
            <h1>Curiograph </h1>
            <Navigation />
          </Header>
          <div>{children}</div>
        </AuthProvider>
      </body>
    </html>
  );
}

const Header = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});
