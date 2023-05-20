import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export default async function Home() {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <main>
      <h2>Home</h2>
    </main>
  );
}
