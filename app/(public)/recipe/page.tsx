import Link from "next/link"; // Detta är receptsidan
import Hero from "@/app/components/hero";
import { buttonSecondary } from "@/app/styles";

export default function RecipePage() {
  return (
    <main className="min-h-screen">
      {/* HERO-bild */}
      <Hero
        title="Mina recept"
        subtitle="Från hjärtat och till ditt middagsbord"
        image="/images/pannkakor.jpg"
        stylePosition="50% 10%"
      />

      {/* Mina recept-länkar */}
      <section className="px-4 py-16 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-left">
          Alla mina favoritrecept
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          <Link
            href="/recipe/hamburger"
            className="group rounded-2xl bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
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
            href="/recipe/biryani"
            className="group rounded-2xl bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
          >
            <img
              src="/images/biryani2.jpg"
              alt="Biryani"
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold group-hover:text-orange-600">
              Elviras Biryani
            </h3>
          </Link>

          <Link
            href="/recipe/hamburger"
            className="group rounded-2xl bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
          >
            <img
              src="/images/stroganof.jpg"
              alt="Korvstroganof"
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold group-hover:text-orange-600">
              Klings Korvstroganof
            </h3>
          </Link>
        </div>

        {/* Tillbaka-knapp under hero*/}
      <div className="mt-8 px-4 py-16">
        <div className="mx-auto max-w-7xl flex justify-end">
          <Link
            href="/"
            className={buttonSecondary}
          >
            Ta mig tillbaka
          </Link>
        </div>
      </div>
      </section>
    </main>
  );
}


