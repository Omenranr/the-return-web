import NavBar from "../_components/NavBar";
import RulesClient from "./components/RulesClient";

export default function RulesPage() {
  const cards = [
    { label: "Lexique Gaming",       icon: "/rules/lexique-gaming.webp" },
    { label: "Lexique Roleplay",     icon: "/rules/lexique-roleplay.webp" },
    { label: "Règlement IG",         icon: "/rules/rules-ig.webp" },
    { label: "Règlement Streamer",   icon: "/rules/rules-streamers.webp" },
    { label: "Lore de The Return",   icon: "/rules/lore.webp" },
    { label: "Règlement Discord",    icon: "/rules/rules-discord.webp" },
    { label: "Gouvernement – LSPD",  icon: "/rules/government-lspd.webp"},
    { label: "Entreprise",           icon: "/rules/companies.webp"},
    { label: "EMS – Coma",           icon: "/rules/ems-coma.webp"},
    { label: "Meta Illégal",         icon: "/rules/meta-illegal.webp"},
    { label: "Illégal",              icon: "/rules/rules-illegal.webp"},
    { label: "Économie Illégal",     icon: "/rules/economy-illegal.webp"},
    // { label: "Code Pénal",     icon: "/rules/government-lspd.webp"},
  ];

  return (
    <div className="absolute inset-0 -z-20 min-h-screen bg-gradient-to-br from-[#3200ff]/40 via-[#1d008e]/60 to-[#12004a]/90 text-white">
      <div className="absolute inset-0 -z-10 bg-[url('/background.webp')] opacity-80 mix-blend-overlay pointer-events-none" />
      <NavBar />
      <RulesClient cards={cards} />
    </div>
  );
}
