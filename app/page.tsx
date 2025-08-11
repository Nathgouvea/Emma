import Hero from "@/components/home/Hero";

export default function HomePage() {
  return (
    <main id="main" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <Hero />
      <div
        className="parallax-bg my-12 rounded-lg border border-neutral-200 min-h-[40vh]"
        style={{
          backgroundImage: "url(/images/screenshot-2025-08-10-17-28-12.png)",
        }}
        aria-hidden
      />
      <section id="highlights" className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Highlights
          </h2>
          <p className="mt-4 text-neutral-600">
            A few featured moments across travel, lifestyle, and mindset.
          </p>
        </div>
      </section>
    </main>
  );
}
