"use client";

import Link from "next/link";
import { buttonSecondary } from "@/app/styles";
import { useEffect, useRef } from "react";
import { useCart } from "../context/CartContext";

export default function SuccessPage() {
  const { cart, clearCart } = useCart();
  const hasSent = useRef(false); // hindrar dubbla mejl till kund

  useEffect(() => {
    async function sendOrder() {
      if (!cart.length || hasSent.current) return;

      hasSent.current = true;

      const total = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );

      try {
        await fetch("/api/send-order", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName: "Anna",
            lastName: "test",
            email: "suthada@brucy.io",
            phoneNumber: "0700000000",
            address: "testgatan 1",
            items: cart.map((item) => ({
              productName: item.name,
              quantity: item.quantity,
              price: item.price,
            })),
            total,
          }),
        });

        clearCart();
      } catch (error) {
        console.error("Order error:", error);
      }
    }

    sendOrder();
  }, [cart, clearCart]);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">
        Tack för din beställning!
      </h1>

      <Link href="/" className={buttonSecondary}>
        Tillbaka till startsidan
      </Link>
    </main>
  );
}