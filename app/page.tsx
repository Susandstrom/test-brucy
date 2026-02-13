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

      {/* Bild + text + CTA */}
      <section className="max-w-6xl mx-auto px-4 pt-6 pb-1">
          <div className="md:flex md:gap-0">

            {/* Bild */}
            <div className="md:w-1/2">{/* Så bilden bara är på halva sidan */}
            <Image
              src="/images/eggs.jpg"
              alt="Ägg i kartong"
              width={500}
              height={500}
              className="w-full h-full object-cover rounded-l-2xl"
            />{/* rounded-l-2xl betyder att det endast är rundad i hörnen på vänster sida(l=left) */}
            </div>

            {/* Välkommen-text*/}
            <div className="md:w-1/2 bg-white p-8 rounded-r-2xl flex flex-col justify-center shadow-md">
              <h2 className="text-3xl font-bold mb-4 text-left">
                Här hittar du smakrika recept och nya äventyr till ditt kök
              </h2>
              <p className="text-gray-600 mb-6 text-left">
                Upptäck en värld av smaker från världens olika hörn med kryddor, och möjligtvis verktyg som hjälper dig i köket. Söker du efter mer så är det bara att kontakta oss!
              </p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 pt-6 pb-1">
        <div className="flex flex-col md:flex-row md:gap-10">

          {/* Kort 1 + CTA till recept*/}
          <div className="flex-1 mb-6 md:mb-0 relative group overflow-hidden rounded-2xl">
            <img
              src="/images/pannkakor.jpg"
              alt="Pannkakor"
              className="w-full h-80 md:h-[400px] object-cover rounded-2xl transition-transform duration-300 group-hover:scale-105"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/25 flex flex-col justify-center items-center text-center p-4">
              <h3 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg mb-2">
                Utforska mina favoritrecept
              </h3>
              <a
                href="/recipe"
                className={buttonPrimary}
              >
                Se recepten
              </a>
            </div>
          </div>

          {/* Kort 2 */}
          <div className="flex-1 relative group overflow-hidden rounded-2xl">
            <img
              src="/images/pepparkorn.jpg"
              alt="Pepparkorn"
              className="w-full h-80 md:h-[400px] object-cover rounded-2xl transition-transform duration-300 group-hover:scale-105"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/35 flex flex-col justify-center items-center text-center p-4">
              <h3 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg mb-2">
                Kika in i vår lilla butik
              </h3>
              <a
                href="/shop"
                className={buttonSecondary}
              >
                Se vår butik
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Bild med CTA ovanpå */}
      <section className="max-w-6xl mx-auto px-4 pt-6 pb-1">
        <div className="relative rounded-2xl overflow-hidden shadow-lg">

          <img
            src="/images/strawberries.jpg"
            alt="Jordgubbar"
            className="w-full h-80 md:h-[400px] object-cover"
          />

          {/* Overlay + text + CTA */}
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center text-center px-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">
                Hittar du inte det du söker?
              </h2>
              <p className="text-white/90 mb-6 drop-shadow-md max-w-xl mx-auto">
                Skicka oss ett meddelande så hjälper vi dig!</p>
              <Link
                href="/contact"
                className={buttonSecondary}
              >
                Kontakta oss
              </Link>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}