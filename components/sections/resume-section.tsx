"use client";

import React from "react";
import { FileText, Download, Eye, ExternalLink } from "lucide-react";

export function ResumeSection() {
  const basePath = process.env.NODE_ENV === "production" ? "/portfolio" : "";

  const handlePreview = () => {
    window.open(`${basePath}/resume.pdf`, "_blank");
  };

  return (
    <section id="resume" className="py-24 bg-black border-b border-neutral-900 scroll-mt-14">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-xs font-mono tracking-widest text-neutral-500 uppercase">
            08 / Documents
          </h2>
          <h3 className="text-3xl font-bold tracking-tight text-white mt-2">
            Professional Resume
          </h3>
        </div>

        {/* Resume Layout Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border border-neutral-900 bg-neutral-950/20 p-8 rounded-2xl">
          {/* Left: Detailed CV representation thumbnail (glass panel layout) */}
          <div className="lg:col-span-5 flex justify-center">
            <div
              onClick={handlePreview}
              className="relative w-64 h-80 bg-neutral-950 rounded-xl border border-neutral-850 shadow-2xl p-5 overflow-hidden group cursor-pointer hover:border-neutral-750 transition-all flex flex-col justify-between"
            >
              {/* Overlay hover effect */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-20">
                <span className="flex items-center space-x-1.5 text-xs px-3.5 py-2 rounded-lg border font-mono shadow-lg" style={{ backgroundColor: "rgba(10, 10, 10, 0.95)", color: "#ffffff", borderColor: "#262626" }}>
                  <Eye className="w-3.5 h-3.5" style={{ stroke: "#ffffff" }} />
                  <span>Open Document</span>
                </span>
              </div>

              {/* Mock Resume Content with styled indicators */}
              <div className="space-y-4 relative z-10 text-[8px] font-mono text-neutral-600">
                {/* Header */}
                <div className="border-b border-neutral-850 pb-3">
                  <div className="text-neutral-300 font-bold text-[10px] tracking-wide">GANESH CHAVAN</div>
                  <div className="text-[7px] text-neutral-500 mt-0.5">ganeshkchavan7777@gmail.com | Bangalore</div>
                </div>

                {/* Summary */}
                <div className="space-y-1">
                  <div className="font-semibold text-neutral-400 uppercase tracking-wider text-[7px]">Summary</div>
                  <div className="w-full h-1.5 bg-neutral-900 rounded" />
                  <div className="w-full h-1.5 bg-neutral-900 rounded" />
                </div>

                {/* Core Expertise highlights */}
                <div className="space-y-1">
                  <div className="font-semibold text-neutral-400 uppercase tracking-wider text-[7px]">Core Stack</div>
                  <div className="flex flex-wrap gap-1">
                    <span className="bg-neutral-900 px-1 py-0.5 rounded text-[6px] text-neutral-300 border border-neutral-850">Java</span>
                    <span className="bg-neutral-900 px-1 py-0.5 rounded text-[6px] text-neutral-300 border border-neutral-850">Spring Boot</span>
                    <span className="bg-neutral-900 px-1 py-0.5 rounded text-[6px] text-neutral-300 border border-neutral-850">Next.js</span>
                    <span className="bg-neutral-900 px-1 py-0.5 rounded text-[6px] text-neutral-300 border border-neutral-850">AWS</span>
                  </div>
                </div>

                {/* Experience */}
                <div className="space-y-1.5">
                  <div className="font-semibold text-neutral-400 uppercase tracking-wider text-[7px]">Experience</div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-neutral-300 font-semibold text-[7px]">
                      <span>Full Stack Developer @ eJAmerica</span>
                      <span>2025-Pres</span>
                    </div>
                    <div className="w-5/6 h-1 bg-neutral-900 rounded" />
                  </div>
                </div>

                {/* Education */}
                <div className="space-y-1.5">
                  <div className="font-semibold text-neutral-400 uppercase tracking-wider text-[7px]">Education</div>
                  <div className="flex justify-between text-neutral-300 text-[7px]">
                    <span>B.E in Computer Science (VTU)</span>
                    <span>2020-2024</span>
                  </div>
                </div>
              </div>

              {/* Card footer */}
              <div className="border-t border-neutral-850 pt-3 flex items-center justify-between text-[9px] font-mono text-neutral-500 relative z-10">
                <span>ganesh_chavan_cv.pdf</span>
                <FileText className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>

          {/* Right: Description & Download / Preview actions */}
          <div className="lg:col-span-7 space-y-6">
            <h4 className="text-xl font-bold text-white tracking-tight">
              Detailed Work History & Qualifications
            </h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Open the complete PDF profile to review backend implementations, system designs, production metrics, academic qualifications (VTU Belagavi Computer Science and Engineering - 7.09 CGPA), and specialized certification achievements.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={handlePreview}
                className="flex items-center justify-center space-x-2 px-4 py-2.5 rounded-lg text-xs font-semibold text-neutral-200 bg-neutral-900 border border-neutral-800 hover:border-neutral-700 hover:text-white transition-all cursor-pointer"
              >
                <Eye className="w-4 h-4" />
                <span>Preview Resume</span>
              </button>
              <a
                href={`${basePath}/resume.pdf`}
                download="Ganesh_Chavan_Resume.pdf"
                className="flex items-center justify-center space-x-2 px-4 py-2.5 rounded-lg text-xs font-semibold text-black bg-white hover:bg-neutral-200 transition-colors cursor-pointer shadow-lg hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </a>
              <a
                href={`${basePath}/resume.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 px-4 py-2.5 rounded-lg text-xs font-semibold text-neutral-400 hover:text-neutral-200 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Open in New Tab</span>
              </a>
            </div>

            <div className="text-[10px] text-neutral-600 font-mono">
              Last compiled: August 2026
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
