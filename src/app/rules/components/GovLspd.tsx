import { CardTemplate } from "./_CardTemplate";
import { Aside } from "./Aside";

export default function GovLspd() {
  /* ------------------------------------------------------------------ */
  /*  Articles – exact wording you provided                              */
  /* ------------------------------------------------------------------ */
  const articles = [
    "Le gouverneur est l’autorité la plus forte du serveur.",
    "Le Gouvernement a la responsabilité de créer et d’entretenir le lore du légal avec toutes les entités qui le composent.",
    "Il est en charge d’organiser le juridique du serveur.",
    "L’escorte pour le gouverneur est obligatoire en permanence (agent d’État ou force de l’ordre).",
    "Les agents du LSPD doivent avoir un fair‑play exemplaire.",
    "Les courses‑poursuites : deux véhicules max pour un suspect. — Aucune limite lorsqu’il s’agit d’une fusillade ou attaque visant les agents d’État.",
    "Les fouilles ne peuvent avoir lieu qu’après un délit ou un état de Defcon.",
    "Les fortes sommes d’argent ne sont prises en compte en RP qu’à partir de 5 000 $.",
    "Le respect absolu de la hiérarchie est obligatoire.",
    "Tous les agents doivent respecter les véhicules utilisés (on les sort et on les remet au dépôt).",
    /*
      Le texte donnait un second “Art. 10”. On l’énumère ici comme 11 pour
      éviter le doublon, mais l’affichage conserve la numérotation auto.
    */
    "Les détenus en cellule doivent être constamment surveillés par au moins un agent de police.",
  ] as const;

  /* ------------------------------------------------------------------ */
  return (
    <CardTemplate
      title="Gouvernement – LSPD"
      headerImg="/rules/government-lspd.webp"
    >
      <Aside emoji="🏛️">
        Vous trouverez ci‑dessous les règles encadrant le Gouvernement et le
        LSPD sur <strong>The Return</strong>. Le non‑respect de ces articles
        peut entraîner sanctions administratives ou RP.
      </Aside>

      <ul className="list-decimal list-inside space-y-3 text-sm leading-relaxed">
        {articles.map((text, idx) => (
          <li key={idx}>Art.&nbsp;{idx + 1} – {text}</li>
        ))}
      </ul>
    </CardTemplate>
  );
}
