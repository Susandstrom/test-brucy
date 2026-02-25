"use client";

import { useCart } from "./context/CartContext";
import Link from "next/link";
import { buttonPrimary, buttonSecondary } from "@/app/styles";

//CART
export default function CartPage() {
  const { cart, removeFromCart, totalPrice } = useCart();

  //Betala-funktioner för min knapp "Betala"
  async function handleCheckout() {
    try {
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

      //error-meddelanden
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Sorry! Vi kunde inte genomföra betalningen.");
      }
    } catch (error) {
      console.error(error);
      alert("Oj! Något gick fel vid checkout!");
    }
  }

  //Cart - om den är tom
  if (cart.length === 0) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Din kundvagn är tom</h1>
        <p className="text-gray-700 mb-6">
          Lägg till produkter i din varukorg för att se dem här.
        </p>

        {/*tillbaka-knapp*/}
        <div className="mt-8 flex justify-center gap-6">
          <Link
            href="/"
            className={`${buttonPrimary} w-40 text-center`}
          >
            Ta mig hem
          </Link>
          <Link
            href="/shop"
            className={`${buttonSecondary} w-40 text-center`}
          >
            Ta mig tillbaka
          </Link>
        </div>
      </main>
    );
  }

  //Cart - med produkter
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
            <img
              src={item.image}
              alt={item.name}
              className="w-24 h-24 object-cover rounded-xl"
            />
            <div className="flex-1">
              <h2 className="text-xl font-semibold">{item.name}</h2>
              <p className="text-gray-600">Antal: {item.quantity}</p>
              <p className="text-gray-800 font-bold mt-2">
                {item.price * item.quantity} SEK
              </p>
            </div>
            {/* Knapp - ta bort varor i CART */}
            <button
              onClick={() => removeFromCart(item.id)}
              className="bg-red-600 text-white px-4 py-2 rounded-xl hover:bg-red-700"
            >
              Ta bort
            </button>
          </div>
        ))}

        <div className="bg-white rounded-xl shadow-md p-6 text-right">
          <p className="text-xl font-bold">Totalt: {totalPrice} SEK</p>
        </div>
      </div>

      {/* Mina knappar */}
      <div className="mt-8 flex justify-center gap-6">
        <Link
          href="/shop"
          className={`${buttonSecondary} w-40 text-center`}
        >
          Ta mig tillbaka
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