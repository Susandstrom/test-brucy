"use client";

import { useEffect } from "react";
import Link from "next/link";
import { buttonSecondary } from "@/app/styles";
import { useSearchParams, useSearchParams } from "next/navigation";

const useSearchParams = useSearchParams();
const sessionId = SearchParamsContext.get("session_id");

export default function SuccessPage() {
  const { clearCart } = useCart();

  useEffect(() => {
    async function sendEmail() {
        await fetch("/api/send-order", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: "suthada@brucy.io",
                name: "Kund",
            }),
        });
    }
    sendEmail();//skickar mejl
    clearCart();//tar bort allt i cart
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">
        Tack för din beställning! Vi ser framemot att packa den åt dig!
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