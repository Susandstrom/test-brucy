"use client";

import { useState } from "react";
import Link from "next/link";
import Hero from "@/app/components/hero";
import { buttonPrimary, buttonSecondary } from "@/app/styles";
import Image from "next/image";

//inställningar i min FORM
export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

async function handleSubmit(
  e: React.FormEvent<HTMLFormElement>
) {
  e.preventDefault();

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",     
      },
      body: JSON.stringify({ name, phone, email, message }),
    });

    const json = await response.json();
    console.log("Response från API:", json);    //används för att hitta t.ex. buggar 

    if (!response.ok) {
      throw new Error(json.error || "Kunde inte skicka meddelandet");
    }

    alert("Tack för ditt meddelande!");
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  } catch (error) {
    console.error(error);
    alert("Kunde inte skicka meddelandet.");
  }
}

//FORM-utseende
  return (
    <main className="min-h-screen flex flex-col items-center">
      {/* HERO */}
      <Hero
        title="Kontakta oss"
        image="/images/strawberries.jpg"
        titlecolor="text-white"
        subtitlecolor="text-white/90"
      />

      {/* Form + Text */}
      <div className="px-4 py-16 w-full max-w-6xl">
        <div className="bg-white rounded-2xl shadow-md p-10 flex flex-col md:flex-row gap-12 items-start">
          {/* Bild + Text */}
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

          {/* Formulär */}
          <form
            onSubmit={handleSubmit}
            className="md:w-1/2 flex flex-col gap-4 w-full"
          >
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
          </form>
        </div>

        {/* Tillbaka-knapp */}
        <div className="mt-8 flex justify-end">
          <Link href="/" className={buttonSecondary}>
            Ta mig tillbaka
          </Link>
        </div>
      </div>
    </main>
  );
}
