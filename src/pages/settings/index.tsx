import { getPublicLayout } from "@/layout/PublicLayout";
import { Text } from "@/ui";

export default function SettingsPage() {
  return (
    <Text size={4} as="h2">
      Settings
    </Text>
  );
}

SettingsPage.getLayout = getPublicLayout;
