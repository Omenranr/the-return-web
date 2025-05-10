import { CardTemplate } from "./_CardTemplate";
import { Aside } from "./Aside";
import Image from "next/image";

export default function LexiqueRoleplay() {
  const items = [
    [
      "⚙",
      <>
        <strong>REBOOT :</strong> si le serveur redémarre, on dit souvent qu’une
        « tempête » frappe la ville.
      </>,
    ],
    [
      "💤",
      <>
        <strong>AFK :</strong> préférez dire que vous étiez « dans vos pensées »
        ou que vous avez eu « un moment d’absence ».
      </>,
    ],
    [
      "💥",
      <>
        <strong>CRASH :</strong> votre jeu a crash ? Dites que vous avez eu « un
        mal de crâne » ou « une migraine ».
      </>,
    ],
    [
      "🎙️",
      <>
        <strong>MICRO :</strong> si un joueur a un souci de micro, signalez‑lui
        qu’il a « un problème à la gorge » et qu’il devrait « prendre une
        pastille ».
      </>,
    ],
    [
      /* custom emoji rendered with <Image> */
      <Image src="/discord.svg" alt="Discord" width={24} height={24} />,
      <>
        <strong>DISCORD :</strong> pour parler de Discord en jeu, dites que vous
        allez sur « l’intranet » afin d’éviter toute ambiguïté avec téléphone ou
        radio.
      </>,
    ],
  ] as const;

  return (
    <CardTemplate title="Lexique Roleplay" headerImg="/rules/lexique-roleplay.webp">
      {items.map(([emoji, text], idx) => (
        <Aside key={idx} emoji={emoji}>
          {text}
        </Aside>
      ))}
    </CardTemplate>
  );
}
