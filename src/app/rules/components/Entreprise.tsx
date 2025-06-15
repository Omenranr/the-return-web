import { CardTemplate } from "./_CardTemplate";
import { Aside } from "./Aside";
import { Star } from "lucide-react";

export default function Entreprise() {
  /* ------------------------------------------------------------------ */
  /*  Articles                                                           */
  /* ------------------------------------------------------------------ */
  const articles = [
    // Art. 1
    "La comptabilité doit être à jour à chaque fin de semaine.",
    // Art. 2
    "Utilisez des véhicules cohérents (camionnette, camion) pour remplir vos stocks, pas de véhicule personnel sous peine de sanction.",
    // Art. 3
    "Un patron risque la perte immédiate de son entreprise s’il est arrêté pour un délit ou un crime. Tolérance variable selon le type d’entreprise.",
  ] as const;

  return (
    <CardTemplate title="Entreprise" headerImg="/rules/companies.webp">
      {/* ---------------------------------------------------------------- */}
      {/* Art. 1 – Contrat (détail dans un Aside)                          */}
      {/* ---------------------------------------------------------------- */}
      <ul className="list-decimal list-inside space-y-3 text-sm leading-relaxed">
        <li>
          {articles[0]}
          {/* contrat détaillé */}
          <Aside
            emoji={<Star className="h-5 w-5 shrink-0 text-orange-300" />}
          >
            Le contrat exige :
            <ul className="ml-4 list-disc space-y-1">
              <li>Ouvrir l’entreprise <strong>5 fois par semaine</strong></li>
              <li>Être au minimum <strong>3&nbsp;employés</strong></li>
              <li>
                Si l’entreprise reste fermée <strong>1&nbsp;semaine</strong>{" "}
                sans gestion : retrait de licence
              </li>
            </ul>
          </Aside>
        </li>

        {/* ---------------------------------------------------------------- */}
        {/* Articles 2‑7                                                    */}
        {/* ---------------------------------------------------------------- */}
        {articles.slice(1).map((text, idx) => (
          <li key={idx + 2}>{text}</li>
        ))}
      </ul>

      {/* ---------------------------------------------------------------- */}
      {/* Nota sur le contrat (asterisk)                                   */}
      {/* ---------------------------------------------------------------- */}
      <p className="mt-6 text-xs italic text-orange-300">
        * “Contrat” désigne les obligations détaillées dans l’encadré étoilé
        ci‑dessus.
      </p>
    </CardTemplate>
  );
}
