import { auth } from "~/server/auth";
import { db } from "~/server/db";
import { backgrounds, users } from "~/server/db/schema";
import { desc, eq } from "drizzle-orm";
import { notFound } from "next/navigation";

import Navbar from "../_components/NavBar";
import Background from "../_components/Background";
import BackgroundsClient from "./BackgroundsClient";

export default async function BackgroundsPage() {
  /* ---- admin guard ---- */
  const session = await auth();
  if (!session || session.user?.role !== "ADMIN") notFound();

  /* ---- fetch every column we want to display ---- */
  const rows = await db
    .select({
      /* meta */
      id: backgrounds.id,
      createdAt: backgrounds.createdAt,
      typeRp: backgrounds.typeRp,

      /* join */
      userName: users.name,
      userEmail: users.email,

      /* HRP */
      prenomHrp: backgrounds.prenomHrp,
      ageHrp: backgrounds.ageHrp,
      experienceHrp: backgrounds.experienceHrp,
      presentationHrp: backgrounds.presentationHrp,

      /* RP */
      prenomRp: backgrounds.prenomRp,
      nomRp: backgrounds.nomRp,
      ageRp: backgrounds.ageRp,
      backgroundRp: backgrounds.backgroundRp,
    })
    .from(backgrounds)
    .leftJoin(users, eq(backgrounds.userId, users.id))
    .orderBy(desc(backgrounds.createdAt));

  /* ---- to-JSON: Dates → strings ---- */
  const serialised = rows.map((r) => ({
    ...r,
    createdAt: r.createdAt.toISOString(),
    typeRp: r.typeRp ?? "",
  }));

  /* ---- page shell ---- */
  return (
    <div className="text-white">
      <Background />
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 md:px-10 pt-12 pb-24 space-y-10">
        <header className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-wide">Backgrounds</h1>
          <p className="text-sm opacity-70">
            {rows.length} candidature{rows.length > 1 && "s"}
          </p>
        </header>

        {/* interactive list lives in a client component */}
        <BackgroundsClient rows={serialised} />
      </main>
    </div>
  );
}
