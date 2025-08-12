import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import SiteNav from "@/components/nav/SiteNav";
import SiteFooter from "@/components/footer/SiteFooter";
import FollowBar from "@/components/nav/FollowBar";
import PerformanceMonitor from "@/components/PerformanceMonitor";
import AccessibilityTester from "@/components/AccessibilityTester";

export const metadata: Metadata = {
  title: {
    default: "Emma – Influencer Portfolio",
    template: "%s | Emma",
  },
  description:
    "Vibrant, uplifting travel, lifestyle, and mindset portfolio. Manifesting adventures, one moment at a time.",
  metadataBase: new URL(
    (process.env.NEXT_PUBLIC_SITE_URL || "https://example.com").replace(
      /\/$/,
      ""
    )
  ),
  openGraph: {
    title: "Emma – Influencer Portfolio",
    description:
      "Vibrant, uplifting travel, lifestyle, and mindset portfolio. Manifesting adventures, one moment at a time.",
    type: "website",
    url: "/",
  },
  alternates: {
    canonical: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emma – Influencer Portfolio",
    description:
      "Vibrant, uplifting travel, lifestyle, and mindset portfolio. Manifesting adventures, one moment at a time.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [{ media: "(prefers-color-scheme: light)", color: "#ffffff" }],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google Analytics placeholder — insert GA4 ID when available */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <script
              id="ga4"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);} 
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', { send_page_view: false });
                `,
              }}
            />
          </>
        )}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Load a sans font; script-style headings can be added later per design */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-white text-neutral-900 antialiased">
        <PerformanceMonitor />
        <AccessibilityTester />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:shadow"
        >
          Skip to content
        </a>
        <FollowBar />
        <SiteNav />
        <div className="pt-2 sm:pt-4 lg:pt-6">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
