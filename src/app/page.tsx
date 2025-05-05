import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation'
import { auth } from "~/server/auth";      // ← path to  your auth helper
import CookieBanner from './_components/CookieBanner'  // client component

/**
 * Landing page – updated: distinct top‑bar colour for the navbar so it stands
 * out from the deeper background gradient (matching the reference mock‑up).
 */
export default async function Home() {

  const session = await auth()
  if (session?.user) {
    // user already signed‑in → go straight to dashboard
    redirect('/dashboard')
  }

  return (
    <div className="absolute inset-0 -z-20 bg-gradient-to-br from-[#3200ff]/40 via-[#1d008e]/60 to-[#12004a]/90 text-white" >

    {/* Motif répété (place ton .svg/.webp dans /public) */}
    <div className="absolute inset-0 -z-10 
                    bg-[url('/background.webp')]    /* ↖ change le nom si besoin  */
                    opacity-80 mix-blend-overlay
                    pointer-events-none select-none" />



      {/* ───────────────────────── Navigation (distinct colour) ───────────────────────── */}
      <header className="relative z-20 bg-[#1b0068]/95 shadow-lg backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-12 py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="The Return RP" width={70} height={20} priority />
          </Link>

          {/* Desktop nav links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-wide">
            {['Accueil', 'The Return', 'Jouer', 'Réglement', 'Contact'].map((label) => (
              <Link
                key={label}
                href={`#${label.toLowerCase()}`}
                className="relative after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:bg-orange-500 after:scale-x-0 after:transition-transform hover:after:scale-x-100"
              >
                {label}
              </Link>
            ))}

            {/* Discord icon */}
            <Link href="https://discord.gg/" className="text-2xl">
              <Image src="/discord.svg" alt="" width={40} height={40} />
            </Link>

            {/* CTA */}
            <Link
              href="/signin"
              className="ml-2 rounded-md bg-orange-500 px-4 py-2 font-semibold hover:bg-orange-400 transition-colors whitespace-nowrap"
            >
              Se connecter
            </Link>
          </nav>
        </div>
      </header>

      {/* ───────────────────────── Hero ───────────────────────── */}
      <main className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-[minmax(0,1fr)_28rem] gap-y-16 lg:gap-x-24 px-6 md:px-12 pt-24 pb-32">
        {/* ── Left copy column ── */}
        <section className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight max-w-2xl">
            Rejoignez <span className="text-orange-500">The Return RP</span>, le meilleur serveur GTA&nbsp;RP français sur{' '}
            <span className="text-orange-500">FiveM</span>
          </h1>

          <p className="text-xl font-semibold">
            Rejoignez les <span className="text-orange-400">8 115&nbsp;inscrits</span>&nbsp;!
          </p>

          <ul className="space-y-3">
            {[
              'Plein de contenus exclusifs',
              'Une communauté de passionnés',
              'Un staff mature et bienveillant',
              'Déjà 22 059 personnages créés !',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-orange-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p>
            Si vous êtes à la recherche d’une expérience de jeu multijoueur de qualité supérieure sur un serveur GTA&nbsp;RP
            français, The Return RP est là pour répondre à vos attentes. Notre serveur est conçu pour offrir une immersion
            totale dans l’univers de Grand Theft Auto, avec des scénarios et des missions passionnants, une économie
            dynamique, et des véhicules personnalisés.
          </p>

          <p className="font-semibold">
            Nous souhaitons offrir aux joueurs le meilleur RP possible sur notre serveur&nbsp;GTAV&nbsp;!
          </p>
        </section>

        {/* ── Right statistics card ── */}
        <aside className="w-full">
          <div className="rounded-xl bg-white/5 backdrop-blur p-8 shadow-lg border border-white/10">
            <Image src="/nous-rejoindre.webp" alt="Nous rejoindre" width={240} height={120} className="mx-auto mb-6" />

            <p className="text-center mb-6">
              Jouez sur GTA&nbsp;5 via FiveM dès maintenant et rejoignez les{' '}
              <span className="font-bold">249&nbsp;joueurs</span> connectés actuellement&nbsp;!
            </p>

            <div>
              <h3 className="text-center font-bold mb-2">Statistiques</h3>
              <p className="text-center text-sm mb-4">Déjà 22 059 personnages créés !</p>

              <p className="text-sm mb-2 font-semibold">Répartition</p>
              <div>
                <p className="text-xs mb-1">Femmes / Hommes / Autres</p>
                <div className="h-2.5 w-full rounded-full bg-white/20 overflow-hidden">
                  <div className="h-full bg-pink-500" style={{ width: '30%' }} />
                  <div className="h-full bg-cyan-500" style={{ width: '63%' }} />
                  <div className="h-full bg-green-500" style={{ width: '7%' }} />
                </div>
              </div>

              <Link
                href="fivem://connect/spirit-rp"
                className="mt-6 block w-full rounded-md bg-lime-500 text-center py-2 font-semibold hover:bg-lime-400 transition-colors"
              >
                ➤ Lancer FiveM
              </Link>
              <p className="mt-2 text-center text-xs text-lime-300">The Return</p>
            </div>
          </div>
        </aside>
      </main>

      {/* ───────────────────────── Cookie banner ───────────────────────── */}
      <CookieBanner />
    </div>
  );
}
