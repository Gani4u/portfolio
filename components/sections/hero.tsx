"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Download, Eye, Mail, ArrowRight } from "lucide-react";
import { InteractiveGrid } from "../ui/interactive-grid";

export function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#030303] py-20 px-6">
      {/* Moving Grid and Particles Background */}
      <InteractiveGrid />

      <div className="relative z-10 max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        {/* Left: Text Contents */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="md:col-span-7 flex flex-col items-start space-y-6 text-left"
        >
          {/* Status Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/60 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] tracking-wider text-neutral-400 font-medium uppercase font-mono">
              Available for Opportunities
            </span>
          </motion.div>

          {/* Large Title */}
          <div className="space-y-2">
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-sans"
            >
              Ganesh Chavan
            </motion.h1>
            <motion.h2
              variants={itemVariants}
              className="text-xl sm:text-2xl font-medium text-neutral-400 font-mono tracking-wide"
            >
              Full Stack Developer
            </motion.h2>
          </div>

          {/* Tech Tag list */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-2 text-xs font-mono text-neutral-500"
          >
            <span>Java</span>
            <span>•</span>
            <span>Spring Boot</span>
            <span>•</span>
            <span>Next.js</span>
            <span>•</span>
            <span>React</span>
            <span>•</span>
            <span>AWS</span>
          </motion.div>

          {/* Subtitle / Description */}
          <motion.p
            variants={itemVariants}
            className="text-base text-neutral-400 max-w-lg leading-relaxed font-sans"
          >
            Building scalable, high-performance backend systems with Java & NestJS, and designing modern, conversion-focused user interfaces with Next.js & Tailwind.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-3 pt-2 w-full sm:w-auto"
          >
            <a
              href="/resume.pdf"
              download="Ganesh_Chavan_Resume.pdf"
              className="flex items-center justify-center space-x-2 px-4 py-2.5 rounded-lg text-xs font-medium text-black bg-white hover:bg-neutral-200 transition-colors cursor-pointer w-full sm:w-auto shadow-md"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </a>
            <button
              onClick={() => scrollToSection("projects")}
              className="flex items-center justify-center space-x-2 px-4 py-2.5 rounded-lg text-xs font-medium text-neutral-200 bg-neutral-950 border border-neutral-800 hover:border-neutral-700 hover:text-white transition-all w-full sm:w-auto"
            >
              <Eye className="w-4 h-4" />
              <span>View Projects</span>
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="flex items-center justify-center space-x-2 px-4 py-2.5 rounded-lg text-xs font-medium text-neutral-400 hover:text-neutral-200 transition-colors w-full sm:w-auto group"
            >
              <span>Contact Me</span>
              <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </motion.div>

        {/* Right: Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="md:col-span-5 flex justify-center"
        >
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 flex items-center justify-center">
            {/* Spinning/pulsing background glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-neutral-800/10 via-neutral-900/5 to-neutral-700/15 rounded-full blur-2xl animate-pulse" />

            {/* Glowing borders */}
            <div className="absolute inset-4 rounded-full border border-neutral-800 bg-neutral-950/60 backdrop-blur-sm overflow-hidden p-3 flex items-center justify-center">
              <div className="relative w-full h-full rounded-full overflow-hidden border border-neutral-700/40">
                <Image
                  src="/images/avatar.jpg"
                  alt="Ganesh Chavan"
                  fill
                  priority
                  sizes="(max-width: 768px) 280px, 350px"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Small decorative layout shapes */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-8 right-8 bg-neutral-900/80 border border-neutral-800 backdrop-blur-md px-3 py-1 rounded-md text-[10px] font-mono text-neutral-400 shadow-lg"
            >
              Backend Specialist
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-8 left-8 bg-neutral-900/80 border border-neutral-800 backdrop-blur-md px-3 py-1 rounded-md text-[10px] font-mono text-neutral-400 shadow-lg"
            >
              NestJS & Spring
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
