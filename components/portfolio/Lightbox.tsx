"use client";

import Image from "next/image";
import { useEffect, useCallback, useRef } from "react";

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
  const lightboxRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && onPrev) onPrev();
      if (e.key === "ArrowRight" && onNext) onNext();
    },
    [onClose, onPrev, onNext]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    // Prevent body scroll when lightbox is open
    document.body.style.overflow = "hidden";

    // Focus the close button when lightbox opens
    if (closeButtonRef.current) {
      closeButtonRef.current.focus();
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [handleKeyDown]);

  const handleBackdropClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    },
    [onClose]
  );

  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  const handlePrev = useCallback(() => {
    if (onPrev) onPrev();
  }, [onPrev]);

  const handleNext = useCallback(() => {
    if (onNext) onNext();
  }, [onNext]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image lightbox"
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={handleBackdropClick}
      ref={lightboxRef}
    >
      <div
        className="relative max-h-full max-w-5xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          ref={closeButtonRef}
          onClick={handleClose}
          className="absolute -top-4 -right-4 z-10 rounded-full bg-white/95 px-4 py-2 text-sm font-medium text-neutral-900 shadow-lg transition-all hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
          aria-label="Close lightbox"
        >
          <svg
            className="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </svg>
        </button>

        {/* Navigation Buttons */}
        {onPrev && (
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-3 py-2 text-neutral-900 shadow-lg transition-all hover:bg-white hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
            aria-label="Previous image"
          >
            <svg
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </button>
        )}

        {onNext && (
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-3 py-2 text-neutral-900 shadow-lg transition-all hover:bg-white hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
            aria-label="Next image"
          >
            <svg
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
            </svg>
          </button>
        )}

        {/* Image Container */}
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-neutral-100">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="90vw"
            className="object-contain"
            priority
            quality={90}
          />
        </div>

        {/* Caption */}
        {caption && (
          <div className="mt-4 text-center">
            <p className="text-lg font-medium text-white/95">{caption}</p>
          </div>
        )}

        {/* Navigation Instructions */}
        {(onPrev || onNext) && (
          <div className="mt-4 text-center text-sm text-white/70">
            <p>
              Use arrow keys or click the navigation buttons to browse images
            </p>
          </div>
        )}

        {/* Keyboard Shortcuts Info */}
        <div className="mt-2 text-center text-xs text-white/60">
          <p>Press ESC to close</p>
        </div>
      </div>
    </div>
  );
}
