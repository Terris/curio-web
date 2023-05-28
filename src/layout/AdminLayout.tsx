import { useRouter } from "next/router";
import { styled, Text, TextLink, UserDropdownMenu } from "@/ui";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useAdminAuthorization } from "@/hooks/useAdminAuthorization";

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const router = useRouter();
  useAdminAuthorization({ onUnauthorized: () => router.replace("/") });

  return (
    <>
      <Masthead />
      <Main>{children}</Main>
    </>
  );
}

export function getAdminLayout(page: React.ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
}

function Masthead() {
  return (
    <StyledMasthead>
      <Text as="h1" size={1}>
        <Link href="/">Curio</Link>{" "}
        <Text as="span" weight="normal" css={{ color: "$gray9" }}>
          / Admin
        </Text>
      </Text>
      <AdminNav>
        <AdminLink href="/admin">Admin</AdminLink>
        <AdminLink href="/admin/users">Users</AdminLink>
      </AdminNav>
      <Navigation />
    </StyledMasthead>
  );
}

export function Navigation() {
  const { status } = useSession();
  if (status === "loading") return null;
  return (
    <UserNav>
      <UserDropdownMenu />
    </UserNav>
  );
}

const Nav = styled("nav", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const UserNav = styled(Nav, {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const AdminNav = styled(Nav, {
  margin: "0 auto 0 3rem",
});

const AdminLink = styled(TextLink, {
  padding: "0 1rem",
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
