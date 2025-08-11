"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import type { PortfolioItem, PortfolioCategory } from "@/lib/content/portfolio";
import { portfolioItems } from "@/lib/content/portfolio";
import Lightbox from "@/components/portfolio/Lightbox";

const filters: ("All" | PortfolioCategory)[] = [
  "All",
  "Travel",
  "Lifestyle",
  "Wellness",
  "Brand Work",
];

export default function PortfolioGrid() {
  const [activeFilter, setActiveFilter] =
    useState<(typeof filters)[number]>("All");
  const [lightbox, setLightbox] = useState<PortfolioItem | null>(null);

  const shown = useMemo(() => {
    if (activeFilter === "All") return portfolioItems;
    return portfolioItems.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center gap-2">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={
              (activeFilter === f
                ? "bg-neutral-900 text-white"
                : "bg-white text-neutral-900 border border-neutral-300") +
              " rounded-md px-3 py-1.5 text-sm font-medium hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean focus-visible:ring-offset-2"
            }
            aria-pressed={activeFilter === f}
          >
            {f}
          </button>
        ))}
      </div>

      <p className="sr-only" aria-live="polite">
        Showing {shown.length} items in {activeFilter} category
      </p>

      <ul className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
        {shown.map((item, i) => {
          const ratioClass =
            i % 3 === 0
              ? "aspect-[4/3]"
              : i % 3 === 1
              ? "aspect-square"
              : "aspect-[3/4]";
          return (
            <li key={item.id} className="mb-4 break-inside-avoid group">
              <button
                onClick={() => setLightbox(item)}
                className="block w-full overflow-hidden rounded-lg border border-neutral-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean focus-visible:ring-offset-2"
              >
                <div className={`relative ${ratioClass} w-full bg-neutral-100`}>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="px-2 py-2 text-left">
                  <p className="text-sm font-medium text-neutral-900">
                    {item.title}
                  </p>
                  <p className="text-xs text-neutral-600">{item.category}</p>
                </div>
              </button>
            </li>
          );
        })}
      </ul>

      {lightbox && (
        <Lightbox
          src={lightbox.src}
          alt={lightbox.alt}
          onClose={() => setLightbox(null)}
        />
      )}
    </div>
  );
}
