import { CardTemplate } from "./_CardTemplate";
import { Aside } from "./Aside";

export default function EconomyIllegal() {
  return (
    <CardTemplate
      title="Économie Illégal"
      headerImg="/rules/economy-illegal.webp"
    >
      {/* -------------------------------------------------------------- */}
      {/* 1 . Vente de drogue                                            */}
      {/* -------------------------------------------------------------- */}
      <Aside emoji="🌿">
        <h2 className="font-semibold text-orange-300">Vente de drogue</h2>
        <ul className="ml-4 list-disc space-y-1 text-sm">
          <li>Pochon de cannabis : <strong>7 $</strong></li>
          <li>Pilule ecstasy : <strong>15 $</strong></li>
          <li>Pochon de coke : <strong>20 $</strong></li>
          <li>Pochon de meth : <strong>40 $</strong></li>
        </ul>
      </Aside>

      {/* -------------------------------------------------------------- */}
      {/* 2 . Armes blanches                                             */}
      {/* -------------------------------------------------------------- */}
      <Aside emoji="🔪">
        <h2 className="font-semibold text-orange-300">Armes blanches</h2>
        <p className="text-sm">
          Toute arme blanche peut se vendre entre <strong>100 $</strong> et
          <strong> 500 $</strong>.
        </p>
      </Aside>

      {/* -------------------------------------------------------------- */}
      {/* 3 . Armes à feu                                                */}
      {/* -------------------------------------------------------------- */}
      <Aside emoji="🔫">
        <h2 className="font-semibold text-orange-300">Armes à feu</h2>
        <ul className="ml-4 list-disc space-y-1 text-sm">
          <li>SNS : 5 000 – 6 000 $</li>
          <li>Pistolet 9 mm : 7 000 – 9 000 $</li>
          <li>Pistolet combat : 10 000 – 12 000 $</li>
          <li>Pistolet auto : 20 000 – 25 000 $</li>
          <li>Pompe : 30 000 – 40 000 $</li>
          <li>Fusil AK : 50 000 – 60 000 $</li>
        </ul>
      </Aside>

      {/* -------------------------------------------------------------- */}
      {/* 4 . Munitions                                                  */}
      {/* -------------------------------------------------------------- */}
      <Aside emoji="⚾">
        <h2 className="font-semibold text-orange-300">Munitions</h2>
        <ul className="ml-4 list-disc space-y-1 text-sm">
          <li>9 mm : 50 $/balle</li>
          <li>0.45 : 60 $/balle</li>
          <li>Pompe : 100 $/balle</li>
          <li>Assaut : 200 $/balle</li>
        </ul>
      </Aside>

      {/* -------------------------------------------------------------- */}
      {/* 5 . Contrebande                                                */}
      {/* -------------------------------------------------------------- */}
      <Aside emoji="🥷">
        <h2 className="font-semibold text-orange-300">Contre‑bande</h2>
        <ul className="ml-4 list-disc space-y-1 text-sm">
          <li>Perceuse : 200 $</li>
          <li>Perceuse laser : 2 000 $</li>
          <li>Charge thermique : 200 $</li>
          <li>USB : 100 $</li>
          <li>Coupe‑glace : 2 000 $</li>
        </ul>
      </Aside>
    </CardTemplate>
  );
}
