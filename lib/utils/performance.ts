/**
 * Performance utilities for the Emma website
 */

// Image optimization helpers
export const getImageSizes = (breakpoints: number[]) => {
  return breakpoints.map((bp) => `${bp}px`).join(", ");
};

export const getResponsiveSizes = (
  columns: number,
  maxWidth: number = 1200
) => {
  const columnWidth = maxWidth / columns;
  return `(min-width: ${maxWidth}px) ${columnWidth}px, ${100 / columns}vw`;
};

// Lazy loading utilities
export const isInViewport = (element: Element) => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

export const createIntersectionObserver = (
  callback: IntersectionObserverCallback,
  options: IntersectionObserverInit = {}
) => {
  if (typeof IntersectionObserver === "undefined") {
    return null;
  }

  return new IntersectionObserver(callback, {
    rootMargin: "50px",
    threshold: 0.1,
    ...options,
  });
};

// Performance monitoring
export const measurePerformance = (name: string, fn: () => void) => {
  if (typeof performance !== "undefined" && performance.mark) {
    const startMark = `${name}-start`;
    const endMark = `${name}-end`;

    performance.mark(startMark);
    fn();
    performance.mark(endMark);

    performance.measure(name, startMark, endMark);

    const measure = performance.getEntriesByName(name)[0];
    console.log(`${name} took ${measure.duration.toFixed(2)}ms`);

    return measure.duration;
  }

  // Fallback for environments without Performance API
  const start = Date.now();
  fn();
  const duration = Date.now() - start;
  console.log(`${name} took ${duration}ms`);
  return duration;
};

// Debounce utility for performance
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// Throttle utility for performance
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// Preload critical resources
export const preloadImage = (src: string) => {
  const link = document.createElement("link");
  link.rel = "preload";
  link.as = "image";
  link.href = src;
  document.head.appendChild(link);
};

export const preloadImages = (srcs: string[]) => {
  srcs.forEach(preloadImage);
};
