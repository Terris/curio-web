"use client";
import { styled } from "@stitches/react";
import { signIn, signOut, useSession } from "next-auth/react";

export function Navigation() {
  const { data } = useSession();
  return (
    <nav>
      {data ? (
        <button onClick={() => signOut()}>Sign Out</button>
      ) : (
        <button onClick={() => signIn()}>Sign In</button>
      )}
    </nav>
  );
}

const Nav = styled("nav", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});
