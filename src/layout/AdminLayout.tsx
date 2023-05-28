import { useRouter } from "next/router";
import {
  styled,
  Text,
  TextLink,
  UserDropdownMenu,
  ThemeToggle,
  UtilityNav,
  Logo,
  Masthead,
  Main,
} from "@/ui";
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
      <Masthead>
        <Link href="/">
          <Logo />
        </Link>
        <AdminNav>
          <AdminLink href="/admin">Admin</AdminLink>
          <AdminLink href="/admin/users">Users</AdminLink>
        </AdminNav>
        <UtilityNav />
      </Masthead>
      <Main>{children}</Main>
    </>
  );
}

export function getAdminLayout(page: React.ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
}

const AdminNav = styled("nav", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "0 auto 0 3rem",
});

const AdminLink = styled(TextLink, {
  padding: "0 1rem",
});
