"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Filter, ExternalLink, Heart, MapPin, Camera } from "lucide-react";

type PortfolioCategory = "all" | "travel" | "lifestyle" | "wellness";

interface PortfolioItem {
  id: number;
  title: string;
  category: Exclude<PortfolioCategory, "all">;
  description: string;
  location: string;
  image: string;
  featured: boolean;
  tags: string[];
}

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<PortfolioCategory>("all");
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filters = [
    { id: "all" as const, label: "All Work", count: 12 },
    { id: "travel" as const, label: "Travel", count: 5 },
    { id: "lifestyle" as const, label: "Lifestyle", count: 4 },
    { id: "wellness" as const, label: "Wellness", count: 3 },
  ];

  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: "Puerto Rican Sunset",
      category: "travel",
      description:
        "Capturing the golden hour magic during my yoga retreat in Puerto Rico",
      location: "Puerto Rico",
      image: "🌅",
      featured: true,
      tags: ["Travel", "Sunset", "Yoga"],
    },
    {
      id: 2,
      title: "Ballet in the Mountains",
      category: "wellness",
      description:
        "Finding grace and movement in the heart of the Alaskan wilderness",
      location: "Alaska",
      image: "🏔️",
      featured: true,
      tags: ["Wellness", "Movement", "Nature"],
    },
    {
      id: 3,
      title: "Sayulita Beach Vibes",
      category: "lifestyle",
      description:
        "Morning coffee and ocean views in this vibrant Mexican coastal town",
      location: "Sayulita, Mexico",
      image: "🏖️",
      featured: false,
      tags: ["Lifestyle", "Beach", "Mexico"],
    },
    {
      id: 4,
      title: "Toronto City Lights",
      category: "lifestyle",
      description: "Urban adventures and city exploration in my current home",
      location: "Toronto, Canada",
      image: "🏙️",
      featured: false,
      tags: ["Lifestyle", "City", "Urban"],
    },
    {
      id: 5,
      title: "Yoga Flow",
      category: "wellness",
      description:
        "Mindful movement and meditation practice in natural settings",
      location: "Various Locations",
      image: "🧘‍♀️",
      featured: true,
      tags: ["Wellness", "Yoga", "Mindfulness"],
    },
    {
      id: 6,
      title: "Alaska Wilderness",
      category: "travel",
      description: "Exploring the untouched beauty of my childhood home",
      location: "Alaska",
      image: "🌲",
      featured: false,
      tags: ["Travel", "Wilderness", "Alaska"],
    },
    {
      id: 7,
      title: "Brand Collaboration",
      category: "lifestyle",
      description:
        "Creative partnership showcasing authentic lifestyle content",
      location: "Various Locations",
      image: "✨",
      featured: false,
      tags: ["Lifestyle", "Brand", "Collaboration"],
    },
    {
      id: 8,
      title: "Coastal Adventures",
      category: "travel",
      description:
        "Discovering hidden beaches and coastal treasures around the world",
      location: "Global",
      image: "🌊",
      featured: true,
      tags: ["Travel", "Coastal", "Adventure"],
    },
    {
      id: 9,
      title: "Wellness Retreat",
      category: "wellness",
      description:
        "Deepening my practice and sharing wellness wisdom with others",
      location: "Various Locations",
      image: "🌸",
      featured: false,
      tags: ["Wellness", "Retreat", "Community"],
    },
    {
      id: 10,
      title: "Cultural Immersion",
      category: "travel",
      description: "Learning from local communities and embracing new cultures",
      location: "Global",
      image: "🌍",
      featured: false,
      tags: ["Travel", "Culture", "Community"],
    },
    {
      id: 11,
      title: "Movement & Dance",
      category: "wellness",
      description: "Expressing joy and freedom through dance and movement",
      location: "Various Locations",
      image: "💃",
      featured: false,
      tags: ["Wellness", "Dance", "Movement"],
    },
    {
      id: 12,
      title: "Lifestyle Photography",
      category: "lifestyle",
      description: "Capturing authentic moments of daily life and adventure",
      location: "Various Locations",
      image: "📸",
      featured: false,
      tags: ["Lifestyle", "Photography", "Authentic"],
    },
  ];

  const filteredItems =
    activeFilter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  const handleFilterChange = (filterId: PortfolioCategory) => {
    setActiveFilter(filterId);
  };

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
                My Portfolio
              </h1>
              <p className="text-xl text-dark/70 max-w-3xl mx-auto">
                A collection of my favorite moments, collaborations, and
                adventures from around the world. Each piece tells a story of
                connection, discovery, and authentic living.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-12 bg-white border-b border-sandy-beige/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {filters.map((filter) => (
                <motion.button
                  key={filter.id}
                  onClick={() => handleFilterChange(filter.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                    activeFilter === filter.id
                      ? "bg-coral-pink text-white shadow-lg"
                      : "bg-sandy-beige/30 text-dark hover:bg-sandy-beige/50"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Filter size={16} />
                  {filter.label}
                  <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                    {filter.count}
                  </span>
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-20 bg-sandy-beige/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFilter}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              >
                {filteredItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`group cursor-pointer ${
                      item.featured ? "md:col-span-2 md:row-span-2" : ""
                    }`}
                    onClick={() => setSelectedItem(item)}
                  >
                    <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                      {/* Image Placeholder */}
                      <div
                        className={`relative overflow-hidden ${
                          item.featured ? "h-80" : "h-64"
                        }`}
                      >
                        <div className="w-full h-full bg-gradient-to-br from-sandy-beige/30 to-ocean-blue/20 flex items-center justify-center">
                          <div className="text-center text-dark/40">
                            <div
                              className={`${
                                item.featured ? "text-8xl" : "text-6xl"
                              } mb-2`}
                            >
                              {item.image}
                            </div>
                            <div className="text-sm">{item.title}</div>
                          </div>
                        </div>

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="text-center text-white">
                            <ExternalLink size={32} />
                            <p className="mt-2 text-sm">Click to view</p>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <div className="flex items-start justify-between mb-3">
                          <h3
                            className={`font-semibold text-dark ${
                              item.featured ? "text-xl" : "text-lg"
                            }`}
                          >
                            {item.title}
                          </h3>
                          {item.featured && (
                            <span className="bg-coral-pink text-white text-xs px-2 py-1 rounded-full">
                              Featured
                            </span>
                          )}
                        </div>

                        <p
                          className={`text-dark/70 mb-4 ${
                            item.featured ? "text-base" : "text-sm"
                          } leading-relaxed`}
                        >
                          {item.description}
                        </p>

                        <div className="flex items-center gap-2 mb-4">
                          <MapPin size={16} className="text-coral-pink" />
                          <span className="text-sm text-dark/60">
                            {item.location}
                          </span>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                          {item.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="bg-sandy-beige/30 text-dark/70 text-xs px-2 py-1 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Empty State */}
            {filteredItems.length === 0 && (
              <motion.div
                className="text-center py-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Camera size={64} className="text-dark/30 mx-auto mb-4" />
                <h3 className="text-xl font-medium text-dark/50 mb-2">
                  No items found
                </h3>
                <p className="text-dark/40">
                  Try adjusting your filter selection
                </p>
              </motion.div>
            )}
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
                Ready to Create Together?
              </h2>
              <p className="text-lg text-dark/70 mb-8 max-w-2xl mx-auto">
                Let's collaborate on something beautiful. Whether it's travel
                content, wellness campaigns, or lifestyle photography, I'm here
                to bring your vision to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/work-with-me"
                  className="bg-coral-pink text-white px-8 py-4 rounded-full font-medium text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  Let's Collaborate
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

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-semibold text-dark">
                    {selectedItem.title}
                  </h2>
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="text-dark/60 hover:text-dark"
                  >
                    ✕
                  </button>
                </div>

                <div className="bg-gradient-to-br from-sandy-beige/30 to-ocean-blue/20 rounded-xl p-8 mb-6 flex items-center justify-center">
                  <div className="text-center text-dark/40">
                    <div className="text-8xl mb-4">{selectedItem.image}</div>
                    <div className="text-sm">Full-size image would go here</div>
                  </div>
                </div>

                <p className="text-dark/70 mb-4 leading-relaxed">
                  {selectedItem.description}
                </p>

                <div className="flex items-center gap-2 mb-4">
                  <MapPin size={16} className="text-coral-pink" />
                  <span className="text-sm text-dark/60">
                    {selectedItem.location}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {selectedItem.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-sandy-beige/30 text-dark/70 text-xs px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
