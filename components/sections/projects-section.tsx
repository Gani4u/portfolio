"use client";

import React, { useState } from "react";
import { Project, projects, businessSolutions } from "../../data/projects";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X, Check, ArrowRight, ShieldCheck, Database, Award, Monitor, Landmark, Globe } from "lucide-react";

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedSolution, setSelectedSolution] = useState<any | null>(null);

  const getArchitectureDiagram = (projectId: string) => {
    switch (projectId) {
      case "learnsphere":
        return (
          <div className="border border-neutral-800 rounded-lg p-6 bg-neutral-950 font-mono text-xs text-neutral-400 space-y-4">
            <div className="text-center font-bold text-white border-b border-neutral-900 pb-2 mb-4">
              System Flow Topology
            </div>
            <div className="flex flex-col items-center space-y-3">
              <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
                <div className="px-3 py-2 border border-neutral-800 bg-neutral-900 text-neutral-200 rounded text-center">
                  Student Panel (React)
                </div>
                <div className="px-3 py-2 border border-neutral-800 bg-neutral-900 text-neutral-200 rounded text-center">
                  Trainer Panel (React)
                </div>
              </div>
              <div className="h-6 w-0.5 bg-neutral-800" />
              <div className="px-4 py-2 border border-neutral-700 bg-neutral-900 text-white rounded text-center w-full max-w-sm">
                Spring Boot REST Controller + Security
              </div>
              <div className="h-6 w-0.5 bg-neutral-800" />
              <div className="px-4 py-2 border border-neutral-850 bg-neutral-950 text-neutral-300 rounded text-center w-full max-w-sm">
                Relational MySQL Database Schema
              </div>
            </div>
          </div>
        );
      case "tsd":
        return (
          <div className="border border-neutral-800 rounded-lg p-6 bg-neutral-950 font-mono text-xs text-neutral-400 space-y-4">
            <div className="text-center font-bold text-white border-b border-neutral-900 pb-2 mb-4">
              TSD World System Flow
            </div>
            <div className="flex flex-col items-center space-y-3">
              <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
                <div className="px-3 py-2 border border-neutral-800 bg-neutral-900 text-neutral-200 rounded text-center">
                  Customer Store (React Web)
                </div>
                <div className="px-3 py-2 border border-neutral-800 bg-neutral-900 text-neutral-200 rounded text-center">
                  Admin Panel (Tauri Desktop)
                </div>
              </div>
              <div className="h-6 w-0.5 bg-neutral-800" />
              <div className="px-4 py-2 border border-neutral-700 bg-neutral-900 text-white rounded text-center w-full max-w-sm relative">
                Hostinger Server (PHP REST API)
                <span className="absolute right-2 top-2 text-[9px] bg-neutral-850 px-1.5 py-0.5 rounded text-neutral-400">
                  CORS Enabled
                </span>
              </div>
              <div className="h-6 w-0.5 bg-neutral-800" />
              <div className="grid grid-cols-3 gap-2 w-full max-w-sm">
                <div className="px-2 py-2 border border-neutral-850 bg-neutral-950 text-neutral-300 rounded text-center text-[10px]">
                  MySQL DB
                </div>
                <div className="px-2 py-2 border border-neutral-850 bg-neutral-950 text-neutral-300 rounded text-center text-[10px]">
                  Razorpay SDK
                </div>
                <div className="px-2 py-2 border border-neutral-850 bg-neutral-950 text-neutral-300 rounded text-center text-[10px]">
                  Shipment API
                </div>
              </div>
            </div>
          </div>
        );
      case "riskmanagement":
        return (
          <div className="border border-neutral-800 rounded-lg p-6 bg-neutral-950 font-mono text-xs text-neutral-400 space-y-4">
            <div className="text-center font-bold text-white border-b border-neutral-900 pb-2 mb-4">
              Tauri Native Core Topology
            </div>
            <div className="flex flex-col items-center space-y-3">
              <div className="px-4 py-2 border border-neutral-700 bg-neutral-900 text-white rounded text-center w-full max-w-sm">
                Tauri Desktop Frame (React.js UI)
              </div>
              <div className="h-6 w-0.5 bg-neutral-800" />
              <div className="px-4 py-2 border border-neutral-700 bg-neutral-900 text-white rounded text-center w-full max-w-sm relative">
                Rust Native Backend Thread
                <span className="absolute right-2 top-2 text-[9px] bg-neutral-800 px-1.5 py-0.5 rounded text-neutral-400">
                  Native IPC Channels
                </span>
              </div>
              <div className="h-6 w-0.5 bg-neutral-800" />
              <div className="px-4 py-2 border border-neutral-850 bg-neutral-950 text-neutral-300 rounded text-center w-full max-w-sm">
                Local SQLite / MySQL Instance
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="projects" className="py-24 bg-black border-b border-neutral-900 scroll-mt-14">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-xs font-mono tracking-widest text-neutral-500 uppercase">
            03 / Code Portfolio
          </h2>
          <h3 className="text-3xl font-bold tracking-tight text-white mt-2">
            Featured Projects
          </h3>
        </div>

        {/* Premium Project Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative flex flex-col justify-between p-6 rounded-2xl border border-neutral-900 bg-neutral-950/40 hover:bg-neutral-950/90 transition-all hover:border-neutral-850"
            >
              {project.id === "riskmanagement" && (
                <span className="absolute top-4 right-4 bg-blue-950 text-blue-400 border border-blue-900 px-2.5 py-0.5 rounded text-[8px] font-mono font-semibold uppercase tracking-wider">
                  Desktop app
                </span>
              )}

              <div className="space-y-4">
                <h4 className="text-xs font-mono text-neutral-500">{project.subtitle}</h4>
                <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-neutral-200 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed min-h-[64px]">
                  {project.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="text-[9px] font-mono text-neutral-400 bg-neutral-900 px-2 py-0.5 rounded border border-neutral-900"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="text-[9px] font-mono text-neutral-600 px-2 py-0.5">
                      +{project.techStack.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between gap-4 pt-6 mt-6 border-t border-neutral-900/60">
                <button
                  id={`btn-case-study-${project.id}`}
                  onClick={() => setSelectedProject(project)}
                  className="flex items-center space-x-1.5 text-xs text-neutral-300 hover:text-white transition-colors group/btn"
                >
                  <span>View Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover/btn:translate-x-0.5 transition-transform" />
                </button>

                <div className="flex items-center space-x-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg border border-neutral-900 hover:border-neutral-800 text-neutral-500 hover:text-neutral-300 transition-colors"
                      aria-label="Source code"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                      </svg>
                    </a>
                  )}
                  {project.liveUrl && project.liveUrl !== "#" && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg border border-neutral-900 hover:border-neutral-800 text-neutral-500 hover:text-neutral-300 transition-colors"
                      aria-label="Live demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Business Solutions Section */}
        <div className="mt-24">
          <div className="mb-12 border-b border-neutral-900 pb-4">
            <h4 className="text-xs font-mono uppercase text-neutral-500 tracking-wider">
              Business Solutions & Case Studies
            </h4>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {businessSolutions.map((solution) => (
              <div
                key={solution.id}
                className="p-6 md:p-8 rounded-2xl border border-neutral-900 bg-neutral-950/20 hover:bg-neutral-950/40 transition-all flex flex-col justify-between gap-6"
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                  <div className="space-y-3 lg:max-w-2xl">
                    <span className="inline-flex items-center space-x-1.5 text-[9px] font-mono text-emerald-400 bg-emerald-950/20 border border-emerald-900/60 px-2 py-0.5 rounded">
                      <Landmark className="w-3 h-3" />
                      <span>Commercial Client Delivery</span>
                    </span>
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {solution.title}
                    </h3>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      {solution.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {solution.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-[9px] font-mono text-neutral-500 bg-neutral-900 px-2 py-0.5 rounded border border-neutral-900"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex-shrink-0 flex items-center space-x-3">
                    <button
                      onClick={() => setSelectedSolution(solution)}
                      className="flex items-center space-x-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-neutral-200 bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition-all"
                    >
                      <span>Explore Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    {solution.liveUrl && (
                      <a
                        href={solution.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg border border-neutral-900 hover:border-neutral-800 text-neutral-500 hover:text-neutral-300 transition-colors"
                        aria-label="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    {solution.githubUrl && (
                      <a
                        href={solution.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg border border-neutral-900 hover:border-neutral-800 text-neutral-500 hover:text-neutral-300 transition-colors"
                        aria-label="GitHub Repo"
                      >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Case Study Dialog Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-w-3xl w-full bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden shadow-2xl flex flex-col max-h-[85vh] text-neutral-200"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800 bg-neutral-950/60 backdrop-blur-md">
                <div>
                  <div className="text-[10px] font-mono text-neutral-500 uppercase">
                    {selectedProject.role}
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {selectedProject.title} &mdash; Project Case Study
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1 rounded-lg hover:bg-neutral-850 text-neutral-400 hover:text-neutral-100 transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Scrollable Content */}
              <div className="overflow-y-auto p-6 md:p-8 space-y-8 scrollbar-thin scrollbar-thumb-neutral-800">
                <div className="space-y-3">
                  <p className="text-sm leading-relaxed text-neutral-300">
                    {selectedProject.longDescription}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {selectedProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono text-neutral-400 bg-neutral-950 px-2.5 py-1 rounded-md border border-neutral-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {selectedProject.metrics && (
                  <div className="grid grid-cols-3 gap-4 p-4 border border-neutral-800 rounded-lg bg-neutral-950/40">
                    {selectedProject.metrics.map((m) => (
                      <div key={m.label} className="text-center">
                        <div className="text-lg font-bold text-white font-mono">{m.value}</div>
                        <div className="text-[10px] text-neutral-500 uppercase mt-0.5">{m.label}</div>
                      </div>
                    ))}
                  </div>
                )}

                <div className="space-y-3">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 flex items-center space-x-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-neutral-500" />
                    <span>Core Features Implemented</span>
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-neutral-400">
                    {selectedProject.features.map((feat) => (
                      <li key={feat} className="flex items-start space-x-2">
                        <Check className="w-3.5 h-3.5 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                    The Problem
                  </h4>
                  <p className="text-xs leading-relaxed text-neutral-400">
                    {selectedProject.caseStudy.problem}
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                    System Architecture
                  </h4>
                  {getArchitectureDiagram(selectedProject.id)}
                </div>

                <div className="space-y-3">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 flex items-center space-x-2">
                    <Database className="w-3.5 h-3.5 text-neutral-500" />
                    <span>Database Schema Design</span>
                  </h4>
                  <p className="text-xs leading-relaxed text-neutral-400 border-l border-neutral-850 pl-3">
                    {selectedProject.caseStudy.databaseDesign}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-neutral-800/60">
                  <div className="space-y-2">
                    <h5 className="text-xs font-mono uppercase text-red-500/80">
                      Technical Challenge
                    </h5>
                    <p className="text-xs leading-relaxed text-neutral-400">
                      {selectedProject.caseStudy.challenges}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h5 className="text-xs font-mono uppercase text-blue-500/80">
                      Engineering Solution
                    </h5>
                    <p className="text-xs leading-relaxed text-neutral-400">
                      {selectedProject.caseStudy.solution}
                    </p>
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t border-neutral-800/60">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 flex items-center space-x-2">
                    <Award className="w-3.5 h-3.5 text-neutral-500" />
                    <span>Key Learnings</span>
                  </h4>
                  <p className="text-xs leading-relaxed text-neutral-400">
                    {selectedProject.caseStudy.learnings}
                  </p>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="flex items-center justify-end space-x-3 px-6 py-4 border-t border-neutral-800 bg-neutral-950/40">
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-3 py-1.5 rounded-lg border border-neutral-800 hover:border-neutral-700 text-xs text-neutral-400 hover:text-neutral-200 transition-colors"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                    </svg>
                    <span>View Repository</span>
                  </a>
                )}
                {selectedProject.liveUrl && selectedProject.liveUrl !== "#" && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-3 py-1.5 rounded-lg text-xs font-medium text-black bg-white hover:bg-neutral-200 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Business Solution Case Study Dialog */}
      <AnimatePresence>
        {selectedSolution && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedSolution(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-w-3xl w-full bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden shadow-2xl flex flex-col max-h-[85vh] text-neutral-200"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800 bg-neutral-950/60 backdrop-blur-md">
                <div>
                  <div className="text-[10px] font-mono text-neutral-500 uppercase">
                    Commercial Case Study
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {selectedSolution.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedSolution(null)}
                  className="p-1 rounded-lg hover:bg-neutral-850 text-neutral-400 hover:text-neutral-100 transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Content */}
              <div className="overflow-y-auto p-6 md:p-8 space-y-8 scrollbar-thin scrollbar-thumb-neutral-800">
                <div className="space-y-3">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                    Client Problem
                  </h4>
                  <p className="text-xs sm:text-sm leading-relaxed text-neutral-300">
                    {selectedSolution.problem}
                  </p>
                </div>

                <div className="space-y-3 border-t border-neutral-800/60 pt-6">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                    My Solution
                  </h4>
                  <p className="text-xs sm:text-sm leading-relaxed text-neutral-300">
                    {selectedSolution.solution}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {selectedSolution.techStack.map((tech: string) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono text-neutral-400 bg-neutral-950 px-2.5 py-1 rounded-md border border-neutral-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-3 border-t border-neutral-800/60 pt-6">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 flex items-center space-x-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-neutral-500" />
                    <span>Business Impact & Results</span>
                  </h4>
                  <ul className="space-y-2.5 text-xs text-neutral-400">
                    {selectedSolution.impact.map((imp: string, i: number) => (
                      <li key={i} className="flex items-start space-x-2">
                        <Check className="w-3.5 h-3.5 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{imp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-end px-6 py-4 border-t border-neutral-800 bg-neutral-950/40">
                {selectedSolution.githubUrl && (
                  <a
                    href={selectedSolution.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 rounded-lg border border-neutral-800 hover:border-neutral-700 text-xs text-neutral-400 hover:text-neutral-200 transition-colors"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                    </svg>
                    <span>View Repository</span>
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
