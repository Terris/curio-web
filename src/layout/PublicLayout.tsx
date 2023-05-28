import {
  Logo,
  Main,
  Masthead,
  styled,
  Text,
  ThemeToggle,
  UserDropdownMenu,
  UtilityNav,
} from "@/ui";
import Link from "next/link";

interface PublicLayoutProps {
  children: React.ReactNode;
}

export default function PublicLayout({ children }: PublicLayoutProps) {
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

export function getPublicLayout(page: React.ReactElement) {
  return <PublicLayout>{page}</PublicLayout>;
}
