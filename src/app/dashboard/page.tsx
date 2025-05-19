import { auth } from '~/server/auth';
import { redirect } from 'next/navigation';
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
        <Status />
        <BackgroundForm />
      </main>
    </div>
  )
}
