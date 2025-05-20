import { auth } from '~/server/auth';
import { redirect } from 'next/navigation';
import { db } from "~/server/db";
import { backgrounds } from "~/server/db/schema";
import { eq } from "drizzle-orm";
// Global components:
import Navbar from '../_components/NavBar';
import Background from '../_components/Background';
// Local components:
import Status from './components/Status';
import BackgroundForm from './components/BackgroundForm';
// External components:
// import Image from 'next/image';
// import Link from 'next/link';


export default async function DashboardPage() {
  const session = await auth();           // executes on the server
  if (!session) redirect('/');            // blocks render & returns 302

  /* fetch background if it exists */
  const existing = (
    await db
      .select()
      .from(backgrounds)
      .where(eq(backgrounds.userId, session.user.id))
      .limit(1)
  )[0] ?? null;

  /* ─────────────── main UI ─────────────── */
  return (
    <div className="text-white">
      {/* background gradient & pattern */}
      <Background />

      {/* top bar */}
      <Navbar />

      {/* page content */}
      <main className="mx-auto max-w-7xl px-6 md:px-10 pt-10 pb-24 space-y-10">

        {/* unsynchronised banner */}
        <Status userImage={session.user.image ?? null} />
        <BackgroundForm existing={existing} />
      </main>
    </div>
  )
}
