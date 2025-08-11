import type { Metadata } from "next";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Selected travel, lifestyle, and mindset projects.",
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioPage() {
  return (
    <main id="main" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <section className="mb-8 text-center">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Portfolio
        </h1>
        <p className="mt-3 text-neutral-600">
          Browse selected work by category.
        </p>
      </section>
      <PortfolioGrid />
    </main>
  );
}
