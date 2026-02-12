"use client";

import Hero from "../components/hero";
import { useCart } from "../context/CartContext";
import Link from "next/link";
import { products } from "../data/products";
import { buttonPrimary, buttonSecondary } from "../styles";
import Image from "next/image";

export default function ShopPage() {
    const { addToCart } = useCart();

    return (
        <main className="min-h-screen"> {/*Min Hero */}
            <Hero
                title="shop"
                subtitle="Hitta dina nya favoriter!"
                image="/images/grönsakeretc.jpg"
                stylePosition="30% 60%"
            />

            <div className="max-w-7xl mx-auto px-4 py-12">{/*Produkter */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <div key={product.id} className="bg-white rounded-xl shadow-md flex flex-col h-full hover:shadow-lg transition overflow-hidden">
                            <div className="flex flex-col flex-1 p-6">
                                <Link href={`/products/${product.id}`} className="flex flex-col flex-1">
                                    {/* Bild */}
                                    <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-xl md-4" />
                                    
                                    {/* Produktnamn + text + pris */}
                                    <h3 className="text-xl font-semibold">{product.name}</h3>
                                    <p className="text-gray-600 flex-1">{product.description}</p>
                                    <p className="font-bold mt-4">{product.price} KR</p>
                                </Link>

                                {/* Köp-knapp*/}
                                <button
                                    onClick={() => addToCart(product)}
                                    className={buttonPrimary}
                                >
                                    Lägg i varukorg
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/*Tillbaka knapp */}
                <div className="mt-8 flex justify-end">
                    <Link href="/" className={buttonSecondary}>
                        Ta mig tillbaka
                    </Link>
                </div>
            </div>
        </main>
    )
}