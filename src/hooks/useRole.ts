import { useSession } from "next-auth/react";

export const useRole = () => {
  const { data: session } = useSession();

  const isAdmin = session?.user?.isAdmin;

  let roles: string[] = [];

  if (isAdmin) {
    roles.push("admin");
  }

  const hasRole = (role: string) => roles.includes(role);

  return { roles, hasRole };
};
