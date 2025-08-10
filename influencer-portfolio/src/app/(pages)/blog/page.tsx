"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  Clock,
  Heart,
  MessageCircle,
  ArrowRight,
  Filter,
  Search,
  BookOpen,
  Heart as HeartIcon,
  MapPin,
  Users,
} from "lucide-react";

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "all", name: "All Posts", count: 24 },
    { id: "travel", name: "Travel Diaries", count: 8 },
    { id: "manifestation", name: "Manifestation & Mindset", count: 6 },
    { id: "wellness", name: "Wellness & Movement", count: 5 },
    { id: "behind-scenes", name: "Behind-the-Scenes", count: 5 },
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Finding Magic in the Alaskan Wilderness",
      excerpt:
        "Returning to my roots for a winter expedition reminded me of the raw beauty and resilience that shaped who I am today. Here's what the wilderness taught me about life and manifestation.",
      category: "travel",
      date: "March 15, 2024",
      readTime: "8 min read",
      image: "/api/placeholder/600/400",
      tags: ["Alaska", "Wilderness", "Adventure", "Roots"],
      likes: 342,
      comments: 28,
      featured: true,
    },
    {
      id: 2,
      title: "The Power of Morning Rituals: How I Start Each Day",
      excerpt:
        "My morning routine has evolved over the years, but one thing remains constant: the intention behind each action. Here's how I create space for magic every morning.",
      category: "wellness",
      date: "March 12, 2024",
      readTime: "6 min read",
      image: "/api/placeholder/600/400",
      tags: ["Morning Routine", "Wellness", "Mindfulness", "Rituals"],
      likes: 289,
      comments: 31,
      featured: false,
    },
    {
      id: 3,
      title: "Manifesting My Dream Life: Lessons from Bob Proctor",
      excerpt:
        "The teachings of Bob Proctor transformed my understanding of manifestation. Here are the key principles that helped me create the life I always dreamed of.",
      category: "manifestation",
      date: "March 10, 2024",
      readTime: "10 min read",
      image: "/api/placeholder/600/400",
      tags: ["Manifestation", "Bob Proctor", "Mindset", "Law of Attraction"],
      likes: 456,
      comments: 42,
      featured: true,
    },
    {
      id: 4,
      title: "Behind the Scenes: Creating Content in Puerto Rico",
      excerpt:
        "Ever wonder what goes into creating those perfect Instagram moments? Here's the real story behind my Puerto Rico yoga retreat content and the challenges we don't always share.",
      category: "behind-scenes",
      date: "March 8, 2024",
      readTime: "7 min read",
      image: "/api/placeholder/600/400",
      tags: ["Content Creation", "Puerto Rico", "Behind the Scenes", "Yoga"],
      likes: 234,
      comments: 19,
      featured: false,
    },
    {
      id: 5,
      title: "Ballet to Wellness: How Movement Arts Shape My Practice",
      excerpt:
        "My ballet background influences everything I do, from how I approach yoga to how I move through life. Here's the connection between discipline and freedom.",
      category: "wellness",
      date: "March 5, 2024",
      readTime: "9 min read",
      image: "/api/placeholder/600/400",
      tags: ["Ballet", "Movement", "Wellness", "Discipline"],
      likes: 312,
      comments: 25,
      featured: false,
    },
    {
      id: 6,
      title: "Sayulita's Hidden Gems: Beyond the Tourist Trail",
      excerpt:
        "Discover the authentic side of Sayulita that most visitors never see. From secret beaches to local eateries, here's my guide to experiencing the real Mexico.",
      category: "travel",
      date: "March 3, 2024",
      readTime: "12 min read",
      image: "/api/placeholder/600/400",
      tags: ["Sayulita", "Mexico", "Hidden Gems", "Local Experience"],
      likes: 378,
      comments: 33,
      featured: false,
    },
    {
      id: 7,
      title: "The Science Behind Manifestation: What Research Says",
      excerpt:
        "Is manifestation just wishful thinking, or is there actual science behind it? Let's explore the research and how it connects to our daily practices.",
      category: "manifestation",
      date: "February 28, 2024",
      readTime: "11 min read",
      image: "/api/placeholder/600/400",
      tags: ["Science", "Manifestation", "Research", "Psychology"],
      likes: 423,
      comments: 38,
      featured: false,
    },
    {
      id: 8,
      title: "Building a Community: The Real Work Behind 100K Followers",
      excerpt:
        "Growing an engaged community isn't about numbers—it's about connection. Here's what I've learned about building meaningful relationships with my audience.",
      category: "behind-scenes",
      date: "February 25, 2024",
      readTime: "8 min read",
      image: "/api/placeholder/600/400",
      tags: ["Community", "Social Media", "Connection", "Growth"],
      likes: 298,
      comments: 26,
      featured: false,
    },
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      activeCategory === "all" || post.category === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter((post) => post.featured);
  const regularPosts = filteredPosts.filter((post) => !post.featured);

  return (
    <>
      <Navigation />

      <main className="pt-20 min-h-screen">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-sandy-beige via-white to-ocean-blue/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1
              className="text-5xl lg:text-7xl font-dancing-script text-dark mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              My Journal
            </motion.h1>
            <motion.p
              className="text-xl lg:text-2xl text-dark/70 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Stories, insights, and adventures from my journey. Here's where I
              share the real moments behind the perfectly curated feed.
            </motion.p>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 bg-white border-b border-sandy-beige">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search Bar */}
              <div className="relative w-full lg:w-96">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-dark/40 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search posts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-sandy-beige rounded-full focus:ring-2 focus:ring-coral-pink focus:border-transparent transition-all duration-300"
                />
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap items-center justify-center gap-3">
                {categories.map((category) => (
                  <motion.button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-4 py-2 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                      activeCategory === category.id
                        ? "bg-coral-pink text-white shadow-lg"
                        : "bg-sandy-beige/50 text-dark hover:bg-sandy-beige"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Filter size={16} />
                    {category.name}
                    <span className="text-xs opacity-75">
                      ({category.count})
                    </span>
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="py-20 bg-sandy-beige/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.h2
                className="text-3xl lg:text-4xl font-dancing-script text-dark mb-12 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                Featured Stories
              </motion.h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    {/* Image Placeholder */}
                    <div className="relative h-64 bg-gradient-to-br from-coral-pink/20 to-ocean-blue/20 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center text-dark/40">
                          <div className="text-4xl mb-2">📸</div>
                          <div className="text-sm">{post.title}</div>
                        </div>
                      </div>

                      {/* Featured Badge */}
                      <div className="absolute top-4 left-4 bg-coral-pink text-white px-3 py-1 rounded-full text-xs font-medium">
                        Featured
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-dark/50 mb-3">
                        <span className="px-3 py-1 bg-sandy-beige/50 rounded-full">
                          {
                            categories.find((cat) => cat.id === post.category)
                              ?.name
                          }
                        </span>
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          {post.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={14} />
                          {post.readTime}
                        </div>
                      </div>

                      <h3 className="text-xl font-semibold text-dark mb-3 leading-tight">
                        {post.title}
                      </h3>

                      <p className="text-dark/70 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-4 text-sm text-dark/50">
                          <div className="flex items-center gap-1">
                            <Heart size={16} />
                            {post.likes}
                          </div>
                          <div className="flex items-center gap-1">
                            <MessageCircle size={16} />
                            {post.comments}
                          </div>
                        </div>

                        <a
                          href={`/blog/${post.id}`}
                          className="text-coral-pink hover:text-coral-pink/80 font-medium text-sm flex items-center gap-1 group"
                        >
                          Read More
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </a>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-sandy-beige/50 text-dark/70 text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Regular Posts */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              className="text-3xl lg:text-4xl font-dancing-script text-dark mb-12 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Latest Adventures
            </motion.h2>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory + searchQuery}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {regularPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                    whileHover={{ y: -5 }}
                  >
                    {/* Image Placeholder */}
                    <div className="relative h-48 bg-gradient-to-br from-coral-pink/20 to-ocean-blue/20 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center text-dark/40">
                          <div className="text-3xl mb-1">📸</div>
                          <div className="text-xs">{post.title}</div>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-dark/50 mb-3">
                        <span className="px-2 py-1 bg-sandy-beige/50 rounded-full text-xs">
                          {
                            categories.find((cat) => cat.id === post.category)
                              ?.name
                          }
                        </span>
                        <div className="flex items-center gap-1">
                          <Calendar size={12} />
                          {post.date}
                        </div>
                      </div>

                      <h3 className="text-lg font-semibold text-dark mb-3 leading-tight line-clamp-2">
                        {post.title}
                      </h3>

                      <p className="text-dark/70 mb-4 line-clamp-3 text-sm">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 text-xs text-dark/50">
                          <div className="flex items-center gap-1">
                            <Clock size={12} />
                            {post.readTime}
                          </div>
                          <div className="flex items-center gap-1">
                            <Heart size={12} />
                            {post.likes}
                          </div>
                        </div>

                        <a
                          href={`/blog/${post.id}`}
                          className="text-coral-pink hover:text-coral-pink/80 font-medium text-sm flex items-center gap-1 group"
                        >
                          Read More
                          <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
                        </a>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Empty State */}
            {regularPosts.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-semibold text-dark mb-2">
                  No posts found
                </h3>
                <p className="text-dark/60">
                  Try adjusting your search or filters to see more content.
                </p>
              </motion.div>
            )}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-gradient-to-r from-coral-pink to-ocean-blue text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2
              className="text-4xl lg:text-5xl font-dancing-script mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Stay Connected
            </motion.h2>
            <motion.p
              className="text-xl mb-8 opacity-90"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Get my latest stories, wellness tips, and adventure updates
              delivered to your inbox.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full text-dark focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="bg-white text-coral-pink px-8 py-4 rounded-full font-medium hover:bg-white/90 transition-colors duration-300">
                Subscribe
              </button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
