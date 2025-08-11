import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description: "Meet Emma — the heart behind the adventures and stories.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main id="main" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-3xl text-center">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          About
        </h1>
        <p className="mt-4 text-neutral-600">
          Meet Emma — the heart behind the adventures and stories.
        </p>
      </section>
      <section className="mt-10 grid gap-6 sm:grid-cols-2">
        <div className="prose prose-neutral">
          <h2>Journey</h2>
          <p>
            A storyteller at heart, Emma blends travel, lifestyle, and mindset
            to share uplifting, authentic moments.
          </p>
        </div>
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-neutral-200">
          <Image
            src="/images/screenshot-2025-08-10-17-27-52.png"
            alt="Emma smiling with a dog"
            fill
            sizes="(min-width: 640px) 45vw, 90vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="mt-12 grid gap-6 sm:grid-cols-2">
        <div className="prose prose-neutral">
          <h2>Philosophy</h2>
          <p>
            Grounded in mindset and manifestation, Emma focuses on crafting
            bright, optimistic narratives that inspire movement and growth.
          </p>
        </div>
        <ul className="columns-2 gap-3 sm:columns-3 [column-fill:_balance]">
          {[
            "/images/screenshot-2025-08-10-17-28-12.png",
            "/images/screenshot-2025-08-10-17-28-27.png",
            "/images/screenshot-2025-08-10-17-29-33.png",
          ].map((src) => (
            <li key={src} className="mb-3 break-inside-avoid">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-neutral-200 bg-neutral-100">
                <Image
                  src={src}
                  alt="Gallery item"
                  fill
                  sizes="45vw"
                  className="object-cover"
                />
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
