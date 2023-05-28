import { RiShieldUserFill } from "react-icons/ri";
import { useSession, signIn, signOut } from "next-auth/react";
import { styled } from "../stitches.config";
import { TextButton } from "../TextButton";
import { DropdownMenu } from "../DropdownMenu";
import Link from "next/link";

export const UserDropdownMenu = () => {
  const { status } = useSession();
  if (status === "loading") return null;
  return (
    <>
      {status === "authenticated" ? (
        <DropdownMenu>
          <DropdownMenu.Trigger>
            <RiShieldUserFill size={20} />
          </DropdownMenu.Trigger>
          <DropdownMenu.Menu alignRight>
            <MenuItemsWrapper>
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
