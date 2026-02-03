import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        
        {/* Logo / Titel */}
        <Link href="/" className="text-2xl font-bold text-gray-900">
          Receptboken
        </Link>

        {/* Navigation */}
        <div className="flex gap-6 text-gray-700 font-medium">
          <Link href="/" className="hover:text-gray-900">
            Hem
          </Link>
          <Link href="/hamburger" className="hover:text-gray-900">
            Hamburgare
          </Link>
          <Link href="/korvstroganof" className="hover:text-gray-900">
            Korvstroganof
          </Link>
          <Link href="/biryani" className="hover:text-gray-900">
            Biryani
          </Link>
        </div>

      </div>
    </nav>
  );
}
