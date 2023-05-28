import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

interface UseAdminAuthorizationProps {
  onUnauthorized?: () => void;
}

export const useAdminAuthorization = ({
  onUnauthorized,
}: UseAdminAuthorizationProps) => {
  const router = useRouter();
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
};
