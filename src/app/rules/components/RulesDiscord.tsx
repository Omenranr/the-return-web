import Image from "next/image";
import { CardTemplate } from "./_CardTemplate";
import { Aside } from "./Aside";

export default function RulesDiscord() {
  return (
    <CardTemplate
      title="Règlement Discord"
      headerImg="/rules/rules-discord.webp"
    >
      {/* ---------------------------------------------------------------- */}
      {/* 1 . Publicité                                                   */}
      {/* ---------------------------------------------------------------- */}
      <Aside emoji="📢">
        <h3 className="font-semibold text-orange-300">PUB</h3>
        Toute publicité — sur le serveur ou en message privé — est
        <strong> strictement interdite</strong> et entraîne un
        <strong> bannissement immédiat et définitif</strong>.
      </Aside>

      {/* ---------------------------------------------------------------- */}
      {/* 2 . Salons HRP                                                  */}
      {/* ---------------------------------------------------------------- */}
      <Aside emoji="💬">
        <h3 className="font-semibold text-orange-300">Salons HRP</h3>
        <p>
          Les salons HRP sont des espaces de discussion hors Roleplay ; le
          contenu partagé ne doit pas être pris en compte par votre personnage.
        </p>

        <ul className="ml-4 list-disc list-inside space-y-1 text-sm">
          <li>
            Interdit d’insulter, harceler, se moquer de façon malveillante ou
            tenir des propos racistes, sexistes, homophobes ou incitant à la
            haine.
          </li>
          <li>Le spam (messages répétés en grand nombre) est prohibé.</li>
          <li>
            Ne mentionnez pas le staff pour un problème lié au serveur ; ouvrez
            un ticket.
          </li>
          <li>
            Contenus pornographiques, épileptiques, spoilers ou screamers
            interdits.
          </li>
        </ul>
      </Aside>

      {/* ---------------------------------------------------------------- */}
      {/* 3 . Salons RP                                                   */}
      {/* ---------------------------------------------------------------- */}
      <Aside emoji="💬">
        <h3 className="font-semibold text-orange-300">Salons RP</h3>
        <p>
          Certains salons sont marqués “RP” (dans leur nom ou leur catégorie).
          Tout message, réaction emoji, photo ou interaction y est automatiquement
          considéré comme RP. Dans un salon non RP, ces contenus seront HRP et
          ne pourront pas être joués en jeu.
        </p>
        <p className="mt-2">
          ⚠️ <strong>Métagaming</strong> : évitez de divulguer des informations
          sur votre RP (ou celui des autres) dans un salon HRP — même le meilleur
          joueur peut avoir du mal à l’ignorer ensuite.
        </p>
      </Aside>

      {/* ---------------------------------------------------------------- */}
      {/* 4 . Discords communautaires                                     */}
      {/* ---------------------------------------------------------------- */}
      <Aside
        emoji={<Image src="/discord.svg" alt="Discord" width={24} height={24} />}
      >
        <h3 className="font-semibold text-orange-300">
          Discords communautaires
        </h3>
        <p>
          La création d’un <strong>Discord entreprise</strong> est interdite.
          Utilisez les salons mis à disposition. Besoin de plus de canaux ? Vous
          pouvez en faire la demande (15 maximum) auprès d’un administrateur.
        </p>
      </Aside>

      {/* ---------------------------------------------------------------- */}
      {/* 5 . Staff                                                       */}
      {/* ---------------------------------------------------------------- */}
      <Aside emoji="🥷">
        <h3 className="font-semibold text-orange-300">Staff</h3>
        <p>
          Le staff encadre le jeu et garantit la meilleure expérience RP
          possible pour tous. Un membre du staff n’a <em>aucun avantage en
          jeu</em> : traitez‑le comme n’importe quel autre joueur.
        </p>
        <p className="mt-2">
          Si vous rencontrez un problème avec un membre du staff, ouvrez un
          ticket de conflit pour en discuter avec les responsables.
        </p>
        <p className="mt-2">
          Merci de ne pas mentionner ni DM le staff sur Discord ; ouvrez un
          ticket : les helpeurs vous orienteront vers la bonne personne.
        </p>
      </Aside>
    </CardTemplate>
  );
}
