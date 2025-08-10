"use client";

import { motion } from "framer-motion";
import { Instagram, Youtube, Mail, Heart, Music } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      href: "#",
      color: "hover:text-coral-pink",
    },
    { name: "YouTube", icon: Youtube, href: "#", color: "hover:text-red-500" },
    { name: "TikTok", icon: Music, href: "#", color: "hover:text-pink-500" },
    {
      name: "Email",
      icon: Mail,
      href: "mailto:hello@emma.com",
      color: "hover:text-ocean-blue",
    },
  ];

  const footerLinks = [
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Work With Me", href: "/work-with-me" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-sandy-beige/50 border-t border-sandy-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-dancing-script text-coral-pink">
              Emma
            </h3>
            <p className="text-dark/70 text-sm leading-relaxed max-w-xs">
              Manifesting adventures, one moment at a time. From Alaska to
              Puerto Rico, sharing stories of wellness, travel, and the power of
              positive thinking.
            </p>
            <div className="flex items-center gap-2 text-sm text-dark/60">
              <span>Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Heart size={16} className="text-coral-pink" />
              </motion.div>
              <span>in Toronto</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="font-semibold text-dark text-lg">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-dark/70 hover:text-coral-pink transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social & Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="font-semibold text-dark text-lg">Connect</h4>
            <div className="space-y-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className={`flex items-center gap-3 text-dark/70 ${social.color} transition-colors duration-200 text-sm`}
                >
                  <social.icon size={18} />
                  <span>{social.name}</span>
                </a>
              ))}
            </div>

            <div className="pt-4">
              <p className="text-sm text-dark/60 mb-2">For collaborations:</p>
              <a
                href="mailto:hello@emma.com"
                className="text-coral-pink hover:text-ocean-blue transition-colors font-medium"
              >
                hello@emma.com
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-sandy-beige mt-8 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-dark/60">
              © {currentYear} Emma. All rights reserved.
            </p>

            <div className="flex items-center gap-6 text-sm text-dark/60">
              <a
                href="/privacy"
                className="hover:text-coral-pink transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="hover:text-coral-pink transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
