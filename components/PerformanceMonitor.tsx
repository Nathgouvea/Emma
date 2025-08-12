"use client";

import { useEffect } from "react";

export default function PerformanceMonitor() {
  useEffect(() => {
    // Only run in production and when Performance API is available
    if (
      process.env.NODE_ENV !== "production" ||
      typeof performance === "undefined"
    ) {
      return;
    }

    // Track Core Web Vitals
    const trackWebVitals = () => {
      // Largest Contentful Paint (LCP)
      if ("PerformanceObserver" in window) {
        try {
          const lcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1] as PerformanceEntry;
            if (lastEntry) {
              console.log("LCP:", lastEntry.startTime);
              // Send to analytics if available
              if (window.gtag) {
                window.gtag("event", "web_vitals", {
                  event_category: "Web Vitals",
                  event_label: "LCP",
                  value: Math.round(lastEntry.startTime),
                });
              }
            }
          });
          lcpObserver.observe({ entryTypes: ["largest-contentful-paint"] });
        } catch (e) {
          console.warn("LCP tracking failed:", e);
        }

        // First Input Delay (FID)
        try {
          const fidObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry) => {
              console.log("FID:", entry.processingStart - entry.startTime);
              if (window.gtag) {
                window.gtag("event", "web_vitals", {
                  event_category: "Web Vitals",
                  event_label: "FID",
                  value: Math.round(entry.processingStart - entry.startTime),
                });
              }
            });
          });
          fidObserver.observe({ entryTypes: ["first-input"] });
        } catch (e) {
          console.warn("FID tracking failed:", e);
        }

        // Cumulative Layout Shift (CLS)
        try {
          let clsValue = 0;
          const clsObserver = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
              if (!entry.hadRecentInput) {
                clsValue += (entry as any).value;
              }
            }
            console.log("CLS:", clsValue);
            if (window.gtag) {
              window.gtag("event", "web_vitals", {
                event_category: "Web Vitals",
                event_label: "CLS",
                value: Math.round(clsValue * 1000) / 1000,
              });
            }
          });
          clsObserver.observe({ entryTypes: ["layout-shift"] });
        } catch (e) {
          console.warn("CLS tracking failed:", e);
        }
      }
    };

    // Track page load performance
    const trackPageLoad = () => {
      if (performance.timing) {
        const timing = performance.timing;
        const loadTime = timing.loadEventEnd - timing.navigationStart;
        const domReadyTime =
          timing.domContentLoadedEventEnd - timing.navigationStart;

        console.log("Page Load Time:", loadTime);
        console.log("DOM Ready Time:", domReadyTime);

        if (window.gtag) {
          window.gtag("event", "timing_complete", {
            name: "load",
            value: loadTime,
          });
          window.gtag("event", "timing_complete", {
            name: "domready",
            value: domReadyTime,
          });
        }
      }
    };

    // Track resource loading
    const trackResources = () => {
      if ("PerformanceObserver" in window) {
        try {
          const resourceObserver = new PerformanceObserver((list) => {
            list.getEntries().forEach((entry) => {
              const resourceEntry = entry as PerformanceResourceTiming;
              if (
                resourceEntry.initiatorType === "img" &&
                resourceEntry.duration > 1000
              ) {
                console.warn(
                  "Slow image load:",
                  resourceEntry.name,
                  resourceEntry.duration
                );
              }
            });
          });
          resourceObserver.observe({ entryTypes: ["resource"] });
        } catch (e) {
          console.warn("Resource tracking failed:", e);
        }
      }
    };

    // Initialize tracking
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", () => {
        trackWebVitals();
        trackPageLoad();
        trackResources();
      });
    } else {
      trackWebVitals();
      trackPageLoad();
      trackResources();
    }

    // Track route changes for SPA navigation
    const trackRouteChange = () => {
      if (window.gtag) {
        window.gtag("config", process.env.NEXT_PUBLIC_GA_ID, {
          page_path: window.location.pathname,
        });
      }
    };

    // Listen for route changes (Next.js)
    if (typeof window !== "undefined") {
      const originalPushState = history.pushState;
      const originalReplaceState = history.replaceState;

      history.pushState = function (...args) {
        originalPushState.apply(this, args);
        trackRouteChange();
      };

      history.replaceState = function (...args) {
        originalReplaceState.apply(this, args);
        trackRouteChange();
      };

      window.addEventListener("popstate", trackRouteChange);
    }

    return () => {
      // Cleanup
      if (typeof window !== "undefined") {
        window.removeEventListener("popstate", trackRouteChange);
      }
    };
  }, []);

  return null; // This component doesn't render anything
}

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}
