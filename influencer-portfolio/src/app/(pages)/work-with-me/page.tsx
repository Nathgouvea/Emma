'use client';

import { motion } from "framer-motion";
import {
  Instagram,
  Play,
  Heart,
  Globe,
  Camera,
  Users,
  TrendingUp,
  Star,
  CheckCircle,
  ArrowRight,
  MessageCircle,
  Calendar,
  Zap,
} from "lucide-react";

export default function WorkWithMe() {
  const services = [
    {
      title: "Sponsored Instagram Content",
      description:
        "Authentic posts, reels, and stories that seamlessly integrate your brand into my lifestyle content",
      features: [
        "High-quality photography and videography",
        "Strategic caption writing with your brand voice",
        "Stories and highlights for extended reach",
        "Performance analytics and insights",
      ],
      icon: Instagram,
      color: "from-pink-400 to-purple-500",
    },
    {
      title: "Brand Ambassadorships",
      description:
        "Long-term partnerships that build authentic connections with my engaged community",
      features: [
        "Ongoing brand representation",
        "Exclusive content creation",
        "Community engagement and feedback",
        "Brand story integration",
      ],
      icon: Heart,
      color: "from-red-400 to-pink-500",
    },
    {
      title: "Travel & Wellness Content",
      description:
        "Destination promotion and wellness brand collaborations that inspire authentic living",
      features: [
        "Destination photography and videography",
        "Wellness retreat coverage",
        "Local culture and experience sharing",
        "Authentic storytelling",
      ],
      icon: Globe,
      color: "from-blue-400 to-cyan-500",
    },
    {
      title: "Content Creation & Photography",
      description:
        "Professional photography and content creation for your brand's visual needs",
      features: [
        "Product photography and lifestyle shots",
        "Event coverage and behind-the-scenes",
        "Editorial-style content creation",
        "High-resolution deliverables",
      ],
      icon: Camera,
      color: "from-green-400 to-teal-500",
    },
  ];

  const stats = [
    { number: "100K+", label: "Engaged Followers", icon: Users },
    { number: "4.8%", label: "Average Engagement Rate", icon: TrendingUp },
    { number: "50+", label: "Countries Reached", icon: Globe },
    { number: "200+", label: "Successful Collaborations", icon: Star },
  ];

  const testimonials = [
    {
      quote:
        "Working with Emma was a dream come true. Her authentic approach and creative vision brought our brand story to life in ways we never imagined.",
      author: "Sarah Chen",
      role: "Marketing Director",
      company: "Wellness Collective",
    },
    {
      quote:
        "Emma's content consistently outperforms our expectations. Her audience engagement and authentic storytelling make her an invaluable partner.",
      author: "Michael Rodriguez",
      role: "Brand Manager",
      company: "Adventure Gear Co.",
    },
    {
      quote:
        "The quality and creativity of Emma's work exceeded our expectations. She truly understands how to connect with audiences authentically.",
      author: "Lisa Thompson",
      role: "Creative Director",
      company: "Lifestyle Brand",
    },
  ];

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
                Let's Create Together
              </h1>
              <p className="text-xl text-dark/70 max-w-3xl mx-auto">
                I'm passionate about partnering with brands that align with my
                values of authenticity, wellness, and adventure. Let's tell your
                story in a way that resonates with my engaged community.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-gradient-to-br from-coral-pink/20 to-ocean-blue/20 rounded-2xl">
                      <stat.icon className="text-coral-pink" size={32} />
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-dark mb-2">
                    {stat.number}
                  </div>
                  <div className="text-dark/70">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-sandy-beige/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-dancing-script text-dark mb-6">
                What I Offer
              </h2>
              <p className="text-xl text-dark/70 max-w-3xl mx-auto">
                From one-time collaborations to long-term partnerships, I
                provide a range of services designed to authentically showcase
                your brand.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`p-3 bg-gradient-to-br ${service.color} rounded-xl`}
                    >
                      <service.icon className="text-white" size={24} />
                    </div>
                    <h3 className="text-2xl font-semibold text-dark">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-dark/70 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle className="text-coral-pink" size={20} />
                        <span className="text-dark/70">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className="w-full bg-coral-pink text-white py-3 rounded-xl font-medium hover:bg-coral-pink/90 transition-colors flex items-center justify-center gap-2">
                    Learn More
                    <ArrowRight size={20} />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Work With Me */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-dancing-script text-dark mb-6">
                Why Choose Me?
              </h2>
              <p className="text-xl text-dark/70 max-w-3xl mx-auto">
                I bring a unique combination of creativity, authenticity, and
                proven results to every collaboration.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Authentic Storytelling",
                  description:
                    "I believe in creating content that feels genuine and resonates with real people. Your brand story becomes part of my authentic journey.",
                  icon: Heart,
                },
                {
                  title: "Engaged Community",
                  description:
                    "My followers are active, engaged, and trust my recommendations. They're looking for authentic products and experiences.",
                  icon: Users,
                },
                {
                  title: "Creative Excellence",
                  description:
                    "From concept to execution, I deliver high-quality content that stands out and drives results for your brand.",
                  icon: Star,
                },
              ].map((reason, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-gradient-to-br from-sunrise-gold/20 to-coral-pink/20 rounded-2xl">
                      <reason.icon className="text-sunrise-gold" size={32} />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-dark mb-4">
                    {reason.title}
                  </h3>
                  <p className="text-dark/70 leading-relaxed">
                    {reason.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-sandy-beige/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-dancing-script text-dark mb-6">
                What Brands Say
              </h2>
              <p className="text-xl text-dark/70 max-w-3xl mx-auto">
                Don't just take my word for it - hear from some of the amazing
                brands I've had the pleasure of working with.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="text-sunrise-gold" size={20} />
                    ))}
                  </div>

                  <blockquote className="text-dark/70 mb-6 leading-relaxed italic">
                    "{testimonial.quote}"
                  </blockquote>

                  <div className="border-t border-sandy-beige/30 pt-4">
                    <div className="font-semibold text-dark">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-dark/60">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-dancing-script text-dark mb-6">
                How We'll Work Together
              </h2>
              <p className="text-xl text-dark/70 max-w-3xl mx-auto">
                A simple, collaborative process that ensures your vision comes
                to life exactly as you imagined.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Discovery Call",
                  description:
                    "We'll discuss your goals, audience, and creative vision to ensure perfect alignment.",
                  icon: MessageCircle,
                },
                {
                  step: "02",
                  title: "Creative Planning",
                  description:
                    "I'll develop a custom content strategy that authentically showcases your brand.",
                  icon: Calendar,
                },
                {
                  step: "03",
                  title: "Content Creation",
                  description:
                    "I'll create high-quality, engaging content that resonates with both our audiences.",
                  icon: Camera,
                },
                {
                  step: "04",
                  title: "Launch & Optimize",
                  description:
                    "We'll launch your campaign and optimize based on performance data and feedback.",
                  icon: Zap,
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-coral-pink to-ocean-blue rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-lg">
                        {step.step}
                      </span>
                    </div>
                    {index < 3 && (
                      <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-coral-pink to-ocean-blue transform translate-x-4"></div>
                    )}
                  </div>

                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-gradient-to-br from-sandy-beige/30 to-ocean-blue/20 rounded-xl">
                      <step.icon className="text-ocean-blue" size={24} />
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-dark mb-4">
                    {step.title}
                  </h3>
                  <p className="text-dark/70 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-coral-pink to-ocean-blue text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-dancing-script mb-6">
                Ready to Start Your Journey?
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Let's create something beautiful together. I'm excited to learn
                about your brand and explore how we can bring your vision to
                life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-white text-coral-pink px-8 py-4 rounded-full font-medium text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  Let's Talk
                </a>
                <a
                  href="/portfolio"
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-white hover:text-coral-pink transition-all duration-300"
                >
                  View My Work
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
