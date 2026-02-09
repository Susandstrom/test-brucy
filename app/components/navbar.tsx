"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cart } = useCart();

  return (
    <nav className="bg-white shadow-md px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Logo + titel */}
        <div className="flex items-center gap-3">
          <img 
            src="/images/gront-logo.png" 
            alt="Min Receptbok Logo"
            className="h-10 w-10 object-contain"
          />
          <div className="text-2xl font-bold">
            <Link href="/">Min Receptbok</Link>
          </div>
        </div>

        {/* Desktop-menyn */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="hover:text-gray-900 font-medium">Hem</Link>
          <Link href="/butik" className="hover:text-gray-900 font-medium">Butik</Link>

          {/* Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="px-4 py-2 font-medium rounded hover:bg-gray-100 transition"
            >
              Recept ▼
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg z-10">
                <Link
                  href="/biryani"
                  className="block px-4 py-2 hover:bg-gray-100 transition"
                  onClick={() => setDropdownOpen(false)}
                >
                  Biryani
                </Link>
                <Link
                  href="/hamburger"
                  className="block px-4 py-2 hover:bg-gray-100 transition"
                  onClick={() => setDropdownOpen(false)}
                >
                  Hamburger
                </Link>
                <Link
                  href="/korvstroganof"
                  className="block px-4 py-2 hover:bg-gray-100 transition"
                  onClick={() => setDropdownOpen(false)}
                >
                  Korvstroganof
                </Link>
              </div>
            )}
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
          <Link href="/butik" className="hover:text-gray-900 font-medium">Butik</Link>

          {/* Dropdown i mobilmeny */}
          <div>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="w-full text-left px-2 py-1 font-medium rounded hover:bg-gray-100 transition"
            >
              Recept ▼
            </button>
            {dropdownOpen && (
              <div className="pl-4 mt-1 flex flex-col gap-1">
                <Link
                  href="/biryani"
                  className="block px-4 py-2 hover:bg-gray-100 transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Biryani
                </Link>
                <Link
                  href="/hamburger"
                  className="block px-4 py-2 hover:bg-gray-100 transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Hamburger
                </Link>
                <Link
                  href="/korvstroganof"
                  className="block px-4 py-2 hover:bg-gray-100 transition"
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
