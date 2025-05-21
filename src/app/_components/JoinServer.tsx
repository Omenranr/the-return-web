'use client';

import Link from 'next/link';
import { siTwitch, siInstagram, siYoutube, siTiktok } from 'simple-icons/icons';

export default function JoinServer() {
  return (
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
  );
}
