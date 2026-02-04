"use client"; /*Måste vara längst upp och innan import*/

import Link from "next/link";
import { useState } from "react";

/*Till mitt formulär */
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
      <div className="relative h-[300px] md:h-[400px] w-full">
        <img
          src="/images/strawberries.jpg"
          alt="Strawberries"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-white/30 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
            Kontakta oss
          </h1>
        </div>
      </div>

      {/*Text till mitt formulär */}
      <div className="px-4 py-12">
        <div className="mx-auto max-w-xl bg-white rounded-2xl shadow-md p-8">

          <p className="text-center text-gray-600 mb-6">
            Hittar du inte det du söker eller har frågor?  
            Skicka ett meddelande så hör vi av oss!
          </p>

          {/* Formuläret */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">

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
              className="rounded-2xl bg-[#eff5ef] border border-gray-300 px-6 py-3 font-semibold shadow-md hover:bg-gray-100 transition"
            >
              Skicka
            </button>
          </form>

          <div className="mt-6 text-center">
            <Link
              href="/"
              className="inline-block rounded-2xl bg-white border border-gray-300 px-6 py-3 font-semibold shadow-md hover:bg-gray-100 transition"
            >
              Back to menu
            </Link>
          </div>

        </div>
      </div>
    </main>
  );
}
