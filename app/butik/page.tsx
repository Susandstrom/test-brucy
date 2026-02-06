"use client";

import Hero from "../components/hero";
import { useCart } from "../context/CartContext";

const products = [
  {
    id: 1,
    name: "Biryani krydda",
    description: "Autentisk kryddblandning",
    price: 89,
    image: "/images/spice.jpg",
  },
  {
    id: 2,
    name: "Liten stekpanna - Blomma",
    description: "Mindre stekpanna (29cm) i blomform.",
    price: 129,
    image: "/images/liten-stekpanna.jpg",
  },
  {
    id: 3,
    name: "Kanelstänger",
    description: "50g, Hela kanelstänger för bakning.",
    price: 199,
    image: "/images/kanelstäng.jpg",
  },
  {
    id: 4,
    name: "Vit mortel",
    description: "Liten mortel i vit marmorstil.",
    price: 189,
    image: "/images/mortel.jpg",
  },
   {
    id: 5,
    name: "Peppar Kit",
    description: "Pepparkvarn med fyra sorters peppar",
    price: 299,
    image: "/images/peppar-kit.jpg",
  },
   {
    id: 6,
    name: "Melodypeppar",
    description: "Melodypeppar 50g",
    price: 119,
    image: "/images/melodypepper.jpg",
  },
   {
    id: 7,
    name: "Flaska för Olivolja",
    description: "Stilren flaska för olivolja",
    price: 289,
    image: "/images/Oliveolja.jpg",
  },
   {
    id: 8,
    name: "Stjärnanis",
    description: "50g, förhöj dina smaklökar",
    price: 169,
    image: "/images/stjärnanis.jpg",
  },
];

export default function ButikPage() {
  const { addToCart } = useCart();

  return (
    <main className="min-h-screen bg-[#eff5ef]">
      <Hero
        title="Shop"
        subtitle="Hitta dina nya favoriter!"
        image="/images/fruktOgrönt.jpg"
        titlecolor="text-white"
        subtitlecolor="text-yellow-100"
      />

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col h-full"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />

              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className="text-gray-600">{product.description}</p>

              <div className="mt-auto">
                <p className="font-bold mt-2">{product.price} KR</p>

                <button
                  onClick={() => addToCart(product)}
                  className="mt-4 w-full bg-green-600 text-white py-2 rounded-xl hover:bg-green-700"
                >
                  Lägg i varukorg
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
