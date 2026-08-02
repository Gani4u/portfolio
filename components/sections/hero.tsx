"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Download, Eye, ArrowRight } from "lucide-react";
import { InteractiveGrid } from "../ui/interactive-grid";

export function Hero() {
  const basePath = process.env.NODE_ENV === "production" ? "/portfolio" : "";
  const badgeClassName = "absolute bg-white/90 border border-neutral-200 text-neutral-800 dark:bg-neutral-950/80 dark:border-neutral-800 dark:text-neutral-200 backdrop-blur-md px-3.5 py-1.5 rounded-lg text-[10px] font-mono shadow-xl transition-colors duration-300";

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-black pt-28 md:pt-36 pb-20 px-6">
      {/* Canvas interactive background grid */}
      <InteractiveGrid />

      {/* Subtle floating background shapes (Stripe/Linear style) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[20%] left-[10%] w-[45vw] h-[45vw] rounded-full bg-blue-600/5 blur-[120px] mix-blend-screen animate-pulse" />
        <div className="absolute bottom-[20%] right-[10%] w-[35vw] h-[35vw] rounded-full bg-indigo-600/5 blur-[100px] mix-blend-screen" />
      </div>

      <div className="relative z-10 max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Text content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col items-start space-y-6 text-left"
        >
          {/* Availability status badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full border border-neutral-900 bg-neutral-950/60 backdrop-blur-md"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
            <span className="text-[10px] tracking-widest text-neutral-400 font-mono font-medium uppercase">
              ● Open to Backend & Full Stack Opportunities
            </span>
          </motion.div>

          {/* Premium Headline (Apple/Stripe typography) */}
          <div className="space-y-4 max-w-2xl">
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08] font-sans"
            >
              Engineering scalable{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                backend architectures
              </span>{" "}
              and modern web experiences.
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-neutral-400 font-normal leading-relaxed"
            >
              Ganesh Chavan &mdash; Full Stack Developer specializing in robust{" "}
              <span className="text-white font-medium">Java</span> frameworks,{" "}
              <span className="text-white font-medium">Spring Boot</span> engines,{" "}
              <span className="text-white font-medium">Next.js</span> applications, and efficient{" "}
              <span className="text-white font-medium">Cloud</span> setups.
            </motion.p>
          </div>

          {/* Premium Actions with magnetic animations */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-3 pt-4 w-full sm:w-auto"
          >
            <a
              href={`${basePath}/resume.pdf`}
              download="Ganesh_Chavan_Resume.pdf"
              className="flex items-center justify-center space-x-2 px-5 py-3 rounded-lg text-xs font-semibold text-black bg-white hover:bg-neutral-200 transition-all cursor-pointer w-full sm:w-auto shadow-xl hover:-translate-y-0.5"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Resume</span>
            </a>
            <button
              onClick={() => scrollToSection("projects")}
              className="flex items-center justify-center space-x-2 px-5 py-3 rounded-lg text-xs font-semibold text-neutral-200 bg-neutral-950 border border-neutral-900 hover:border-neutral-800 hover:text-white transition-all w-full sm:w-auto hover:-translate-y-0.5"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>View Projects</span>
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="flex items-center justify-center space-x-1.5 px-4 py-3 rounded-lg text-xs font-semibold text-neutral-400 hover:text-neutral-200 transition-colors w-full sm:w-auto group"
            >
              <span>Let&apos;s Connect</span>
              <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* Social connections links */}
          <motion.div
            variants={itemVariants}
            className="flex items-center space-x-4 pt-6 border-t border-neutral-950 w-full"
          >
            <span className="text-[10px] font-mono text-neutral-600 uppercase tracking-wider">
              Connections:
            </span>
            <a
              href="https://github.com/Gani4u"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-neutral-300 transition-colors"
              aria-label="GitHub"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/ganesh-chavan-35435526b"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-neutral-300 transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column: Avatar with modern double glow mask */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex justify-center"
        >
          <div className="relative w-80 h-80 sm:w-96 sm:h-96 flex items-center justify-center">
            {/* Ambient Backlight glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-indigo-500/5 to-purple-500/10 rounded-full blur-[80px] animate-pulse" />

            {/* Glowing borders */}
            <div className="absolute inset-4 rounded-full border border-neutral-900 bg-neutral-950/40 backdrop-blur-md overflow-hidden p-3 flex items-center justify-center">
              <div className="relative w-full h-full rounded-full overflow-hidden border border-neutral-800/40">
                <Image
                  src={`${basePath}/images/avatar.jpg`}
                  alt="Ganesh Chavan"
                  fill
                  priority
                  sizes="(max-width: 768px) 320px, 380px"
                  className="object-cover scale-102 hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Floating visual indicators */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className={`${badgeClassName} top-6 right-6`}
            >
              Java Backend Specialist
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className={`${badgeClassName} bottom-6 left-6`}
            >
              Enterprise SaaS Experience
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
