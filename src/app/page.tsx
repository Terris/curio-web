import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { Text } from "@/ui";

export default async function Home() {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <main>
      <Text>Curio.</Text>
      <Text>
        Unleash the power of your life&rsquo;s tapestry with Curio – the app
        that organizes your interests and transforms your experiences into
        captivating stories, preserving the essence of your journey in a single,
        remarkable platform. Download now and let your story unfold, one chapter
        at a time.
      </Text>
    </main>
  );
}
