"use client";

import React, { useState } from "react";
import { skills } from "../../data/skills";
import { motion } from "framer-motion";
import { Server, Layout, Database, Cloud, Terminal, Code, Cpu, ShieldAlert, Layers } from "lucide-react";

export function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = [
    { id: "languages", label: "Languages", icon: <Code className="w-3.5 h-3.5" /> },
    { id: "frameworks", label: "Frameworks", icon: <Server className="w-3.5 h-3.5" /> },
    { id: "desktop", label: "Desktop", icon: <Cpu className="w-3.5 h-3.5" /> },
    { id: "database", label: "Database / ORM", icon: <Database className="w-3.5 h-3.5" /> },
    { id: "cloud", label: "Cloud / Infra", icon: <Cloud className="w-3.5 h-3.5" /> },
    { id: "tools", label: "Dev Tools", icon: <Terminal className="w-3.5 h-3.5" /> },
    { id: "build_tools", label: "Build Systems", icon: <Layers className="w-3.5 h-3.5" /> },
    { id: "concepts", label: "Core Concepts", icon: <Layout className="w-3.5 h-3.5" /> }
  ];

  return (
    <section id="skills" className="py-24 bg-black border-b border-neutral-900 scroll-mt-14">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-xs font-mono tracking-widest text-neutral-500 uppercase">
              04 / Skill Set
            </h2>
            <h3 className="text-3xl font-bold tracking-tight text-white mt-2">
              Technology Stack
            </h3>
          </div>
          <div className="text-xs text-neutral-500 font-mono">
            Filter cloud by clicking a category
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(activeCategory === cat.id ? null : cat.id)}
              className={`p-3 rounded-lg border text-left transition-all flex items-center justify-between ${
                activeCategory === cat.id
                  ? "bg-neutral-900 border-neutral-700 text-white"
                  : "bg-neutral-950/40 border-neutral-950 text-neutral-400 hover:border-neutral-800 hover:text-neutral-200"
              }`}
            >
              <div className="flex items-center space-x-2.5">
                {cat.icon}
                <span className="text-[11px] font-semibold tracking-wide font-mono">{cat.label}</span>
              </div>
              <span className="text-[9px] font-mono text-neutral-600">
                {skills.filter((s) => s.category === cat.id).length}
              </span>
            </button>
          ))}
        </div>

        {/* Tag Cloud */}
        <div className="p-8 rounded-2xl border border-neutral-900 bg-neutral-950/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.01),transparent_70%)] pointer-events-none" />

          <div className="flex flex-wrap justify-center gap-2.5 relative z-10 max-w-4xl mx-auto py-4">
            {skills.map((skill, index) => {
              const isFilteredOut = activeCategory && skill.category !== activeCategory;
              const isHovered = hoveredSkill === skill.name;
              
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.2, delay: index * 0.01 }}
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  className={`px-3.5 py-2 rounded-lg border text-[11px] font-mono transition-all flex items-center space-x-1.5 cursor-default ${
                    isFilteredOut
                      ? "opacity-25 scale-95 border-neutral-950 bg-transparent text-neutral-700"
                      : isHovered
                      ? "bg-neutral-900 border-neutral-600 text-white shadow-md scale-102"
                      : "bg-neutral-950 border-neutral-900 text-neutral-400"
                  }`}
                >
                  <span className={`w-1 h-1 rounded-full ${
                    isHovered ? "bg-blue-400" : "bg-neutral-800"
                  }`} />
                  <span>{skill.name}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
