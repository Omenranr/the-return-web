import Image from "next/image";
import Link from "next/link";
import { auth } from "~/server/auth"; // ← adjust the path if different

/**
 * Re‑usable top navigation bar (v2)
 * – Switched back to `gap-*` utilities because they worked reliably on your
 *   build, whereas `space-x-*` didn’t seem to take effect (likely a Tailwind
 *   version / compilation quirk).
 * – Keeps flex layout: logo | nav‑group (links + Discord + CTA)
 */
export default async function Navbar() {
  const session = await auth();

  const navLinks = [
    { label: "Accueil", href: "/#accueil" },
    { label: "The Return", href: "/#the-return" },
    { label: "Jouer", href: "/#jouer" },
    { label: "Règlement", href: "/rules" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <header className="relative z-20 bg-[#1b0068]/95 shadow-lg backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-12 py-4">
        {/* ── Logo ── */}
        <Link href="/" className="flex items-center gap-2">
          <Image className="rounded-full object-cover" src="/logo.jpg" alt="The Return RP" width={70} height={20} priority />
        </Link>

        {/* ── Navigation group ── */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-wide">
          {/* Primary nav links */}
          {navLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="relative after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:bg-orange-500 after:scale-x-0 after:transition-transform hover:after:scale-x-100"
            >
              {label}
            </Link>
          ))}

          {/* Discord icon */}
          <Link href="https://discord.gg/6cYYUEDhCQ" className="text-2xl">
            <Image src="/discord.svg" alt="Discord" width={40} height={40} />
          </Link>

          {/* CTA: Se connecter (only when not signed‑in) */}
          {!session?.user && (
            <Link
              href="/signin"
              className="rounded-md bg-orange-500 px-4 py-2 font-semibold hover:bg-orange-400 transition-colors whitespace-nowrap"
            >
              Se connecter
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
