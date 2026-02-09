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

      {/* Text till recept */}
      <div className="px-4 py-12">
        <div className="mx-auto max-w-5xl bg-white rounded-2xl shadow-md p-8 md:p-12">

          <div className="text-gray-600 text-lg mb-8 md:text-left text-center">
            <p>Ett recept från min barndom, fyllt av minnen av hemlagad mat och gemenskap.</p>
            <ul className="list-disc list-inside space-y-1 mb-4">
              <li>Passar perfekt för vardaglig familjemiddag för 4 personer</li>
              <li>Beräknad tillagningstid: ca 30 minuter</li>
            </ul>
          </div>

          {/* Ingredienser + Bilder */}
          <div className="md:flex md:gap-10">

            {/* Vänster: Ingredienser + Instruktioner */}
            <div className="md:w-1/2 text-left flex flex-col gap-4">
              <h2 className="text-xl font-semibold text-gray-800 mt-3 mb-1">Ingredienser</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Falukorv</li>
                <li>1 Gul Lök</li>
                <li>1 msk Tomatpuré</li>
                <li>2 dl Grädde</li>
                <li>Salt & Peppar</li>
              </ul>

              <h2 className="text-xl font-semibold mt-4">Kokt Ris</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>3 dl Ris</li>
                <li>6 dl Vatten</li>
                <li>1 tsk Salt</li>
              </ul>

              <h2 className="text-xl font-semibold mt-4">Instruktioner</h2>
              <ol className="list-decimal list-inside text-gray-600 space-y-1">
                <li>Skär falukorven i skivor och hacka löken.</li>
                <li>Fräs löken tills den blir mjuk, tillsätt korvskivorna.</li>
                <li>Blanda i tomatpuré och låt fräsa någon minut.</li>
                <li>Häll i grädden och låt sjuda i 5-10 minuter.</li>
                <li>Krydda med salt och peppar efter smak.</li>
                <li>Koka ris enligt anvisningarna ovan och servera tillsammans.</li>
              </ol>

              {/* Back-knapp */}
              <div className="mt-8 flex justify-start">
                <Link
                  href="/"
                  className="inline-block rounded-2xl bg-white border px-8 py-3 font-semibold shadow-md hover:bg-gray-100 transition"
                >
                  Back to menu
                </Link>
              </div>
            </div>

            {/* Höger: Bilder */}
            <div className="md:w-1/2 flex flex-col gap-6 mt-6 md:mt-0">
              <img
                src="/images/stroganof.jpg"
                alt="Korvstroganof"
                className="rounded-2xl shadow-md object-cover max-h-[400px] w-full"
              />
              <img
                src="/images/falukorv.jpg"
                alt="Falukorv"
                className="rounded-2xl shadow-md object-cover max-h-[400px] w-full"
              />
            </div>

          </div>

        </div>
      </div>

      {/* Navigeringsknappar */}
      <div className="mt-8 flex justify-between max-w-5xl mx-auto">
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

    </main>
  );
}
