import Link from "next/link";

export default function HomePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Receptboken
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        <Link
          href="/hamburger"
          className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
        >
          <h3 className="text-xl font-semibold group-hover:text-orange-600">
            Fredriks Burgare
          </h3>
        </Link>

        <Link
          href="/biryani"
          className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
        >
          <h3 className="text-xl font-semibold group-hover:text-orange-600">
            Elviras Biryani
          </h3>
        </Link>

        <Link
          href="/korvstroganof"
          className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
        >
          <h3 className="text-xl font-semibold group-hover:text-orange-600">
            Klings Korvstroganof
          </h3>
        </Link>
      </div>
    </div>
  );
}
