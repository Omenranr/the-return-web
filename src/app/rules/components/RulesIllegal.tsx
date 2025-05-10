import { CardTemplate } from "./_CardTemplate";

export default function RulesIllegal() {
  /* ------------------------------------------------------------------ */
  /*  Full list of illegal‑scene rules                                  */
  /* ------------------------------------------------------------------ */
  const rules: (React.ReactNode | string)[] = [
    // 1 – 17 : règles générales
    "L’illégal est autorisé entre 19 h et 2 h.",
    "Les braquages répétitifs de citoyens (FreeLoot) sans raison RP sont interdits.",
    "Le racket est autorisé ; vous ne pouvez voler que 50 % des possessions de la victime, sauf si elle refuse le Fear RP.",
    "Le loot d’arme est strictement interdit.",
    "Braquer un FDO pour prendre ses armes (sur lui ou dans son véhicule) est interdit.",
    "Après une rixe, il est interdit de récupérer des objets sur les personnes à terre.",
    "Otages : si vos ravisseurs coupent vos communications, n’utilisez ni téléphone ni radio.",
    "Braquer quelqu’un à un ATM ou le forcer à vider compte/coffre/clé de véhicule est interdit.",
    "Lors d’un braquage, attendez les forces de l’ordre au moins 10 minutes.",
    "Demande de groupe officiel : dossier Google Docs via ticket (5 PF / 8 Gang / 10 Famille).",
    "Vous pouvez avoir autant d’habitants que voulu, mais ils ne participent pas aux actions du groupe.",
    "Action illégale interdite 30 min avant reboot et 15 min après.",
    "PIT interdits (sauf LSPD après 10 min sur ordre supérieur).",
    "Drive‑by en course‑poursuite interdit.",
    "Otages complices interdits.",
    "Scène de torture : vous devez donner quelques infos sinon vous risquez Mort RP + avertissement.",
    "Négociations avec LSPD : jamais d’argent – sorties uniquement.",

    // 18 – 23 : braquages
    <>
      <strong>Braquage supérette (2/jour/groupe)</strong>
      <ul className="ml-4 list-disc space-y-1">
        <li>1 – 3 braqueurs, véhicule 4 places du lore.</li>
        <li>Seul le coffre d’Apu rapporte.</li>
        <li>Aucun plan spécial toléré.</li>
        <li>Au moins une arme blanche requise.</li>
      </ul>
    </>,
    <>
      <strong>ATM &amp; cambriolage maison</strong> : véhicule 4 places du lore (1/jour/personne).
    </>,
    <>
      <strong>Braquage Fleeca (1/sem/groupe)</strong>
      <ul className="ml-4 list-disc space-y-1">
        <li>4 – 6 braqueurs, 2 otages min.</li>
        <li>2 véhicules max.</li>
        <li>Plan mule toléré après 10 min.</li>
        <li>≥ 1 arme de poing requise.</li>
        <li>Fenêtre de négociation LSPD obligatoire.</li>
      </ul>
    </>,
    <>
      <strong>Braquage bijouterie (1/sem/groupe)</strong>
      <ul className="ml-4 list-disc space-y-1">
        <li>4 – 6 braqueurs, 2 otages min.</li>
        <li>≥ 1 arme de poing/braqueur.</li>
        <li>Fenêtre négociation LSPD + plan mule après 10 min.</li>
      </ul>
    </>,
    <>
      <strong>Pacific Bank</strong> (dossier obligatoire)
      <ul className="ml-4 list-disc space-y-1">
        <li>10 braqueurs, 6‑7 otages.</li>
        <li>≥ 4 armes de poing + 1 arme lourde.</li>
        <li>Fenêtre de négociation LSPD obligatoire.</li>
        <li>Mort RP activée ou lourdes conséquences.</li>
      </ul>
    </>,

    // 24 – 32 : conduite de gang & véhicules
    "Favorisez le combat à mains nues ou armes de mêlée pour régler une scène entre gangs.",
    "Quitter ou trahir un gang : risque de Mort RP (prévenez le staff).",
    "Action illégale interdite avec véhicule non cohérent, moto/vélo/skate.",
    "Runs drogue interdits avec véhicule d’entreprise.",
    "Revenir en ‘fils/cousin de’ pour se venger : interdit sauf accord staff.",
    "Un wipe n’autorise pas à retrouver ancienne condition sans accord staff.",
    "Zones interdites sans autorisation : Prison, Porte‑Avion, Fort Zancudo.",
    "Respectez le Fear LSPD : l’illégal doit craindre la police.",
    <>
      <strong>Aucune alliance criminelle</strong> : pas d’actions communes (enlèvement, descente, braquage…). Entente uniquement pour infos ou paix.  
      Si deux scènes se croisent, stoppez si le Fair Play ne peut être garanti.
    </>,

    // 33 – 38 : divers
    "Contre‑braquage interdit (sauf si le braqueur se fait braquer par ≥ 2 personnes).",
    "Convois interdits (hors MC).",
    "WARN de groupe : après 3 WARN, fin de projet possible décidée par responsables illégal.",
  ];

  /* ------------------------------------------------------------------ */
  return (
    <CardTemplate title="Illégal" headerImg="/rules/rules-illegal.webp">
      <ul className="list-decimal list-inside space-y-3 text-sm leading-relaxed">
        {rules.map((rule, idx) => (
          <li key={idx}>Art.&nbsp;{idx + 1} – {rule}</li>
        ))}
      </ul>
    </CardTemplate>
  );
}
