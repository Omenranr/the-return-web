'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';   // client-side hooks

export default function Navbar() {
  const { data: session, status } = useSession();                // watches auth state

  const navLinks = [
    { label: 'Accueil', href: '/#accueil' },
    { label: 'The Return', href: '/#the-return' },
    { label: 'Jouer', href: '/#jouer' },
    { label: 'Règlement', href: '/rules' },
    { label: 'Contact', href: '/#contact' },
  ];

  return (
    <header className="relative z-20 bg-[#1b0068]/95 shadow-lg backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-12 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.jpg" alt="The Return RP" width={70} height={20} priority className="rounded-full object-cover" />
        </Link>

        {/* Nav group */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-wide">
          {navLinks.map(({ label, href }) => (
            <Link key={label} href={href} className="relative after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:bg-orange-500 after:scale-x-0 after:transition-transform hover:after:scale-x-100">
              {label}
            </Link>
          ))}

          {/* Discord */}
          <Link href="https://discord.gg/6cYYUEDhCQ" target="_blank" className="text-2xl">
            <Image src="/discord.svg" alt="Discord" width={40} height={40} />
          </Link>

          {/* Auth button */}
          {status === 'authenticated' ? (
            <button
              onClick={() => signOut({ callbackUrl: '/' })}
              className="rounded-md bg-orange-500 px-4 py-2 font-semibold hover:bg-orange-400 transition-colors whitespace-nowrap"
            >
              Déconnexion
            </button>
          ) : (
            <button
              onClick={() => signIn()}
              className="rounded-md bg-orange-500 px-4 py-2 font-semibold hover:bg-orange-400 transition-colors whitespace-nowrap"
            >
              Se connecter
            </button>
          )}
        </nav>
      </div>
    </header>
  );
}
