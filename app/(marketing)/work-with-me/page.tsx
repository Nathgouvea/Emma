import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work With Me - Emma | Influencer Portfolio",
  description:
    "Collaborate with Emma for sponsored content, brand ambassadorships, travel & wellness content creation, and destination promotion. Creative storytelling that connects with your audience.",
  alternates: { canonical: "/work-with-me" },
  openGraph: {
    title: "Work With Me - Emma | Influencer Portfolio",
    description:
      "Collaborate with Emma for sponsored content, brand ambassadorships, travel & wellness content creation, and destination promotion.",
    type: "website",
  },
};

export default function WorkWithMePage() {
  return (
    <main id="main" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="mb-16 text-center">
        <h1 className="mb-6 text-4xl font-bold text-neutral-900 sm:text-5xl lg:text-6xl">
          Let's Create Something
          <span className="block text-ocean">Amazing Together</span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-neutral-600 sm:text-xl">
          I partner with brands and destinations that align with my values of
          adventure, wellness, and authentic storytelling. Let's craft content
          that resonates with your audience.
        </p>
      </section>

      {/* Collaboration Options */}
      <section className="mb-20">
        <h2 className="mb-12 text-center text-3xl font-bold text-neutral-900">
          Collaboration Options
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {/* Sponsored Instagram Content */}
          <div className="rounded-xl border border-neutral-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-coral text-white">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.012-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.058 1.644-.07 4.849-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4z" />
              </svg>
            </div>
            <h3 className="mb-3 text-xl font-semibold text-neutral-900">
              Sponsored Instagram Content
            </h3>
            <p className="mb-4 text-neutral-600">
              Authentic posts, reels, and stories that showcase your brand
              naturally within my lifestyle and travel content.
            </p>
            <ul className="space-y-2 text-sm text-neutral-600">
              <li>• Feed posts with strategic captions</li>
              <li>• Engaging reels and stories</li>
              <li>• Audience engagement and comments</li>
              <li>• Performance analytics and insights</li>
            </ul>
          </div>

          {/* Brand Ambassadorships */}
          <div className="rounded-xl border border-neutral-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-sunrise text-white">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
            <h3 className="mb-3 text-xl font-semibold text-neutral-900">
              Brand Ambassadorships
            </h3>
            <p className="mb-4 text-neutral-600">
              Long-term partnerships where I become a true advocate for your
              brand, integrating it seamlessly into my daily content.
            </p>
            <ul className="space-y-2 text-sm text-neutral-600">
              <li>• Consistent brand presence</li>
              <li>• Behind-the-scenes content</li>
              <li>• Product integration stories</li>
              <li>• Exclusive discount codes</li>
            </ul>
          </div>

          {/* Travel & Wellness Content */}
          <div className="rounded-xl border border-neutral-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-ocean text-white">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
            </div>
            <h3 className="mb-3 text-xl font-semibold text-neutral-900">
              Travel & Wellness Content
            </h3>
            <p className="mb-4 text-neutral-600">
              Captivating destination content that inspires wanderlust while
              promoting wellness, adventure, and mindful living.
            </p>
            <ul className="space-y-2 text-sm text-neutral-600">
              <li>• Destination guides and tips</li>
              <li>• Wellness retreat coverage</li>
              <li>• Adventure activity highlights</li>
              <li>• Local culture and experiences</li>
            </ul>
          </div>

          {/* Destination Promotion */}
          <div className="rounded-xl border border-neutral-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-sandy text-neutral-900">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14,6l-3.75,5.25L8,9l-6,8h22L14,6z" />
              </svg>
            </div>
            <h3 className="mb-3 text-xl font-semibold text-neutral-900">
              Destination Promotion
            </h3>
            <p className="mb-4 text-neutral-600">
              Showcase your location, hotel, or tourism experience through
              authentic storytelling and stunning visual content.
            </p>
            <ul className="space-y-2 text-sm text-neutral-600">
              <li>• Hotel and resort features</li>
              <li>• Local attraction highlights</li>
              <li>• Cultural experience stories</li>
              <li>• Travel itinerary creation</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Work With Me */}
      <section className="mb-20">
        <h2 className="mb-12 text-center text-3xl font-bold text-neutral-900">
          Why Work With Me
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-coral/10 text-coral">
              <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
            <h3 className="mb-2 text-lg font-semibold text-neutral-900">
              Authentic Voice
            </h3>
            <p className="text-neutral-600">
              I only partner with brands I genuinely believe in and use myself,
              ensuring authentic recommendations that my audience trusts.
            </p>
          </div>

          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-ocean/10 text-ocean">
              <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
            </div>
            <h3 className="mb-2 text-lg font-semibold text-neutral-900">
              Engaged Audience
            </h3>
            <p className="text-neutral-600">
              My community is highly engaged and values authentic content about
              travel, wellness, and mindful living.
            </p>
          </div>

          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-sunrise/10 text-sunrise">
              <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
            <h3 className="mb-2 text-lg font-semibold text-neutral-900">
              Creative Storytelling
            </h3>
            <p className="text-neutral-600">
              I bring a unique perspective from my Alaska roots, ballet
              background, and global adventures to every collaboration.
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="mb-20">
        <h2 className="mb-12 text-center text-3xl font-bold text-neutral-900">
          How We'll Work Together
        </h2>

        <div className="grid gap-8 md:grid-cols-4">
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-neutral-900 text-white text-lg font-bold">
              1
            </div>
            <h3 className="mb-2 font-semibold text-neutral-900">
              Discovery Call
            </h3>
            <p className="text-sm text-neutral-600">
              Let's discuss your goals and how we can create meaningful content
              together.
            </p>
          </div>

          <div className="text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-neutral-900 text-white text-lg font-bold">
              2
            </div>
            <h3 className="mb-2 font-semibold text-neutral-900">
              Content Planning
            </h3>
            <p className="text-sm text-neutral-600">
              We'll plan the perfect content strategy that aligns with both our
              visions.
            </p>
          </div>

          <div className="text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-neutral-900 text-white text-lg font-bold">
              3
            </div>
            <h3 className="mb-2 font-semibold text-neutral-900">
              Creation & Delivery
            </h3>
            <p className="text-sm text-neutral-600">
              I'll create authentic, engaging content that resonates with your
              audience.
            </p>
          </div>

          <div className="text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-neutral-900 text-white text-lg font-bold">
              4
            </div>
            <h3 className="mb-2 font-semibold text-neutral-900">
              Results & Optimization
            </h3>
            <p className="text-sm text-neutral-600">
              We'll analyze performance and optimize for even better results.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="rounded-2xl bg-gradient-to-br from-ocean to-coral p-12 text-center text-white">
        <h2 className="mb-4 text-3xl font-bold">
          Ready to Start Your Journey?
        </h2>
        <p className="mb-8 mx-auto max-w-2xl text-lg opacity-90">
          Let's create something beautiful together that inspires your audience
          and grows your brand.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3 font-semibold text-ocean transition-colors hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-ocean"
          >
            Get Started
          </a>
          <a
            href="mailto:hello@emma.com"
            className="inline-flex items-center justify-center rounded-lg border-2 border-white px-8 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-ocean focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-ocean"
          >
            Send Email
          </a>
        </div>
      </section>
    </main>
  );
}
