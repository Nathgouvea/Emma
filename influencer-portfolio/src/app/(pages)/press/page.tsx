'use client';

import { motion } from "framer-motion";
import {
  Award,
  Star,
  ExternalLink,
  Calendar,
  Globe,
  TrendingUp,
  Heart,
  Users,
  Camera,
  Play,
} from "lucide-react";

// Press feature type
interface PressFeature {
  id: number;
  title: string;
  publication: string;
  date: string;
  excerpt: string;
  link: string;
  category: "Interview" | "Feature" | "Review" | "Collaboration";
  featured: boolean;
}

// Brand collaboration type
interface BrandCollaboration {
  id: number;
  name: string;
  logo: string;
  description: string;
  year: string;
  category: string;
}

// Press features data
const pressFeatures: PressFeature[] = [
  {
    id: 1,
    title: "The Rise of Authentic Influencer Marketing",
    publication: "Digital Marketing Today",
    date: "March 2024",
    excerpt:
      "How Emma's genuine approach to content creation is reshaping the influencer landscape and driving real engagement.",
    link: "#",
    category: "Feature",
    featured: true,
  },
  {
    id: 2,
    title: "From Alaska to Instagram: A Journey of Authenticity",
    publication: "Travel & Lifestyle Magazine",
    date: "February 2024",
    excerpt:
      "An in-depth look at how Emma's unique background and authentic storytelling approach has built a community of 100K+ engaged followers.",
    link: "#",
    category: "Interview",
    featured: true,
  },
  {
    id: 3,
    title: "Wellness Influencers Who Actually Practice What They Preach",
    publication: "Mindful Living",
    date: "January 2024",
    excerpt:
      "Emma's commitment to genuine wellness practices and her ability to inspire real lifestyle changes among her audience.",
    link: "#",
    category: "Review",
    featured: false,
  },
  {
    id: 4,
    title: "The Power of Community Building in the Digital Age",
    publication: "Social Media Insights",
    date: "December 2023",
    excerpt:
      "How Emma has successfully built and maintained an engaged community through authentic content and meaningful connections.",
    link: "#",
    category: "Feature",
    featured: false,
  },
  {
    id: 5,
    title:
      "Influencer Marketing Success Stories: Real Results from Real People",
    publication: "Marketing Weekly",
    date: "November 2023",
    excerpt:
      "Case study on Emma's successful brand partnerships and the measurable impact on client campaigns.",
    link: "#",
    category: "Collaboration",
    featured: false,
  },
  {
    id: 6,
    title: "Ballet Background to Wellness Advocate: The Evolution of Movement",
    publication: "Dance & Wellness Journal",
    date: "October 2023",
    excerpt:
      "Exploring how Emma's classical dance training influences her approach to wellness content and movement practices.",
    link: "#",
    category: "Feature",
    featured: false,
  },
];

// Brand collaborations data
const brandCollaborations: BrandCollaboration[] = [
  {
    id: 1,
    name: "Wellness Collective",
    logo: "/images/brands/wellness-collective.png",
    description: "Sustainable wellness products and mindful living",
    year: "2024",
    category: "Wellness",
  },
  {
    id: 2,
    name: "Adventure Gear Co.",
    logo: "/images/brands/adventure-gear.png",
    description: "Premium outdoor equipment and travel essentials",
    year: "2024",
    category: "Travel",
  },
  {
    id: 3,
    name: "Mindful Living Institute",
    logo: "/images/brands/mindful-living.png",
    description: "Wellness education and mindfulness training",
    year: "2023",
    category: "Education",
  },
  {
    id: 4,
    name: "Sustainable Fashion Co.",
    logo: "/images/brands/sustainable-fashion.png",
    description: "Eco-friendly clothing and accessories",
    year: "2023",
    category: "Fashion",
  },
  {
    id: 5,
    name: "Yoga Retreats International",
    logo: "/images/brands/yoga-retreats.png",
    description: "Luxury wellness retreats worldwide",
    year: "2023",
    category: "Wellness",
  },
  {
    id: 6,
    name: "Travel Photography Magazine",
    logo: "/images/brands/travel-photography.png",
    description: "Premium travel and lifestyle photography",
    year: "2023",
    category: "Media",
  },
];

// Awards and recognition data
const awards = [
  {
    title: "Top Wellness Influencer 2024",
    organization: "Digital Wellness Awards",
    description:
      "Recognized for authentic wellness content and community engagement",
  },
  {
    title: "Best Travel Content Creator",
    organization: "Travel Media Association",
    description:
      "Awarded for exceptional storytelling and destination coverage",
  },
  {
    title: "Community Builder of the Year",
    organization: "Social Media Excellence",
    description:
      "Honored for building meaningful connections and engaged communities",
  },
];

