"use client";

import { useState } from "react";
import clsx from "clsx";

/* ---------- types sent from the server ---------- */
type Row = {
  id: number;
  createdAt: string; // ISO
  typeRp: string;
  userName: string | null;
  userEmail: string | null;

  /* HRP */
  prenomHrp: string | null;
  ageHrp: number | null;
  experienceHrp: number | null;
  presentationHrp: string | null;

  /* RP */
  prenomRp: string | null;
  nomRp: string | null;
  ageRp: number | null;
  backgroundRp: string | null;
};

export default function BackgroundsClient({ rows }: { rows: Row[] }) {
  const [open, setOpen] = useState<Row | null>(null);

  return (
    <>
      {/* ----------- list ----------- */}
      <ul className="divide-y divide-white/10 rounded-lg bg-white/10 backdrop-blur">
        {rows.map((bg) => (
          <li
            key={bg.id}
            className="p-6 flex flex-col gap-2 md:flex-row md:items-center hover:bg-white/5 cursor-pointer"
            onClick={() => setOpen(bg)}
          >
            <div className="flex-1">
              <p className="font-semibold">
                {bg.userName ?? "(compte supprimé)"}
              </p>
              <p className="text-xs opacity-60">{bg.userEmail}</p>
            </div>

            <span className="rounded bg-lime-600/20 px-3 py-1 text-xs font-medium text-lime-300 w-fit">
              {bg.typeRp}
            </span>

            <time
              dateTime={bg.createdAt}
              className="text-xs opacity-60 md:ml-6"
            >
              {new Date(bg.createdAt).toLocaleDateString()}
            </time>
          </li>
        ))}

        {rows.length === 0 && (
          <li className="p-8 text-center text-sm opacity-70">
            Aucune candidature pour le moment.
          </li>
        )}
      </ul>

      {/* ----------- modal ----------- */}
      {open && (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-black/60 backdrop-blur-sm"
          onClick={() => setOpen(null)}
        >
          <article
            className="relative max-h-[90vh] w-[90vw] max-w-2xl overflow-y-auto rounded-lg bg-[#110038] p-8 shadow-xl"
            onClick={(e) => e.stopPropagation()} // prevent close when clicking inside
          >
            <button
              onClick={() => setOpen(null)}
              className="absolute right-4 top-4 text-xl font-bold text-white/60 hover:text-white"
              aria-label="Fermer"
            >
              ×
            </button>

            <h2 className="mb-6 text-2xl font-bold tracking-wide">
              {open.userName ?? "(compte supprimé)"} —{" "}
              <span className="text-base font-normal opacity-70">
                {open.userEmail}
              </span>
            </h2>

            <section className="space-y-4">
              {/* HRP */}
              <h3 className="text-xl font-semibold">Informations HRP</h3>
              <ul className="space-y-1 text-sm leading-relaxed">
                <Info label="Prénom" value={open.prenomHrp} />
                <Info label="Âge" value={open.ageHrp} />
                <Info label="Expérience RP (h)" value={open.experienceHrp} />
                <Info
                  label="Présentation"
                  value={open.presentationHrp}
                  multiline
                />
              </ul>

              {/* RP */}
              <h3 className="pt-4 text-xl font-semibold">Informations RP</h3>
              <ul className="space-y-1 text-sm leading-relaxed">
                <Info label="Prénom" value={open.prenomRp} />
                <Info label="Nom" value={open.nomRp} />
                <Info label="Âge" value={open.ageRp} />
                <Info label="Type" value={open.typeRp} />
                <Info
                  label="Background"
                  value={open.backgroundRp}
                  multiline
                />
              </ul>
            </section>
          </article>
        </div>
      )}
    </>
  );
}

/* small helper to display field or fallback */
function Info({
  label,
  value,
  multiline = false,
}: {
  label: string;
  value: string | number | null;
  multiline?: boolean;
}) {
  if (value == null || value === "") return null;
  return (
    <li>
      <span className="font-medium">{label} :</span>{" "}
      <span
        className={clsx(multiline && "whitespace-pre-wrap break-words")}
      >
        {value}
      </span>
    </li>
  );
}
