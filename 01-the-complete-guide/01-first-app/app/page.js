import Link from "next/link";
import Header from "@/components/header";

export default function Home() {
  console.log("Hello from the Home page!");
  return (
    <main>
      <Header />
      <p>🔥 Let&apos;s get started! 🔥</p>
      <p>
        <Link href="awesome">Awesome</Link>
      </p>
    </main>
  );
}
