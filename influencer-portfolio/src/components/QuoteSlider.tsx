"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const QUOTES = [
  {
    text: "I attract adventures that align with my highest self.",
    author: "Emma",
  },
  {
    text: "Every step I take is guided by faith and joy.",
    author: "Emma",
  },
  {
    text: "I am a magnet for beauty, connection, and growth.",
    author: "Emma",
  },
  {
    text: "My dreams expand as I do—limitless and bright.",
    author: "Emma",
  },
];

export default function QuoteSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % QUOTES.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-ocean-blue/10 via-white to-sunrise-gold/10">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={index}
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="text-3xl lg:text-4xl font-dancing-script text-dark leading-relaxed">
              “{QUOTES[index].text}”
            </div>
            <div className="mt-6 text-dark/60">— {QUOTES[index].author}</div>
          </motion.blockquote>
        </AnimatePresence>
        <div className="mt-8 flex justify-center gap-2">
          {QUOTES.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to quote ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2 w-2 rounded-full transition-colors ${
                i === index ? "bg-coral-pink" : "bg-sandy-beige"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}