import { getAdminLayout } from "@/layout/AdminLayout";
import { Text } from "@/ui";

export default function AdminPage() {
  return (
    <>
      <Text size={2}>
        Transform your experiences into captivating stories, preserving the
        essence of your journey in a single, remarkable platform. Let your story
        unfold, one chapter at a time.
      </Text>
    </>
  );
}

AdminPage.getLayout = getAdminLayout;
