import type { Metadata } from "next";
import { Inter, Dancing_Script, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Emma - Manifesting Adventures, One Moment at a Time",
  description:
    "Travel, lifestyle, and mindset influencer sharing adventures, wellness, and manifestation stories. From Alaska to Puerto Rico, discover inspiring content and collaboration opportunities.",
  keywords: [
    "travel influencer",
    "lifestyle",
    "wellness",
    "mindset",
    "manifestation",
    "yoga",
    "ballet",
    "adventure",
  ],
  authors: [{ name: "Emma" }],
  openGraph: {
    title: "Emma - Manifesting Adventures, One Moment at a Time",
    description:
      "Travel, lifestyle, and mindset influencer sharing adventures, wellness, and manifestation stories.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emma - Manifesting Adventures, One Moment at a Time",
    description:
      "Travel, lifestyle, and mindset influencer sharing adventures, wellness, and manifestation stories.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${dancingScript.variable} ${playfairDisplay.variable}`}
    >
      <body className="antialiased bg-[linear-gradient(180deg,rgba(251,246,238,1)_0%,rgba(255,255,255,1)_40%,rgba(251,246,238,0.6)_100%)] min-h-screen">{children}</body>
    </html>
  );
}
