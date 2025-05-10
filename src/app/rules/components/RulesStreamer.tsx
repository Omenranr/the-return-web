import { Star } from 'lucide-react';
import { CardTemplate } from "./_CardTemplate";
import { Aside } from "./Aside";

export default function RulesStreamer() {
  return (
    <CardTemplate
      title="Règlement Streamer"
      headerImg="/rules/rules-streamers.webp"
    >
      {/* intro banner -------------------------------------------------- */}
      <Aside
        emoji={<Star className="h-5 w-5 shrink-0 text-orange-300" />}
      >
        En tant que streamer, vous représentez le serveur : soyez notre
        <strong> meilleure vitrine</strong> !
      </Aside>

      {/* guidelines ---------------------------------------------------- */}
      <h2 className="font-semibold text-orange-300 mt-6">LES PRÉCONISATIONS</h2>
      <ul className="ml-4 list-disc list-inside space-y-1 text-sm">
        <li>2&nbsp;semaines d’ancienneté sur Urban Story</li>
        <li>Masquer la map en jeu pendant le stream</li>
        <li>Prendre contact avec le Community Manager</li>
      </ul>

      <h2 className="font-semibold text-orange-300 mt-6">À NE PAS FAIRE</h2>
      <ul className="ml-4 list-disc list-inside space-y-1 text-sm">
        <li>Révéler les emplacements des labos / lieux de farm illégaux</li>
        <li>Mentionner le nom d’un joueur sans son accord</li>
        <li>Streamer les réunions communautaires (BDA, voc staff…)</li>
      </ul>
    </CardTemplate>
  );
}
