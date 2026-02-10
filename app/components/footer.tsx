"use client";

import Link from "next/link";
import { Home, BookOpen, Mail } from "lucide-react";

//Min footer med tre olika delar 
export default function Footer() {
  return (
    <footer className="bg-white text-gray-500 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Om oss */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Om Grönaboken</h3>
          <p className="text-gray-400 text-sm">
            Grönaboken är din receptsamling online – hitta inspiration, lägg till favoriter och upptäck nya smaker!
          </p>
        </div>

        {/* Snabblänkar */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Snabblänkar</h3>
          <ul className="space-y-2 justify-center">
            <li>
              <Link href="/" className="hover:text-green-400 flex items-center gap-2 justify-center">
                <Home size={16} /> Hem
              </Link>
            </li>
            <li>
              <Link href="/recipe" className="hover:text-green-400 flex items-center gap-2 justify-center">
                <BookOpen size={16} /> Recept
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-green-400 flex items-center gap-2 justify-center">
                <Mail size={16} /> Kontakt
              </Link>
            </li>
          </ul>
        </div>

        {/* SM/ kontakt */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Kontakt & Socialt</h3>
          <p className="text-gray-400 text-sm mb-2">Skicka ett mail eller följ oss på sociala medier:</p>
          <div className="flex gap-4 justify-center">
            <a href="mailto:hej@gronaboken.se" className="hover:text-green-400">
              <Mail size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-green-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.337 3.608 1.312.975.975 1.25 2.242 1.312 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.337 2.633-1.312 3.608-.975.975-2.242 1.25-3.608 1.312-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.337-3.608-1.312-.975-.975-1.25-2.242-1.312-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.849c.062-1.366.337-2.633 1.312-3.608C4.52 2.5 5.787 2.225 7.153 2.163 8.418 2.105 8.798 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.052.072 5.77.13 4.65.352 3.678 1.324 2.705 2.296 2.483 3.416 2.425 4.698.014 5.978 0 8.741 0 12s.014 6.022.072 7.302c.058 1.282.28 2.402 1.252 3.374.972.972 2.092 1.194 3.374 1.252C8.332 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.282-.058 2.402-.28 3.374-1.252.972-.972 1.194-2.092 1.252-3.374C23.986 18.022 24 15.259 24 12s-.014-6.022-.072-7.302c-.058-1.282-.28-2.402-1.252-3.374-.972-.972-2.092-1.194-3.374-1.252C15.668.014 15.259 0 12 0z"/>
                <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/>
                <circle cx="18.406" cy="5.594" r="1.44"/>
              </svg>
            </a>
          </div>
        </div>

      </div>

      <div className="border-t border-gray-800 mt-6 pt-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Grönaboken · Skapad av So
      </div>
    </footer>
  );
}
