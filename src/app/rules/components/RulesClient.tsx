"use client";

import React, { useCallback, useState } from "react";
import Image from "next/image";
import CookieBanner from "../../_components/CookieBanner";
import Modal from "./Modal";

/* ------------------------------------------------------------------ */
/*  0 . Type helpers                                                  */
/* ------------------------------------------------------------------ */
export type Card = { label: string; icon: string; href?: string };

export default function RulesClient({ cards }: { cards: Card[] }) {
  const [openCard, setOpenCard] = useState<Card | null>(null);
  const open = useCallback((c: Card) => setOpenCard(c), []);

  return (
    <>
      <main className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 pt-24 pb-32 space-y-12">
        <section className="rounded-md border border-orange-300/40 bg-orange-400/10 p-6 text-center shadow-md backdrop-blur">
          ⚠️ Chaque manquement à l’une de ces règles peut entraîner avertissement
          ou bannissement permanent.
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cards.map((card) => (
            <button
              key={card.label}
              onClick={() => open(card)}
              className="group relative h-44 w-full overflow-hidden rounded-lg bg-gradient-to-b from-orange-500 to-orange-600 shadow-lg transition-transform hover:-translate-y-[2px] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
            >
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-orange-700/30 via-orange-600/10 to-transparent" />
              <div className="relative z-10 flex h-full items-center justify-center pb-8">
                <Image
                  src={card.icon}
                  alt={card.label}
                  width={512}
                  height={512}
                  className="pointer-events-none select-none transition-transform duration-200 ease-out group-hover:scale-110"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 z-10 bg-orange-800/20 backdrop-blur-sm py-2 text-center">
                <span className="block px-2 text-xs font-semibold uppercase tracking-wide sm:text-sm">
                  {card.label}
                </span>
              </div>
            </button>
          ))}
        </section>
      </main>

      <CookieBanner />

      <Modal isOpen={!!openCard} onClose={() => setOpenCard(null)} card={openCard} />
    </>
  );
}
