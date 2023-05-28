import { useSession } from "next-auth/react";
import { styled } from "../stitches.config";
import { ThemeToggle } from "../ThemeToggle";
import { UserDropdownMenu } from "../UserDropdownMenu";

export function UtilityNav() {
  const { status: sessionStatus } = useSession();
  const iconSize = 20;

  if (sessionStatus === "loading") return null;
  return (
    <Nav>
      <ThemeToggle iconSize={iconSize} />
      <UserDropdownMenu iconSize={iconSize} />
    </Nav>
  );
}

const Nav = styled("nav", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "0.75rem",
});
