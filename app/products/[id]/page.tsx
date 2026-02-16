"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { products } from "@/app/data/products";
import { buttonPrimary, buttonSecondary } from "@/app/styles";
import { useCart } from "@/app/context/CartContext";
import Hero from "@/app/components/hero";

export default function ProductPage() {
    {/* för att varorna ska läggas i varukorgen */ }
    const { addToCart } = useCart();

    {/* hittar rätt id till rätt url */ }
    const { id } = useParams<{ id: string }>();

    {/* SÅ att vi kan bläddra genom alla produkter */ }
    const currentIndex = products.findIndex((p) => p.id.toString() === id);
    if (currentIndex === -1) {
        return (
            <main className="min-h-screen flex items-center justify-center">
                <p>Förlåt! Vi kunde inte hitta produkten du söker.</p>
            </main>
        );

    }

    {/* nuvarande produkt */ }
    const product = products[currentIndex];

    {/* Detta är bläddringen */ }
    const prevProduct = products[currentIndex - 1];
    const nextProduct = products[currentIndex + 1];

    return (
        <main className="min-h-screen">
            {/* HERO-bild */}
            <Hero
                title="Hem"
                subtitle="Från hjärtat och till ditt middagsbord"
                image="/images/kronärtskocka.jpg"
                titlecolor="text-white"
                subtitlecolor="text-white/90"
                stylePosition="40% 20%"
            />

            {/* Produktinformation */}
            <div className="max-w-4xl mx-auto px-4 py-12 flex flex-col md:flex-row gap-0">

                {/* Bild */}
                <div className="md:w-1/2 h-[400px]">
                    <Image
                        src={product.image}
                        alt={product.name}
                        width={600}
                        height={600}
                        className="w-full h-full object-cover rounded-l-2xl"
                    />
                </div>

                {/* Text + knappar */}
                <div className="md:w-1/2 h-[400px] bg-white p-8 rounded-r-2xl flex flex-col justify-between shadow-md">
                    <div>
                        <h2 className="text-3xl font-bold mb-4 text-left">{product.name}</h2>
                        <p className="text-gray-600 mb-6 text-left">{product.description}</p>
                        <p className="text-2xl font-semibold">{product.price} kr</p>
                    </div>

                    {/* Köp-knapp */}
                    <div className="flex flex-col gap-4">
                        <button
                            onClick={() => addToCart(product)}
                            className={buttonPrimary}
                        >
                            Lägg i varukorg
                        </button>

                        {/* Tillbaka-knapp */}
                        <Link href="/shop" className={buttonSecondary}>
                            Tillbaka till butik
                        </Link>
                    </div>
                </div>
            </div>
            
             {/* Blädder-knappar */}
                    <div className="max-w-4xl mx-auto px-4 py-4 justify-between flex">
                        {prevProduct ? (

                            <Link
                                href={`/products/${prevProduct.id}`}
                                className={buttonSecondary}
                            >
                                Föregående
                            </Link>
                        ) : (
                            <div />
                        )}

                        {nextProduct ? (
                            <Link
                                href={`/products/${nextProduct.id}`}
                                className={buttonSecondary}
                            >
                                Nästa
                            </Link>
                        ) : (
                            <div />
                        )}
                    </div>
        </main >
    );
}
