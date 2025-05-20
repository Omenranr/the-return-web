import { auth } from "~/server/auth";
import { notFound } from "next/navigation";
import Background from "~/app/_components/Background";
import Navbar from "~/app/_components/NavBar";
import BackgroundsLoader from "./BackgroundLoader";

export default async function BackgroundsPage() {
  const session = await auth();
  if (!session || session.user?.role !== "ADMIN") notFound();

  return (
    <div className="text-white">
      <Background />
      <Navbar />
      <main className="mx-auto max-w-7xl px-6 md:px-10 pt-12 pb-24 space-y-10">
        <BackgroundsLoader />
      </main>
    </div>
  );
}