"use client";

import { useEffect, useMemo, useState } from "react";

const quotes = [
  "Manifesting adventures, one moment at a time",
  "Every journey begins with a single step",
  "The universe conspires to help those who dream",
  "Adventure awaits those who seek it",
  "Your energy attracts your reality",
  "Dance like nobody's watching, live like there's no tomorrow",
  "The best view comes after the hardest climb",
  "Trust the process, embrace the journey",
  "You are capable of amazing things",
  "Life is either a daring adventure or nothing at all"
];

export default function QuoteSlider() {
  const prefersReducedMotion = useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    []
  );
  
  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion) return;
    
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [prefersReducedMotion]);

  return (
    <section className="py-16 bg-gradient-to-br from-sunrise/5 to-coral/5">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="relative min-h-[120px] flex items-center justify-center">
          {quotes.map((quote, index) => (
            <blockquote
              key={quote}
              className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ${
                index === currentQuote
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              aria-hidden={index !== currentQuote}
            >
              <div>
                <p className="text-2xl sm:text-3xl lg:text-4xl font-light text-neutral-800 leading-relaxed">
                  "{quote}"
                </p>
                <div className="mt-4 flex items-center justify-center space-x-2">
                  {quotes.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentQuote(i)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean focus-visible:ring-offset-2 ${
                        i === currentQuote
                          ? "bg-ocean scale-125"
                          : "bg-neutral-300 hover:bg-neutral-400"
                      }`}
                      aria-label={`Go to quote ${i + 1}`}
                      aria-current={i === currentQuote ? "true" : "false"}
                    />
                  ))}
                </div>
              </div>
            </blockquote>
          ))}
        </div>
        
        {/* Live region for screen readers */}
        <div className="sr-only" aria-live="polite" aria-atomic="true">
          Current quote: {quotes[currentQuote]}
        </div>
      </div>
    </section>
  );
}
