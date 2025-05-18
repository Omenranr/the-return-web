import { auth } from '~/server/auth';


export default async function RightMenu() {
    const session = await auth();
    return (
        <>
            <section className="space-y-8">

            {/* invite friends */}
            <div className="rounded-lg bg-white/10 p-6 space-y-4">
            <h3 className="text-lg font-semibold">Prêt pour passer la WhiteList ?</h3>
            <p className="text-sm">
                Commence par répondre au questionnaire.
            </p>
            </div>

            {/* ranks
            <div className="rounded-lg bg-white/10 p-6">
            <h3 className="mb-6 text-center font-semibold">Les rangs de parrainage :</h3>

            <div className="grid gap-4 text-center text-sm font-medium md:grid-cols-4">
                {[
                { label: 'Novice', colour: 'bg-sky-600', min: '< 5', bonus: '+ 10 %' },
                { label: 'Bronze', colour: 'bg-amber-900', min: '≥ 5', bonus: '+ 15 %' },
                { label: 'Argent', colour: 'bg-gray-300', min: '≥ 20', bonus: '+ 20 %' },
                { label: 'Or', colour: 'bg-yellow-400', min: '≥ 50', bonus: '+ 60 %' },
                ].map((r) => (
                <div key={r.label} className="space-y-2 rounded-lg bg-[#0f0c33] p-4">
                    <div className={`mx-auto h-10 w-10 rounded-full ${r.colour}`} />
                    <p>{r.label}</p>
                    <p className="text-xs opacity-70">{r.min} filleuls actifs</p>
                    <p className="mt-2 text-lg font-bold">{r.bonus}</p>
                    <p className="text-xs opacity-70">sur votre salaire</p>
                </div>
                ))}
            </div>
            </div> */}
            </section>
        </>
  )
}