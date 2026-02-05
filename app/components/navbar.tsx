"use client";

import { useState } from "react";
import Link from "next/link";

const menuItem =
  "px-3 py-2 font-medium rounded hover:bg-gray-100 transition";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
      
      {/* Logga */}
      <div className="flex items-center gap-2">
        <img
          src="/images/gront-logo.png"
          alt="Min Receptbok Logo"
          className="h-10 w-10 object-contain"
        />
        <Link href="/" className="text-2xl font-bold">
          Min Receptbok
        </Link>
      </div>

      {/* Meny */}
      <div className="flex items-center gap-2">
        <Link href="/" className={menuItem}>
          Hem
        </Link>

        <Link href="/butik" className={menuItem}>
          Butik
        </Link>

        {/* Dropdown */}
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className={`${menuItem} flex items-center gap-1`}
          >
            Recept
            <span className="text-sm">▾</span>
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-44 bg-white border rounded shadow-lg z-10">
              <Link href="/biryani" className="block px-4 py-2 hover:bg-gray-100">
                Biryani
              </Link>
              <Link href="/hamburger" className="block px-4 py-2 hover:bg-gray-100">
                Hamburger
              </Link>
              <Link href="/korvstroganof" className="block px-4 py-2 hover:bg-gray-100">
                Korvstroganof
              </Link>
            </div>
          )}
        </div>

        <Link href="/contact" className={menuItem}>
          Kontakta oss
        </Link>
      </div>
    </nav>
  );
}
