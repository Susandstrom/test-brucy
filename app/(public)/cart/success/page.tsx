"use client";

import Link from "next/link";
import { buttonSecondary } from "@/app/styles";

export default function SuccessPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">Tack för din beställning!</h1>
      <p className="text-gray-700 mb-6">Din beställning är nu betald.</p>

      <Link href="/" className={buttonSecondary}>Tillbaka</Link>
    </main>
  );
}