/**
 * Re‑usable top navigation bar (v2)
 * – Switched back to `gap-*` utilities because they worked reliably on your
 *   build, whereas `space-x-*` didn’t seem to take effect (likely a Tailwind
 *   version / compilation quirk).
 * – Keeps flex layout: logo | nav‑group (links + Discord + CTA)
 */
export default async function Background() {

  return (
    <div className="absolute inset-0 -z-10 
                    bg-[url('/background.webp')]
                    opacity-80 mix-blend-overlay
                    pointer-events-none select-none" />
  );
}
