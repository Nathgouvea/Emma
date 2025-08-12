"use client";

import { useEffect, useState } from "react";

interface AccessibilityIssue {
  type: "error" | "warning" | "info";
  message: string;
  element?: string;
  selector?: string;
}

export default function AccessibilityTester() {
  const [issues, setIssues] = useState<AccessibilityIssue[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show in development
    if (process.env.NODE_ENV !== "development") {
      return;
    }

    const runAccessibilityChecks = () => {
      const newIssues: AccessibilityIssue[] = [];

      // Check for missing alt text on images
      const images = document.querySelectorAll("img");
      images.forEach((img, index) => {
        if (!img.alt && !img.getAttribute("aria-label")) {
          newIssues.push({
            type: "error",
            message: "Image missing alt text or aria-label",
            element: `img[${index}]`,
            selector: `img:nth-of-type(${index + 1})`,
          });
        }
      });

      // Check for proper heading hierarchy
      const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
      let previousLevel = 0;
      headings.forEach((heading, index) => {
        const level = parseInt(heading.tagName.charAt(1));
        if (level > previousLevel + 1) {
          newIssues.push({
            type: "warning",
            message: `Heading level skipped: h${previousLevel} → h${level}`,
            element: heading.tagName,
            selector: `${heading.tagName.toLowerCase()}:nth-of-type(${
              index + 1
            })`,
          });
        }
        previousLevel = level;
      });

      // Check for proper form labels
      const formControls = document.querySelectorAll("input, select, textarea");
      formControls.forEach((control, index) => {
        const id = control.getAttribute("id");
        const label = control.getAttribute("aria-label");
        const labelledBy = control.getAttribute("aria-labelledby");

        if (!id && !label && !labelledBy) {
          newIssues.push({
            type: "error",
            message:
              "Form control missing label, aria-label, or aria-labelledby",
            element: control.tagName.toLowerCase(),
            selector: `${control.tagName.toLowerCase()}:nth-of-type(${
              index + 1
            })`,
          });
        }
      });

      // Check for proper focus management
      const focusableElements = document.querySelectorAll(
        "a, button, input, select, textarea, [tabindex]"
      );
      focusableElements.forEach((element, index) => {
        const tabIndex = element.getAttribute("tabindex");
        if (tabIndex === "-1" && !element.getAttribute("aria-hidden")) {
          newIssues.push({
            type: "warning",
            message: 'Focusable element has tabindex="-1" but no aria-hidden',
            element: element.tagName.toLowerCase(),
            selector: `${element.tagName.toLowerCase()}:nth-of-type(${
              index + 1
            })`,
          });
        }
      });

      // Check for proper ARIA usage
      const ariaElements = document.querySelectorAll("[aria-*]");
      ariaElements.forEach((element, index) => {
        const ariaExpanded = element.getAttribute("aria-expanded");
        const ariaControls = element.getAttribute("aria-controls");

        if (ariaExpanded && !ariaControls) {
          newIssues.push({
            type: "warning",
            message: "Element has aria-expanded but no aria-controls",
            element: element.tagName.toLowerCase(),
            selector: `${element.tagName.toLowerCase()}:nth-of-type(${
              index + 1
            })`,
          });
        }
      });

      // Check for color contrast issues (basic check)
      const textElements = document.querySelectorAll(
        "p, span, div, h1, h2, h3, h4, h5, h6"
      );
      textElements.forEach((element, index) => {
        const style = window.getComputedStyle(element);
        const color = style.color;
        const backgroundColor = style.backgroundColor;

        if (color === backgroundColor || color === "transparent") {
          newIssues.push({
            type: "warning",
            message: "Potential color contrast issue detected",
            element: element.tagName.toLowerCase(),
            selector: `${element.tagName.toLowerCase()}:nth-of-type(${
              index + 1
            })`,
          });
        }
      });

      setIssues(newIssues);
    };

    // Run checks after a short delay to ensure DOM is ready
    const timer = setTimeout(runAccessibilityChecks, 1000);

    // Also run on route changes
    const observer = new MutationObserver(runAccessibilityChecks);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  // Only show in development
  if (process.env.NODE_ENV !== "development") {
    return null;
  }

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed bottom-4 right-4 z-50 rounded-full bg-ocean p-3 text-white shadow-lg hover:bg-ocean/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean focus-visible:ring-offset-2"
        aria-label="Toggle accessibility tester"
        title="Accessibility Tester (Dev Only)"
      >
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
      </button>

      {/* Issues Panel */}
      {isVisible && (
        <div className="fixed bottom-20 right-4 z-50 w-96 max-h-96 overflow-y-auto rounded-lg bg-white p-4 shadow-xl border border-neutral-200">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-neutral-900">
              Accessibility Issues ({issues.length})
            </h3>
            <button
              onClick={() => setIsVisible(false)}
              className="text-neutral-500 hover:text-neutral-700"
              aria-label="Close accessibility tester"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              </svg>
            </button>
          </div>

          {issues.length === 0 ? (
            <p className="text-green-600 text-sm">
              ✅ No accessibility issues found!
            </p>
          ) : (
            <div className="space-y-2">
              {issues.map((issue, index) => (
                <div
                  key={index}
                  className={`p-3 rounded border-l-4 text-sm ${
                    issue.type === "error"
                      ? "border-red-500 bg-red-50 text-red-800"
                      : issue.type === "warning"
                      ? "border-yellow-500 bg-yellow-50 text-yellow-800"
                      : "border-blue-500 bg-blue-50 text-blue-800"
                  }`}
                >
                  <div className="font-medium">
                    {issue.type === "error"
                      ? "🚨 Error"
                      : issue.type === "warning"
                      ? "⚠️ Warning"
                      : "ℹ️ Info"}
                  </div>
                  <p className="mt-1">{issue.message}</p>
                  {issue.element && (
                    <p className="mt-1 text-xs opacity-75">
                      Element: {issue.element}
                    </p>
                  )}
                  {issue.selector && (
                    <button
                      onClick={() => {
                        const element = document.querySelector(issue.selector!);
                        if (element) {
                          element.scrollIntoView({
                            behavior: "smooth",
                            block: "center",
                          });
                          element.classList.add(
                            "ring-2",
                            "ring-red-500",
                            "ring-offset-2"
                          );
                          setTimeout(() => {
                            element.classList.remove(
                              "ring-2",
                              "ring-red-500",
                              "ring-offset-2"
                            );
                          }, 3000);
                        }
                      }}
                      className="mt-1 text-xs underline hover:no-underline"
                    >
                      Highlight element
                    </button>
                  )}
                </div>
              ))}
            </div>
          )}

          <div className="mt-4 text-xs text-neutral-500">
            <p>
              This tool helps identify common accessibility issues during
              development.
            </p>
            <p>Always test with screen readers and keyboard navigation.</p>
          </div>
        </div>
      )}
    </>
  );
}
