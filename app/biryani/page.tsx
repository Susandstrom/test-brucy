import Link from "next/link";

export default function BiryaniPage() {
  return (
    <main className="min-h-screen bg-[#eff5ef] px-4 py-12">
      <div className="mx-auto max-w-5xl bg-white rounded-2xl shadow-md p-8 md:p-12">

        {/* Rubrik */}
        <h1 className="text-4xl font-bold text-gray-900 text-center md:text-left">
          Elviras Biryani
        </h1>
        <p className="text-gray-600 text-lg text-center md:text-left mt-2">
          En kryddig rätt som dansar i munnen
        </p>

        {/* Ingredienser + Bild */}
        <div className="mt-8 md:flex md:gap-10">
          
          {/* Vänster: Ingredienser */}
          <div className="md:w-1/2 text-left flex flex-col gap-3">
            <h2 className="text-l font-semibold text-gray-800 mb-1">Ingredienser till Briyani</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Valfri protein ca 500g</li>
              <li>2 tsk riven ingefära</li>
              <li>2 dl yoghurt</li>
              <li>1/2 tsk malen gurkmeja</li>
              <li>6 klyftor vitlök</li>
              <li>1/4 tsk kanel</li>
              <li>1/2 tsk cayenne</li>
              <li>1/2 tsk malen kardemumma</li>
              <li>2 msk garam masala</li>
              <li>2 msk koriander</li>
              <li>2 tsk kummin</li>
              <li>2 msk paprikapulver</li>
              <li>1 tsk salt</li>
            </ul>

            {/* Crispy lök */}
            <div>
              <h3 className="text-l font-semibold text-gray-700 mb-1">Crispy lök</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>2 medelstora lökar, halverade och tunt skivade</li>
                <li>250 ml olja till fritering</li>
              </ul>
            </div>

            {/* Saffran */}
            <div>
              <h3 className="text-l font-semibold text-gray-700 mb-1">Saffran</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>1 tsk saffran</li>
                <li>2 msk varmt vatten</li>
              </ul>
            </div>

            {/* Garnering */}
            <div>
              <h3 className="text-l font-semibold text-gray-700 mb-1">Garnering</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Crispy lök (se ovan)</li>
                <li>Hackad koriander / cilantro</li>
                <li>Yoghurt</li>
              </ul>
            </div>
          </div>

          {/* Höger: Bild */}
          <div className="md:w-1/2 flex flex-col gap-6 items-center justify-center mt-6 md:mt-0">
            <img
              src="\images\ChatGPT Image Feb 3, 2026, 11_23_21 AM.png"
              alt="Biryani"
              className="rounded-2xl shadow-md object-cover max-h-[400px] w-full"
            />
            <img
              src="\images\Chicken-Biryani-Recipe1.jpg"
              alt="Biryanik"
              className="rounded-2xl shadow-md object-cover max-h-[400px] w-full"
            />
          </div>

        </div>

        {/* Instruktioner under */}
        <div className="mt-8 text-left">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">Instruktioner</h2>
          <ol className="list-decimal list-inside text-gray-600 space-y-2">
            <li>Sätt kastrullen med kycklingen på medelvärme på spisen. Täck med lock och koka i 5 minuter.</li>
            <li>Ta bort locket. Koka i ytterligare 5 minuter och vänd kycklingen två gånger.</li>
            <li>Ta av från värmen.</li>
            <li>Lägg kycklingen med skinnsidan nedåt, den bör täcka det mesta av kastrullens botten.</li>
            <li>Strö över hälften av löken och hälften av koriandern.</li>
            <li>Toppa med allt ris. Tryck försiktigt ner och jämna ut ytan.</li>
            <li>Ringla saffran över risets yta i ett slumpmässigt mönster, och ringla sedan över ghee.</li>
            <li>Sätt på locket. Sätt tillbaka på spisen på medelvärme.</li>
            <li>Så snart du ser ånga, sänk till låg värme och koka i 25 minuter.</li>
            <li>Ta av från spisen och låt stå med locket på i 10 minuter.</li>
          </ol>
        </div>

        {/* Back button */}
        <div className="mt-6 flex justify-center md:justify-start">
          <Link
            href="/"
            className="inline-block rounded-2xl bg-white border border-gray-300 px-8 py-3 font-semibold shadow-md text-gray-700 hover:bg-gray-100 transition"
          >
            Back to menu
          </Link>
        </div>

      </div>
    </main>
  );
}
