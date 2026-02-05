"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
      {/* Logo / titel */}
      <div className="text-2xl font-bold">Min Receptbok</div>

      {/* Meny*/}
      <div className="flex items-center gap-6">
        <Link href="/" className="hover:text-gray-900 font-medium">
          Hem
        </Link>

        {/* Dropdown */}
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="px-4 py-2 font-semibold rounded hover:bg-gray-100 transition"
          >
            Recept
            {/* Pil ner */}
            <span className="ml-2 text-sm">
              ▼
            </span>
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
           <Link href="/contact" className="hover:text-gray-900 font-medium">
          Kontakta oss
        </Link>
        </div>
      </div>
    </nav>
  );
}
