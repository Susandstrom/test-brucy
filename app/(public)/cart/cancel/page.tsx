"use client";

import { buttonPrimary, buttonSecondary } from "@/app/styles";
import Link from "next/link";

//Sidans utseende
export default function CancelPage() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold mb-4">
                Tyvärr din betalningen avbröts!
            </h1>

            <p className="text-gray-700 mb-6 text-center max-w-md">
                Ingen betalning genomfördes, men du kan försöka igen när du är redo.
            </p>

            {/* Knappar */}
            <div className="flex gap-6">
                {/* Tillbaka till CART */}
                <Link
                    href="/cart"
                    className={buttonPrimary}
                >
                Tillbaka till kundvagnen
                </Link>

                {/* Tillbaka hem */}
                <Link
                href="/"
                className={buttonSecondary}
                >
                Tillbaka till startsidan
                </Link>
            </div>
        </main>
    );
}