export default function KorvstroganofPage() {
  return (
    <main className="min-h-screen bg-[#eff5ef] px-4 py-12">
      <div className="mx-auto max-w-5xl bg-white rounded-2xl shadow-md p-8 md:p-12 flex flex-col md:flex-row gap-10">

        {/* Vänster: ALL TEXT */}
        <div className="flex-1 text-left flex flex-col gap-6">
          <h1 className="text-4xl font-bold text-gray-900">
            Klings Korvstroganof
          </h1>
          <p className="text-gray-600 text-lg">
            En svensk klassiker direkt från hjärtat
          </p>

          {/* Ingredienser */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Ingredienser</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Falukorv</li>
              <li>1 Gul Lök</li>
              <li>1 msk Tomatpuré</li>
              <li>2 dl Grädde</li>
              <li>Salt & Peppar</li>
            </ul>
          </div>

          {/* Kokt Ris */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Kokt Ris</h2>
            <ul className="list-decimal list-inside text-gray-600 space-y-1">
              <li>3 dl Ris</li>
              <li>6 dl Vatten</li>
              <li>1 tsk Salt</li>
            </ul>
          </div>

          {/* Instruktioner */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Instruktioner</h2>
            <ol className="list-decimal list-inside text-gray-600 space-y-2">
              <li>Skär falukorven i skivor och hacka löken.</li>
              <li>Fräs löken tills den blir mjuk, tillsätt korvskivorna.</li>
              <li>Blanda i tomatpuré och låt fräsa någon minut.</li>
              <li>Häll i grädden och låt sjuda i 5-10 minuter.</li>
              <li>Krydda med salt och peppar efter smak.</li>
              <li>Koka ris enligt anvisningarna ovan och servera tillsammans.</li>
            </ol>
          </div>

          {/* Back button */}
          <div className="mt-6">
            <button className="rounded-2xl bg-white border border-gray-300 px-8 py-3 font-semibold shadow-md text-gray-700 hover:bg-gray-100 transition">
              Back to menu
            </button>
          </div>
        </div>

        {/* Höger: Bild */}
        <div className="flex-1 flex items-center justify-center">
          <img
            src="/images/IMG_0096-1024x683.jpg"
            alt="Korvstroganof"
            className="rounded-2xl shadow-md object-cover max-h-[400px] w-full"
          />
        </div>

      </div>
    </main>
  );
}