export default function PressPage() {
  return (
    <>
      <main className="pt-20 min-h-screen">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-sunrise-gold/10 via-white to-coral-pink/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1
              className="text-5xl lg:text-7xl font-dancing-script text-dark mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Press & Features
            </motion.h1>
            <motion.p
              className="text-xl lg:text-2xl text-dark/70 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Media coverage, brand collaborations, and recognition for my work
              in the influencer space.
            </motion.p>
          </div>
        </section>

        {/* Awards & Recognition */}
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
                Awards & Recognition
              </motion.h2>
              <motion.p
                className="text-xl text-dark/70 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Honored to be recognized for my contributions to authentic
                content creation and community building.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {awards.map((award, index) => (
                <motion.div
                  key={award.title}
                  className="text-center p-8 bg-gradient-to-br from-sandy-beige/30 to-ocean-blue/10 rounded-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-coral-pink to-sunrise-gold rounded-full flex items-center justify-center mx-auto mb-6">
                    <Award size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-dark mb-3">
                    {award.title}
                  </h3>
                  <p className="text-coral-pink font-medium mb-3">
                    {award.organization}
                  </p>
                  <p className="text-dark/70 text-sm leading-relaxed">
                    {award.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Press */}
        <section className="py-20 bg-sandy-beige/20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.h2
                className="text-4xl lg:text-5xl font-dancing-script text-dark mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                Featured Press
              </motion.h2>
              <motion.p
                className="text-xl text-dark/70 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Recent media coverage highlighting my work, philosophy, and
                impact in the influencer space.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {pressFeatures
                .filter((feature) => feature.featured)
                .map((feature, index) => (
                  <motion.article
                    key={feature.id}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 bg-coral-pink/20 text-coral-pink text-sm font-medium rounded-full">
                          {feature.category}
                        </span>
                        <div className="flex items-center gap-1 text-dark/50 text-sm">
                          <Calendar size={14} />
                          {feature.date}
                        </div>
                      </div>

                      <h3 className="text-2xl font-semibold text-dark mb-3 leading-tight">
                        {feature.title}
                      </h3>

                      <p className="text-dark/60 mb-4 leading-relaxed">
                        {feature.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <p className="text-coral-pink font-medium">
                          {feature.publication}
                        </p>
                        <a
                          href={feature.link}
                          className="inline-flex items-center gap-2 text-coral-pink hover:text-coral-pink/80 font-medium transition-colors"
                        >
                          Read Article
                          <ExternalLink size={16} />
                        </a>
                      </div>
                    </div>
                  </motion.article>
                ))}
            </div>
          </div>
        </section>

        {/* All Press Coverage */}
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
                All Press Coverage
              </motion.h2>
            </div>

            <div className="space-y-6">
              {pressFeatures.map((feature, index) => (
                <motion.article
                  key={feature.id}
                  className="bg-sandy-beige/20 rounded-xl p-6 hover:bg-sandy-beige/30 transition-all duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-3 py-1 bg-white text-dark text-sm font-medium rounded-full">
                          {feature.category}
                        </span>
                        <div className="flex items-center gap-1 text-dark/50 text-sm">
                          <Calendar size={14} />
                          {feature.date}
                        </div>
                      </div>

                      <h3 className="text-xl font-semibold text-dark mb-2 leading-tight">
                        {feature.title}
                      </h3>

                      <p className="text-dark/70 mb-3 leading-relaxed">
                        {feature.excerpt}
                      </p>

                      <p className="text-coral-pink font-medium">
                        {feature.publication}
                      </p>
                    </div>

                    <div className="lg:flex-shrink-0">
                      <a
                        href={feature.link}
                        className="inline-flex items-center gap-2 bg-coral-pink text-white px-6 py-3 rounded-full font-medium hover:bg-coral-pink/90 transition-colors"
                      >
                        Read Article
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Brand Collaborations */}
        <section className="py-20 bg-gradient-to-br from-ocean-blue/10 to-sunrise-gold/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.h2
                className="text-4xl lg:text-5xl font-dancing-script text-dark mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                Brand Collaborations
              </motion.h2>
              <motion.p
                className="text-xl text-dark/70 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Proud to have worked with brands that share my values of
                authenticity, sustainability, and meaningful connection.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {brandCollaborations.map((brand, index) => (
                <motion.div
                  key={brand.id}
                  className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-sandy-beige to-ocean-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-dark/40 text-2xl font-semibold">
                      {brand.name.charAt(0)}
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-dark mb-2">
                    {brand.name}
                  </h3>
                  <p className="text-dark/70 text-sm mb-3 leading-relaxed">
                    {brand.description}
                  </p>

                  <div className="flex items-center justify-center gap-2 text-xs text-dark/50">
                    <span className="px-2 py-1 bg-sandy-beige/50 rounded-full">
                      {brand.category}
                    </span>
                    <span className="px-2 py-1 bg-coral-pink/20 text-coral-pink rounded-full">
                      {brand.year}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Media Kit CTA */}
        <section className="py-20 bg-gradient-to-r from-coral-pink to-ocean-blue text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2
              className="text-4xl lg:text-5xl font-dancing-script mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Need Media Assets?
            </motion.h2>
            <motion.p
              className="text-xl mb-8 opacity-90"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              I provide a comprehensive media kit for journalists, brands, and
              collaborators.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <a
                href="/contact"
                className="inline-block bg-white text-coral-pink px-8 py-4 rounded-full font-medium text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Request Media Kit
              </a>
              <a
                href="mailto:press@emma.com"
                className="inline-block border-2 border-white text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-white hover:text-coral-pink transition-all duration-300"
              >
                Press Inquiries
              </a>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
