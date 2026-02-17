"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "../(public)/cart/context/CartContext";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false); // för mobil dropdown
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cart } = useCart();

  return (
    <nav className="bg-white shadow-md px-6 py-4">
      <div className="flex items-center justify-between">

        {/* Logga + titel */}
        <div className="flex items-center gap-3">
          <img 
            src="/images/gront-logo.png" 
            alt="Min grönaboken Logo"
            className="h-10 w-10 object-contain"
          />
          <div className="text-2xl font-bold">
            <Link href="/">Grönaboken</Link>
          </div>
        </div>

        {/* Desktop-menyn */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="hover:text-gray-900 font-medium">Hem</Link>
          <Link href="/shop" className="hover:text-gray-900 font-medium">Butik</Link>

          {/* Dropdown */}
          <div className="relative group">
            <Link
              href="/recipe"
              className="px-4 py-2 font-medium rounded hover:bg-gray-100 transition flex items-center gap-1"
            >
              Recept ▼
            </Link>
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg z-10 opacity-0 group-hover:opacity-100 transition">
              <Link
                href="/recipe/biryani"
                className="block px-4 py-2 hover:bg-gray-100 transition"
              >
                Biryani
              </Link>
              <Link
                href="/recipe/hamburger"
                className="block px-4 py-2 hover:bg-gray-100 transition"
              >
                Hamburger
              </Link>
              <Link
                href="/recipe/korvstroganof"
                className="block px-4 py-2 hover:bg-gray-100 transition"
              >
                Korvstroganof
              </Link>
            </div>
          </div>

          <Link href="/contact" className="hover:text-gray-900 font-medium">Kontakta oss</Link>

          {/* Kundvagn */}
          <Link href="/cart" className="relative px-4 py-2 rounded hover:bg-gray-100 transition">
            🛒
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2">
                {cart.length}
              </span>
            )}
          </Link>
        </div>

        {/* Mobil-meny knapp */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-800 text-2xl font-bold"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobil-menyn */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-2 bg-white border rounded p-4 shadow">
          <Link href="/" className="hover:text-gray-900 font-medium">Hem</Link>
          <Link href="/shop" className="hover:text-gray-900 font-medium">Butik</Link>

          {/* Accordion dropdown för Recept */}
          <div className="flex flex-col">
            <Link
              href="/recipe"
              className="px-2 py-1 font-medium rounded hover:bg-gray-100 transition"
            >
              Recept
            </Link>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="text-left px-2 py-1 font-medium rounded hover:bg-gray-100 transition"
            >
              {dropdownOpen ? "▲ Visa underrecept" : "▼ Visa underrecept"}
            </button>
            {dropdownOpen && (
              <div className="pl-4 flex flex-col gap-1 mt-1">
                <Link
                  href="/biryani"
                  className="block px-2 py-1 hover:bg-gray-100 transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Biryani
                </Link>
                <Link
                  href="/hamburger"
                  className="block px-2 py-1 hover:bg-gray-100 transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Hamburger
                </Link>
                <Link
                  href="/korvstroganof"
                  className="block px-2 py-1 hover:bg-gray-100 transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Korvstroganof
                </Link>
              </div>
            )}
          </div>

          <Link href="/contact" className="hover:text-gray-900 font-medium">Kontakta oss</Link>
          <Link href="/cart" className="relative px-2 py-1 rounded hover:bg-gray-100 transition">
            🛒
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2">
                {cart.length}
              </span>
            )}
          </Link>
        </div>
      )}
    </nav>
  );
}
