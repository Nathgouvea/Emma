import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work With Me",
  description: "Partnerships, collaborations, and services overview.",
  alternates: { canonical: "/work-with-me" },
};

export default function WorkWithMePage() {
  return (
    <main id="main" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <section className="prose prose-neutral max-w-3xl">
        <h1>Work With Me</h1>
        <p>Details on offerings, process, and ways to collaborate.</p>
      </section>
    </main>
  );
}
