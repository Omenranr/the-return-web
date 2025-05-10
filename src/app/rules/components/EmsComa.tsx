import { CardTemplate } from "./_CardTemplate";
import { Aside } from "./Aside";

export default function EmsComa() {
  /* ------------------------------------------------------------------ */
  /*  Articles : texte fourni, conservé mot‑pour‑mot                     */
  /* ------------------------------------------------------------------ */
  const articles = [
    "Les EMS en service ont l’obligation de porter secours aux joueurs en détresse.",
    "Le respect des différents services et fonctions est obligatoire.",
    "L’utilisation des véhicules de service est obligatoire quand l’agent est en exercice.",
    // Art. 4–7 : blessures détaillées (gardées longues pour clarté)
    "Poings : simple bagarre. Vous prenez un choc, êtes un peu faible mais vous vous souvenez de la scène et de son contexte.",
    "Couteau, cran d’arrêt, arme contondante : blessure très sérieuse ; mémoire floue après réanimation. Le joueur hésite à identifier formellement l’agresseur. (Prise en charge LSMS)",
    "Arme à feu : blessure importante ; le personnage ne se souvient pas de l’agresseur précis, mais retient l’action et quelques détails (vêtements, phrase marquante…). (Prise en charge EMS)",
    "Être dans le coma à plusieurs reprises par arme à feu mènera à une Mort Roleplay certaine. Tout NO FEAR face à une arme à feu peut entraîner une Mort Roleplay imposée par le staff.",
    // Art. 9
    "Interdit de parler, écouter ou communiquer sous quelque forme que ce soit lorsque vous êtes dans le coma. Ne prenez pas d’informations RP dans cet état.",
    // Art. 10
    "Un /me décrivant la raison de l’accident, la douleur, etc., est obligatoire et aide les EMS à jouer un soin cohérent.",
    // Art. 11
    "K.O : si vous tombez après un coup, jouez les séquelles (mal de tête, être sonné…). En fight illégal, impossible de retourner se battre.",
    // Art. 12
    "Un ITT (incapacité temporaire de travail) ne peut dépasser 24 h (12 h si pas d'arme blanche / à feu). Jouez‑le de façon cohérente : boiter, chaise roulante, pas de combat.",
  ] as const;

  return (
    <CardTemplate title="EMS – Coma" headerImg="/rules/ems-coma.webp">
      {/* Intro banner --------------------------------------------------- */}
      <Aside emoji="🚑">
        Ces règles définissent la prise en charge des comas et blessures par les
        EMS ainsi que la conduite à tenir pour les joueurs.
      </Aside>

      {/* Numbered list -------------------------------------------------- */}
      <ul className="list-decimal list-inside space-y-3 text-sm leading-relaxed">
        {articles.map((text, idx) => (
          <li key={idx}>Art.&nbsp;{idx + 1} – {text}</li>
        ))}
      </ul>
    </CardTemplate>
  );
}
