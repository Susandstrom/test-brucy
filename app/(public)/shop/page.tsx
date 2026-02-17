"use client";

import Hero from "@/app/components/hero";
import { useCart } from "../cart/context/CartContext";
import Link from "next/link";
import { products } from "./data/products";
import { buttonPrimary, buttonSecondary } from "@/app/styles";
import Image from "next/image";

export default function ShopPage() {
  const { addToCart } = useCart();

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <Hero
        title="Shop"
        subtitle="Hitta dina nya favoriter!"
        image="/images/grönsakeretc.jpg"
        stylePosition="30% 60%"
      />

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
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
                  <p className="font-bold mt-4">
                    {product.price} kr
                  </p>
                </Link>

                <button
                  onClick={() => addToCart(product)}
                  className={`${buttonPrimary} mt-auto`}
                >
                  Lägg i varukorg
                </button>
              </div>
            </div>
          ))}
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
