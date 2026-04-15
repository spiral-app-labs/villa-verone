import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-var",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato-var",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Villa Verone Ristorante Italiano | Geneva, IL",
  description:
    "Authentic Southern Italian cuisine in a historic 1849 stone building in Geneva, IL. Fine dining, pasta, pizza, and more. Reservations welcome. Call (630) 232-3322.",
  keywords: [
    "Italian restaurant",
    "Geneva IL",
    "Villa Verone",
    "Southern Italian",
    "fine dining",
    "pasta",
    "pizza",
  ],
  openGraph: {
    title: "Villa Verone Ristorante Italiano",
    description:
      "Authentic Southern Italian cuisine in a historic 1849 stone building in Geneva, IL.",
    url: "https://villaverone.com",
    siteName: "Villa Verone Ristorante Italiano",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Villa Verone Ristorante Italiano",
    description: "Authentic Southern Italian cuisine in Geneva, IL.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${lato.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
