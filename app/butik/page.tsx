import Hero from "../components/hero";

export default function ButikPage() {
  return (
    <main className="min-h-screen bg-[#eff5ef]">
      
      {/* HERO-bild */}
      <Hero
        title="Shop"
        subtitle="Hitta dina nya favoriter!"
        image="/images/fruktOgrönt.jpg"
        titlecolor="text-white"
        subtitlecolor="text-yellow-100"
      />

      {/* PRODUKTER */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {/* Produktkort */}
          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col h-full">
            <img
              src="/images/spice.jpg"
              alt="Kryddor"
              className="rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold">Biryani krydda</h3>
            <p className="text-gray-600">Autentisk kryddblandning</p>

            <div className="mt-auto"> {/*Gör att pris & knapp är längst ner*/}
            <p className="font-bold mt-2">89 KR</p>

            <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-xl hover:bg-green-700">
              Lägg i varukorg
            </button>
          </div>
        </div>

          {/* produkt nr2 */}
          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col h-full">
            <img
              src="/images/liten-stekpanna.jpg"
              alt="Liten stekpanna"
              className="rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold">Liten stekpanna - Blomma</h3>
            <p className="text-gray-600">En mindre stekpanna(29cm) i form av en blomma för en roligare frukost.</p>

            <div className="mt-auto">
            <p className="font-bold mt-2">129 KR</p>

            <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-xl hover:bg-green-700">
              Lägg i varukorg
            </button>
          </div>
        </div>

          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col h-full">
            <img
              src="/images/kanelstäng.jpg"
              alt="Kanelstänger"
              className="rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold">Kanelstänger 100g</h3>
            <p className="text-gray-600">100g Hela Kanelstänger för bakning och matlagning.</p>

            <div className="mt-auto">
            <p className="font-bold mt-2">199 KR</p>

            <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-xl hover:bg-green-700">
              Lägg i varukorg
            </button>
          </div>
          </div>

         <div className="bg-white rounded-xl shadow-md p-6 flex flex-col h-full">
            <img
              src="/images/spice.jpg"
              alt="Kryddor"
              className="rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold">Biryani krydda</h3>
            <p className="text-gray-600">Autentisk kryddblandning</p>

            <div className="mt-auto">
            <p className="font-bold mt-2">89 KR</p>

            <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-xl hover:bg-green-700">
              Lägg i varukorg
            </button>
          </div>
        </div>

         <div className="bg-white rounded-xl shadow-md p-6 flex flex-col h-full">
            <img
              src="/images/spice.jpg"
              alt="Kryddor"
              className="rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold">Biryani krydda</h3>
            <p className="text-gray-600">Autentisk kryddblandning</p>

            <div className="mt-auto">
            <p className="font-bold mt-2">89 KR</p>

            <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-xl hover:bg-green-700">
              Lägg i varukorg
            </button>
          </div>
        </div>

         <div className="bg-white rounded-xl shadow-md p-6 flex flex-col h-full">
            <img
              src="/images/spice.jpg"
              alt="Kryddor"
              className="rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold">Biryani krydda</h3>
            <p className="text-gray-600">Autentisk kryddblandning</p>
            
            <div className="mt-auto">
            <p className="font-bold mt-2">89 KR</p>

            <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-xl hover:bg-green-700">
              Lägg i varukorg
            </button>
          </div>
        </div>
         

        </div>
      </div>
    </main>
  );
}
