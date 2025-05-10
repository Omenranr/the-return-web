import { CardTemplate } from "./_CardTemplate";
import { Aside } from "./Aside";

export default function MetaIllegal() {
  return (
    <CardTemplate title="Meta Illégal" headerImg="/rules/meta-illegal.webp">
      {/* ---------------------------------------------------------------- */}
      {/* 1 . Les groupes                                                 */}
      {/* ---------------------------------------------------------------- */}
      <Aside emoji="👥">
        <h2 className="text-lg font-bold text-orange-300 mb-2">Les groupes</h2>

        <ul className="space-y-4 text-sm leading-relaxed list-none">
          <li>
            <strong>Les petites frappes&nbsp;:</strong>
            <ul className="ml-4 list-disc space-y-1">
              <li>3 – 6 joueurs</li>
              <li>Actions&nbsp;: racket, braquage épicerie &amp; maison</li>
              <li>Drogue&nbsp;: <em>achat → revente</em> uniquement</li>
              <li>Entreprise&nbsp;: interdite (mais tous peuvent travailler)</li>
              <li>Marché : possible si cohérent + dossier</li>
            </ul>
          </li>

          <li>
            <strong>Les gangs&nbsp;:</strong>
            <ul className="ml-4 list-disc space-y-1">
              <li>8 – 15 joueurs</li>
              <li>
                Actions&nbsp;: racket d’entreprise, braquage épicerie &amp;
                maison, <strong>guerre de territoire</strong>
              </li>
              <li>Drogue&nbsp;: production, achat, revente</li>
              <li>
                Entreprise : 1 seule, cohérente avec le lore (max 4 gangsters
                salariés)
              </li>
              <li>Marché : production cannabis, possible marché (dossier)</li>
            </ul>
          </li>

          <li>
            <strong>Les&nbsp;MC&nbsp;:</strong>
            <ul className="ml-4 list-disc space-y-1">
              <li>8 – 15 joueurs</li>
              <li>Actions : racket d’entreprise, braquages</li>
              <li>Drogue : production, achat, revente</li>
              <li>
                Entreprise : 1 seule, cohérente ; tous les membres peuvent y
                travailler
              </li>
              <li>Marché : accessoires d’armement, armes blanches (+dossier)</li>
            </ul>
          </li>

          <li>
            <strong>Organisation&nbsp;:</strong>
            <ul className="ml-4 list-disc space-y-1">
              <li>6 – 15 joueurs</li>
              <li>Actions : contrôle des marchés &amp; guerre froide</li>
              <li>
                Drogue : <em>production uniquement</em> (vente PNJ interdite)
              </li>
              <li>Entreprise : 1 seule, cohérente ; tous peuvent travailler</li>
              <li>
                Marché : armes, drogue, contrebande, influence territoriale
              </li>
            </ul>
          </li>
        </ul>
      </Aside>

      {/* ---------------------------------------------------------------- */}
      {/* 2 . Guerres de gangs                                            */}
      {/* ---------------------------------------------------------------- */}
      <Aside emoji="🔪">
        <h2 className="text-lg font-bold text-orange-300">
          Les guerres de gangs (1&nbsp;semaine)
        </h2>

        <p className="mb-2">
          <strong>Barème de points&nbsp;:</strong>
        </p>
        <ul className="ml-4 list-disc space-y-1 text-sm">
          <li>3&nbsp;Brawls = 2&nbsp;pts par brawl gagné</li>
          <li>1&nbsp;Drive‑by : 1 – 5 pts</li>
          <li>Kidnapping réussi : 1 – 5 pts</li>
          <li>Fusillade de fin de guerre : 10 pts</li>
        </ul>

        <p className="mt-3">
          ⚠️ Toutes les scènes doivent être <strong>filmées (REC)</strong> pour
          que la modération attribue les points.
        </p>
        <p className="mt-2">
          ⚠️ Guerre uniquement entre deux groupes de même rang, après
          <strong> 1&nbsp;semaine de conflit RP</strong>. Ticket obligatoire
          pour le comptage. <br />
          Délai revenge : <strong>2 h minimum</strong>, réponse sous 24 h sinon
          l’initiative revient à l’adversaire (pas deux actions consécutives).
        </p>
        <p className="mt-2">
          ℹ️ Basées sur la possession de laboratoire et de territoire (5 zones
          de deal en ville).
        </p>
      </Aside>

      {/* ---------------------------------------------------------------- */}
      {/* 3 . Guerres d’organisations & MC                                */}
      {/* ---------------------------------------------------------------- */}
      <Aside emoji="🔪">
        <h2 className="text-lg font-bold text-orange-300">
          Les guerres d’organisations &amp; MC (2&nbsp;semaines)
        </h2>

        <p className="mb-2">
          <strong>Barème de points&nbsp;:</strong>
        </p>
        <ul className="ml-4 list-disc space-y-1 text-sm">
          <li>Gang sous influence avant guerre : 5 pts/gang</li>
          <li>Drive‑by sur point sensible : 1 – 5 pts</li>
          <li>Kidnapping ou action réussie : 1 – 5 pts</li>
          <li>Fusillade de fin de guerre : 15 pts</li>
        </ul>

        <p className="mt-3">
          ⚠️ Ticket obligatoire pour le comptage. Délai revenge :
          <strong> 24 h minimum</strong>, réponse sous 48 h sinon l’autre groupe
          reprend la main (pas deux actions consécutives).
        </p>
        <p className="mt-2">
          ℹ️ Guerres basées sur l’influence sur les gangs et la possession de
          marchés illégaux.
        </p>
      </Aside>
    </CardTemplate>
  );
}
