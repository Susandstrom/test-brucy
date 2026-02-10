"use client";

import React, { useState } from "react";
import Link from "next/link";
import Hero from "../components/hero";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log({ name, email, message });
    alert("Tack för ditt meddelande!");
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <main className="min-h-screen bg-[#eff5ef] flex flex-col items-center">

      {/* HERO-bild */}
      <Hero
        title="Kontakta oss"
        image="/images/strawberries.jpg"
        titlecolor="text-white"
        subtitlecolor="text-white/90"
      />

      {/* Text + Bild + Formulär */}
      <div className="px-4 py-16 w-full max-w-6xl">
        <div className="bg-white rounded-2xl shadow-md p-10 flex flex-col md:flex-row gap-12 items-start"> {/* ändrat items-center -> items-start */}

          {/* Text + Bild */}
          <div className="md:w-1/2 flex flex-col items-start text-left"> {/* behåller items-start */}
            <img
              src="/images/picnic.jpg"
              alt="Kontakt"
              className="w-full h-60 object-cover rounded-xl mb-6"
            />
            <p className="text-gray-600 mb-4">
              Hittar du inte det du söker eller har du önskemål och funderingar? 
              Hör av dig till oss, vi hjälper gärna!
            </p>
          </div>

          {/* Formulär */}
          <form onSubmit={handleSubmit} className="md:w-1/2 flex flex-col gap-4 w-full">
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
                rows={6}
                required
                className="w-full p-3 rounded-xl border"
              />
            </div>

            <button
              type="submit"
              className="rounded-2xl bg-[#009933] px-6 py-3 font-semibold text-white shadow-md hover:bg-green-700 transition"
            >
              Skicka
            </button>
          </form>
        </div>

        {/* Tillbaka-knapp */}
        <div className="mt-8 flex justify-end">
          <Link
            href="/"
            className="inline-block rounded-2xl bg-white border px-8 py-3 font-semibold shadow-md text-gray-700 hover:bg-gray-100 transition"
          >
            Ta mig tillbaka
          </Link>
        </div>
      </div>
    </main>
  );
}
