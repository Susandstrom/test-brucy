import Link from "next/link";
import Hero from "./components/hero";
import Image from "next/image";
import { buttonPrimary, buttonSecondary } from "./styles";

export default function HomePage() {
  return (
    <main className="min-h-screen space-y-8">

      {/* HERO */}
      <Hero
        title="Hem"
        subtitle="Från hjärtat och till ditt middagsbord"
        image="/images/kronärtskocka.jpg"
        titlecolor="text-white"
        subtitlecolor="text-white/90"
        stylePosition="40% 20%"
      />

      {/* SEKTION 1: Bild + text + CTA */}
      <section className="max-w-6xl mx-auto px-4 pt-12 pb-6">
        <div className="bg-white rounded-3xl shadow-md p-8 md:p-12">
          <div className="md:flex md:items-center md:gap-12">

            {/* Bild */}
            <Image
              src="/images/eggs.jpg"
              alt="Ägg i kartong"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg w-full md:w-1/2 h-80 md:h-[400px] object-cover"
            />

            {/* Text + CTA */}
            <div className="md:w-1/2 mt-8 md:mt-0">
              <h2 className="text-3xl font-bold mb-4">
                Utforska mina favoritrecept
              </h2>
              <p className="text-gray-600 mb-6">
                Upptäck en värld av smaker från världens olika hörn.
              </p>
              <Link
                href="/recipe"
                className={buttonPrimary}
              >
                Se recepten
              </Link>
            </div>

          </div>
        </div>
      </section>


      {/* SEKTION 2: Bild med CTA ovanpå */}
      <section className="max-w-6xl mx-auto px-4 pt-6 pb-12">
        <div className="relative rounded-2xl overflow-hidden shadow-lg">

          <img
            src="/images/pepparkorn.jpg"
            alt="Pepparkorn"
            className="w-full h-80 md:h-[400px] object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-center px-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">
                Kika in i vår lilla butik
              </h2>
              <p className="text-white/90 mb-6 drop-shadow-md max-w-xl mx-auto">
                Här hittar du nya smaker och verktyg som hjälper dig i köket.
              </p>
              <Link
                href="/shop"
                className={buttonSecondary}
              >
                Se vår butik
              </Link>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}