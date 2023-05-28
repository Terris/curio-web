import { styled, Text, UserDropdownMenu } from "@/ui";

interface PublicLayoutProps {
  children: React.ReactNode;
}

export default function PublicLayout({ children }: PublicLayoutProps) {
  return (
    <>
      <Masthead>
        <Text as="h1" size={1}>
          Curio
        </Text>
        <Nav>
          <UserDropdownMenu />
        </Nav>
      </Masthead>
      <Main>{children}</Main>
    </>
  );
}

export function getPublicLayout(page: React.ReactElement) {
  return <PublicLayout>{page}</PublicLayout>;
}

const Nav = styled("nav", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const Masthead = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1rem",
});

export const Main = styled("main", {
  padding: "1rem",
});
