"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import { throttle } from "@/lib/utils/performance";

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
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion) return;
    timerRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 4000);
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [prefersReducedMotion]);

  // Throttled parallax effect for better performance
  const handleScroll = useCallback(() => {
    if (!heroRef.current || prefersReducedMotion) return;
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    heroRef.current.style.transform = `translateY(${rate}px)`;
  }, [prefersReducedMotion]);

  const throttledScrollHandler = useMemo(
    () => throttle(handleScroll, 16), // ~60fps
    [handleScroll]
  );

  // Parallax effect
  useEffect(() => {
    if (prefersReducedMotion) return;

    window.addEventListener("scroll", throttledScrollHandler, {
      passive: true,
    });
    return () => window.removeEventListener("scroll", throttledScrollHandler);
  }, [throttledScrollHandler, prefersReducedMotion]);

  return (
    <section className="relative isolate overflow-hidden">
      {/* Parallax Background */}
      <div
        ref={heroRef}
        className="absolute inset-0 -z-10"
        style={{
          transform: prefersReducedMotion ? "none" : undefined,
          transition: prefersReducedMotion ? "none" : undefined,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-sunrise/20 via-coral/10 to-ocean/20" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 py-12 sm:py-16 lg:grid-cols-2 lg:py-20">
          <div className="relative z-10">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Manifesting adventures, one moment at a time
            </h1>
            <p className="mt-6 text-base text-neutral-600 sm:text-lg lg:text-xl">
              Bright, uplifting travel, lifestyle, and mindset stories that
              inspire you to chase your dreams and embrace every adventure.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="/portfolio"
                className="inline-flex items-center justify-center rounded-md bg-ocean px-6 py-3 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:bg-ocean/90 hover:shadow-xl hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean focus-visible:ring-offset-2"
              >
                View Portfolio
              </a>
              <a
                href="/work-with-me"
                className="inline-flex items-center justify-center rounded-md border-2 border-ocean bg-white px-6 py-3 text-sm font-medium text-ocean transition-all duration-300 hover:bg-ocean hover:text-white hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean focus-visible:ring-offset-2"
              >
                Work With Me
              </a>
              <a
                href="#highlights"
                className="inline-flex items-center justify-center text-sm text-neutral-700 underline underline-offset-4 hover:text-ocean transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean focus-visible:ring-offset-2 rounded"
              >
                Explore highlights
              </a>
            </div>
          </div>
          <div className="relative h-72 sm:h-96 lg:h-[28rem] w-full overflow-hidden rounded-2xl border border-neutral-200 shadow-2xl">
            {slides.map((s, i) => (
              <div
                key={s.src}
                aria-hidden={i !== index}
                className={`absolute inset-0 transition-all duration-1000 ${
                  i === index ? "opacity-100 scale-100" : "opacity-0 scale-105"
                }`}
              >
                <Image
                  src={s.src}
                  alt={s.alt}
                  fill
                  sizes="(min-width: 1024px) 40vw, 90vw"
                  className="object-cover"
                  priority={i === 0}
                  quality={85}
                />
                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
            ))}

            {/* Slide indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 ${
                    i === index
                      ? "bg-white scale-125"
                      : "bg-white/50 hover:bg-white/75"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                  aria-current={i === index ? "true" : "false"}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
