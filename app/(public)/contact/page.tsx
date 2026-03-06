"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/app/components/hero";
import { buttonPrimary, buttonSecondary } from "@/app/styles";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [submitError, setSubmitError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, phone, email, message }),
      });

      const json = await response.json();
      if (!response.ok) {
        throw new Error(json.error || "Kunde inte skicka meddelandet");
      }

      setShowSuccessPopup(true);
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch (error) {
      console.error(error);
      setSubmitError("Kunde inte skicka meddelandet.");
    }
  }

  return (
    <main className="min-h-screen flex flex-col items-center">
      <Hero
        title="Kontakta oss"
        image="/images/strawberries.jpg"
        titlecolor="text-white"
        subtitlecolor="text-white/90"
      />

      <div className="px-4 py-16 w-full max-w-6xl">
        <div className="bg-white rounded-2xl shadow-md p-10 flex flex-col md:flex-row gap-12 items-start">
          <div className="md:w-1/2 flex flex-col items-start text-left">
            <Image
              src="/images/picnic.jpg"
              alt="Kontakt"
              height={600}
              width={400}
              className="w-full h-60 object-cover rounded-xl mb-6"
            />
            <p className="text-gray-600 mb-4">
              Hittar du inte det du söker eller har du önskemål och funderingar?
              Hör av dig till oss, vi hjälper gärna!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="md:w-1/2 flex flex-col gap-4 w-full">
            <div>
              <label className="block mb-1 font-semibold text-left">Namn</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Jane Doe"
                className="w-full p-3 rounded-xl border"
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold text-left">E-post</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="jane@info.se"
                className="w-full p-3 rounded-xl border"
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold text-left">Telefonnummer</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                placeholder="+46700000000"
                className="w-full p-3 rounded-xl border"
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold text-left">Meddelande</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={6}
                required
                placeholder="Skriv ditt meddelande här..."
                className="w-full p-3 rounded-xl border"
              />
            </div>

            <button type="submit" className={buttonPrimary}>
              Skicka
            </button>

            {submitError && <p className="text-red-600 text-sm">{submitError}</p>}
          </form>
        </div>

        <div className="mt-8 flex justify-end">
          <Link href="/" className={buttonSecondary}>
            Ta mig tillbaka
          </Link>
        </div>
      </div>

      {showSuccessPopup && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center px-4">
          <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md text-center">
            <h2 className="text-2xl font-bold mb-3">Tack!</h2>
            <p className="text-gray-700 mb-6">Tack för ditt meddelande.</p>
            <button onClick={() => setShowSuccessPopup(false)} className={buttonPrimary}>
              Stäng
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
