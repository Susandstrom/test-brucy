"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { buttonSecondary } from "@/app/styles";
import { useCart } from "../context/CartContext";

type PendingOrderItem = {
  name: string;
  price: number;
  quantity: number;
};

export default function SuccessPage() {
  const { clearCart } = useCart();
  const hasSent = useRef(false);

  useEffect(() => {
    async function sendOrder() {
      if (hasSent.current) return;

      const savedOrder = localStorage.getItem("pendingOrder");
      if (!savedOrder) return;

      const parsedCart = JSON.parse(savedOrder) as PendingOrderItem[];
      if (!parsedCart.length) return;

      const sessionId = new URLSearchParams(window.location.search).get(
        "session_id"
      );
      if (!sessionId) return;

      hasSent.current = true;

      const total = parsedCart.reduce(
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
            sessionId,
            items: parsedCart.map((item) => ({
              productName: item.name,
              quantity: item.quantity,
              price: item.price,
            })),
            total,
          }),
        });
      } catch (error) {
        console.error("Order error:", error);
      }

      localStorage.removeItem("pendingOrder");
      clearCart();
    }

    sendOrder();
  }, [clearCart]);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">Tack för din beställning!</h1>

      <Link href="/" className={buttonSecondary}>
        Tillbaka till startsidan
      </Link>
    </main>
  );
}
