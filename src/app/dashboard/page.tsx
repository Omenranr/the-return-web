'use client'

import { useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function DashboardPage() {
  const { data: session, status } = useSession()
  const router = useRouter()

  /* ─────────────── redirect signed‑out users ─────────────── */
  useEffect(() => {
    if (status === 'unauthenticated') router.replace('/')
  }, [status, router])

  if (status === 'loading' || status === 'unauthenticated') {
    return null // or a full‑screen loader
  }

  /* ─────────────── main UI ─────────────── */
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#241461] text-white">
      {/* background gradient & pattern */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-[#3200ff]/40 via-[#1d008e]/60 to-[#12004a]/90" />
      <div className="absolute inset-0 -z-10 bg-[url('/background.webp')] bg-repeat bg-[length:140px] opacity-10 mix-blend-overlay" />

      {/* top bar */}
      <header className="bg-[#311c8a]/95 backdrop-blur shadow-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <Link href="/">
            <Image src="/logo.png" alt="The Return RP" width={70} height={20} priority />
          </Link>

          <nav className="flex items-center gap-8 text-sm font-semibold">
            {["Acceuil", "The Return", "Jouer", "Réglement", "Contact"].map((item) => (
              <Link key={item} href={`/#${item.toLowerCase()}`} className="hover:text-orange-400">
                {item}
              </Link>
            ))}

            {/* Discord logo */}
            <Image src="/discord.svg" alt="Discord" width={28} height={28} />

            {/* sign‑out */}
            <button
              onClick={() => signOut({ redirect: true, callbackUrl: '/' })}
              className="rounded-md bg-orange-500 px-4 py-1.5 hover:bg-orange-400"
            >
              Déconnexion
            </button>
          </nav>
        </div>
      </header>

      {/* page content */}
      <main className="mx-auto max-w-7xl px-6 md:px-10 pt-10 pb-24 space-y-10">

        {/* unsynchronised banner */}
        <section className="flex items-center gap-6 rounded-lg bg-white/10 p-6">
          <div className="h-24 w-24 flex-shrink-0 rounded-full bg-[#0e0a3f] grid place-items-center">
            {session?.user?.image ? (
                <Image src={session?.user?.image} alt="" width={48} height={48} />
          ) : (
            <div className="h-8 w-8 rounded-full bg-gray-400" />
          )}
          </div>
          <div className="flex-1 space-y-2">
            <h2 className="text-xl font-bold tracking-wide">PERSONNAGE NON SYNCHRONISÉ</h2>
            <p className="text-sm opacity-80">Les informations de votre personnage seront affichées sur votre compte joueur.</p>
          </div>
          <Link
            href="fivem://connect/the-return-rp"
            className="rounded-md bg-lime-500 px-4 py-2 text-sm font-semibold hover:bg-lime-400 whitespace-nowrap"
          >
            Se connecter en jeu
          </Link>
        </section>

        {/* two‑column grid */}
        <div className="grid lg:grid-cols-[18rem_minmax(0,1fr)] gap-8">

          {/* left column (sidebar) */}
          <aside className="space-y-6">
            <div className="rounded-lg bg-white/10 p-6">
              <h3 className="mb-6 font-semibold text-center">Parrainage :</h3>

              <div className="mb-6 flex items-center justify-around text-center text-sm">
                <div>
                  <p className="text-2xl font-bold">0</p>
                  <p className="opacity-70">Filleuls actifs</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">0</p>
                  <p className="opacity-70">Filleul inactif</p>
                </div>
              </div>

              <ul className="space-y-4 text-sm">
                {[
                  'Voter',
                  'Les avantages VIP',
                  'Récupérer un personnage',
                  'Simulateur de farm',
                  'Règlement',
                  'FAQ',
                  'Boutique',
                  'Historique d’achats',
                  'Connexion FiveM',
                ].map((item) => (
                  <li
                    key={item}
                    className="flex cursor-pointer items-center gap-3 opacity-90 hover:text-orange-400"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* socials */}
            <div className="flex items-center justify-center gap-4 opacity-70">
              {['/fb.svg', '/ig.svg', '/tw.svg', '/yt.svg', '/tiktok.svg'].map((icon) => (
                <Image key={icon} src={icon} alt="" width={20} height={20} />
              ))}
            </div>
          </aside>

          {/* right column */}
          <section className="space-y-8">

            {/* invite friends */}
            <div className="rounded-lg bg-white/10 p-6 space-y-4">
              <h3 className="text-lg font-semibold">Parrainage : Gagnez plus en invitant vos amis !</h3>
              <p className="text-sm">
                Partagez votre lien de parrainage à vos amis et <b>gagnez 60 % en bonus</b> sur votre salaire en jeu.
              </p>

              <div className="flex items-center gap-2">
                <input
                  value="Action disponible après vous être Synchroniser."
                  readOnly
                  className="flex-1 rounded-md bg-[#292259] px-3 py-2 text-xs"
                />
                <button className="rounded-md bg-emerald-600/70 px-3 py-2 text-xs hover:bg-emerald-500/80">
                  Copier le lien
                </button>
              </div>

              <p className="text-xs opacity-70">
                Le bonus de parrainage est cumulable avec le statut VIP. Découvrez les avantages d’être VIP.
              </p>
            </div>

            {/* ranks */}
            <div className="rounded-lg bg-white/10 p-6">
              <h3 className="mb-6 text-center font-semibold">Les rangs de parrainage :</h3>

              <div className="grid gap-4 text-center text-sm font-medium md:grid-cols-4">
                {[
                  { label: 'Novice', colour: 'bg-sky-600', min: '< 5', bonus: '+ 10 %' },
                  { label: 'Bronze', colour: 'bg-amber-900', min: '≥ 5', bonus: '+ 15 %' },
                  { label: 'Argent', colour: 'bg-gray-300', min: '≥ 20', bonus: '+ 20 %' },
                  { label: 'Or', colour: 'bg-yellow-400', min: '≥ 50', bonus: '+ 60 %' },
                ].map((r) => (
                  <div key={r.label} className="space-y-2 rounded-lg bg-[#0f0c33] p-4">
                    <div className={`mx-auto h-10 w-10 rounded-full ${r.colour}`} />
                    <p>{r.label}</p>
                    <p className="text-xs opacity-70">{r.min} filleuls actifs</p>
                    <p className="mt-2 text-lg font-bold">{r.bonus}</p>
                    <p className="text-xs opacity-70">sur votre salaire</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
