import { getAppLayout } from "@/layout/AppLayout";
import { Text } from "@/ui";

export default function DashboardPage({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Text as="h2" size={4}>
        Dashboard
      </Text>
    </>
  );
}

DashboardPage.getLayout = getAppLayout;
