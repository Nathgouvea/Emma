import type { Metadata } from "next";
import InstagramFeed from "@/components/home/InstagramFeed";

export const metadata: Metadata = {
  title: "Contact - Emma | Influencer Portfolio",
  description:
    "Get in touch with Emma for collaborations, partnerships, speaking opportunities, and more. Let's create something amazing together.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact - Emma | Influencer Portfolio",
    description:
      "Get in touch with Emma for collaborations, partnerships, speaking opportunities, and more.",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <main id="main" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="mb-16 text-center">
        <h1 className="mb-6 text-4xl font-bold text-neutral-900 sm:text-5xl lg:text-6xl">
          Let's Connect
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-neutral-600 sm:text-xl">
          I'm always excited to hear about new opportunities, collaborations,
          and meaningful partnerships. Let's start a conversation!
        </p>
      </section>

      <div className="grid gap-16 lg:grid-cols-2">
        {/* Contact Form */}
        <section>
          <h2 className="mb-8 text-2xl font-bold text-neutral-900">
            Send Me a Message
          </h2>

          <form
            action="mailto:hello@emma.com?subject=Collaboration%20Inquiry"
            method="post"
            className="space-y-6"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-neutral-700 mb-2"
              >
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-neutral-900 placeholder-neutral-500 focus:border-ocean focus:outline-none focus:ring-2 focus:ring-ocean focus:ring-offset-2"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-neutral-700 mb-2"
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-neutral-900 placeholder-neutral-500 focus:border-ocean focus:outline-none focus:ring-2 focus:ring-ocean focus:ring-offset-2"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="brand"
                className="block text-sm font-medium text-neutral-700 mb-2"
              >
                Brand/Company
              </label>
              <input
                type="text"
                id="brand"
                name="brand"
                className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-neutral-900 placeholder-neutral-500 focus:border-ocean focus:outline-none focus:ring-2 focus:ring-ocean focus:ring-offset-2"
                placeholder="Your brand or company name"
              />
            </div>

            <div>
              <label
                htmlFor="collaboration-type"
                className="block text-sm font-medium text-neutral-700 mb-2"
              >
                Type of Collaboration
              </label>
              <select
                id="collaboration-type"
                name="collaboration-type"
                className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-neutral-900 focus:border-ocean focus:outline-none focus:ring-2 focus:ring-ocean focus:ring-offset-2"
              >
                <option value="">Select an option</option>
                <option value="sponsored-content">
                  Sponsored Instagram Content
                </option>
                <option value="brand-ambassador">Brand Ambassadorship</option>
                <option value="travel-wellness">
                  Travel & Wellness Content
                </option>
                <option value="destination-promotion">
                  Destination Promotion
                </option>
                <option value="speaking">Speaking Engagement</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-neutral-700 mb-2"
              >
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-neutral-900 placeholder-neutral-500 focus:border-ocean focus:outline-none focus:ring-2 focus:ring-ocean focus:ring-offset-2"
                placeholder="Tell me about your project, goals, and how we can work together..."
              />
            </div>

            {/* Honeypot */}
            <div className="sr-only" aria-hidden="true">
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-ocean px-8 py-3 font-semibold text-white transition-colors hover:bg-ocean/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean focus-visible:ring-offset-2"
            >
              Send Message
            </button>
          </form>

          <p className="mt-4 text-sm text-neutral-500">
            * Required fields. I'll get back to you within 24-48 hours.
          </p>
        </section>

        {/* Contact Info & Social */}
        <section>
          <h2 className="mb-8 text-2xl font-bold text-neutral-900">
            Other Ways to Connect
          </h2>
          {/* Direct Contact */}
          <div className="mb-8 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-ocean/10 text-ocean">
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-neutral-900">Email</p>
                <a
                  href="mailto:hello@emma.com"
                  className="text-ocean hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean focus-visible:ring-offset-2 rounded"
                >
                  hello@emma.com
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-coral/10 text-coral">
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-neutral-900">Location</p>
                <p className="text-neutral-600">Toronto, Canada</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sunrise/10 text-sunrise">
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-neutral-900">Response Time</p>
                <p className="text-neutral-600">24-48 hours</p>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="mb-8">
            <h3 className="mb-4 text-lg font-semibold text-neutral-900">
              Follow My Journey
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/_emma_jo/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-purple-600 text-white transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-offset-2"
                aria-label="Follow me on Instagram"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.012-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.058 1.644-.07 4.849-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4z" />
                </svg>
              </a>

              <a
                href="https://tiktok.com/@emma"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
                aria-label="Follow me on TikTok"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </a>

              <a
                href="https://youtube.com/@emma"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600 text-white transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2"
                aria-label="Subscribe to my YouTube channel"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Instagram Feed Preview */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-neutral-900">
              Latest from Instagram
            </h3>
            <div className="grid grid-cols-3 gap-2">
              {/* Placeholder Instagram feed - in real implementation, this would be populated from Instagram API */}
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="aspect-square rounded-lg bg-gradient-to-br from-coral/20 to-ocean/20 border border-neutral-200 flex items-center justify-center"
                >
                  <svg
                    className="h-8 w-8 text-neutral-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.012-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.058 1.644-.07 4.849-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4z" />
                  </svg>
                </div>
              ))}
            </div>
            <p className="mt-2 text-sm text-neutral-500">
              Follow me on Instagram for daily inspiration and behind-the-scenes
              content!
            </p>
          </div>
        </section>
      </div>

      {/* Instagram feed */}
      <InstagramFeed />
    </main>
  );
}
