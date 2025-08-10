import Hero from "@/components/Hero";
import QuoteSlider from "@/components/QuoteSlider";

export default function Home() {
  return (
    <>
      <Hero />

      <main id="main-content" className="min-h-screen">
        {/* Featured Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-dancing-script text-dark mb-6">
                Welcome to my world
              </h2>
              <p className="text-xl text-dark/70 max-w-3xl mx-auto">
                I&apos;m Emma, a travel enthusiast, wellness advocate, and
                believer in the power of manifestation. My journey has taken me
                from the remote Alaskan wilderness to yoga retreats in Puerto
                Rico, and everywhere in between.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center p-6 bg-sandy-beige/30 rounded-2xl">
                <div className="text-3xl font-bold text-coral-pink mb-2">
                  50+
                </div>
                <div className="text-dark/70">Countries Explored</div>
              </div>
              <div className="text-center p-6 bg-sandy-beige/30 rounded-2xl">
                <div className="text-3xl font-bold text-ocean-blue mb-2">
                  100K+
                </div>
                <div className="text-dark/70">Community Members</div>
              </div>
              <div className="text-center p-6 bg-sandy-beige/30 rounded-2xl">
                <div className="text-3xl font-bold text-sunrise-gold mb-2">
                  200+
                </div>
                <div className="text-dark/70">Brand Collaborations</div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <a
                href="/about"
                className="inline-block bg-coral-pink text-white px-8 py-4 rounded-full font-medium text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Read My Story
              </a>
            </div>
          </div>
        </section>

        <QuoteSlider />

        {/* Latest Work Preview */}
        <section className="py-20 bg-sandy-beige/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-dancing-script text-dark mb-6">
                Recent Adventures
              </h2>
              <p className="text-xl text-dark/70 max-w-2xl mx-auto">
                Take a peek at my latest collaborations, travel moments, and
                wellness discoveries
              </p>
            </div>

            {/* Placeholder for portfolio grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden"
                >
                  <div className="h-64 bg-gradient-to-br from-coral-pink/20 to-ocean-blue/20 flex items-center justify-center">
                    <div className="text-dark/40 text-center">
                      <div className="text-4xl mb-2">📸</div>
                      <div className="text-sm">Portfolio Image {item}</div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-dark mb-2">
                      Adventure #{item}
                    </h3>
                    <p className="text-dark/60 text-sm">
                      A beautiful moment captured during my travels and
                      collaborations.
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <a
                href="/portfolio"
                className="inline-block border-2 border-coral-pink text-coral-pink px-8 py-4 rounded-full font-medium text-lg hover:bg-coral-pink hover:text-white transition-all duration-300"
              >
                View All Work
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
