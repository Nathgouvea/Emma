"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
  Mail,
  Instagram,
  Play,
  Heart,
  MapPin,
  Phone,
  Send,
  CheckCircle,
  MessageCircle,
  Calendar,
  Users,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    brand: "",
    message: "",
    collaborationType: "",
    timeline: "",
    budget: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        brand: "",
        message: "",
        collaborationType: "",
        timeline: "",
        budget: "",
      });
    }, 3000);
  };

  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      href: "#",
      color: "from-pink-400 to-purple-500",
    },
    {
      name: "YouTube",
      icon: Play,
      href: "#",
      color: "from-red-400 to-pink-500",
    },
    {
      name: "TikTok",
      icon: Heart,
      href: "#",
      color: "from-blue-400 to-cyan-500",
    },
  ];

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "hello@emmaadventures.com",
      description: "Best for project inquiries",
    },
    {
      icon: MessageCircle,
      title: "Instagram DM",
      value: "@emmaadventures",
      description: "Quick questions & updates",
    },
    {
      icon: Calendar,
      title: "Response Time",
      value: "24-48 hours",
      description: "During business days",
    },
  ];

  const instagramPosts = [
    { id: 1, likes: "2.4K", comments: "89" },
    { id: 2, likes: "1.8K", comments: "67" },
    { id: 3, likes: "3.1K", comments: "124" },
    { id: 4, likes: "2.7K", comments: "98" },
    { id: 5, likes: "1.9K", comments: "73" },
    { id: 6, likes: "2.2K", comments: "81" },
  ];

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
              Let's Connect
            </motion.h1>
            <motion.p
              className="text-xl lg:text-2xl text-dark/70 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Ready to start your next project? I'd love to hear about your
              vision and explore how we can create something amazing together.
            </motion.p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl lg:text-4xl font-dancing-script text-dark mb-8">
                  Start Your Project
                </h2>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-gradient-to-r from-green-400 to-blue-500 text-white p-8 rounded-2xl text-center"
                  >
                    <CheckCircle className="w-16 h-16 mx-auto mb-4" />
                    <h3 className="text-2xl font-semibold mb-2">
                      Message Sent!
                    </h3>
                    <p>
                      Thank you for reaching out. I'll get back to you within
                      24-48 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-dark mb-2"
                        >
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-sandy-beige rounded-lg focus:ring-2 focus:ring-coral-pink focus:border-transparent transition-all duration-300"
                          placeholder="Enter your name"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-dark mb-2"
                        >
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-sandy-beige rounded-lg focus:ring-2 focus:ring-coral-pink focus:border-transparent transition-all duration-300"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="brand"
                        className="block text-sm font-medium text-dark mb-2"
                      >
                        Brand/Company
                      </label>
                      <input
                        type="text"
                        id="brand"
                        name="brand"
                        value={formData.brand}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-sandy-beige rounded-lg focus:ring-2 focus:ring-coral-pink focus:border-transparent transition-all duration-300"
                        placeholder="Your brand or company name"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="collaborationType"
                          className="block text-sm font-medium text-dark mb-2"
                        >
                          Collaboration Type
                        </label>
                        <select
                          id="collaborationType"
                          name="collaborationType"
                          value={formData.collaborationType}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-sandy-beige rounded-lg focus:ring-2 focus:ring-coral-pink focus:border-transparent transition-all duration-300"
                        >
                          <option value="">Select type</option>
                          <option value="instagram">Instagram Content</option>
                          <option value="brand">Brand Ambassadorship</option>
                          <option value="travel">Travel & Wellness</option>
                          <option value="video">Video Content</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="timeline"
                          className="block text-sm font-medium text-dark mb-2"
                        >
                          Timeline
                        </label>
                        <select
                          id="timeline"
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-sandy-beige rounded-lg focus:ring-2 focus:ring-coral-pink focus:border-transparent transition-all duration-300"
                        >
                          <option value="">Select timeline</option>
                          <option value="asap">ASAP</option>
                          <option value="1-2-weeks">1-2 weeks</option>
                          <option value="1-month">1 month</option>
                          <option value="2-3-months">2-3 months</option>
                          <option value="flexible">Flexible</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="budget"
                        className="block text-sm font-medium text-dark mb-2"
                      >
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-sandy-beige rounded-lg focus:ring-2 focus:ring-coral-pink focus:border-transparent transition-all duration-300"
                      >
                        <option value="">Select budget range</option>
                        <option value="under-1000">Under $1,000</option>
                        <option value="1000-2500">$1,000 - $2,500</option>
                        <option value="2500-5000">$2,500 - $5,000</option>
                        <option value="5000-10000">$5,000 - $10,000</option>
                        <option value="over-10000">Over $10,000</option>
                        <option value="custom">Custom</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-dark mb-2"
                      >
                        Project Details *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 border border-sandy-beige rounded-lg focus:ring-2 focus:ring-coral-pink focus:border-transparent transition-all duration-300 resize-none"
                        placeholder="Tell me about your project, goals, and vision..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-coral-pink text-white py-4 px-8 rounded-full font-medium text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </motion.div>

              {/* Contact Information & Social */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                {/* Contact Info */}
                <div>
                  <h3 className="text-2xl font-dancing-script text-dark mb-6">
                    Get in Touch
                  </h3>
                  <div className="space-y-4">
                    {contactInfo.map((info, index) => (
                      <motion.div
                        key={info.title}
                        className="flex items-start gap-4 p-4 bg-sandy-beige/30 rounded-lg"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-10 h-10 bg-gradient-to-br from-coral-pink/20 to-ocean-blue/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <info.icon className="w-5 h-5 text-coral-pink" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-dark">
                            {info.title}
                          </h4>
                          <p className="text-coral-pink font-medium">
                            {info.value}
                          </p>
                          <p className="text-dark/60 text-sm">
                            {info.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Social Media */}
                <div>
                  <h3 className="text-2xl font-dancing-script text-dark mb-6">
                    Follow My Journey
                  </h3>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.name}
                        href={social.href}
                        className={`w-14 h-14 bg-gradient-to-r ${social.color} rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <social.icon className="w-6 h-6" />
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Instagram Feed Preview */}
                <div>
                  <h3 className="text-2xl font-dancing-script text-dark mb-6">
                    Latest from Instagram
                  </h3>
                  <div className="grid grid-cols-3 gap-2">
                    {instagramPosts.map((post, index) => (
                      <motion.div
                        key={post.id}
                        className="aspect-square bg-gradient-to-br from-coral-pink/20 to-ocean-blue/20 rounded-lg flex items-center justify-center relative group cursor-pointer"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: index * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="text-center text-dark/40">
                          <div className="text-2xl mb-1">📸</div>
                          <div className="text-xs">Post {post.id}</div>
                        </div>

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                          <div className="text-white text-center text-xs">
                            <div className="flex items-center gap-1 mb-1">
                              <Heart className="w-3 h-3 fill-white" />
                              {post.likes}
                            </div>
                            <div className="flex items-center gap-1">
                              <MessageCircle className="w-3 h-3" />
                              {post.comments}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  <div className="text-center mt-4">
                    <a
                      href="#"
                      className="text-coral-pink hover:text-coral-pink/80 transition-colors duration-300 text-sm font-medium"
                    >
                      View All Posts →
                    </a>
                  </div>
                </div>
              </motion.div>
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
              Ready to Start Creating?
            </motion.h2>
            <motion.p
              className="text-xl mb-8 opacity-90"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              I'm excited to hear about your project and explore how we can
              bring your vision to life.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <a
                href="mailto:hello@emmaadventures.com"
                className="inline-block bg-white text-coral-pink px-8 py-4 rounded-full font-medium text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Email Directly
              </a>
              <a
                href="/work-with-me"
                className="inline-block border-2 border-white text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-white hover:text-coral-pink transition-all duration-300"
              >
                View Services
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
