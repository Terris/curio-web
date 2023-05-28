import { getPublicLayout } from "@/layout/PublicLayout";
import { Text } from "@/ui";

export default function HomePage() {
  return (
    <Text size={4} as="h2">
      Settings
    </Text>
  );
}

HomePage.getLayout = getPublicLayout;
