import type { Metadata } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

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

export const metadata: Metadata = {
  title: "Min Receptbok",
  description: "En samling av mina favoritrecept",
};

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
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
