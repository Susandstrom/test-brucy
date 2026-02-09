import Link from "next/link";
import Hero from "../components/hero";

export default function HamburgerPage() {
  return (
    <main className="min-h-screen">

      {/* HERO-bild */}
      <Hero
        title="Fredriks Hamburgare"
        subtitle="Gott på några minuter, perfekt för fredagkvällen!"
        image="/images/hamburger.jpg"
        titlecolor="text-white"
        subtitlecolor="text-white/90"
      />

      {/* Text till recept */}
      <div className="px-4 py-12">
        <div className="mx-auto max-w-5xl bg-white rounded-2xl shadow-md p-8 md:p-12">

          <div className="text-gray-600 text-lg mb-8 text-center md:text-left">
            <p className="mb-4">
              Dessa hamburgare är saftiga, smakrika och enkla att laga. Perfekt för en middag för 2 personer!
            </p>
            <ul className="list-disc list-inside space-y-1 mb-4">
              <li>Portioner: 2 personer</li>
              <li>Beräknad tillagningstid: ca 30 minuter</li>
            </ul>
          </div>

          {/* Ingredienser + Bilder */}
          <div className="md:flex md:gap-10">

            {/* Ingredienser */}
            <div className="md:w-1/2 text-left flex flex-col gap-2">
              <h2 className="text-xl font-semibold text-gray-800 mt-3 mb-1">
                Hamburgare
              </h2>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>500g Nötfärs</li>
                <li>250g Fläskfärs</li>
                <li>1/2 Gul Lök</li>
                <li>Salt & Peppar</li>
                <li>Vitlökspulver</li>
                <li>Lökpulver</li>
                <li>Paprikapulver</li>
                <li>Klick smör till stekning</li>
              </ul>

              <h2 className="text-xl font-semibold mt-4">Karamelliserad Lök</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>1 Gul lök</li>
                <li>Sirap eller socker</li>
                <li>Vitpeppar</li>
                <li>Salt</li>
                <li>Klick smör till stekning</li>
              </ul>

              <h2 className="text-xl font-semibold mt-4">Tillbehör</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Tomat</li>
                <li>Sallad</li>
                <li>Bacon</li>
                <li>Hamburgarbröd</li>
                <li>Gurka/Pickles</li>
              </ul>

              <h2 className="text-xl font-semibold mt-4 mb-1">Instruktioner</h2>
              <ol className="list-decimal list-inside text-gray-600 space-y-1">
                <li>Blanda nötfärs och fläskfärs med kryddor och forma till biffar.</li>
                <li>Stek löken med smör och socker tills den karamelliserats. Stek bacon krispigt.</li>
                <li>Stek hamburgarna ca 2 minuter per sida i smör.</li>
                <li>Förbered tillbehör: skiva tomat, sallad och gurka.</li>
                <li>Lägg ihop hamburgaren med alla ingredienser. Klart!</li>
              </ol>

            </div>

            {/* Bilder */}
            <div className="md:w-1/2 flex flex-col gap-6 mt-6 md:mt-0">
              <img
                src="/images/hamburger.jpg"
                alt="Hamburgare"
                className="rounded-2xl shadow-md object-cover max-h-[300px] w-full"
              />
              <img
                src="/images/karamelliserad_lok.jpg"
                alt="Karamelliserad lök"
                className="rounded-2xl shadow-md object-cover max-h-[300px] w-full"
              />
              <img
                src="/images/tomato.png"
                alt="Tomater"
                className="rounded-2xl shadow-md object-cover max-h-[300px] w-full"
              />
            </div>

          </div>

          {/* Tillbaka-knapp */}
          <div className="mt-8 flex justify-start">
            <Link
              href="/"
              className="inline-block rounded-2xl bg-white border px-8 py-3 font-semibold shadow-md hover:bg-gray-100 transition"
            >
              Back to menu
            </Link>
          </div>

        </div>
      </div>

      {/* Navigeringsknappar */}
      <div className="mt-8 flex justify-end max-w-5xl mx-auto px-4">
        <Link
          href="/korvstroganof"
          className="px-6 py-3 rounded-full bg-white border shadow-md text-gray-700 font-semibold hover:bg-gray-100 transition"
        >
          Nästa recept →
        </Link>
      </div>

    </main>
  );
}
