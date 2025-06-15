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
    "Règle du coma : Vous vous souvenez de tous mais montré que c'est légerement flou pendant votre PainRp",
    "Tout NO FEAR face à une arme à feu peut entraîner une Mort Rp imposée par le staff.",
    // Art. 9
    "Interdit de parler, écouter ou communiquer sous quelque forme que ce soit lorsque vous êtes dans le coma. Ne prenez pas d’informations RP dans cet état.",
    // Art. 10
    "Un /me décrivant la raison de l’accident, la douleur. C'est important pour aidé les EMS à appliquer un soin cohérent.",
    // Art. 11
    "K.O : si vous tombez après un coup, jouez votre Pain. Lors d'un brawl, ne retourner pas vous battre, soyez cohérent.",
    // Art. 12
    "Un ATA (arrêt temporaire d'activité) doit être joué si le docteur vous l'impose. Jouez‑le de façon cohérente : boiter, chaise roulante, pas de combat. Attention ! Si vous trouvez que l'ATA imposé par le docteur est disproportionné, faite un ticket avec preuve à l'appuie, le staff jugera la situation.",
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
          <li key={idx}>{text}</li>
        ))}
      </ul>
    </CardTemplate>
  );
}
