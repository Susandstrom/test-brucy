"use client";

//importade funktioner och design
2 
import { useEffect } from "react";
import Link from "next/link";
import { buttonSecondary } from "@/app/styles";
import { useSearchParams } from "next/navigation";
import { useCart } from "../context/CartContext";

export default function SuccessPage() {
  const { clearCart } = useCart();
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");

  useEffect(() => {
    async function handleOrder() {
      if (!sessionId) return;

      try {
        //Hämta data från Stripe
        const verifyRes = await fetch("/api/verify-session", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ sessionId }),
        });

        const customer = await verifyRes.json();

        //Skicka mail till kunden
        await fetch("/api/send-order", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: customer.email,
            name: customer.name,
          }),
        });

        clearCart();
      } catch (error) {
        console.error("Order error:", error);
      }
    }

    handleOrder();
  }, [sessionId]);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">
        Tack för din beställning! Vi ser fram emot att packa den åt dig!
      </h1>
      <p className="text-gray-700 mb-6">
        Din betalning är genomförd och vi behandlar din order.
      </p>

      <Link href="/" className={buttonSecondary}>
        Tillbaka till startsidan
      </Link>
    </main>
  );
}