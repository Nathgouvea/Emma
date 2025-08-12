"use client";

import Image from "next/image";
import { useMemo, useState, useCallback, useRef } from "react";
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
  const filterRef = useRef<HTMLDivElement>(null);

  const shown = useMemo(() => {
    if (activeFilter === "All") return portfolioItems;
    return portfolioItems.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  const handleImageClick = useCallback((item: PortfolioItem) => {
    setLightbox(item);
  }, []);

  const handleLightboxClose = useCallback(() => {
    setLightbox(null);
    // Return focus to the last clicked image when lightbox closes
    const lastClickedImage = document.querySelector(
      '[data-last-clicked="true"]'
    ) as HTMLElement;
    if (lastClickedImage) {
      lastClickedImage.focus();
      lastClickedImage.removeAttribute("data-last-clicked");
    }
  }, []);

  const handleLightboxPrev = useCallback(() => {
    if (!lightbox) return;
    const currentIndex = shown.findIndex((item) => item.id === lightbox.id);
    const prevIndex = currentIndex === 0 ? shown.length - 1 : currentIndex - 1;
    setLightbox(shown[prevIndex]);
  }, [lightbox, shown]);

  const handleLightboxNext = useCallback(() => {
    if (!lightbox) return;
    const currentIndex = shown.findIndex((item) => item.id === lightbox.id);
    const nextIndex = currentIndex === shown.length - 1 ? 0 : currentIndex + 1;
    setLightbox(shown[nextIndex]);
  }, [lightbox, shown]);

  const handleFilterChange = useCallback((filter: (typeof filters)[number]) => {
    setActiveFilter(filter);
    // Announce filter change to screen readers
    const announcement = document.getElementById("filter-announcement");
    if (announcement) {
      announcement.textContent = `Showing ${
        filter === "All" ? "all" : filter
      } items`;
    }
  }, []);

  return (
    <div>
      {/* Filter Buttons */}
      <div
        ref={filterRef}
        className="mb-8 flex flex-wrap items-center gap-3"
        role="tablist"
        aria-label="Portfolio categories"
      >
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => handleFilterChange(filter)}
            role="tab"
            aria-selected={activeFilter === filter}
            aria-controls="portfolio-grid"
            className={`rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean focus-visible:ring-offset-2 ${
              activeFilter === filter
                ? "bg-ocean text-white shadow-md"
                : "bg-white text-neutral-700 border border-neutral-200 hover:bg-neutral-50 hover:border-neutral-300"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Results Announcement */}
      <div
        id="filter-announcement"
        className="sr-only"
        aria-live="polite"
        aria-atomic="true"
      >
        Showing {activeFilter === "All" ? "all" : activeFilter} items
      </div>

      {/* Portfolio Grid */}
      <div
        id="portfolio-grid"
        role="tabpanel"
        aria-label={`Portfolio items in ${activeFilter} category`}
        className="columns-1 gap-6 sm:columns-2 lg:columns-3 [column-fill:_balance]"
      >
        {shown.map((item, index) => {
          // Create varied aspect ratios for visual interest
          const ratioClass =
            index % 4 === 0
              ? "aspect-[4/3]"
              : index % 4 === 1
              ? "aspect-square"
              : index % 4 === 2
              ? "aspect-[3/4]"
              : "aspect-[5/4]";

          return (
            <div key={item.id} className="mb-6 break-inside-avoid group">
              <button
                onClick={() => handleImageClick(item)}
                onFocus={(e) => {
                  // Mark this as the last clicked image for focus management
                  document
                    .querySelectorAll('[data-last-clicked="true"]')
                    .forEach((el) => el.removeAttribute("data-last-clicked"));
                  if (e.currentTarget) {
                    e.currentTarget.setAttribute("data-last-clicked", "true");
                  }
                }}
                className="block w-full overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean focus-visible:ring-offset-2"
                aria-label={`View ${item.title} - ${item.category}`}
              >
                <div className={`relative ${ratioClass} w-full bg-neutral-100`}>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.05]"
                    priority={index < 6} // Prioritize first 6 images
                    quality={85}
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
                  {/* View Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="rounded-full bg-white/90 p-3 text-neutral-900 shadow-lg">
                      <svg
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Image Info */}
                <div className="p-4 text-left">
                  <h3 className="mb-1 text-sm font-semibold text-neutral-900 group-hover:text-ocean transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs font-medium text-neutral-700">
                      {item.category}
                    </span>
                    <span className="text-xs text-neutral-500">
                      Click to view
                    </span>
                  </div>
                </div>
              </button>
            </div>
          );
        })}
      </div>

      {/* Empty State */}
      {shown.length === 0 && (
        <div className="py-16 text-center" role="status" aria-live="polite">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-neutral-100">
            <svg
              className="h-8 w-8 text-neutral-400"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
            </svg>
          </div>
          <h3 className="mb-2 text-lg font-medium text-neutral-900">
            No images found
          </h3>
          <p className="text-neutral-500">
            Try adjusting your filter selection.
          </p>
        </div>
      )}

      {/* Lightbox */}
      {lightbox && (
        <Lightbox
          src={lightbox.src}
          alt={lightbox.alt}
          caption={`${lightbox.title} - ${lightbox.category}`}
          onClose={handleLightboxClose}
          onPrev={shown.length > 1 ? handleLightboxPrev : undefined}
          onNext={shown.length > 1 ? handleLightboxNext : undefined}
        />
      )}
    </div>
  );
}
