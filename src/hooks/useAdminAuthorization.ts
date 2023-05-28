import { useSession } from "next-auth/react";
import { useEffect } from "react";

interface UseAdminAuthorizationProps {
  onUnauthorized?: () => void;
}

export const useAdminAuthorization = ({
  onUnauthorized,
}: UseAdminAuthorizationProps) => {
  const { status, data: session } = useSession({
    required: true,
    onUnauthenticated() {
      if (onUnauthorized) onUnauthorized();
    },
  });

  useEffect(() => {
    if (status === "loading") return;
    if (status === "authenticated" && !session?.user?.isAdmin) {
      if (onUnauthorized) onUnauthorized();
    }
  }, [status, session, onUnauthorized]);

  return { status, session };
};
