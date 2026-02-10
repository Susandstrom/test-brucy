import Link from "next/link";
import Hero from "../components/hero";

export default function KorvstroganofPage() {
  return (
    <main className="min-h-screen">

      {/* HERO-bild */}
      <Hero
        title="Klings Korvstroganof"
        subtitle="En svensk klassiker direkt från hjärtat!"
        image="/images/stroganof.jpg"
        titlecolor="text-white"
        subtitlecolor="text-white/90"
      />

      {/* Tillbaka-knapp under hero*/}
      <div className="mt-8 px-4">
        <div className="mx-auto max-w-5xl flex justify-end">
          <Link
            href="/"
            className="inline-block rounded-2xl bg-white border px-8 py-3 font-semibold shadow-md hover:bg-gray-100 transition"
          >
            Ta mig tillbaka
          </Link>
        </div>
      </div>

      {/* Text till recept */}
      <div className="px-4 py-12">
        <div className="mx-auto max-w-5xl bg-white rounded-2xl shadow-md p-8 md:p-12">

          {/* Intro */}
          <div className="text-gray-600 text-lg mb-8 text-center md:text-left">
            <p className="mb-4">
              Ett recept från min barndom, fyllt av minnen av hemlagad mat och gemenskap.
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Passar perfekt för vardaglig familjemiddag för 4 personer</li>
              <li>Beräknad tillagningstid: ca 30 minuter</li>
            </ul>
          </div>

          {/* Ingredienser + Bilder */}
          <div className="md:flex md:gap-10">

            {/* Ingredienser + Instruktioner */}
            <div className="md:w-1/2 flex flex-col gap-4 text-left">
              <h2 className="text-xl font-semibold text-gray-800">Ingredienser</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Falukorv</li>
                <li>1 gul lök</li>
                <li>1 msk tomatpuré</li>
                <li>2 dl grädde</li>
                <li>Salt & peppar</li>
              </ul>

              <h2 className="text-xl font-semibold mt-4">Kokt ris</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>3 dl ris</li>
                <li>6 dl vatten</li>
                <li>1 tsk salt</li>
              </ul>

              <h2 className="text-xl font-semibold mt-4">Instruktioner</h2>
              <ol className="list-decimal list-inside text-gray-600 space-y-1">
                <li>Skär falukorven i skivor och hacka löken.</li>
                <li>Fräs löken tills den blir mjuk, tillsätt korven.</li>
                <li>Blanda i tomatpuré och fräs någon minut.</li>
                <li>Häll i grädden och låt sjuda 5–10 minuter.</li>
                <li>Krydda med salt och peppar.</li>
                <li>Servera med nykokt ris.</li>
              </ol>
            </div>

            {/* Bilder */}
            <div className="md:w-1/2 flex flex-col gap-6 mt-6 md:mt-0">
              <img
                src="/images/stroganof.jpg"
                alt="Korvstroganof"
                className="w-full max-h-[400px] object-cover rounded-2xl shadow-md"
              />
              <img
                src="/images/falukorv.jpg"
                alt="Falukorv"
                className="w-full max-h-[400px] object-cover rounded-2xl shadow-md"
              />
            </div>

          </div>
        </div>
      </div>

      {/* Knappar längst ner */}
      <div className="mt-8 px-4">
        <div className="mx-auto max-w-5xl flex justify-between">
          <Link
            href="/hamburger"
            className="px-6 py-3 rounded-full bg-white border shadow-md text-gray-700 font-semibold hover:bg-gray-100 transition"
          >
            ← Föregående recept
          </Link>

          <Link
            href="/biryani"
            className="px-6 py-3 rounded-full bg-white border shadow-md text-gray-700 font-semibold hover:bg-gray-100 transition"
          >
            Nästa recept →
          </Link>
        </div>
      </div>

    </main>
  );
}
