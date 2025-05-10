import { CardTemplate } from "./_CardTemplate";
import { Aside } from "./Aside";

export default function LexiqueGaming() {
  const items = [
    [
      "🕵️‍♂️",
      <>
        <strong>METAGAMING :</strong> c’est le fait de récupérer et d’utiliser
        des informations hors Roleplay (photos, discussions, etc.) en Roleplay —
        interdit. Il est également interdit d’aller sur le stream d’un joueur
        lorsque vous êtes connecté au serveur.
      </>,
    ],
    [
      "🔫",
      <>
        <strong>FEAR ROLEPLAY :</strong> simuler la peur lors d’une scène RP.
        Dans la vie réelle, tout le monde prend peur lorsqu’une arme est
        braquée sur lui !<br />
        <br />
        Sortir une arme ou fuir alors que vous êtes braqué constitue du{" "}
        <strong>NO FEAR</strong> : interdit.
      </>,
    ],
    [
      "💪",
      <>
        <strong>FORCE ROLEPLAY :</strong> obliger quelqu’un à agir contre sa
        volonté. Personne ne doit faire quelque chose qu’il ne souhaite pas
        faire.
      </>,
    ],
    [
      "💀",
      <>
        <strong>FREE KILL :</strong> tuer un joueur sans raison valable —
        interdit. Le meurtre doit s’inscrire dans votre histoire RP.
      </>,
    ],
    [
      "🦸",
      <>
        <strong>POWERGAMING :</strong> réaliser des actions impossibles dans la
        vraie vie grâce à la physique du jeu.
      </>,
    ],
    [
      "🤕",
      <>
        <strong>PAIN ROLEPLAY :</strong> simuler la douleur (physique ou
        morale). Ne pas le faire = <strong>NO PAIN</strong> (interdit). Acceptez
        l’effet d’une balle, d’un coup, d’une chute, ou d’un choc émotionnel.
      </>,
    ],
    [
      "👥",
      <>
        <strong>MASS ROLEPLAY :</strong> les rues de Los Santos sont
        bondées ! Tenez compte de la foule invisible même s’il n’y a pas de
        joueurs.
      </>,
    ],
    [
      "⏭️",
      <>
        <strong>RACCOURCI ROLEPLAY :</strong> attribuer un groupe/identité à
        quelqu’un via sa couleur, sa voix ou son physique, ou reconnaître un
        masque de cette façon — interdit.
      </>,
    ],
    [
      "🏆",
      <>
        <strong>WIN ROLEPLAY :</strong> vouloir absolument gagner la scène et
        ne laisser aucune chance à l’adversaire. Le <strong>FAIR PLAY</strong>{" "}
        est obligatoire !
      </>,
    ],
    [
      "🎬",
      <>
        <strong>REFUS DE SCÈNE :</strong> il est interdit de ne pas jouer une
        scène jusqu’au bout ou de l’éviter. Terminez‑la puis avertissez le
        staff.
      </>,
    ],
    [
      "🐰",
      <>
        <strong>BUNNY HOPPING :</strong> courir + sauter pour aller plus vite.
        Interdit.
      </>,
    ],
    [
      "🐔",
      <>
        <strong>CHICKEN RUN :</strong> courir en zigzag pour esquiver les
        balles. Interdit.
      </>,
    ],
    [
      "🚘",
      <>
        <strong>CAR KILL :</strong> écraser/tuer quelqu’un en véhicule sans
        raison. Interdit, comme les Free Kill.
      </>,
    ],
    [
      "🌀",
      <>
        <strong>MIX ROLEPLAY :</strong> parler en mélangeant langage RP et HRP.
        Interdit.
      </>,
    ],
    [
      "🔎",
      <>
        <strong>SNIFFING :</strong> fouiller la ville pour trouver les points
        illégaux (drogue, etc.). Interdit ; seuls les points découverts RP sont
        valables.
      </>,
    ],
    [
      "⏪",
      <>
        <strong>RETOUR ZONE / QUARTIER :</strong> revenir sur la zone d’action
        avant la fin de la scène — interdit, que ce soit légal ou illégal.
      </>,
    ],
    [
      "🦀",
      <>
        <strong>STRAFFING :</strong> se déplacer latéralement sans pivoter, à
        la manière des FPS compétitifs (CS:GO, Valorant). Interdit.
      </>,
    ],
    [
      "🥊",
      <>
        <strong>SPEED PUNCH :</strong> utiliser le use‑bug pour frapper en
        courant (spam punch). Assimilé à PowerGaming.
      </>,
    ],
    [
      "🎙️",
      <>
        <strong>DOUBLE VOC :</strong> parler via un canal Discord quand vous
        êtes en jeu. Vos seuls moyens de communication sont ceux du jeu.
      </>,
    ],
    [
      "🚔",
      <>
        <strong>COP BAIT :</strong> provoquer intentionnellement les forces de
        l’ordre sans raison. Interdit.
      </>,
    ],
  ] as const;

  return (
    <CardTemplate title="Lexique Gaming" headerImg="/rules/lexique-gaming.webp">
      {items.map(([emoji, text]) => (
        <Aside key={emoji} emoji={emoji}>
          {text}
        </Aside>
      ))}
    </CardTemplate>
  );
}
