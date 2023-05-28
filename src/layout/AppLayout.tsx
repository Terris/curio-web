import { useRouter } from "next/router";
import { UtilityNav, Logo, Masthead, Main } from "@/ui";
import Link from "next/link";
import { useAppAuthorization } from "@/hooks/useAppAuthorization";

interface AppLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  const router = useRouter();
  useAppAuthorization({ onUnauthorized: () => router.replace("/") });

  return (
    <>
      <Masthead>
        <Link href="/">
          <Logo />
        </Link>
        <UtilityNav />
      </Masthead>
      <Main>{children}</Main>
    </>
  );
}

export function getAppLayout(page: React.ReactElement) {
  return <AppLayout>{page}</AppLayout>;
}
