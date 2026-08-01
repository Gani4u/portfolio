"use client";

import React, { useState } from "react";
import { skills } from "../../data/skills";
import { motion } from "framer-motion";
import { Server, Layout, Database, Cloud, Terminal } from "lucide-react";

export function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = [
    { id: "backend", label: "Backend Development", icon: <Server className="w-4 h-4" /> },
    { id: "frontend", label: "Frontend & UI", icon: <Layout className="w-4 h-4" /> },
    { id: "database", label: "Databases & ORMs", icon: <Database className="w-4 h-4" /> },
    { id: "cloud_tools", label: "Cloud & Developer Tools", icon: <Cloud className="w-4 h-4" /> },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "backend":
        return "group-hover:border-neutral-500 hover:shadow-neutral-500/5";
      case "frontend":
        return "group-hover:border-neutral-500 hover:shadow-neutral-500/5";
      case "database":
        return "group-hover:border-neutral-500 hover:shadow-neutral-500/5";
      case "cloud_tools":
        return "group-hover:border-neutral-500 hover:shadow-neutral-500/5";
      default:
        return "";
    }
  };

  return (
    <section id="skills" className="py-24 bg-black border-b border-neutral-900 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-xs font-mono tracking-widest text-neutral-500 uppercase">
              03 / Expertise
            </h2>
            <h3 className="text-3xl font-bold tracking-tight text-white mt-2">
              Skills & Tech Stack
            </h3>
          </div>
          <div className="text-xs text-neutral-500 font-mono">
            Hover cards to filter by category
          </div>
        </div>

        {/* Categories Selector / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(activeCategory === cat.id ? null : cat.id)}
              className={`p-4 rounded-xl border text-left transition-all flex items-center justify-between ${
                activeCategory === cat.id
                  ? "bg-neutral-900 border-neutral-700 text-white"
                  : "bg-neutral-950/40 border-neutral-950 text-neutral-400 hover:border-neutral-800 hover:text-neutral-200"
              }`}
            >
              <div className="flex items-center space-x-3">
                {cat.icon}
                <span className="text-xs font-semibold">{cat.label}</span>
              </div>
              <span className="text-[10px] font-mono text-neutral-600">
                {skills.filter((s) => s.category === cat.id).length}
              </span>
            </button>
          ))}
        </div>

        {/* Tech Cloud Badges Wrapper */}
        <div className="p-8 rounded-2xl border border-neutral-900 bg-neutral-950/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.01),transparent_70%)] pointer-events-none" />

          <div className="flex flex-wrap justify-center gap-3 relative z-10 max-w-4xl mx-auto py-6">
            {skills.map((skill, index) => {
              const isFilteredOut = activeCategory && skill.category !== activeCategory;
              const isHovered = hoveredSkill === skill.name;
              
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.02 }}
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  className={`px-4 py-2.5 rounded-lg border text-xs font-mono transition-all flex items-center space-x-2 cursor-default ${
                    isFilteredOut
                      ? "opacity-20 scale-95 border-neutral-950 bg-transparent text-neutral-700"
                      : isHovered
                      ? "bg-neutral-900 border-neutral-600 text-white shadow-md scale-105"
                      : "bg-neutral-950 border-neutral-900 text-neutral-400"
                  }`}
                >
                  <Terminal className={`w-3.5 h-3.5 ${
                    isHovered ? "text-neutral-300" : "text-neutral-700"
                  }`} />
                  <span>{skill.name}</span>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Quick Architecture Text */}
        <div className="mt-8 text-center text-xs text-neutral-500 font-mono">
          Focused on writing clean, modular Java backend services and low-latency frontend user interfaces.
        </div>
      </div>
    </section>
  );
}
