"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

const slides = [
  { src: "/images/screenshot-2025-08-10-17-27-52.png", alt: "Travel moment 1" },
  { src: "/images/screenshot-2025-08-10-17-28-12.png", alt: "Travel moment 2" },
  { src: "/images/screenshot-2025-08-10-17-28-27.png", alt: "Travel moment 3" },
  { src: "/images/screenshot-2025-08-10-17-29-33.png", alt: "Travel moment 4" },
];

export default function Hero() {
  const prefersReducedMotion = useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    []
  );
  const [index, setIndex] = useState(0);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (prefersReducedMotion) return;
    timerRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 4000);
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [prefersReducedMotion]);

  return (
    <section className="relative isolate overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 py-12 sm:py-16 lg:grid-cols-2 lg:py-20">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Manifesting adventures, one moment at a time
            </h1>
            <p className="mt-6 text-base text-neutral-600 sm:text-lg">
              Bright, uplifting travel, lifestyle, and mindset stories.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="/portfolio"
                className="inline-flex items-center justify-center rounded-md bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean focus-visible:ring-offset-2"
              >
                View Portfolio
              </a>
              <a
                href="/work-with-me"
                className="inline-flex items-center justify-center rounded-md border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean focus-visible:ring-offset-2"
              >
                Work With Me
              </a>
              <a
                href="#highlights"
                className="inline-flex items-center justify-center text-sm text-neutral-700 underline underline-offset-4 hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean focus-visible:ring-offset-2 rounded"
              >
                Explore highlights
              </a>
            </div>
          </div>
          <div className="relative h-72 sm:h-96 lg:h-[28rem] w-full overflow-hidden rounded-lg border border-neutral-200">
            {slides.map((s, i) => (
              <div
                key={s.src}
                aria-hidden={i !== index}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  i === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={s.src}
                  alt={s.alt}
                  fill
                  sizes="(min-width: 1024px) 40vw, 90vw"
                  className="object-cover"
                  priority={i === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
