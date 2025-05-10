import React from "react";

export const Aside = ({
  emoji,
  children,
}: {
  emoji: string | React.ReactNode;
  children: React.ReactNode;
}) => (
  <aside className="rounded-md border border-white/10 bg-slate-800/60 p-4">
    <h2 className="flex items-start gap-2 text-base font-semibold text-orange-300">
      {emoji}&nbsp;
    </h2>
    <div className="mt-1 space-y-2">{children}</div>
  </aside>
);
