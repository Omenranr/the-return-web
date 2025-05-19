import { auth } from "~/server/auth";
import { db } from "~/server/db";
import { users } from "~/server/db/schema";
import { eq } from "drizzle-orm";
import Image from "next/image";
import Link from "next/link";

export default async function Status() {
  const session = await auth();
  if (!session?.user?.id) return null;

  /* — fetch exactly one row — */
  const row = (
    await db
      .select({ status: users.status })
      .from(users)
      .where(eq(users.id, session.user.id))
      .limit(1)
  )[0];

  const status = row?.status ?? "BACKGROUND_PENDING";

  const banner =
    status === "WHITELIST_PENDING"
      ? {
          title: "Votre background est enregistré !",
          subtitle:
            "Un membre du staff doit maintenant valider votre whitelist.",
          cta: { label: "Voir la file d’attente", href: "/whitelist" },
        }
      : {
          title: "Vous n’avez pas encore rempli votre background",
          subtitle:
            "Pour passer la whitelist, remplissez le background de votre personnage RP.",
          cta: {
            label: "Remplir le Background",
            href: "fivem://connect/the-return-rp",
          },
        };

  return (
    <section className="flex items-center gap-6 rounded-lg bg-white/10 p-6">
      {/* avatar */}
      <div className="grid h-24 w-24 flex-shrink-0 place-items-center rounded-full bg-[#0e0a3f]">
        {session.user.image ? (
          <Image
            src={session.user.image}
            alt=""
            width={96}
            height={96}
            className="rounded-full"
          />
        ) : (
          <div className="h-8 w-8 rounded-full bg-gray-400" />
        )}
      </div>

      {/* text */}
      <div className="flex-1 space-y-2">
        <h2 className="text-xl font-bold tracking-wide">{banner.title}</h2>
        <p className="text-sm opacity-80">{banner.subtitle}</p>
      </div>

      {/* action */}
      <Link
        href={banner.cta.href}
        className="whitespace-nowrap rounded-md bg-lime-500 px-4 py-2 text-sm font-semibold hover:bg-lime-400"
      >
        {banner.cta.label}
      </Link>
    </section>
  );
}
