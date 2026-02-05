import Hero from "../components/hero";

export default function ButikPage() {
    return(
        <main className="min-h-screen bg-[#eff5ef]">
            {/* HERO-bild */}
                  <Hero
                    title="Shop"
                    subtitle="Hitta dina nya favoriter!"
                    image="/images/fruktOgrönt.jpg"
                    titlecolor="text-white-100"
                    subtitlecolor="text-yellow-100"
                  />

        </main>

    );
}