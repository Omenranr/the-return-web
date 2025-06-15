import { CardTemplate } from "./_CardTemplate";
import { Aside } from "./Aside";

export default function GovLspd() {
  /* ------------------------------------------------------------------ */
  /*  Articles – exact wording you provided                              */
  /* ------------------------------------------------------------------ */
  const articles = [
    "Le gouvernement est l’autorité la plus puissante du serveur.",
    "Le gouvernement a la responsabilité de créer et d’entretenir le lore du légal avec toutes les entités qui le composent.",
    "Il est en charge d’organiser le juridique du serveur.",
    "Les agents du SASP doivent avoir un fair‑play exemplaire.",
    "Les courses‑poursuites : deux véhicules minimum pour un suspect lors d'un gros braquage. 1 seul véhicule lors de simple poursuite ou braquage — Aucune limite lorsqu’il s’agit d’une fusillade ou attaque visant les agents d’État.",
    "Les fouilles ne peuvent avoir lieu qu’après un délit ou un état de Defcon.",
    "Les fortes sommes d’argent ne sont prises en compte en RP qu’à partir de 5 000 $.",
    "Tous les agents doivent respecter les véhicules utilisés (on les sort et on les remet au dépôt).",
    /*
      Le texte donnait un second “Art. 10”. On l’énumère ici comme 11 pour
      éviter le doublon, mais l’affichage conserve la numérotation auto.
    */
  ] as const;

  /* ------------------------------------------------------------------ */
  return (
    <CardTemplate
      title="Gouvernement – SASP"
      headerImg="/rules/government-lspd.webp"
    >
      <Aside emoji="🏛️">
        Vous trouverez ci‑dessous les règles encadrant le Gouvernement et le
        SASP sur <strong>The Return</strong>. Le non‑respect de ces articles
        peut entraîner sanctions administratives ou RP.
      </Aside>

      <ul className="list-decimal list-inside space-y-3 text-sm leading-relaxed">
        {articles.map((text, idx) => (
          <li key={idx}>{text}</li>
        ))}
      </ul>
    </CardTemplate>
  );
}
