"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Users,
  MapPin,
  Calendar,
  Heart,
  MessageCircle,
  Share2,
  TrendingUp,
  Globe,
  Star,
  Award,
} from "lucide-react";

// Audience stat type
interface AudienceStat {
  id: number;
  value: string;
  label: string;
  icon: React.ReactNode;
  color: string;
}

// Demographic type
interface Demographic {
  category: string;
  percentage: number;
  color: string;
}

// Brand testimonial type
interface BrandTestimonial {
  id: number;
  brand: string;
  logo: string;
  testimonial: string;
  contact: string;
  rating: number;
}

// Audience stats data
const audienceStats: AudienceStat[] = [
  {
    id: 1,
    value: "100K+",
    label: "Followers",
    icon: <Users size={32} />,
    color: "text-coral-pink",
  },
  {
    id: 2,
    value: "8.2%",
    label: "Engagement Rate",
    icon: <Heart size={32} />,
    color: "text-ocean-blue",
  },
  {
    id: 3,
    value: "2.1M",
    label: "Monthly Reach",
    icon: <TrendingUp size={32} />,
    color: "text-sunrise-gold",
  },
  {
    id: 4,
    value: "45K+",
    label: "Comments",
    icon: <MessageCircle size={32} />,
    color: "text-coral-pink",
  },
];

// Demographics data
const demographics: Demographic[] = [
  { category: "18-24", percentage: 35, color: "bg-coral-pink" },
  { category: "25-34", percentage: 45, color: "bg-ocean-blue" },
  { category: "35-44", percentage: 15, color: "bg-sunrise-gold" },
  { category: "45+", percentage: 5, color: "bg-sandy-beige" },
];

// Top locations data
const topLocations = [
  { location: "United States", percentage: 45 },
  { location: "Canada", percentage: 25 },
  { location: "United Kingdom", percentage: 15 },
  { location: "Australia", percentage: 10 },
  { location: "Other", percentage: 5 },
];

// Brand testimonials data
const brandTestimonials: BrandTestimonial[] = [
  {
    id: 1,
    brand: "Wellness Collective",
    logo: "/images/brands/wellness-collective.png",
    testimonial:
      "Emma's authentic approach to wellness content helped us connect with our audience on a deeper level. Her engagement rates are consistently above industry standards.",
    contact: "Sarah Chen, Marketing Director",
    rating: 5,
  },
  {
    id: 2,
    brand: "Adventure Gear Co.",
    logo: "/images/brands/adventure-gear.png",
    testimonial:
      "Working with Emma was a game-changer for our brand. Her travel content captured the spirit of adventure perfectly and drove real engagement and sales.",
    contact: "Marcus Rodriguez, CEO",
    rating: 5,
  },
  {
    id: 3,
    brand: "Mindful Living Institute",
    logo: "/images/brands/mindful-living.png",
    testimonial:
      "Emma's ability to translate complex wellness concepts into relatable content is remarkable. She truly understands our mission and audience.",
    contact: "Dr. Lisa Park, Founder",
    rating: 5,
  },
  {
    id: 4,
    brand: "Sustainable Fashion Co.",
    logo: "/images/brands/sustainable-fashion.png",
    testimonial:
      "Emma's commitment to authenticity and her engaged community made her the perfect partner for our sustainable fashion campaign.",
    contact: "Emma Thompson, Creative Director",
    rating: 5,
  },
];

