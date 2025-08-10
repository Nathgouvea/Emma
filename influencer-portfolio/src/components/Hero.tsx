'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Play, Instagram, Heart } from 'lucide-react';

const Hero = () => {
  const scrollToContent = () => {
    const element = document.querySelector('#main-content');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Image Placeholder */}
      <div className="absolute inset-0 bg-gradient-to-br from-sandy-beige via-white to-ocean-blue/20">
        {/* Placeholder for video/slideshow - replace with actual video component */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
        
        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-10 text-coral-pink opacity-20"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Heart size={40} />
        </motion.div>
        
        <motion.div
          className="absolute top-32 right-20 text-sunrise-gold opacity-20"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <Instagram size={30} />
        </motion.div>
        
        <motion.div
          className="absolute bottom-32 left-20 text-ocean-blue opacity-20"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >
          <Play size={35} />
        </motion.div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Main Tagline */}
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-7xl font-dancing-script text-dark mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Manifesting adventures,
          <br />
          <span className="text-coral-pink">one moment at a time</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg sm:text-xl lg:text-2xl text-dark/80 mb-8 max-w-2xl mx-auto font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          From the remote Alaskan wilderness to Puerto Rican yoga retreats, 
          join me on a journey of discovery, wellness, and boundless adventure.
        </motion.p>

        {/* Call-to-Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <motion.a
            href="/portfolio"
            className="bg-coral-pink text-white px-8 py-4 rounded-full font-medium text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore My Work
            <ArrowDown size={20} />
          </motion.a>
          
          <motion.a
            href="/work-with-me"
            className="border-2 border-coral-pink text-coral-pink px-8 py-4 rounded-full font-medium text-lg hover:bg-coral-pink hover:text-white transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Collaborate
          </motion.a>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 text-sm text-dark/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <a href="/about" className="hover:text-coral-pink transition-colors">My Story</a>
          <span>•</span>
          <a href="/audience" className="hover:text-coral-pink transition-colors">My Community</a>
          <span>•</span>
          <a href="/blog" className="hover:text-coral-pink transition-colors">Latest Adventures</a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollToContent}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        whileHover={{ y: 5 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-dark/30 rounded-full flex justify-center"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div
            className="w-1 h-3 bg-dark/50 rounded-full mt-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
        <p className="text-xs text-dark/50 mt-2 text-center">Scroll to explore</p>
      </motion.div>

      {/* Social Media Links */}
      <motion.div
        className="absolute top-1/2 right-6 transform -translate-y-1/2 hidden lg:block"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
      >
        <div className="flex flex-col gap-4">
          <motion.a
            href="#"
            className="text-dark/70 hover:text-coral-pink transition-colors"
            whileHover={{ scale: 1.2, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Instagram size={24} />
          </motion.a>
          <motion.a
            href="#"
            className="text-dark/70 hover:text-sunrise-gold transition-colors"
            whileHover={{ scale: 1.2, rotate: -5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Play size={24} />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
