"use client";

import Hero from "@/app/components/hero";
import { useCart } from "../cart/context/cartContext";
import Link from "next/link";
import { products } from "./data/products";
import { buttonPrimary, buttonSecondary } from "@/app/styles";
import Image from "next/image";
import { useState } from "react";

export default function ShopPage() {
  const { addToCart, cart } = useCart();

  // antal per produkt
  const [quantities, setQuantities] = useState<Record<number, number>>({});

  // vilka som är tillagda (färgbyte)
  const [added, setAdded] = useState<Record<number, boolean>>({});

  function increase(id: number) {
    setQuantities((prev) => ({
      ...prev,
      [id]: (prev[id] || 1) + 1,
    }));
  }

  function decrease(id: number) {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, (prev[id] || 1) - 1),
    }));
  }

  function handleAdd(product: any) {
    const quantity = quantities[product.id] || 1;

    addToCart(product, quantity);

    // färgbyte när tillagd
    setAdded((prev) => ({
      ...prev,
      [product.id]: true,
    }));

    // reset quantity (valfritt)
    setQuantities((prev) => ({
      ...prev,
      [product.id]: 1,
    }));
  }

  return (
    <main className="min-h-screen">
      <Hero
        title="Shop"
        subtitle="Hitta dina nya favoriter!"
        image="/images/grönsakeretc.jpg"
        stylePosition="30% 60%"
      />

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => {
            const qty = quantities[product.id] || 1;
            const isAdded = added[product.id];

            return (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-md flex flex-col h-full hover:shadow-lg transition overflow-hidden"
              >
                <div className="flex flex-col flex-1 p-6">
                  <Link
                    href={`/shop/products/${product.slug}`}
                    className="flex flex-col flex-1"
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={600}
                      height={600}
                      className="w-full h-48 object-cover rounded-xl mb-4"
                    />

                    <h3 className="text-xl font-semibold">{product.name}</h3>
                    <p className="text-gray-600 flex-1">
                      {product.description}
                    </p>
                    <p className="font-bold mt-4">{product.price} kr</p>
                  </Link>

                  {/* antal */}
                  <div className="w-full mt-6">
                    <div className="flex w-full border border-green-300 rounded-xl overflow-hidden">

                      <button
                        onClick={() => decrease(product.id)}
                        className="flex-1 py-2 text-green-700 hover:bg-green-50 transition"
                      >
                        –
                      </button>

                      <div className="flex-1 flex items-center justify-center text-sm font-medium text-gray-800">
                        {qty}
                      </div>

                      <button
                        onClick={() => increase(product.id)}
                        className="flex-1 py-2 text-green-700 hover:bg-green-50 transition"
                      >
                        +
                      </button>

                    </div>
                  </div>

                  {/* add to cart */}
                  <button
                    onClick={() => handleAdd(product)}
                    className={
                      isAdded
                        ? "mt-4 bg-green-600 text-white px-4 py-2 rounded-xl"
                        : `${buttonPrimary} mt-4`
                    }
                  >
                    {isAdded ? "Tillagd ✓" : "Lägg i varukorg"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 flex justify-end">
          <Link href="/" className={buttonSecondary}>
            Ta mig tillbaka
          </Link>
        </div>
      </div>
    </main>
  );
}