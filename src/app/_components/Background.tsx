/**
 * Full–page background: photo + colored gradient overlay
 */
export default function Background() {
  return (
    <>
      {/* gradient overlay (front layer) */}
      <div
        className="
          fixed inset-0 -z-10            /* higher than -20, lower than the UI */
          bg-gradient-to-br
          from-[#3200ff] via-[#1d008e]/60 to-[#12004a]/90
          mix-blend-overlay              /* lets the colours tint the photo */
          pointer-events-none select-none
        "
      />
      {/* photo (back layer) */}
      <div
        className="
          fixed inset-0 -z-20
          bg-[url('/background.webp')]
          bg-cover bg-center bg-no-repeat
          pointer-events-none select-none
          opacity-40
        "
      />
    </>
  );
}
