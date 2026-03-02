"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { products } from "../../data/products";
import { buttonPrimary, buttonSecondary, buttonThird } from "@/app/styles";
import { useCart } from "@/app/(public)/cart/context/cartContext";
import Hero from "@/app/components/hero";
import { useState } from "react";

export default function ProductPage() {
  const { addToCart } = useCart();
  const { slug } = useParams<{ slug: string }>();

  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const currentIndex = products.findIndex(
    (p) => p.slug.toString() === slug
  );

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

  function increase() {
    setQuantity((q) => q + 1);
  }

  function decrease() {
    setQuantity((q) => Math.max(1, q - 1));
  }

  function handleInputChange(value: string) {
    const num = parseInt(value, 10);
    setQuantity(isNaN(num) || num < 1 ? 1 : num);
  }

  function handleAddToCart() {
    addToCart(product, quantity);
    setAdded(true);
  }

  return (
    <main className="min-h-screen">
      <Hero
        title="Hem"
        subtitle="Från hjärtat och till ditt middagsbord"
        image="/images/fruktOgrönt.jpg"
        titlecolor="text-white"
        subtitlecolor="text-white/90"
        stylePosition="50% 10%"
      />

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

        {/* Info */}
        <div className="md:w-1/2 bg-white rounded-2xl shadow-md p-6 flex flex-col h-[400px]">
          <div>
            <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
            <p className="text-gray-500">{product.description}</p>
          </div>

          {/* pris + antal */}
          <div className="flex flex-col items-center justify-end mt-auto mb-4">
            <p className="text-2xl font-bold">{product.price} kr</p>

            <div className="flex items-center gap-4 mt-4">
              <button onClick={decrease} className={buttonThird}>
                -
              </button>

              <input
                type="number"
                value={quantity}
                onChange={(e) => handleInputChange(e.target.value)}
                className="w-16 text-center border rounded-xl py-1"
                min={1}
              />

              <button onClick={increase} className={buttonThird}>
                +
              </button>
            </div>
          </div>

          {/* add to cart */}
          <button
            onClick={handleAddToCart}
            className={
              added
                ? "bg-green-600 text-white px-4 py-2 rounded-xl"
                : `${buttonPrimary}`
            }
          >
            {added ? "Tillagd ✓" : "Lägg i varukorg"}
          </button>

          <div className="flex flex-col gap-4 mt-4">
            <Link href="/shop" className={buttonSecondary}>
              Tillbaka till butik
            </Link>
          </div>
        </div>
      </div>

      {/* navigation */}
      <div className="max-w-4xl mx-auto px-4 py-4 justify-between flex">
        {prevProduct ? (
          <Link
            href={`/shop/products/${prevProduct.slug}`}
            className={buttonSecondary}
          >
            Föregående
          </Link>
        ) : (
          <div />
        )}

        {nextProduct ? (
          <Link
            href={`/shop/products/${nextProduct.slug}`}
            className={buttonSecondary}
          >
            Nästa
          </Link>
        ) : (
          <div />
        )}
      </div>
    </main>
  );
}