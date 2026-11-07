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

  title: {
    default: "Buzzler Agency | Creative & Digital Marketing Agency in Odisha",
    template: "%s | Buzzler Agency",
  },

  description:
    "Buzzler helps brands grow through creative video production, Google and Meta Ads, influencer marketing and branding across Odisha.",

  applicationName: "Buzzler Agency",

  authors: [{ name: "Buzzler Agency" }],

  openGraph: {
    title: "Buzzler Agency | Creative & Digital Marketing Agency in Odisha",
    description:
      "Creative campaigns, video production, performance advertising and influencer marketing for growing brands in Odisha.",
    url: "https://www.buzzler.co.in",
    siteName: "Buzzler Agency",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/buzzler-new-logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Buzzler Agency",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Buzzler Agency | Creative & Digital Marketing Agency in Odisha",
    description:
      "Video production, performance advertising, influencer marketing and branding across Odisha.",
    images: ["/buzzler-new-logo.jpeg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.buzzler.co.in/#organization",
    name: "Buzzler Agency",
    url: "https://www.buzzler.co.in",
    logo: "https://www.buzzler.co.in/buzzler-new-logo.jpeg",
    description:
      "Buzzler is a creative and digital marketing agency serving brands across Odisha through video production, performance advertising, influencer marketing and branding.",
    sameAs: [
      "https://www.instagram.com/buzzler.agency",
    ],
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
