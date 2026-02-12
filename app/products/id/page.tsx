"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { buttonPrimary, buttonSecondary } from "@/app/styles";

const products = [
  {
    id: 1,
    name: "Biryani krydda",
    price: 89,
    description: "Autentisk kryddblandning",
    image: "/images/spice.jpg",
  },
  {
    id: 2,
    name: "Liten stekpanna - Blomma",
    price: 129,
    description: "Mindre stekpanna (29cm) i blomform.",
    image: "/images/liten-stekpanna.jpg",
  },
];

export default function ProductPage() {
  const params = useParams();
  const productId = params?.id as string | undefined;

  if (!productId) return <p>Produkten kunde inte hittas.</p>;

  const product = products.find(
    (p) => p.id.toString() === productId
  );

  if (!product) return <p>Produkten kunde inte hittas.</p>;

  return (
    <main className="min-h-screen flex flex-col">
      {/* CONTENT */}
      <div className="max-w-3xl mx-auto p-6 flex flex-col flex-1">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-80 object-cover rounded-2xl mb-6"
        />

        <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <p className="text-lg font-semibold">{product.price} KR</p>

        {/* KNAPP – ska alltid vara längst ner */}
        <div className="mt-auto pt-8">
          <Link
            href="/shop"
            className={buttonSecondary}
          >
            Tillbaka till butik
          </Link>
        </div>
      </div>
    </main>
  );
}
