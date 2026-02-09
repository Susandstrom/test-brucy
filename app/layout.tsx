// Detta är för alla sidor (t.ex. navbar etc)
import type { Metadata } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { CartProvider } from "./context/CartContext";

/* Brödtext */
const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-barlow",
});

/* Rubriker */
const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-barlow-condensed",
});

// Metadata (Server only)
export const metadata: Metadata = {
  title: "Grönt",
  description: "En samling av mina favoritrecept, och favoritprodukter",
};

//Detta är hur sidorna ser ut, t.ex vilken ordning allt hamnar. Jätte viktigt att det är rätt***
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv">
      <body
        className={`
          ${barlow.variable}
          ${barlowCondensed.variable}
          bg-[#eff5ef] flex flex-col min-h-screen
        `}
      >
        {/* Client Wrapper */}
        <CartProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
