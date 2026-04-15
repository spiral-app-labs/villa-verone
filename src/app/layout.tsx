import type { Metadata } from "next";
import { Cormorant_Garamond, Instrument_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteData } from "@/lib/site-data";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteData.url),
  title: `${siteData.name} | Historic Italian Dining in Geneva`,
  description: siteData.description,
  keywords: [
    "Villa Verone",
    "Geneva IL Italian restaurant",
    "OpenTable Geneva Illinois",
    "historic restaurant Geneva IL",
    "Italian patio dining Geneva",
    "Villa Verone menu",
  ],
  openGraph: {
    title: `${siteData.name} | Historic Italian Dining in Geneva`,
    description: siteData.description,
    url: siteData.url,
    siteName: siteData.name,
    images: [
      {
        url: siteData.heroImage,
        width: 1200,
        height: 630,
        alt: "Villa Verone patio and dining atmosphere",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteData.name} | Historic Italian Dining in Geneva`,
    description: siteData.description,
    images: [siteData.heroImage],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["Restaurant", "LocalBusiness"],
  name: siteData.name,
  image: [
    siteData.heroImage,
    siteData.featureImages.award,
    siteData.featureImages.pasta,
    siteData.featureImages.seafood,
  ],
  url: siteData.officialSite,
  telephone: "+1-630-232-2201",
  servesCuisine: ["Italian", "Southern Italian"],
  priceRange: "$$$",
  acceptsReservations: true,
  reservationUrl: siteData.reservationUrl,
  sameAs: [siteData.social.facebook, siteData.social.opentable],
  address: {
    "@type": "PostalAddress",
    streetAddress: "416 Hamilton Street",
    addressLocality: "Geneva",
    addressRegion: "IL",
    postalCode: "60134",
    addressCountry: "US",
  },
  openingHoursSpecification: siteData.hours.map((entry) =>
    entry.hours === "Closed"
      ? {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: entry.day,
        }
      : {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: entry.day,
          opens: "15:30",
          closes: "20:00",
        },
  ),
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    ratingCount: "2632",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${instrumentSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
