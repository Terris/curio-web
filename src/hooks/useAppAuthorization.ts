import { useSession } from "next-auth/react";

interface UseAppAuthorizationProps {
  onUnauthorized?: () => void;
}

export const useAppAuthorization = ({
  onUnauthorized,
}: UseAppAuthorizationProps) => {
  const { status, data: session } = useSession({
    required: true,
    onUnauthenticated() {
      if (onUnauthorized) onUnauthorized();
    },
  });
  return {
    status,
    session,
  };
};
