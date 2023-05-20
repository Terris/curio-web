"use client";
import { signOut } from "next-auth/react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <button key="signOut" onClick={() => signOut()}>
        Sign Out
      </button>
      <div>{children}</div>
    </>
  );
}
