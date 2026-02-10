import Link from "next/link"; // Detta är startsidan (HEM)
import Hero from "./components/hero";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* HERO-bild */}
      <Hero
        title="Hem"
        subtitle="Från hjärtat och till ditt middagsbord"
        image="/images/kronärtskocka.jpg"
        titlecolor="text-white"
        subtitlecolor="text-white/90"
        stylePosition="40% 20%"
      />

      {/* Bild med text och CTA */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="md:flex md:items-center md:gap-8">

          {/*Vänsterbild */}
          <img 
          src="/images/eggs.jpg"
          alt="Ägg i kartong"
          className="rounded-2xl shadow-lg w-full object-cover h-70 md:h-[350px]"
          />

          {/*Höger: text & CTA */}
          <div className="md:w-1/2 mt-8 md:mt-0 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-3">Utforska mina favoritrecept!</h2>
          <p className="text-gray-600 mb-5">Upptäck en värld av smaker från världens olika hörn!</p>
          <Link 
          href="/recipe"
          className="inline-block bg-green-600 text-white font-semibold px-6 py-3 rounded-xl shadow hover:bg-green-700 transition">Se recepten</Link>
          </div>
        </div>
      </div>

      <div className="relative w-full max-w-6xl mx-auto px-4 py-12">
        <div className="relative rounded-2xl overflow-hidden shadow-lg">
          {/*bild med CTA i */}
          <img
          src="/images/pepparkorn.jpg"
          alt="pepparkorn"
          className="w-full h-70 md:h-[350px] object-cover"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 drop-shadow-lg">Kika in i vår lilla butik</h2>
            <p className="text-white/90 mb-5 drop-shadow-md">Här hittar ni nya goda smaker eller verktyg som hjälper dig i köket</p>
            <Link 
            href="/shop"
            className="bg-green-600 text-white font-semibold px-6 py-3 rounded-xl shadow hover:bg-green-700 transition">Se vår butik
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
