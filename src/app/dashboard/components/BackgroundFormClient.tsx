// src/app/dashboard/components/BackgroundFormClient.tsx
"use client";

import React from "react";
import { api } from "~/trpc/react";

/**
 * Plain-JS utility: pulls a string, falls back to empty string.
 */
function getStr(fd: FormData, key: string) {
  return (fd.get(key) ?? "") as string;
}

/**
 * Client component: shows the form and sends it to tRPC when submitted.
 *
 * - On success, we invalidate the `background.status` query so the
 *   <Status /> banner re-renders without reloading the whole page.
 */
export default function BackgroundFormClient() {
  const utils = api.useContext();

  const submit = api.background.submit.useMutation({
    onSuccess: () => {
      void utils.background.status.invalidate(); // refresh banner + others
    },
  });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);

    submit.mutate({
      /* ───── Informations HRP ───── */
      prenomHrp: getStr(fd, "prenom_hrp"),
      ageHrp: Number(fd.get("age_hrp")),
      experienceHrp: Number(fd.get("experience_hrp")),
      presentationHrp: getStr(fd, "presentation_hrp"),

      /* ───── Informations RP ───── */
      prenomRp: getStr(fd, "prenom_rp"),
      nomRp: getStr(fd, "nom_rp"),
      ageRp: Number(fd.get("age_rp")),
      typeRp: getStr(fd, "type_rp") as "Légal" | "Illégal",
      backgroundRp: getStr(fd, "background_rp"),
    });
  }

  return (
    <form
      id="background-form"
      onSubmit={handleSubmit}
      className="space-y-12 rounded-lg bg-white/10 p-8 backdrop-blur-md"
    >
      {/* ───────────── Informations HRP ───────────── */}
      <fieldset className="space-y-6">
        <legend className="mb-4 text-2xl font-bold tracking-wide">
          Informations&nbsp;HRP
        </legend>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Prénom */}
          <label className="space-y-1">
            <span className="text-sm font-medium">Prénom</span>
            <input
              type="text"
              name="prenom_hrp"
              required
              className="w-full rounded-md border border-white/20 bg-white/5 p-2 focus:border-lime-400 focus:outline-none"
            />
          </label>

          {/* Âge */}
          <label className="space-y-1">
            <span className="text-sm font-medium">Âge</span>
            <input
              type="number"
              name="age_hrp"
              min={0}
              required
              className="w-full rounded-md border border-white/20 bg-white/5 p-2 focus:border-lime-400 focus:outline-none"
            />
          </label>

          {/* Expérience (heures) */}
          <label className="space-y-1 md:col-span-2">
            <span className="text-sm font-medium">Expérience RP&nbsp;(heures)</span>
            <input
              type="number"
              name="experience_hrp"
              min={0}
              required
              className="w-full rounded-md border border-white/20 bg-white/5 p-2 focus:border-lime-400 focus:outline-none"
            />
          </label>
        </div>

        {/* Présentation */}
        <label className="block space-y-1">
          <span className="text-sm font-medium">Présentation</span>
          <textarea
            name="presentation_hrp"
            rows={5}
            placeholder="Parlez-nous un peu de vous…"
            className="w-full rounded-md border border-white/20 bg-white/5 p-2 focus:border-lime-400 focus:outline-none"
          />
        </label>
      </fieldset>

      <hr className="border-white/20" />

      {/* ───────────── Informations RP ───────────── */}
      <fieldset className="space-y-6">
        <legend className="mb-4 text-2xl font-bold tracking-wide">
          Informations&nbsp;RP
        </legend>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Prénom RP */}
          <label className="space-y-1">
            <span className="text-sm font-medium">Prénom</span>
            <input
              type="text"
              name="prenom_rp"
              required
              className="w-full rounded-md border border-white/20 bg-white/5 p-2 focus:border-lime-400 focus:outline-none"
            />
          </label>

          {/* Nom RP */}
          <label className="space-y-1">
            <span className="text-sm font-medium">Nom</span>
            <input
              type="text"
              name="nom_rp"
              required
              className="w-full rounded-md border border-white/20 bg-white/5 p-2 focus:border-lime-400 focus:outline-none"
            />
          </label>

          {/* Âge RP */}
          <label className="space-y-1">
            <span className="text-sm font-medium">Âge</span>
            <input
              type="number"
              name="age_rp"
              min={0}
              required
              className="w-full rounded-md border border-white/20 bg-white/5 p-2 focus:border-lime-400 focus:outline-none"
            />
          </label>

          {/* Type RP */}
          <label className="space-y-1">
            <span className="text-sm font-medium">Type&nbsp;RP</span>
            <select
              name="type_rp"
              defaultValue="Légal"
              className="w-full rounded-md border border-white/20 bg-white/5 p-2 text-black focus:border-lime-400 focus:outline-none"
            >
              <option value="Légal">Légal</option>
              <option value="Illégal">Illégal</option>
            </select>
          </label>
        </div>

        {/* Background RP */}
        <label className="block space-y-1">
          <span className="text-sm font-medium">Background&nbsp;RP</span>
          <textarea
            name="background_rp"
            rows={12}
            placeholder="Raconte-nous ton background ou colle un lien GDoc…"
            className="w-full rounded-md border border-white/20 bg-white/5 p-3 focus:border-lime-400 focus:outline-none"
          />
        </label>
      </fieldset>

      {/* Submit */}
      <div className="flex justify-end">
        <button
          type="submit"
          disabled={submit.isPending}
          className="rounded-md bg-lime-500 px-6 py-2 font-semibold hover:bg-lime-400 disabled:opacity-60"
        >
          {submit.isPending ? "Envoi…" : "Envoyer"}
        </button>
      </div>
    </form>
  );
}
