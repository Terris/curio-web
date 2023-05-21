"use client";
import { styled } from "@stitches/react";
import { signIn, signOut, useSession } from "next-auth/react";
import { TextButton } from "../../ui/TextButton";

export function Navigation() {
  const { data } = useSession();
  return (
    <Nav>
      {data ? (
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
