import Navbar from "../_components/NavBar";
import Background from "../_components/Background";

export default async function MediaPage() {

  return (
    <div className="text-white">
      {/* background gradient & pattern */}
      <Background />

      {/* top bar */}
      <Navbar />

      {/* page content */}
      <main className="mx-auto max-w-5xl px-6 md:px-10 pt-12 pb-24 space-y-8">
        <h1 className="text-3xl font-bold tracking-wide">Trailer Episode 1</h1>

        {/* responsive 16:9 YouTube iframe */}
        <div className="relative w-full pt-[56.25%]">
          <iframe
            className="absolute inset-0 h-full w-full rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/GbKmVXXW_lQ?rel=0"
            title="Présentation The-Return"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </main>
    </div>
  );
}
