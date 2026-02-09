import Link from "next/link"; // Detta är startsidan (HEM)

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* HERO-bild */}
      <div className="relative h-[300px] md:h-[400px] w-full">
        <img
          src="/images/pannkakor.jpg"
          alt="Pannkaka"
          className="h-full w-full object-cover object-[40%_10%]"
        />

        {/* Text på hero */}
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white drop-shadow-lg text-center">{/*Jag får inte den att bli vit */}
            Hem
          </h1>
        </div>
      </div>

      {/* Mina recept */}
      <section className="px-4 py-16 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-left">
          Mina recept
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          <Link
            href="/hamburger"
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
            href="/biryani"
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
            href="/korvstroganof"
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
      </section>
    </main>
  );
}
