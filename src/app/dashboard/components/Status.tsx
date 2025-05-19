import { auth } from "~/server/auth";
import { db } from "~/server/db";
import { users } from "~/server/db/schema";
import { eq } from "drizzle-orm";
import Image from "next/image";

export default async function Status() {
  const session = await auth();
  if (!session?.user?.id) return null;

  /* fetch the current status */
  const row = (
    await db
      .select({ status: users.status })
      .from(users)
      .where(eq(users.id, session.user.id))
      .limit(1)
  )[0];

  const status = row?.status ?? "BACKGROUND_PENDING";

  const content =
    status === "WHITELIST_PENDING"
      ? {
          title: "Votre background est enregistré !",
          subtitle:
            "Un membre du staff doit maintenant valider votre whitelist.",
          badge: "Whitelist en attente",
        }
      : {
          title: "Vous n’avez pas encore rempli votre background",
          subtitle:
            "Pour passer la whitelist, remplissez le background de votre personnage RP.",
          badge: "Background en attente",
        };

  return (
    <section
    /*  → column on mobile   → row from md breakpoint */
    className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6 rounded-lg bg-white/10 p-4 md:p-6"
    >
    {/* avatar */}
    <div className="grid h-20 w-20 md:h-24 md:w-24 flex-shrink-0 place-items-center rounded-full bg-[#0e0a3f]">
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
    <div className="flex-1 text-center md:text-left space-y-2">
      <h2 className="text-lg md:text-xl font-bold tracking-wide">
        {content.title}
      </h2>
      <p className="text-sm opacity-80">{content.subtitle}</p>
    </div>

    {/* badge – full-width on mobile, auto on desktop */}
    <span className="w-full md:w-auto text-center rounded-md bg-lime-500 px-4 py-2 text-sm font-semibold">
      {content.badge}
    </span>
  </section>
  );
}
