"use client";

import React, { useState, useEffect } from "react";
import { CommandPalette } from "../ui/command-palette";
import { Sun, Moon, Menu, X, Search, ChevronRight } from "lucide-react";
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
    <header className={`fixed top-0 left-0 right-0 z-50 w-full flex justify-center pointer-events-none transition-all duration-300 ${
      scrolled ? "pt-3 md:pt-4" : "pt-5 md:pt-6"
    }`}>
      <div className={`floating-nav-pill pointer-events-auto w-[calc(100%-2rem)] md:w-full max-w-5xl transition-all duration-300 border bg-neutral-950/75 border-neutral-800/80 backdrop-blur-xl shadow-xl flex flex-col justify-center px-6 ${
        mobileMenuOpen 
          ? "rounded-2xl py-4 space-y-4 h-auto" 
          : `rounded-full ${scrolled ? "h-14" : "h-16"}`
      }`}>
        {/* Main Bar */}
        <div className="flex w-full items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              setMobileMenuOpen(false);
            }}
            className="flex items-center space-x-2 focus:outline-none group cursor-pointer"
          >
            <span className="text-lg md:text-xl font-bold tracking-tight text-white transition-colors duration-200">
              Ganesh <span className="text-neutral-450 dark:text-neutral-400 font-light">Chavan</span>
            </span>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`floating-nav-link text-xs px-3.5 py-1.5 rounded-full transition-colors relative cursor-pointer ${
                  activeSection === link.href
                    ? "floating-nav-link-active text-white font-medium"
                    : "text-neutral-400 hover:text-neutral-200"
                }`}
              >
                <span className="relative z-10">{link.label}</span>
                {activeSection === link.href && (
                  <motion.span
                    layoutId="activeNavBackground"
                    className="active-nav-bg absolute inset-0 bg-white/10 rounded-full z-0"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center space-x-2">
            {/* Theme Toggle (Desktop) */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="hidden md:flex p-2.5 rounded-full border border-neutral-800 hover:border-neutral-700 bg-neutral-950/40 text-neutral-400 hover:text-neutral-200 transition-all cursor-pointer"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Search Trigger (Desktop) */}
            <div className="hidden md:block">
              <CommandPalette trigger={
                <button className="p-2.5 rounded-full border border-neutral-800 hover:border-neutral-700 bg-neutral-950/40 text-neutral-400 hover:text-neutral-200 transition-all cursor-pointer">
                  <Search className="w-4 h-4" />
                </button>
              } />
            </div>

            {/* Contact CTA (Desktop) */}
            <button
              onClick={() => scrollToSection("contact")}
              className="contact-cta-btn hidden md:flex items-center space-x-1.5 px-5 py-2 rounded-full text-xs font-semibold shadow-lg group cursor-pointer"
            >
              <span>Contact Us</span>
              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>

            {/* Mobile Controls (Search, Theme, Hamburger Menu) */}
            <div className="flex md:hidden items-center space-x-1.5">
              <CommandPalette trigger={
                <button className="p-2 rounded-full border border-neutral-800 bg-neutral-950/40 text-neutral-400 hover:text-neutral-200 transition-all cursor-pointer">
                  <Search className="w-4 h-4" />
                </button>
              } />
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-full border border-neutral-800 bg-neutral-950/40 text-neutral-400 hover:text-neutral-200 transition-all cursor-pointer"
                aria-label="Toggle Theme"
              >
                {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-full border border-neutral-800 bg-neutral-950/40 text-neutral-400 hover:text-neutral-200 transition-all cursor-pointer"
              >
                {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Expandable Drawer inside the floating container */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="md:hidden overflow-hidden w-full flex flex-col space-y-2 pt-3 border-t border-neutral-900/60 light:border-neutral-200/50"
            >
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className={`text-sm text-left py-2.5 px-3.5 rounded-xl transition-colors w-full cursor-pointer ${
                    activeSection === link.href
                      ? "bg-white/10 text-white font-medium light:bg-black/5 light:text-black"
                      : "text-neutral-400 hover:text-neutral-200 light:text-neutral-500 light:hover:text-neutral-950"
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection("contact")}
                className="contact-cta-btn flex items-center justify-center space-x-1.5 py-3 rounded-full text-sm font-semibold shadow-lg w-full mt-2 cursor-pointer"
              >
                <span>Contact Us</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