export default function AudiencePage() {
  return (
    <>
      <Navigation />

      <main className="pt-20 min-h-screen">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-ocean-blue/10 via-white to-sunrise-gold/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1
              className="text-5xl lg:text-7xl font-dancing-script text-dark mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              My Community
            </motion.h1>
            <motion.p
              className="text-xl lg:text-2xl text-dark/70 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Meet the incredible people who make this journey meaningful.
              Together, we're building a community of adventure-seekers,
              wellness enthusiasts, and dream-chasers.
            </motion.p>
          </div>
        </section>

        {/* Key Stats */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.h2
                className="text-4xl lg:text-5xl font-dancing-script text-dark mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                Community Impact
              </motion.h2>
              <motion.p
                className="text-xl text-dark/70 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Real numbers that show the power of authentic connection and
                meaningful content.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {audienceStats.map((stat, index) => (
                <motion.div
                  key={stat.id}
                  className="text-center p-6 bg-sandy-beige/20 rounded-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`mb-4 flex justify-center ${stat.color}`}>
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-dark mb-2">
                    {stat.value}
                  </div>
                  <div className="text-dark/70">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Demographics */}
        <section className="py-20 bg-sandy-beige/20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl lg:text-5xl font-dancing-script text-dark mb-6">
                  Who Makes Up My Community?
                </h2>
                <p className="text-lg text-dark/70 leading-relaxed mb-8">
                  My audience is diverse, engaged, and passionate about living
                  life to the fullest. They're dreamers, doers, and believers in
                  the power of positive thinking.
                </p>

                <div className="space-y-4">
                  {demographics.map((demo, index) => (
                    <motion.div
                      key={demo.category}
                      className="flex items-center gap-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-20 text-right font-semibold text-dark">
                        {demo.category}
                      </div>
                      <div className="flex-1 bg-white rounded-full h-3 overflow-hidden">
                        <motion.div
                          className={`h-full ${demo.color}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${demo.percentage}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        />
                      </div>
                      <div className="w-16 text-left font-semibold text-dark">
                        {demo.percentage}%
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="bg-white rounded-2xl p-8"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-semibold text-dark mb-6 text-center">
                  Community Insights
                </h3>
                <div className="space-y-6">
                  <div className="text-center p-4 bg-sandy-beige/30 rounded-xl">
                    <div className="text-3xl font-bold text-coral-pink mb-2">
                      78%
                    </div>
                    <div className="text-dark/70">Female audience</div>
                  </div>
                  <div className="text-center p-4 bg-sandy-beige/30 rounded-xl">
                    <div className="text-3xl font-bold text-ocean-blue mb-2">
                      92%
                    </div>
                    <div className="text-dark/70">Interested in wellness</div>
                  </div>
                  <div className="text-center p-4 bg-sandy-beige/30 rounded-xl">
                    <div className="text-3xl font-bold text-sunrise-gold mb-2">
                      85%
                    </div>
                    <div className="text-dark/70">Travel enthusiasts</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Top Locations */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.h2
                className="text-4xl lg:text-5xl font-dancing-script text-dark mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                Global Reach
              </motion.h2>
              <motion.p
                className="text-xl text-dark/70 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                My community spans across continents, bringing together people
                from all walks of life.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {topLocations.map((location, index) => (
                <motion.div
                  key={location.location}
                  className="text-center p-6 bg-sandy-beige/20 rounded-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl mb-4">🌍</div>
                  <div className="text-2xl font-bold text-dark mb-2">
                    {location.percentage}%
                  </div>
                  <div className="text-dark/70 text-sm">
                    {location.location}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Engagement Metrics */}
        <section className="py-20 bg-gradient-to-br from-coral-pink/10 to-ocean-blue/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.h2
                className="text-4xl lg:text-5xl font-dancing-script text-dark mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                Engagement & Growth
              </motion.h2>
              <motion.p
                className="text-xl text-dark/70 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Consistent growth and engagement that demonstrates the strength
                of our community connection.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Average Likes per Post",
                  value: "8,500+",
                  change: "+15%",
                  trend: "up",
                  color: "text-coral-pink",
                },
                {
                  title: "Comments per Post",
                  value: "450+",
                  change: "+22%",
                  trend: "up",
                  color: "text-ocean-blue",
                },
                {
                  title: "Shares per Post",
                  value: "1,200+",
                  change: "+18%",
                  trend: "up",
                  color: "text-sunrise-gold",
                },
              ].map((metric, index) => (
                <motion.div
                  key={metric.title}
                  className="bg-white rounded-2xl p-8 text-center shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-lg font-semibold text-dark mb-4">
                    {metric.title}
                  </h3>
                  <div className={`text-4xl font-bold mb-2 ${metric.color}`}>
                    {metric.value}
                  </div>
                  <div className="text-green-600 font-medium">
                    {metric.change} from last month
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Brand Testimonials */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.h2
                className="text-4xl lg:text-5xl font-dancing-script text-dark mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                What Brands Say
              </motion.h2>
              <motion.p
                className="text-xl text-dark/70 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Real feedback from brands who've experienced the power of
                authentic influencer partnerships.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {brandTestimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  className="bg-sandy-beige/20 rounded-2xl p-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-coral-pink/20 to-ocean-blue/20 rounded-full flex items-center justify-center">
                      <div className="text-dark/40 text-lg font-semibold">
                        {testimonial.brand.charAt(0)}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-dark">
                        {testimonial.brand}
                      </h3>
                      <div className="flex items-center gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className="text-sunrise-gold fill-current"
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <blockquote className="text-dark/70 leading-relaxed mb-4 italic">
                    "{testimonial.testimonial}"
                  </blockquote>

                  <div className="text-sm text-dark/60 font-medium">
                    — {testimonial.contact}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-coral-pink to-ocean-blue text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2
              className="text-4xl lg:text-5xl font-dancing-script mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Ready to Reach My Community?
            </motion.h2>
            <motion.p
              className="text-xl mb-8 opacity-90"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Let's create authentic content that resonates with engaged
              audiences and drives real results.
            </motion.p>
            <motion.a
              href="/work-with-me"
              className="inline-block bg-white text-coral-pink px-8 py-4 rounded-full font-medium text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Let's Collaborate
            </motion.a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
