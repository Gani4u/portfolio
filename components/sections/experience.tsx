"use client";

import React from "react";
import { experiences } from "../../data/experience";
import { Check } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-black border-b border-neutral-900 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-xs font-mono tracking-widest text-neutral-500 uppercase">
            02 / History
          </h2>
          <h3 className="text-3xl font-bold tracking-tight text-white mt-2">
            Work Experience
          </h3>
        </div>

        {/* Timeline Stack */}
        <div className="relative border-l border-neutral-950 ml-3 space-y-12">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative pl-8 group">
              {/* Timeline Indicator Node */}
              <span className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-neutral-800 group-hover:bg-neutral-600 transition-colors border border-black" />

              {/* Card Container */}
              <div className="p-6 md:p-8 rounded-xl border border-neutral-900 bg-neutral-950/40 hover:bg-neutral-950/80 transition-all hover:border-neutral-800">
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
                    <span className="inline-block text-[10px] font-mono tracking-wider text-neutral-400 bg-neutral-900 px-3 py-1 rounded-md border border-neutral-800">
                      {exp.period}
                    </span>
                    <p className="text-[10px] text-neutral-500 font-mono mt-1">
                      {exp.location}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-sm font-semibold text-neutral-300">
                    {exp.description}
                  </p>

                  <ul className="space-y-2.5 text-xs text-neutral-400">
                    {exp.points.map((pt, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <Check className="w-3.5 h-3.5 text-neutral-600 mt-0.5 flex-shrink-0" />
                        <span className="leading-relaxed">{pt}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Badges */}
                  <div className="pt-4 border-t border-neutral-900/60 flex flex-wrap gap-1.5">
                    {exp.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono text-neutral-400 bg-neutral-900 px-2 py-0.5 rounded"
                      >
                        ✔ {tech}
                      </span>
                    ))}
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
