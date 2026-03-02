"use client";

import Link from "next/link";
import { buttonSecondary } from "@/app/styles";
import { useEffect, useRef } from "react";
import { useCart } from "../context/CartContext";

export default function SuccessPage() {
  const { cart, clearCart } = useCart();
  const hasSent = useRef(false); // hindrar dubbla mejl till kund

  useEffect(() => {
  console.log("Cart on success:", cart);
}, [cart]);

  useEffect(() => {
    async function sendOrder() {
      if (hasSent.current) return;

      const savedOrder = localStorage.getItem("pendingOrder");

      hasSent.current = true;

      if(!savedOrder){
        console.log("Ingen order hittad");
        return;
      }

      const parsedCart = JSON.parse(savedOrder);

      if(!parsedCart.length) {
        console.log("sparad CART är tom");
        return;
      }

      hasSent.current = true;

      const total = parsedCart.reduce(
        (sum: number, item: any) => sum + item.price * item.quantity,
        0
      );

      try {
       const response = await fetch("/api/send-order", {
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
            items: parsedCart.map((item: any) => ({
              productName: item.name,
              quantity: item.quantity,
              price: item.price,
            })),
            total,
          }),
        });
        const result = await response.json();
        console.log("Order API response:", result);

        localStorage.removeItem("pendingOrder");
        clearCart();
      } catch (error) {
        console.error("Order error:", error);
      }
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