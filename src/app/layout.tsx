import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MobileQuickBar from "@/components/MobileQuickBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FAF7F2",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.buzzler.co.in"),
  title: "Buzzler Agency | Creative Performance Marketing & 4K Reels in Puri, Odisha",
  description:
    "Make your brand the buzz of Puri. High-converting 4K video reels, Meta & Google ads, and WhatsApp lead funnels for real estate, cafes, gyms, colleges, and hotels in Puri and Odisha.",
  keywords: [
    "digital marketing agency in Puri",
    "social media marketing Puri",
    "real estate marketing Puri",
    "plotted township marketing Odisha",
    "cafe restaurant marketing Puri",
    "gym fitness advertising Puri",
    "school college admission marketing Odisha",
    "hotel digital marketing Puri",
    "video reels ads production Puri Odisha",
    "Meta ads agency Puri",
  ],
  authors: [{ name: "Buzzler Agency" }],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "192x192" },
      { url: "/buzzler-logo-transparent.png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "Buzzler Agency | Creative Performance Marketing in Puri, Odisha",
    description:
      "Make your brand the buzz of Puri. High-impact video reels, performance ads, and WhatsApp customer funnels for real estate, dining, gyms, and hospitality.",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/buzzler-logo.jpg",
        width: 1200,
        height: 630,
        alt: "Buzzler Agency Puri Odisha",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Buzzler Agency",
    "image": "https://www.buzzler.co.in/buzzler-logo.jpg",
    "telephone": "+91-7873343141",
    "url": "https://www.buzzler.co.in",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Puri",
      "addressRegion": "Odisha",
      "postalCode": "752001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 19.8135,
      "longitude": 85.8312
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:30",
      "closes": "19:00"
    },
    "sameAs": [
      "https://www.instagram.com/buzzler.agency"
    ],
    "priceRange": "₹₹",
    "description": "Video-first digital marketing, Meta and Google performance ads, and creator collaborations for cafes, gyms, colleges, schools, and hotels in Puri and Odisha."
  };

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#FAF7F2] text-[#141413] antialiased selection:bg-[#F59E0B]/30 selection:text-black pb-20 md:pb-0">
        {children}
        <MobileQuickBar />
      </body>
    </html>
  );
}
