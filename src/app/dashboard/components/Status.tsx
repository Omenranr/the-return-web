import { auth } from '~/server/auth';
import Image from 'next/image';
import Link from 'next/link';


export default async function Status() {
    const session = await auth();
    return (
        <>
            {/* unsynchronised banner */}
            <section className="flex items-center gap-6 rounded-lg bg-white/10 p-6">
                <div className="h-24 w-24 flex-shrink-0 rounded-full bg-[#0e0a3f] grid place-items-center">
                {session?.user?.image ? (
                    <Image src={session?.user?.image} alt="" width={128} height={128} />
                ) : (
                <div className="h-8 w-8 rounded-full bg-gray-400" />
                )}
                </div>
                <div className="flex-1 space-y-2">
                <h2 className="text-xl font-bold tracking-wide">Vous n&apos;avez pas encore rempli votre Background</h2>
                <p className="text-sm opacity-80">Pour passer la whitelist remplissez le Background de votre personnage RP.</p>
                </div>
                <Link
                href="fivem://connect/the-return-rp"
                className="rounded-md bg-lime-500 px-4 py-2 text-sm font-semibold hover:bg-lime-400 whitespace-nowrap"
                >
                Remplir le Background
                </Link>
            </section>
        </>
  )
}
