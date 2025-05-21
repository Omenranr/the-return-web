'use client';

import Link from 'next/link';

export default function JoinServerForm() {
  return (
    <div>
    <Link
      href="https://discord.gg/6cYYUEDhCQ"
      className="mt-6 block w-full rounded-md bg-[#5865F2] text-white text-center py-2 font-semibold hover:bg-[#4752c4] transition-colors"
      target='_blank'
    >
      Rejoindre le Serveur avant de remplir le background !
    </Link>
  </div>
  );
}
