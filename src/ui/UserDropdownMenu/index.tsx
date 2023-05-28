import { RiShieldUserFill } from "react-icons/ri";
import { useSession, signIn, signOut } from "next-auth/react";
import { styled } from "../stitches.config";
import { TextButton } from "../TextButton";
import { DropdownMenu } from "../DropdownMenu";
import Link from "next/link";
import { IconButton } from "../IconButton";
import { useRole } from "@/hooks/useRole";

export interface UserDropdownMenuProps {
  iconSize?: number;
}

export const UserDropdownMenu = ({ iconSize = 20 }: UserDropdownMenuProps) => {
  const { status: sessionStatus } = useSession();
  const { hasRole } = useRole();

  if (sessionStatus === "loading") return null;

  return (
    <>
      {sessionStatus === "authenticated" ? (
        <DropdownMenu>
          <DropdownMenu.Trigger>
            <IconButton>
              <RiShieldUserFill size={iconSize} />
            </IconButton>
          </DropdownMenu.Trigger>
          <DropdownMenu.Menu alignRight>
            <MenuItemsWrapper>
              {hasRole("admin") && (
                <MenuItem>
                  <Link href="/admin">Admin</Link>
                </MenuItem>
              )}
              <MenuItem>
                <Link href="/settings">User Settings</Link>
              </MenuItem>
              <MenuItem onClick={() => signOut()}>Sign Out</MenuItem>
            </MenuItemsWrapper>
          </DropdownMenu.Menu>
        </DropdownMenu>
      ) : (
        <TextButton onClick={() => signIn()}>Sign In</TextButton>
      )}
    </>
  );
};

const MenuItemsWrapper = styled("div", {
  padding: "1rem",
  background: "$gray4",
  borderRadius: "0.25rem",
  display: "flex",
  flexDirection: "column",
});

const MenuItem = styled(TextButton, {
  whiteSpace: "nowrap",
  borderRadius: "0.25rem",
  textAlign: "left",
  "&:hover": {
    background: "$gray5",
  },
});
