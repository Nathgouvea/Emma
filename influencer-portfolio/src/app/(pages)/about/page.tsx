'use client';

import { motion } from "framer-motion";
import { Heart, MapPin, Flower, Dog, Star, Compass } from "lucide-react";

export default function About() {
  return (
    <>
      <main className="pt-20 min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-sandy-beige/30 via-white to-ocean-blue/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-6xl font-dancing-script text-dark mb-6">
                My Story
              </h1>
              <p className="text-xl text-dark/70 max-w-3xl mx-auto">
                From the remote Alaskan wilderness to Puerto Rican yoga retreats, 
                discover the journey that shaped who I am today.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Alaska Roots */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <MapPin className="text-coral-pink" size={24} />
                  <h2 className="text-3xl lg:text-4xl font-dancing-script text-dark">
                    Alaska Roots
                  </h2>
                </div>
                <p className="text-lg text-dark/70 mb-6 leading-relaxed">
                  I grew up on a remote Alaskan island, the closest US point to Russia. 
                  Surrounded by breathtaking wilderness, I learned to find beauty in the 
                  simplest moments and developed a deep connection with nature.
                </p>
                <p className="text-lg text-dark/70 leading-relaxed">
                  The isolation taught me resilience and the importance of community. 
                  Every sunrise over the snow-capped mountains reminded me that adventure 
                  was always just outside my door.
                </p>
              </motion.div>
              
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-br from-sandy-beige/30 to-ocean-blue/20 rounded-3xl p-8 h-80 flex items-center justify-center">
                  <div className="text-center text-dark/40">
                    <div className="text-6xl mb-4">🏔️</div>
                    <div className="text-sm">Alaska Wilderness Photo</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Ballet & Movement */}
        <section className="py-20 bg-sandy-beige/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                className="relative order-2 lg:order-1"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-br from-coral-pink/20 to-sunrise-gold/20 rounded-3xl p-8 h-80 flex items-center justify-center">
                  <div className="text-center text-dark/40">
                    <div className="text-6xl mb-4">💃</div>
                    <div className="text-sm">Ballet & Dance Photo</div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                className="order-1 lg:order-2"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <Star className="text-sunrise-gold" size={24} />
                  <h2 className="text-3xl lg:text-4xl font-dancing-script text-dark">
                    Ballet & Movement
                  </h2>
                </div>
                <p className="text-lg text-dark/70 mb-6 leading-relaxed">
                  My ballet background instilled in me a deep appreciation for grace, 
                  discipline, and the power of movement. Dance became my first language 
                  of self-expression, teaching me to communicate emotions through motion.
                </p>
                <p className="text-lg text-dark/70 leading-relaxed">
                  This foundation in movement would later inspire my yoga practice and 
                  influence how I approach wellness and mindfulness in my daily life.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Yoga Journey */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <Flower className="text-ocean-blue" size={24} />
                  <h2 className="text-3xl lg:text-4xl font-dancing-script text-dark">
                    Puerto Rican Yoga Journey
                  </h2>
                </div>
                <p className="text-lg text-dark/70 mb-6 leading-relaxed">
                  In Puerto Rico, I completed a transformative yoga course that deepened 
                  my understanding of mind-body connection. The island's natural beauty 
                  and spiritual energy provided the perfect backdrop for this journey.
                </p>
                <p className="text-lg text-dark/70 leading-relaxed">
                  This experience taught me that wellness isn't just about physical 
                  movement—it's about finding balance, inner peace, and connecting 
                  with the world around us.
                </p>
              </motion.div>
              
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-br from-ocean-blue/20 to-sandy-beige/30 rounded-3xl p-8 h-80 flex items-center justify-center">
                  <div className="text-center text-dark/40">
                    <div className="text-6xl mb-4">🧘‍♀️</div>
                    <div className="text-sm">Puerto Rico Yoga Photo</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Dog Rescue Story */}
        <section className="py-20 bg-sandy-beige/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                className="relative order-2 lg:order-1"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-br from-sunrise-gold/20 to-coral-pink/20 rounded-3xl p-8 h-80 flex items-center justify-center">
                  <div className="text-center text-dark/40">
                    <div className="text-6xl mb-4">🐕</div>
                    <div className="text-sm">Rescued Dog Photo</div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                className="order-1 lg:order-2"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <Heart className="text-coral-pink" size={24} />
                  <h2 className="text-3xl lg:text-4xl font-dancing-script text-dark">
                    A Heart in Sayulita
                  </h2>
                </div>
                <p className="text-lg text-dark/70 mb-6 leading-relaxed">
                  In the vibrant coastal town of Sayulita, Mexico, I rescued a dog who 
                  would become one of my greatest teachers. This experience reminded me 
                  of the unconditional love and joy that animals bring to our lives.
                </p>
                <p className="text-lg text-dark/70 leading-relaxed">
                  It also reinforced my belief in the power of compassion and the 
                  importance of giving back to the communities we visit during our travels.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-20 bg-gradient-to-br from-ocean-blue/10 to-sandy-beige/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center mb-6">
                <Compass className="text-ocean-blue" size={48} />
              </div>
              <h2 className="text-4xl lg:text-5xl font-dancing-script text-dark mb-6">
                My Philosophy
              </h2>
              <p className="text-xl text-dark/70 max-w-3xl mx-auto">
                The principles that guide my journey and shape my approach to life
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Law of Attraction",
                  description: "I believe in the power of positive thinking and manifestation. What we focus on expands, and by aligning our thoughts with our desires, we can create the life we envision.",
                  icon: "✨"
                },
                {
                  title: "Mindset Growth",
                  description: "Continuous personal development is key to living a fulfilling life. I'm inspired by thought leaders like Bob Proctor and the principles of Psycho-Cybernetics.",
                  icon: "🌱"
                },
                {
                  title: "Adventure & Discovery",
                  description: "Life is meant to be explored. Every new place, person, and experience teaches us something valuable about ourselves and the world around us.",
                  icon: "🗺️"
                }
              ].map((principle, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl mb-4 text-center">{principle.icon}</div>
                  <h3 className="text-xl font-semibold text-dark mb-4 text-center">
                    {principle.title}
                  </h3>
                  <p className="text-dark/70 text-center leading-relaxed">
                    {principle.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-dancing-script text-dark mb-6">
                Ready to Connect?
              </h2>
              <p className="text-lg text-dark/70 mb-8 max-w-2xl mx-auto">
                Whether you're interested in collaboration, want to share your own story, 
                or just want to say hello, I'd love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/work-with-me"
                  className="bg-coral-pink text-white px-8 py-4 rounded-full font-medium text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  Let's Work Together
                </a>
                <a
                  href="/contact"
                  className="border-2 border-coral-pink text-coral-pink px-8 py-4 rounded-full font-medium text-lg hover:bg-coral-pink hover:text-white transition-all duration-300"
                >
                  Get in Touch
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
