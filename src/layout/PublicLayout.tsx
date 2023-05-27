import { styled, Text, TextButton } from "@/ui";
import { signIn, signOut, useSession } from "next-auth/react";

interface PublicLayoutProps {
  children: React.ReactNode;
}

export default function PublicLayout({ children }: PublicLayoutProps) {
  return (
    <>
      <Masthead />
      <Main>{children}</Main>
    </>
  );
}

export function getPublicLayout(page: React.ReactElement) {
  return <PublicLayout>{page}</PublicLayout>;
}

function Masthead() {
  return (
    <StyledMasthead>
      <Text as="h1" size={1}>
        Curio
      </Text>
      <Navigation />
    </StyledMasthead>
  );
}

export function Navigation() {
  const { status } = useSession();
  if (status === "loading") return null;
  return (
    <Nav>
      {status === "authenticated" ? (
        <TextButton onClick={() => signOut()}>Sign Out</TextButton>
      ) : (
        <TextButton onClick={() => signIn()}>Sign In</TextButton>
      )}
    </Nav>
  );
}

const Nav = styled("nav", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const StyledMasthead = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1rem",
});

export const Main = styled("main", {
  padding: "1rem",
});
