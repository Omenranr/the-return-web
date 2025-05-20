'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function Navbar() {
  const { data: session, status } = useSession();
  const isAdmin = session?.user?.role === 'ADMIN';
  const [open, setOpen] = useState(false);

  const navLinks = [
    { label: 'Accueil', href: '/' },
    { label: 'Règlement', href: '/rules' },
    { label: 'Media', href: '/media' },
    ...(isAdmin ? [{ label: 'Backgrounds', href: '/backgrounds' }] : []),
  ] as const;

  return (
    <header className="relative z-20 bg-[#1b0068]/95 shadow-lg backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-12 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.jpg"
            alt="The Return RP"
            width={70}
            height={20}
            priority
            className="rounded-full object-cover"
          />
        </Link>

        {/* Hamburger ─ shows on < lg */}
        <button
          aria-label="Ouvrir la navigation"
          className="lg:hidden text-3xl text-white focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          {open ? '✕' : '☰'}
        </button>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-wide">
          {navLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="relative after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:bg-orange-500 after:scale-x-0 after:transition-transform hover:after:scale-x-100"
            >
              {label}
            </Link>
          ))}

          {/* Discord */}
          <Link
            href="https://discord.gg/6cYYUEDhCQ"
            target="_blank"
            className="text-2xl"
          >
            <Image src="/discord.svg" alt="Discord" width={40} height={40} />
          </Link>

          {/* Auth button */}
          {status === 'authenticated' ? (
            <button
              onClick={() => signOut({ callbackUrl: '/' })}
              className="rounded-md bg-orange-500 px-4 py-2 font-semibold hover:bg-orange-400 transition-colors whitespace-nowrap cursor-pointer"
            >
              Déconnexion
            </button>
          ) : (
            <button
              onClick={() => signIn()}
              className="rounded-md bg-orange-500 px-4 py-2 font-semibold hover:bg-orange-400 transition-colors whitespace-nowrap cursor-pointer"
            >
              Se connecter
            </button>
          )}
        </nav>
      </div>

      {/* Mobile drawer */}
      {open && (
        <nav className="lg:hidden px-6 pb-6 space-y-6 text-sm font-medium tracking-wide bg-[#1b0068]/95 shadow-md">
          {navLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              className="block"
            >
              {label}
            </Link>
          ))}

          <Link
            href="https://discord.gg/6cYYUEDhCQ"
            target="_blank"
            className="inline-flex items-center gap-2"
            onClick={() => setOpen(false)}
          >
            <Image src="/discord.svg" alt="" width={24} height={24} />
            Discord
          </Link>

          {/* Auth button */}
          {status === 'authenticated' ? (
            <button
              onClick={() => signOut({ callbackUrl: '/' })}
              className="w-full rounded-md bg-orange-500 px-4 py-2 font-semibold hover:bg-orange-400 transition-colors cursor-pointer"
            >
              Déconnexion
            </button>
          ) : (
            <button
              onClick={() => signIn()}
              className="w-full rounded-md bg-orange-500 px-4 py-2 font-semibold hover:bg-orange-400 transition-colors cursor-pointer"
            >
              Se connecter
            </button>
          )}
        </nav>
      )}
    </header>
  );
}
