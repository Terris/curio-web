import { signOut } from "next-auth/react";

export default function DashboardPage({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <button key="signOut" onClick={() => signOut()}>
        Sign Out
      </button>
      <div>
        <p>Dashboard</p>
      </div>
    </>
  );
}
