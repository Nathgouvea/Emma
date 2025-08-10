"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Work With Me", href: "/work-with-me" },
    { name: "Audience", href: "/audience" },
    { name: "Blog", href: "/blog" },
    { name: "Press", href: "/press" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link
                href="/"
                className="text-2xl lg:text-3xl font-dancing-script text-coral-pink"
              >
                Emma
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map((item) => {
                  const isActive =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname?.startsWith(item.href);
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`px-3 py-2 text-sm font-medium transition-colors duration-200 relative group ${
                        isActive
                          ? "text-coral-pink"
                          : "text-dark hover:text-coral-pink"
                      }`}
                    >
                      {item.name}
                      <span
                        className={`absolute bottom-0 left-0 h-0.5 bg-coral-pink transition-all duration-300 ${
                          isActive ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                      ></span>
                    </Link>
                  );
                })}
              </div>

              {/* CTA */}
              <div className="ml-8">
                <Link
                  href="/work-with-me"
                  className="inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 bg-gradient-to-r from-coral-pink to-sunrise-gold text-white px-5 py-2.5 shadow-lg hover:shadow-xl hover:from-coral-pink/90 hover:to-sunrise-gold/90 focus-visible:ring-2 focus-visible:ring-sunrise-gold/50"
                >
                  Let&apos;s Collaborate
                </Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-dark hover:text-coral-pink p-2"
                aria-label="Toggle menu"
                aria-expanded={isOpen}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-white/95 backdrop-blur-md">
          <div className="flex flex-col h-full pt-20 pb-6 px-6">
            <div className="flex-1 space-y-4">
              {navItems.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname?.startsWith(item.href);
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block text-2xl font-medium py-3 transition-colors duration-200 ${
                      isActive ? "text-coral-pink" : "text-dark hover:text-coral-pink"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>

            {/* CTA */}
            <div className="pt-8 border-t border-sandy-beige">
              <Link
                href="/work-with-me"
                className="inline-flex items-center justify-center w-full font-medium rounded-full transition-all duration-300 bg-gradient-to-r from-coral-pink to-sunrise-gold text-white px-5 py-3 shadow-lg hover:shadow-xl hover:from-coral-pink/90 hover:to-sunrise-gold/90"
                onClick={() => setIsOpen(false)}
              >
                Let&apos;s Collaborate
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
