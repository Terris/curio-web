import { getAppLayout } from "@/layout/AppLayout";
import { Text } from "@/ui";

export default function DashboardPage() {
  return (
    <>
      <Text as="h2" size={4}>
        Dashboard
      </Text>
    </>
  );
}

DashboardPage.getLayout = getAppLayout;
