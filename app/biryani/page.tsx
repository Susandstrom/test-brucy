import Link from "next/link";
import Hero from "../components/hero";

export default function BiryaniPage() {
  return (
    <main className="min-h-screen">

      {/* HERO-bild */}
      <Hero
        title="Elviras Biryani"
        subtitle="En kryddig rätt som dansar i munnen"
        image="/images/biryani.png"
        titlecolor="text-white"
        subtitlecolor="text-white/90"
        stylePosition="30% 20%"
      />

      {/* Text till recept */}
      <div className="px-4 py-12">
        <div className="mx-auto max-w-5xl bg-white rounded-2xl shadow-md p-8 md:p-12">

          <div className="text-gray-600 text-lg mb-8 text-center md:text-left">
            <p className="mb-4">
              Denna kryddiga Biryani kombinerar aromatiska kryddor, saffran och yoghurt för en smakrik och saftig rätt som kommer imponera på både familj och vänner!
            </p>

            <ul className="list-disc list-inside space-y-1 mb-4">
              <li>Passar perfekt för en mysig helgmiddag för 4 personer</li>
              <li>Beräknad tillagningstid: ca 60 minuter</li>
            </ul>

            <p>
              Självklart kan du byta ut kyckling mot ett liknande protein efter era behov.
            </p>
          </div>

          {/* Ingredienser + Bilder */}
          <div className="md:flex md:gap-10">
            
            {/* Ingredienser */}
            <div className="md:w-1/2 text-left flex flex-col gap-2">
              <h2 className="text-xl font-semibold text-gray-800 mt-3 mb-1">
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

              <h2 className="text-xl font-semibold mt-4">Crispy lök</h2>
              <ul className="list-disc list-inside text-gray-600">
                <li>2 lökar</li>
                <li>250 ml olja</li>
              </ul>

              <h2 className="text-xl font-semibold mt-4">Saffran</h2>
              <ul className="list-disc list-inside text-gray-600">
                <li>1 tsk saffran</li>
                <li>2 msk varmt vatten</li>
              </ul>

              <h2 className="text-xl font-semibold mt-4 mb-1">Instruktioner</h2>
              <ol className="list-decimal list-inside text-gray-600 space-y-1">
                <li>Förbered kycklingen (kan bytas mot annat protein).</li>
                <li>Koka kycklingen under lock i 5 minuter.</li>
                <li>Ta bort locket, koka 5 minuter till.</li>
                <li>Varva kyckling, lök, koriander och ris.</li>
                <li>Tillsätt saffran och ghee.</li>
                <li>Sjud på låg värme i 25 minuter.</li>
                <li>Låt vila 10 minuter före servering.</li>
                <li>Toppa med koriander</li>
              </ol>
            </div>

            {/* Bilder */}
            <div className="md:w-1/2 flex flex-col gap-6 mt-6 md:mt-0">
              <img
                src="/images/biryani2.jpg"
                alt="Biryani"
                className="rounded-2xl shadow-md object-cover max-h-[300px] w-full"
              />
              <img
                src="/images/biryani.png"
                alt="Biryani serverad"
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
              Ta mig tillbaka
            </Link>
          </div>

        </div>
      </div>

      {/* Bläddra bland recept */}
      <div className="mt-8 flex justify-between max-w-5xl mx-auto px-4">
        <Link
          href="/korvstroganof"
          className="px-6 py-3 rounded-full bg-white border shadow-md text-gray-700 font-semibold hover:bg-gray-100 transition"
        >
          ← Föregående recept
        </Link>
      </div>

    </main>
  );
}
