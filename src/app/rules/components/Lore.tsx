import { CardTemplate } from "./_CardTemplate";
import { Aside } from "./Aside";

export default function Lore() {
  return (
    <CardTemplate title="Lore Officiel" headerImg="/rules/lore.webp">
      {/* ---------------------------------------------------------------- */}
      {/* Contexte                                                        */}
      {/* ---------------------------------------------------------------- */}
      <Aside emoji="📖">
        <h3 className="font-semibold text-orange-300">Contexte&nbsp;: 2025</h3>

        <p>
          Les&nbsp;États‑Unis sortent affaiblis d’une série de crises internes.
          Le gouvernement fédéral tente de reprendre le contrôle de régions
          marginalisées – dont <strong>Los Santos</strong>, gangrenée par
          corruption, trafic de drogue et violence armée.
        </p>

        <p>
          À&nbsp;200 km au sud, l’île de <strong>Cayo Perico</strong> est
          devenue un <em>territoire autonome non reconnu</em>. Sous
          l’autorité charismatique d’<strong>Emilio “El Jefe” Suarez</strong>,
          le cartel dispose de sa propre armée, économie et agenda
          géopolitique.
        </p>
      </Aside>

      {/* ---------------------------------------------------------------- */}
      {/* Début de la guerre froide                                        */}
      {/* ---------------------------------------------------------------- */}
      <Aside emoji="🌩️">
        <h3 className="font-semibold text-orange-300">
          Le début de la guerre froide
        </h3>

        <p>
          Début&nbsp;2025, des convois de drogue et d’armes venant de
          Cayo Perico sont interceptés en mer. En représailles, Perico lance des
          cyber‑attaques qui plongent Los Santos dans
          <strong> 48 h de panne électrique totale</strong>.
        </p>

        <p>
          Officiellement, l’État nie toute implication de Perico mais lance
          secrètement l’<em>Opération San Perico</em> pour démanteler ses réseaux
          d’influence. La guerre sera&nbsp;:
          <strong> froide, invisible et impitoyable</strong>.
        </p>
      </Aside>

      {/* ---------------------------------------------------------------- */}
      {/* Invasion silencieuse                                             */}
      {/* ---------------------------------------------------------------- */}
      <Aside emoji="🤫">
        <h3 className="font-semibold text-orange-300">
          L’invasion silencieuse
        </h3>

        <p>
          Dans le <strong>Nord de San Andreas</strong>
          (Paleto Bay, Sandy Shores, Grapeseed), un nouveau pouvoir
          s’installe : postes de contrôle, “protecteurs” armés distribuant
          argent, travail et sécurité dans les régions délaissées.
        </p>

        <p>
          <strong>Les forces de Perico ont infiltré le territoire
          américain sans tirer un seul coup de feu.</strong> Officiellement, il
          s’agit d’un conflit <em>non reconnu</em> mené par des
          <em> agents non étatiques</em>… mais chacun sait qu’une guerre froide
          fait rage.
        </p>
      </Aside>

      {/* ---------------------------------------------------------------- */}
      {/* Situation actuelle                                               */}
      {/* ---------------------------------------------------------------- */}
      <Aside emoji="📰">
        <h3 className="font-semibold text-orange-300">Situation actuelle</h3>

        <ul className="list-disc list-inside ml-4 space-y-1 text-sm">
          <li>
            <strong>Los Santos (zone urbaine)</strong> : sous contrôle renforcé
            du FBI, de l’ATF et de la Garde nationale, mais gangrenée par la
            peur, la propagande et les infiltrations.
          </li>
          <li>
            <strong>Nord de San Andreas</strong> : partiellement sous influence
            de <em>La Mano de Perico</em>, milice agissant en force de sécurité
            parallèle sous couvert humanitaire ou commercial.
          </li>
          <li>
            <strong>Cayo Perico</strong> : base fortifiée du cartel, centre
            névralgique des trafics, du renseignement et du
            contre‑espionnage ; inaccessible sans relations.
          </li>
        </ul>
      </Aside>

      {/* ---------------------------------------------------------------- */}
      {/* Groupes d'intérêt                                                */}
      {/* ---------------------------------------------------------------- */}
      <Aside emoji="👥">
        <h3 className="font-semibold text-orange-300">Groupes d’intérêt</h3>

        <ul className="list-disc list-inside ml-4 space-y-1 text-sm">
          <li>
            <strong>L’Agence</strong> (FIB / ATF / Forces spéciales) – opérations
            clandestines : assassinats ciblés, guerre psychologique.
          </li>
          <li>
            <strong>La Mano de Perico</strong> – milice loyale à El Jefe,
            infiltrée jusqu’à l’administration municipale de Blaine County.
          </li>
          <li>
            <strong>Le Syndicat du Sud</strong> – coalition de gangs de
            Los Santos, partagée entre loyauté américaine et alliance avec
            Perico.
          </li>
          <li>
            <strong>Les Sentinelles Civiles</strong> – milice citoyenne
            extrémiste voulant repousser toute influence étrangère par la force.
          </li>
          <li>
            <strong>Les Ombres de Vinewood</strong> – réseau d’espions,
            d’agents doubles et de manipulateurs mêlés à l’élite de la ville.
          </li>
        </ul>
      </Aside>

      {/* ---------------------------------------------------------------- */}
      {/* Conclusion                                                       */}
      {/* ---------------------------------------------------------------- */}
      <p className="pt-4 text-center font-semibold">
        <em>Quel sera ton rôle dans cette histoire&nbsp;?</em>
      </p>
    </CardTemplate>
  );
}
