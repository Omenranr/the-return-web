import NavBar from "../_components/NavBar";
import Background from '../_components/Background';
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
    <div className="text-white">
    <Background />
      <NavBar />
      <RulesClient cards={cards} />
    </div>
  );
}
