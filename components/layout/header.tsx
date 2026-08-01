"use client";

import React, { useState, useEffect } from "react";
import { CommandPalette } from "../ui/command-palette";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "about" },
    { label: "Experience", href: "experience" },
    { label: "Projects", href: "projects" },
    { label: "Skills", href: "skills" },
    { label: "Timeline", href: "timeline" },
    { label: "Achievements", href: "achievements" },
    { label: "Contact", href: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 120;
      
      for (const link of navLinks) {
        const el = document.getElementById(link.href);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(link.href);
            break;
          }
        }
      }

      if (window.scrollY < 80) {
        setActiveSection("hero");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navLinks]);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!mounted) return null;

  return (
    <header className={`sticky top-0 z-40 w-full transition-all duration-300 border-b border-transparent ${
      scrolled 
        ? "h-14 bg-black/60 backdrop-blur-lg border-neutral-900/60" 
        : "h-16 bg-transparent"
    }`}>
      <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo / Monogram "GC" inside a rounded square */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center space-x-2.5 focus:outline-none group"
        >
          <motion.div
            whileHover={{ scale: 1.08, rotate: [0, -3, 3, 0] }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="w-8 h-8 rounded-lg border border-neutral-800 bg-neutral-950 flex items-center justify-center font-bold text-xs font-mono text-white shadow-lg"
          >
            GC
          </motion.div>
          <span className="text-xs font-semibold tracking-wider font-mono text-neutral-400 group-hover:text-white transition-colors uppercase hidden sm:inline-block">
            Ganesh Chavan
          </span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className={`text-xs px-3.5 py-1.5 rounded-md transition-colors relative ${
                activeSection === link.href
                  ? "text-white font-medium"
                  : "text-neutral-500 hover:text-neutral-300"
              }`}
            >
              {link.label}
              {activeSection === link.href && (
                <motion.span
                  layoutId="activeNavBackground"
                  className="absolute inset-0 bg-neutral-900/40 rounded-md -z-10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-3">
          <CommandPalette />

          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-lg border border-neutral-900 hover:border-neutral-800 text-neutral-400 hover:text-neutral-200 transition-all bg-neutral-950/40"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-neutral-400 hover:text-neutral-200"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-neutral-900 bg-black/95 backdrop-blur-md"
          >
            <div className="px-6 py-4 flex flex-col space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className={`text-sm text-left py-1.5 transition-colors ${
                    activeSection === link.href ? "text-white font-medium" : "text-neutral-400 hover:text-neutral-200"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
