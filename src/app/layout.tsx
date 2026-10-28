import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
  title: "Buzzler Agency | Creative Digital Marketing for Hotels in Puri, Odisha",
  description:
    "Make your hotel the buzz of Puri. Video-first digital marketing, high-converting Meta & Google ads, and authentic influencer campaigns for Puri's premier hospitality brands.",
  keywords: [
    "digital marketing agency in Puri",
    "hotel video marketing Puri",
    "hotel marketing agency Odisha",
    "hotel reels and Instagram marketing Puri",
    "hospitality advertising Puri",
  ],
  authors: [{ name: "Buzzler Agency" }],
  icons: {
    icon: "/buzzler-logo.jpg",
  },
  openGraph: {
    title: "Buzzler Agency | Digital Marketing for Hotels in Puri",
    description:
      "Make your hotel the buzz of Puri. High-impact video marketing and performance campaigns for hospitality brands.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#FAF7F2] text-[#141413] antialiased selection:bg-[#F59E0B]/30 selection:text-black">
        {children}
      </body>
    </html>
  );
}
