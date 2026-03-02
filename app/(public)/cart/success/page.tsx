"use client";

import Link from "next/link";
import { buttonSecondary } from "@/app/styles";
import { useEffect, useRef } from "react";
import { useCart } from "../context/cartContext";

export default function SuccessPage() {
  const { clearCart } = useCart();
  const hasSent = useRef(false);

  useEffect(() => {
    async function sendOrder() {
      if (hasSent.current) return;

      const savedOrder = localStorage.getItem("pendingOrder");
      if (!savedOrder) return;

      const parsedCart = JSON.parse(savedOrder);
      if (!parsedCart.length) return;

      const sessionId = new URLSearchParams(window.location.search).get(
        "session_id"
      );

      if (!sessionId) {
        console.log("Ingen session_id");
        return;
      }

      hasSent.current = true;

      const total = parsedCart.reduce(
        (sum: number, item: any) => sum + item.price * item.quantity,
        0
      );

      await fetch("/api/send-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sessionId,
          items: parsedCart.map((item: any) => ({
            productName: item.name,
            quantity: item.quantity,
            price: item.price,
          })),
          total,
        }),
      });

      localStorage.removeItem("pendingOrder");
      clearCart();
    }

    sendOrder();
  }, [clearCart]);

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