"use client";

import React from "react";
import { experiences } from "../../data/experience";
import { Check, ShieldCheck, Zap, Cpu, Award } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-black border-b border-neutral-900 scroll-mt-14">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-xs font-mono tracking-widest text-neutral-500 uppercase">
            02 / Work History
          </h2>
          <h3 className="text-3xl font-bold tracking-tight text-white mt-2">
            Engineering Experience
          </h3>
        </div>

        {/* Timeline Stack */}
        <div className="relative border-l border-neutral-900 ml-3 space-y-12">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative pl-8 group animate-reveal">
              {/* Timeline dot */}
              <span className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-neutral-850 border border-black group-hover:border-blue-500 transition-colors" />

              {/* Card container */}
              <div className="p-6 md:p-8 rounded-xl border border-neutral-900 bg-neutral-950/40 hover:bg-neutral-950/80 transition-all hover:border-neutral-850">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <h4 className="text-lg font-bold text-white tracking-tight">
                      {exp.company}
                    </h4>
                    <p className="text-xs text-neutral-400 font-mono mt-1">
                      {exp.role}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="inline-block text-[10px] font-mono tracking-wider text-neutral-400 bg-neutral-900 px-3 py-1 rounded-md border border-neutral-850">
                      {exp.period}
                    </span>
                    <p className="text-[10px] text-neutral-500 font-mono mt-1">
                      {exp.location}
                    </p>
                  </div>
                </div>

                <p className="text-sm font-medium text-neutral-300 mb-6 leading-relaxed">
                  {exp.summary}
                </p>

                {/* Grouped content sections: Impact, Features, Technologies, Business Value */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-neutral-900/60">
                  {/* Engineering Impact */}
                  <div className="space-y-3">
                    <h5 className="text-xs font-mono uppercase text-blue-400 flex items-center space-x-1.5">
                      <Zap className="w-3.5 h-3.5" />
                      <span>Engineering Impact</span>
                    </h5>
                    <ul className="space-y-2 text-xs text-neutral-400">
                      {exp.impact.map((pt, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <Check className="w-3.5 h-3.5 text-neutral-600 mt-0.5 flex-shrink-0" />
                          <span className="leading-relaxed">{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Key Features */}
                  <div className="space-y-3">
                    <h5 className="text-xs font-mono uppercase text-neutral-400 flex items-center space-x-1.5">
                      <Cpu className="w-3.5 h-3.5" />
                      <span>Key Features Developed</span>
                    </h5>
                    <ul className="space-y-2 text-xs text-neutral-400">
                      {exp.features.map((ft, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <Check className="w-3.5 h-3.5 text-neutral-600 mt-0.5 flex-shrink-0" />
                          <span className="leading-relaxed">{ft}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Lower Row: Technologies & Business Value */}
                <div className="mt-6 pt-6 border-t border-neutral-900/40 grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Technologies */}
                  <div className="space-y-2">
                    <h5 className="text-xs font-mono uppercase text-neutral-500">Technologies</h5>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-[9px] font-mono text-neutral-400 bg-neutral-900 px-2 py-0.5 rounded border border-neutral-900"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Business Value */}
                  <div className="space-y-2">
                    <h5 className="text-xs font-mono uppercase text-emerald-400 flex items-center space-x-1.5">
                      <Award className="w-3.5 h-3.5" />
                      <span>Business Value Delivered</span>
                    </h5>
                    <p className="text-xs text-neutral-400 leading-relaxed italic border-l border-neutral-850 pl-3">
                      {exp.value}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
