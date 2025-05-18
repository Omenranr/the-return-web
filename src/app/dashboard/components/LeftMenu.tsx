import { auth } from '~/server/auth';
import Image from 'next/image';


export default async function LeftMenu() {
    const session = await auth();
    return (
        <>
          <aside className="space-y-6">
            <div className="rounded-lg bg-white/10 p-6">
              <h3 className="mb-6 font-semibold text-center">Perso RP:</h3>
            <p>Vous n'avez pas encore créé de perso</p>
              {/* <ul className="space-y-4 text-sm">
                {[
                  'Nom: Razzouki',
                  'Prénom: Said',
                  'Age: 30 ans',
                  'Date création: 18/05/2025',
                ].map((item) => (
                  <li
                    key={item}
                    className="flex cursor-pointer items-center gap-3 opacity-90 hover:text-orange-400"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
                    {item}
                  </li>
                ))}
              </ul> */}
            </div>
            {/* socials
            <div className="flex items-center justify-center gap-4 opacity-70">
              {['/social/ig.svg', '/social/tw.svg', '/social/yt.svg', '/social/tiktok.svg'].map((icon) => (
                <Image key={icon} src={icon} alt="" width={20} height={20} />
              ))}
            </div> */}
          </aside>
        </>
  )
}
