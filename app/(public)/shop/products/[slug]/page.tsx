"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { products } from "../../data/products";
import { buttonPrimary, buttonSecondary } from "@/app/styles";
import { useCart } from "@/app/(public)/cart/context/CartContext";
import Hero from "@/app/components/hero";


export default function ProductPage() {
  const { addToCart } = useCart();
  const { slug } = useParams<{ slug: string }>();

  const currentIndex = products.findIndex((p) => p.slug.toString() === slug);
  if (currentIndex === -1) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p>Förlåt! Vi kunde inte hitta produkten du söker.</p>
      </main>
    );
  }

  const product = products[currentIndex];
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

        {/* Text + pris + knappar */}
        <div className="md:w-1/2 bg-white rounded-2xl shadow-md p-6 flex flex-col h-[400px]">
          {/* Produktinfo */}
          <div>
            <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
            <p className="text-gray-500">{product.description}</p>
          </div>

          {/* Spacer + Pris centrerat */}
          <div className="flex flex-col items-center justify-end mt-auto mb-4">
            <p className="text-2xl font-bold">{product.price} kr</p>
          </div>

          {/* Knappar längst ner */}
          <div className="flex flex-col gap-4">
            <button
              onClick={() => addToCart(product)}
              className={buttonPrimary}
            >
              Lägg i varukorg
            </button>

            <Link href="/shop" className={buttonSecondary}>
              Tillbaka till butik
            </Link>
          </div>
        </div>
      </div>

      {/* Bläddra mellan produkter */}
      <div className="max-w-4xl mx-auto px-4 py-4 justify-between flex">
        {prevProduct ? (
          <Link href={`/shop/products/${prevProduct.slug}`} className={buttonSecondary}>
            Föregående
          </Link>
        ) : (
          <div />
        )}

        {nextProduct ? (
          <Link href={`/shop/products/${nextProduct.slug}`} className={buttonSecondary}>
            Nästa
          </Link>
        ) : (
          <div />
        )}
      </div>
    </main>
  );
}
