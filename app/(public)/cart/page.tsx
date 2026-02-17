// app/cart/page.tsx
"use client";

import { useCart } from "./context/CartContext";
import Link from "next/link";

export default function CartPage() {
  const { cart, removeFromCart, totalPrice } = useCart();

  if (cart.length === 0) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Din kundvagn är tom</h1>
        <p className="text-gray-700 mb-6">Lägg till produkter i din varukorg för att se dem här.</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Din kundvagn</h1>

      <div className="max-w-5xl mx-auto grid gap-6">
        {cart.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-md p-6 flex items-center gap-6"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-24 h-24 object-cover rounded-xl"
            />
            <div className="flex-1">
              <h2 className="text-xl font-semibold">{item.name}</h2>
              <p className="text-gray-600">Antal: {item.quantity}</p>
              <p className="text-gray-800 font-bold mt-2">
                {item.price * item.quantity} KR
              </p>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="bg-red-600 text-white px-4 py-2 rounded-xl hover:bg-red-700"
            >
              Ta bort
            </button>
          </div>
        ))}

        {/* Totalt pris */}
        <div className="bg-white rounded-xl shadow-md p-6 text-right">
          <p className="text-xl font-bold">Totalt: {totalPrice} KR</p>
        </div>
      </div>
       <div className="mt-8 flex justify-center">
            <Link
              href="/"
              className="inline-block rounded-2xl bg-white border px-8 py-3 font-semibold shadow-md hover:bg-gray-100 transition"
            >
              Ta mig tillbaka
            </Link>
          </div>
    </main>
  );
}
