export default function KorvstroganofPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow-md">
        <h1 className="text-4xl font-bold text-gray-900">
          Klings Korvstroganof
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          A Swedish classic made with sausage, onions, and a creamy tomato sauce.
          Comfort food at its finest.
        </p>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            Ingredients
          </h2>
          <ul className="mt-3 list-disc list-inside text-gray-600 space-y-1">
            <li>Sausage</li>
            <li>Onion</li>
            <li>Tomato paste</li>
            <li>Cream</li>
            <li>Rice</li>
          </ul>
        </div>

        <div className="mt-8 flex gap-4">
          <button className="rounded-xl bg-orange-600 px-6 py-3 font-semibold text-white transition hover:bg-orange-700">
            Order now
          </button>

          <button className="rounded-xl border border-gray-300 px-6 py-3 font-semibold text-gray-700 transition hover:bg-gray-100">
            Back to menu
          </button>
        </div>
      </div>
    </main>
  );
}

  