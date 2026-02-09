import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <div className="relative h-[300px] md:h-[400px] w-full">
        <img
          src="/images/pannkakor.jpg"
          alt="veggies"
          className="h-full w-full object-cover"
        />

        {/*Text på hero */}
        <div className="px-4 py-12">
          <div className="absolute inset-0 bg-white/10 flex items-center justify-center">
            <h1 className="text-5xl font-bold mb-8 text-center">
              Hem
            </h1>
          </div>

          <div className="grid gap-8 sm:grid-cols-3 md:grid-cols-3">
            <Link
              href="/hamburger"
              className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <img
                src="/images/hamburger.jpg"
                alt="Hamburger"
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <h3 className="text-xl font-semibold group-hover:text-orange-600">
                Fredriks Burgare
              </h3>
            </Link>

            <Link
              href="/biryani"
              className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <img
                src="/images/biryani2.jpg"
                alt="biryani"
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <h3 className="text-xl font-semibold group-hover:text-orange-600">
                Elviras Biryani
              </h3>
            </Link>

            <Link
              href="/korvstroganof"
              className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <img
                src="/images/stroganof.jpg"
                alt="Korvstroganof"
                className="w-full h-48 object-cover rounded-l mb-4"
              />
              <h3 className="text-xl font-semibold group-hover:text-orange-600">
                Klings Korvstroganof
              </h3>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
