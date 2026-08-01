"use client";

import React from "react";
import { FileText, Download, Eye } from "lucide-react";

export function ResumeSection() {
  const handlePreview = () => {
    window.open("/portfolio/resume.pdf", "_blank");
  };

  return (
    <section id="resume" className="py-24 bg-black border-b border-neutral-900 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-xs font-mono tracking-widest text-neutral-500 uppercase">
            08 / Document
          </h2>
          <h3 className="text-3xl font-bold tracking-tight text-white mt-2">
            Curriculum Vitae
          </h3>
        </div>

        {/* Resume Layout Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border border-neutral-900 bg-neutral-950/20 p-8 rounded-2xl">
          {/* Left: Mock Thumbnail representation of CV */}
          <div className="lg:col-span-5 flex justify-center">
            <div
              onClick={handlePreview}
              className="relative w-64 h-80 bg-neutral-900 rounded-xl border border-neutral-800 shadow-2xl p-5 overflow-hidden group cursor-pointer hover:border-neutral-700 transition-all flex flex-col justify-between"
            >
              {/* Overlay hover effect */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="flex items-center space-x-1 text-xs text-white bg-neutral-950/80 px-3 py-1.5 rounded-lg border border-neutral-800 font-mono shadow-md">
                  <Eye className="w-3.5 h-3.5" />
                  <span>Preview PDF</span>
                </span>
              </div>

              {/* Mock Resume Content */}
              <div className="space-y-4">
                {/* Header */}
                <div className="border-b border-neutral-800 pb-3">
                  <div className="w-24 h-3 bg-neutral-800 rounded mb-1.5" />
                  <div className="w-16 h-2 bg-neutral-850 rounded" />
                </div>
                {/* Body lines */}
                <div className="space-y-2">
                  <div className="w-full h-2 bg-neutral-850 rounded" />
                  <div className="w-5/6 h-2 bg-neutral-850 rounded" />
                  <div className="w-4/6 h-2 bg-neutral-850 rounded" />
                </div>
                {/* Sub headers */}
                <div className="pt-2 space-y-1.5">
                  <div className="w-14 h-2 bg-neutral-800 rounded" />
                  <div className="w-full h-1.5 bg-neutral-850 rounded" />
                  <div className="w-5/6 h-1.5 bg-neutral-850 rounded" />
                </div>
              </div>

              <div className="border-t border-neutral-800 pt-3 flex items-center justify-between text-[10px] font-mono text-neutral-500">
                <span>ganesh_resume.pdf</span>
                <FileText className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>

          {/* Right: Description & Download / Preview actions */}
          <div className="lg:col-span-7 space-y-6">
            <h4 className="text-lg font-bold text-white tracking-tight">
              Looking for a backend specialist?
            </h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              My resume outlines my experience building multi-tenant SaaS features at eJAmerica, designing RESTful APIs in Spring Boot during my intern at Radixile, and details my complete skillset across Java, NestJS, Prisma, PostgreSQL, Next.js, and AWS.
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
                href="/portfolio/resume.pdf"
                download="Ganesh_Chavan_Resume.pdf"
                className="flex items-center justify-center space-x-2 px-4 py-2.5 rounded-lg text-xs font-semibold text-black bg-white hover:bg-neutral-200 transition-colors cursor-pointer shadow-md"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </a>
            </div>

            <div className="text-[10px] text-neutral-600 font-mono">
              Last updated: August 2026
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
