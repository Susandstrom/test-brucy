import Link from "next/link";
import Hero from "../components/hero";

export default function BiryaniPage() {
  return (
    <main className="min-h-screen bg-[#eff5ef]">

      {/* HERO-bild */}
      <Hero
        title="Elviras Biryani"
        subtitle="En kryddig rätt som dansar i munnen"
        image="/images/biryani.png"
        titlecolor="text-white-400"     // ändrar titelfärgen
        subtitlecolor="text-yellow-100"  // ändrar undertitelfärgen
      />


      {/* Text till recept! */}
      <div className="px-4 py-12">
        <div className="mx-auto max-w-5xl bg-white rounded-2xl shadow-md p-8 md:p-12">

          <p className="text-gray-600 text-lg text-center md:text-left mb-8">
            Passar perfekt för en mysig helgmiddag för 4 personer. Självklart kan du byta ut kyckling mot ett liknande protein efter era behov!
          </p>

          {/* Ingredienser + Bild */}
          <div className="md:flex md:gap-10">

            {/* Vänster */}
            <div className="md:w-1/2 text-left flex flex-col gap-4">
              <h2 className="text-xl font-semibold text-gray-800">
                Ingredienser till Biryani
              </h2>

              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>1/2 kyckling</li>
                <li>2 tsk riven ingefära</li>
                <li>2 dl yoghurt</li>
                <li>1/2 tsk gurkmeja</li>
                <li>6 vitlöksklyftor</li>
                <li>1/4 tsk kanel</li>
                <li>1/2 tsk cayenne</li>
                <li>1/2 tsk kardemumma</li>
                <li>2 msk garam masala</li>
                <li>2 msk koriander</li>
                <li>2 tsk kummin</li>
                <li>2 msk paprikapulver</li>
                <li>1 tsk salt</li>
              </ul>

              <h3 className="font-semibold mt-4">Crispy lök</h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>2 lökar</li>
                <li>250 ml olja</li>
              </ul>

              <h3 className="font-semibold mt-4">Saffran</h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>1 tsk saffran</li>
                <li>2 msk varmt vatten</li>
              </ul>
            </div>

            {/* Höger */}
            <div className="md:w-1/2 flex flex-col gap-6 mt-6 md:mt-0">
              <img
                src="/images/biryani2.jpg"
                alt="Biryani"
                className="rounded-2xl shadow-md object-cover max-h-[400px] w-full"
              />
              <img
                src="/images/biryani.png"
                alt="Biryani serverad"
                className="rounded-2xl shadow-md object-cover max-h-[400px] w-full"
              />
            </div>
          </div>

          {/* Instruktioner */}
          <div className="mt-10 text-left">
            <h2 className="text-xl font-semibold mb-3">Instruktioner</h2>
            <ol className="list-decimal list-inside text-gray-600 space-y-2">
              <li>Förbered kycklingen (kan bytas mot annat protein).</li>
              <li>Koka kycklingen under lock i 5 minuter.</li>
              <li>Ta bort locket, koka 5 minuter till.</li>
              <li>Varva kyckling, lök, koriander och ris.</li>
              <li>Tillsätt saffran och ghee.</li>
              <li>Sjud på låg värme i 25 minuter.</li>
              <li>Låt vila 10 minuter före servering.</li>
            </ol>
          </div>
            {/* Back */}
          <div className="mt-8">
            <Link
              href="/"
              className="inline-block rounded-2xl bg-white border px-8 py-3 font-semibold shadow-md hover:bg-gray-100 transition"
            >
              Back to menu
            </Link>
          </div>
        </div>
      </div>
      {/* Navigeringsknappar till andra recept */}
      <div className="mt-8 flex justify-between max-w-5xl mx-auto">
        <Link
          href="/hamburger"
          className="px-6 py-3 rounded-full bg-white border shadow-md text-gray-700 font-semibold hover:bg-gray-100 transition"
        >
          ← Föregående recept
        </Link>
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
