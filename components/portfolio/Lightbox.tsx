"use client";

import Image from "next/image";
import { useEffect } from "react";

interface LightboxProps {
  src: string;
  alt: string;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
  caption?: string;
}

export default function Lightbox({
  src,
  alt,
  onClose,
  onPrev,
  onNext,
  caption,
}: LightboxProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && onPrev) onPrev();
      if (e.key === "ArrowRight" && onNext) onNext();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose, onPrev, onNext]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image lightbox"
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative max-h-full max-w-4xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 z-10 rounded-full bg-white/90 px-3 py-1 text-sm font-medium text-neutral-900 shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean focus-visible:ring-offset-2"
        >
          Close
        </button>
        {onPrev && (
          <button
            onClick={onPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded bg-white/80 px-2 py-1 text-sm shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean focus-visible:ring-offset-2"
            aria-label="Previous image"
          >
            ←
          </button>
        )}
        {onNext && (
          <button
            onClick={onNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded bg-white/80 px-2 py-1 text-sm shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean focus-visible:ring-offset-2"
            aria-label="Next image"
          >
            →
          </button>
        )}
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-neutral-100">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="90vw"
            className="object-contain"
          />
        </div>
        {caption && (
          <p className="mt-2 text-center text-sm text-white/90">{caption}</p>
        )}
      </div>
    </div>
  );
}
