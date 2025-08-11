import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Emma for collaborations and inquiries.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main id="main" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <section className="prose prose-neutral max-w-3xl">
        <h1>Contact</h1>
        <p>
          Use the contact details or form that will appear here to reach out for
          partnerships, speaking, and more.
        </p>
      </section>
    </main>
  );
}
