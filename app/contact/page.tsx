"use client";

import Link from "next/link";
import { useState } from "react";
import Hero from "../components/hero";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log({ name, email, message });
    alert("Tack för ditt meddelande!");
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <main className="min-h-screen bg-[#eff5ef]">

      {/* HERO-bild */}
      <Hero
              title="Kontakta oss"
              image="/images/strawberries.jpg"
              titlecolor="text-white"
        />

      {/* Formulär */}
      <div className="px-4 py-12">
        <div className="mx-auto max-w-xl bg-white rounded-2xl shadow-md p-8 text-left">
          <p className="text-gray-600 mb-6">
            Hittar du inte det du söker eller har frågor?  
            Skicka ett meddelande så hör vi av oss!
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="block mb-1 font-semibold">Namn</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full p-3 rounded-xl border"
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold">E-post</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-3 rounded-xl border"
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold">Meddelande</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                required
                className="w-full p-3 rounded-xl border"
              />
            </div>

            <button
              type="submit"
              className="rounded-2xl bg-[#009933] border border-gray-300 px-6 py-3 font-semibold shadow-md text-white hover:bg-green-700 transition"
            >
              Skicka
            </button>
          </form>
        </div>
      </div>

      {/* Tillbaka-knapp */}
      <div className="mt-8 flex justify-center">
        <Link
          href="/"
          className="inline-block rounded-2xl bg-white border px-8 py-3 font-semibold shadow-md text-gray-700 hover:bg-gray-100 transition"
        >
          Back to menu
        </Link>
      </div>
    </main>
  );
}
