import { CardTemplate } from "./_CardTemplate";
import { Aside } from "./Aside";

export default function RulesIG() {
  /* ------------------------------------------------------------------ */
  /*  1 . Array of numbered articles                                    */
  /* ------------------------------------------------------------------ */
  const articles = [
    "Il est strictement interdit d'avoir des propos racistes, homophobes, sexistes ou discriminatoires.",
    "Si vous constatez un manque de Roleplay ou un non‑respect du règlement, terminez votre scène correctement. Ensuite, contactez‑nous via support / ticket / BDA.",
    "Un nom et prénom Roleplay cohérents sont obligatoires. Tout manquement est passible d'un ban + wipe.",
    "Toute action RP interrompue par un reboot ou un crash doit reprendre après celui‑ci. Quitter via ALT+F4 ou autre moyen = sanction.",
    "Il est interdit de recevoir des biens (véhicules, argent, objets) d'une personne qui prévoit un wipe ou son départ du serveur.",
    "Menaces ou harcèlement IRL envers un joueur ou le staff = ban permanent.",
    "Il est interdit de jeter des items lors d'un braquage.",
    "Pour envoyer un mail RP, vous devez d'abord obtenir l'adresse du destinataire de manière RP.",
    "Les insultes et la répartie sont tolérées, mais n'oubliez pas qu'il y a une vraie personne derrière chaque personnage.",
    "Pour tuer un joueur spécifique, motif clair + background + contexte validés par la modération (ticket Mort RP). Exception : les leads peuvent décider pour leurs membres.",
    "Les avatars volontairement « troll » seront sanctionnés.",
    "Les modificateurs de voix sont autorisés ; tout abus sera considéré comme du troll.",
    "La transition forces de l'ordre / service public ↔ illégal nécessite un wipe obligatoire.",
    "Les EMS, avec le staff, peuvent décider d'une Mort RP sans dossier en cas de comas ou blessures graves répétés.",
    "L'accès aux quartiers de gangs/organisations sans invitation est fortement déconseillé ; vous en assumez les conséquences.",
    "Les manifestations ou grèves RP sur des sujets HRP sont strictement interdites.",
    "Les dossiers ripoux (corruption FDO) doivent être validés par le staff et le responsable des projets FDO.",
  ] as const;

  /* ------------------------------------------------------------------ */
  return (
    <CardTemplate title="Règlement IG" headerImg="/rules/rules-ig.webp">
      {/* Fair‑play banner */}
      <Aside emoji="💙">
        Le <strong>Fair‑Play</strong> est une valeur centrale de&nbsp;THE&nbsp;RETURN. Police,
        citoyens, groupes : le but n’est pas de “gagner” mais de créer des
        scènes agréables pour tous. Laissez toujours une porte de sortie à
        l’adversaire et assumez les conséquences RP de vos actes.
      </Aside>

      {/* Numbered list of articles */}
      <ul className="list-decimal list-inside space-y-3 text-sm leading-relaxed">
        {articles.map((text, idx) => (
          <li key={idx}>{text}</li>
        ))}
      </ul>
    </CardTemplate>
  );
}
