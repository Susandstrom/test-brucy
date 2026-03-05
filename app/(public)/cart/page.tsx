"use client";

import { useCart } from "./context/cartContext";
import Link from "next/link";
import { buttonPrimary, buttonSecondary } from "@/app/styles";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();

  async function handleCheckout() {
    try {
      localStorage.setItem("pendingOrder", JSON.stringify(cart));

      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: cart.map((item) => ({
            productName: item.name,
            price: item.price,
            quantity: item.quantity,
          })),
        }),
      });

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Kunde inte genomföra betalningen.");
      }
    } catch (error) {
      console.error(error);
      alert("Något gick fel vid checkout.");
    }
  }

  if (cart.length === 0) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Din kundvagn är tom</h1>
        <p className="text-gray-700 mb-6">
          Lägg till produkter i din varukorg för att se dem här.
        </p>

        <div className="mt-8 flex justify-center gap-6">
          <Link href="/" className={`${buttonPrimary} w-40 text-center`}>
            Ta mig hem
          </Link>
          <Link href="/shop" className={`${buttonSecondary} w-40 text-center`}>
            Ta mig tillbaka
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">
        Din kundvagn
      </h1>

      <div className="max-w-5xl mx-auto grid gap-6">
        {cart.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-md p-6 flex items-center gap-6"
          >
            {/* Bild */}
            <img
              src={item.image}
              alt={item.name}
              className="w-24 h-24 object-cover rounded-2xl"
            />

            {/* Namn + pris */}
            <div className="flex-1 flex items-center justify-between">
              <h2 className="text-xl font-semibold">{item.name}</h2>
              <p className="text-gray-600">Antal: {item.quantity}</p>
              <p className="text-gray-800 font-bold mt-2">
                {item.price * item.quantity} SEK
              </p>
            </div>

            {/* plus/minus */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => updateQuantity(item.id, -1)}
                className="bg-green-600 text-white px-4 py-2 rounded-xl"
              >
                –
              </button>

              <span>{item.quantity}</span>

              <button
                onClick={() => updateQuantity(item.id, 1)}
                className="bg-green-600 text-white px-4 py-2 rounded-xl"
              >
                +
              </button>
            </div>

            {/* ta bort */}
            <button
              onClick={() => removeFromCart(item.id)}
              className="bg-red-600 text-white px-4 py-2 rounded-xl"
            >
              Ta bort
            </button>
          </div>
        ))}

        <div className="bg-white rounded-xl shadow-md p-6 text-right">
          <p className="text-xl font-bold">Totalt: {totalPrice} SEK</p>
        </div>
      </div>

      <div className="mt-8 flex justify-center gap-6">
        <Link href="/shop" className={`${buttonSecondary} w-40 text-center`}>
          Till butik
        </Link>

        <button
          onClick={handleCheckout}
          className={`${buttonPrimary} w-40 text-center`}
        >
          Betala
        </button>
      </div>
    </main>
  );
}