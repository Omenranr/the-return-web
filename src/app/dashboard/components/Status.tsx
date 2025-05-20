"use client";

import { api } from "~/trpc/react";
import Image from "next/image";

export default function Status({ userImage }: { userImage: string | null }) {

  const { data } = api.background.status.useQuery();
  const status = data?.status ?? "BACKGROUND_PENDING";

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
      {userImage ? (
        <Image
          src={userImage}
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
    <span
        className={`w-full md:w-auto text-center rounded-md px-4 py-2 text-sm font-semibold ${status === "WHITELIST_PENDING" ? "bg-lime-500" : "bg-red-500"}`}
    >
      {content.badge}
    </span>
  </section>
  );
}
