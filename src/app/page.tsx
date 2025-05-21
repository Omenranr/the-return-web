import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { auth } from "~/server/auth";      // ← path to  your auth helper
import CookieBanner from './_components/CookieBanner';  // client component
import Navbar from './_components/NavBar';
import Background from './_components/Background';
import { siTwitch, siInstagram, siYoutube, siTiktok } from 'simple-icons/icons';

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
    <div className="text-white">
    <Background />
      {/* ───────────────────────── Navigation (distinct colour) ───────────────────────── */}
      <Navbar />
      <section className="relative z-10 py-12 px-6 md:px-12">
        <h2 className="mb-10 text-center text-3xl font-extrabold">
          Comment rejoindre <span className="text-orange-500">The&nbsp;Return</span> ?
        </h2>

        {/* ligne horizontale décorative */}
        <div className="absolute inset-x-6 md:inset-x-12 lg:left-1/2 lg:-translate-x-1/2 top-[90px] lg:top-1/2 lg:-translate-y-1/2 h-px lg:w-[70%] bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />

        <ol className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8 max-w-5xl mx-auto text-center">
          {[
            { n: 1, label: "Rejoindre le Discord" },
            { n: 2, label: "Se connecter au siteweb" },
            { n: 3, label: "Remplir le background" },
            { n: 4, label: "Passer la whitelist" },
          ].map(({ n, label }) => (
            <li
              key={n}
              className="relative flex flex-col items-center w-full lg:w-1/4 space-y-3"
            >
              <span className="grid h-14 w-14 place-items-center rounded-full bg-orange-500 text-xl font-bold shadow-lg">
                {n}
              </span>
              <p className="max-w-[10rem] lg:max-w-none leading-snug">{label}</p>
            </li>
          ))}
        </ol>
      </section>
      {/* ───────────────────────── Hero ───────────────────────── */}
      <main className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-[minmax(0,1fr)_28rem] gap-y-16 lg:gap-x-24 px-6 md:px-12 pt-24 pb-32">
        {/* ── Left copy column ── */}
        <section className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight max-w-2xl">
            Rejoignez <span className="text-orange-500">The Return RP</span>, le meilleur serveur GTA&nbsp;RP français sur{' '}
            <span className="text-orange-500">FiveM</span>
          </h1>

          <ul className="space-y-3">
            {[
              'Plein de contenus exclusifs',
              'Une communauté de passionnés',
              'Un staff mature et bienveillant',
              'Un serveur a votre image',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-orange-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p>
            Si vous êtes à la recherche d’une expérience  de grande qualité sur un serveur GTA RP français, The Return RP est là pour répondre à vos attentes. Notre serveur est conçu pour offrir une immersion totale dans l’univers de Grand Theft Auto, avec des scénarios et des missions passionnants, une économie dynamique, et un Lore de folie. 
          </p>

          <p className="text-2xl md:text-3xl font-bold">
            Votre aventure commence ici !
          </p>
        </section>

        {/* ── Right statistics card ── */}
        <aside className="w-full">
          <div className="rounded-xl bg-white/5 backdrop-blur p-8 shadow-lg border border-white/10">
            <Image src="/nous-rejoindre.webp" alt="Nous rejoindre" width={240} height={120} className="mx-auto mb-6" />

            <p className="text-center mb-6">
            Clique sur se connecter, envoi ton background et rejoins le Channel Douane afin de passer la WL.{' '} <br/>
              <span className="font-bold">Nous t&apos;attendons 😉</span>
            </p>

            <div>
              <Link
                href="https://discord.gg/6cYYUEDhCQ"
                className="mt-6 block w-full rounded-md bg-[#5865F2] text-white text-center py-2 font-semibold hover:bg-[#4752c4] transition-colors"
                target='_blank'
              >
                ➤ Rejoindre le Serveur
              </Link>
              <div className="flex justify-center gap-4 mt-4">
                <a href="https://www.twitch.tv/thereturn_official" target="_blank" rel="noopener noreferrer">
                  <svg role="img" viewBox="0 0 24 24" width={24} height={24}>
                    <path d={siTwitch.path} fill="#9146FF" />
                  </svg>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <svg role="img" viewBox="0 0 24 24" width={24} height={24}>
                    <path d={siInstagram.path} fill="#E4405F" />
                  </svg>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                  <svg role="img" viewBox="0 0 24 24" width={24} height={24}>
                    <path d={siYoutube.path} fill="#FF0000" />
                  </svg>
                </a>
                <a href="http://tiktok.com/@thereturnwl" target="_blank" rel="noopener noreferrer">
                  <svg role="img" viewBox="0 0 24 24" width={24} height={24}>
                    <path d={siTiktok.path} fill="#000000" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </aside>
      </main>

      {/* ───────────────────────── Cookie banner ───────────────────────── */}
      <CookieBanner />
    </div>
  );
}
