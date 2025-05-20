"use client";

import { api } from "~/trpc/react";
import BackgroundsClient from "./BackgroundsClient";

export default function BackgroundsLoader() {
  const { data: rows, isLoading } = api.background.all.useQuery();

  if (isLoading || !rows) return <p>Chargement des backgrounds…</p>;

  return (
    <>
      <header className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-wide">Backgrounds</h1>
        <p className="text-sm opacity-70">
          {rows.length} candidature{rows.length > 1 && "s"}
        </p>
      </header>

      <BackgroundsClient rows={rows} />
    </>
  );
}
