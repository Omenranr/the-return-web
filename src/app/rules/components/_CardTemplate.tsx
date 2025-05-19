/*  A tiny wrapper so every card looks the same  */
import React from "react";
import Image from "next/image";

export const CardTemplate = ({
  title,
  headerImg,       // pass `null` if the card has no banner
  children,
}: {
  title: string;
  headerImg: string | null;
  children: React.ReactNode;
}) => (
  <>
    {headerImg && (
      <Image src={headerImg} width={512} height={512} alt={title} className="w-full object-cover" />
    )}

    <h1 className="px-6 py-4 text-2xl font-extrabold tracking-wide text-white">
      {title.toUpperCase()}
    </h1>

    <div className="space-y-6 px-6 pb-10">{children}</div>
  </>
);
