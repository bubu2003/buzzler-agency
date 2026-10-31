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
  metadataBase: new URL("https://buzzler-agency.vercel.app"),
  title: "Buzzler Agency | Creative Digital Marketing for Cafes, Gyms, Schools & Stays in Puri, Odisha",
  description:
    "Make your brand the buzz of Puri. Video-first social marketing, high-converting Meta & Google ads, and creator collaborations for cafes, gyms, colleges, schools, and hotels in Puri and Odisha.",
  keywords: [
    "digital marketing agency in Puri",
    "social media marketing Puri",
    "cafe restaurant marketing Puri",
    "gym fitness advertising Puri",
    "school college admission marketing Odisha",
    "hotel digital marketing Puri",
    "video reels ads production Puri Odisha",
    "Meta ads agency Puri",
  ],
  authors: [{ name: "Buzzler Agency" }],
  icons: {
    icon: "/buzzler-logo.jpg",
  },
  openGraph: {
    title: "Buzzler Agency | Creative Digital Marketing in Puri, Odisha",
    description:
      "Make your brand the buzz of Puri. High-impact video reels, performance ads, and creator campaigns for cafes, gyms, colleges, and hotels.",
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
        <MobileQuickBar />
      </body>
    </html>
  );
}
