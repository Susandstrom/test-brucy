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
        stylePosition="30% 70%"
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
              Dessa hamburgare är saftiga, smakrika och enkla att laga.
              Perfekt för en middag för 2 personer!
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Portioner: 2 personer</li>
              <li>Beräknad tillagningstid: ca 30 minuter</li>
            </ul>
          </div>

          {/* Ingredienser + Bilder */}
          <div className="md:flex md:gap-10">

            {/* Ingredienser + Instruktioner */}
            <div className="md:w-1/2 flex flex-col gap-4 text-left">

              <h2 className="text-xl font-semibold text-gray-800">
                Hamburgare
              </h2>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>500 g nötfärs</li>
                <li>250 g fläskfärs</li>
                <li>1/2 gul lök</li>
                <li>Salt & peppar</li>
                <li>Vitlökspulver</li>
                <li>Lökpulver</li>
                <li>Paprikapulver</li>
                <li>Klick smör till stekning</li>
              </ul>

              <h2 className="text-xl font-semibold mt-4">
                Karamelliserad lök
              </h2>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>1 gul lök</li>
                <li>Sirap eller socker</li>
                <li>Vitpeppar</li>
                <li>Salt</li>
                <li>Klick smör till stekning</li>
              </ul>

              <h2 className="text-xl font-semibold mt-4">
                Tillbehör
              </h2>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Tomat</li>
                <li>Sallad</li>
                <li>Bacon</li>
                <li>Hamburgarbröd</li>
                <li>Gurka / pickles</li>
              </ul>

              <h2 className="text-xl font-semibold mt-4">
                Instruktioner
              </h2>
              <ol className="list-decimal list-inside text-gray-600 space-y-1">
                <li>Blanda färser och kryddor, forma biffar.</li>
                <li>Stek löken långsamt med smör och socker.</li>
                <li>Stek bacon krispigt.</li>
                <li>Stek hamburgarna ca 2 min per sida.</li>
                <li>Förbered grönsaker och montera hamburgaren.</li>
              </ol>
            </div>

            {/* Bilder */}
            <div className="md:w-1/2 flex flex-col gap-6 mt-6 md:mt-0">
              <img
                src="/images/hamburger.jpg"
                alt="Hamburgare"
                className="w-full max-h-[300px] object-cover rounded-2xl shadow-md"
              />
              <img
                src="/images/karamelliserad_lok.jpg"
                alt="Karamelliserad lök"
                className="w-full max-h-[300px] object-cover rounded-2xl shadow-md"
              />
              <img
                src="/images/tomato.png"
                alt="Tomater"
                className="w-full max-h-[300px] object-cover rounded-2xl shadow-md"
              />
            </div>

          </div>
        </div>
      </div>

      {/* knappar */}
      <div className="mt-8 px-4">
        <div className="mx-auto max-w-5xl flex justify-end">
          <Link
            href="/korvstroganof"
            className="px-6 py-3 rounded-full bg-white border shadow-md text-gray-700 font-semibold hover:bg-gray-100 transition"
          >
            Nästa recept →
          </Link>
        </div>
      </div>

    </main>
  );
}
