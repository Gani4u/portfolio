"use client";

import React, { useState } from "react";
import { Project, projects, secondaryProjects } from "../../data/projects";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X, Check, ArrowRight, ShieldCheck, Database, Award } from "lucide-react";

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const getArchitectureDiagram = (projectId: string) => {
    switch (projectId) {
      case "ejtime":
        return (
          <div className="border border-neutral-800 rounded-lg p-6 bg-neutral-950 font-mono text-xs text-neutral-400 space-y-4">
            <div className="text-center font-bold text-white border-b border-neutral-900 pb-2 mb-4">
              System Architecture Flow
            </div>
            <div className="flex flex-col items-center space-y-3">
              <div className="px-4 py-2 border border-neutral-700 bg-neutral-900 text-white rounded text-center w-full max-w-sm">
                Next.js Web / Desktop / Mobile Client
              </div>
              <div className="h-6 w-0.5 bg-neutral-800" />
              <div className="px-4 py-2 border border-neutral-700 bg-neutral-900 text-white rounded text-center w-full max-w-sm relative">
                NestJS REST API Server
                <span className="absolute right-2 top-2 text-[9px] bg-neutral-800 px-1.5 py-0.5 rounded text-neutral-400">
                  JWT Guard
                </span>
              </div>
              <div className="h-6 w-0.5 bg-neutral-800" />
              <div className="px-4 py-2 border border-neutral-700 bg-neutral-900 text-white rounded text-center w-full max-w-sm">
                Prisma ORM Client Layer
              </div>
              <div className="h-6 w-0.5 bg-neutral-800" />
              <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
                <div className="px-3 py-2 border border-neutral-880 bg-neutral-950 text-neutral-300 rounded text-center">
                  MySQL Database
                </div>
                <div className="px-3 py-2 border border-neutral-880 bg-neutral-950 text-neutral-300 rounded text-center">
                  OTP Email Service
                </div>
              </div>
            </div>
          </div>
        );
      case "aquatrack":
        return (
          <div className="border border-neutral-800 rounded-lg p-6 bg-neutral-950 font-mono text-xs text-neutral-400 space-y-4">
            <div className="text-center font-bold text-white border-b border-neutral-900 pb-2 mb-4">
              Cloud Deployment Topology
            </div>
            <div className="flex flex-col items-center space-y-3">
              <div className="px-4 py-2 border border-neutral-700 bg-neutral-900 text-white rounded text-center w-full max-w-sm">
                React Frontend Dashboard
              </div>
              <div className="h-6 w-0.5 bg-neutral-800" />
              <div className="px-4 py-2 border border-neutral-700 bg-neutral-900 text-white rounded text-center w-full max-w-sm relative">
                AWS EC2: Spring Boot API Server
                <span className="absolute right-2 top-2 text-[9px] bg-neutral-800 px-1.5 py-0.5 rounded text-neutral-400">
                  Spring Security
                </span>
              </div>
              <div className="h-6 w-0.5 bg-neutral-800" />
              <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
                <div className="px-3 py-2 border border-neutral-880 bg-neutral-950 text-neutral-300 rounded text-center">
                  AWS RDS: PostgreSQL
                </div>
                <div className="px-3 py-2 border border-neutral-880 bg-neutral-950 text-neutral-300 rounded text-center">
                  AWS S3: Asset Store
                </div>
              </div>
            </div>
          </div>
        );
      case "learnsphere":
        return (
          <div className="border border-neutral-800 rounded-lg p-6 bg-neutral-950 font-mono text-xs text-neutral-400 space-y-4">
            <div className="text-center font-bold text-white border-b border-neutral-900 pb-2 mb-4">
              E-Learning Ecosystem Structure
            </div>
            <div className="flex flex-col items-center space-y-3">
              <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
                <div className="px-3 py-2 border border-neutral-880 bg-neutral-900 text-neutral-200 rounded text-center">
                  Student Portal (React)
                </div>
                <div className="px-3 py-2 border border-neutral-880 bg-neutral-900 text-neutral-200 rounded text-center">
                  Trainer Panel (React)
                </div>
              </div>
              <div className="h-6 w-0.5 bg-neutral-800" />
              <div className="px-4 py-2 border border-neutral-700 bg-neutral-900 text-white rounded text-center w-full max-w-sm">
                Spring Boot REST Endpoints + JPA
              </div>
              <div className="h-6 w-0.5 bg-neutral-800" />
              <div className="px-4 py-2 border border-neutral-885 bg-neutral-950 text-neutral-300 rounded text-center w-full max-w-sm">
                MySQL Database (Users, Lessons, Submissions)
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="projects" className="py-24 bg-black border-b border-neutral-900 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-xs font-mono tracking-widest text-neutral-500 uppercase">
            04 / Portfolio
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
              className="group relative flex flex-col justify-between p-6 rounded-2xl border border-neutral-900 bg-neutral-950/40 hover:bg-neutral-950/90 transition-all hover:border-neutral-800"
            >
              {/* Highlight Tag */}
              {project.id === "ejtime" && (
                <span className="absolute top-4 right-4 bg-emerald-950 text-emerald-400 border border-emerald-900 px-2 py-0.5 rounded text-[9px] font-mono font-semibold uppercase tracking-wider">
                  Featured
                </span>
              )}

              <div className="space-y-4">
                <h4 className="text-xs font-mono text-neutral-500">{project.subtitle}</h4>
                <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-neutral-200 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="text-[9px] font-mono text-neutral-500 bg-neutral-900 px-2 py-0.5 rounded border border-neutral-900"
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

        {/* Other Open Source Projects Section */}
        <div className="mt-20">
          <div className="mb-8 border-b border-neutral-900 pb-4">
            <h4 className="text-xs font-mono uppercase text-neutral-500 tracking-wider">
              Other Contributions & Repositories
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {secondaryProjects.map((proj) => (
              <div
                key={proj.title}
                className="p-5 rounded-xl border border-neutral-950 bg-neutral-950/20 hover:bg-neutral-950/40 hover:border-neutral-900 transition-all flex items-start justify-between gap-4 group"
              >
                <div className="space-y-2">
                  <h5 className="text-sm font-bold text-neutral-200 group-hover:text-white transition-colors">
                    {proj.title}
                  </h5>
                  <p className="text-xs text-neutral-500 leading-relaxed max-w-md">
                    {proj.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {proj.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[9px] font-mono text-neutral-500 bg-neutral-900/60 px-1.5 py-0.5 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {proj.githubUrl && (
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg border border-neutral-900 hover:border-neutral-800 text-neutral-500 hover:text-neutral-300 transition-colors flex-shrink-0"
                    aria-label="GitHub repo"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                    </svg>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Case Study Dialog Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative max-w-3xl w-full bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden shadow-2xl flex flex-col max-h-[85vh] text-neutral-200"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800 bg-neutral-950/60 backdrop-blur-md">
                <div>
                  <div className="text-[10px] font-mono text-neutral-500 uppercase">
                    {selectedProject.role}
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {selectedProject.title} &mdash; Case Study
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1 rounded-lg hover:bg-neutral-800 text-neutral-400 hover:text-neutral-100 transition-colors"
                  aria-label="Close case study"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Scrollable Container */}
              <div className="overflow-y-auto p-6 md:p-8 space-y-8 scrollbar-thin scrollbar-thumb-neutral-800">
                {/* Intro details */}
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

                {/* Key Metrics block */}
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

                {/* Features block */}
                <div className="space-y-3">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 flex items-center space-x-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-neutral-500" />
                    <span>Key Features implemented</span>
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-neutral-400">
                    {selectedProject.features.map((feat) => (
                      <li key={feat} className="flex items-start space-x-2">
                        <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Problem Statement */}
                <div className="space-y-3">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                    The Problem
                  </h4>
                  <p className="text-xs leading-relaxed text-neutral-400">
                    {selectedProject.caseStudy.problem}
                  </p>
                </div>

                {/* System Architecture */}
                <div className="space-y-3">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                    System Architecture
                  </h4>
                  {getArchitectureDiagram(selectedProject.id)}
                </div>

                {/* Database Design */}
                <div className="space-y-3">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 flex items-center space-x-2">
                    <Database className="w-3.5 h-3.5 text-neutral-500" />
                    <span>Database Schema Design</span>
                  </h4>
                  <p className="text-xs leading-relaxed text-neutral-400 border-l border-neutral-800 pl-3">
                    {selectedProject.caseStudy.databaseDesign}
                  </p>
                </div>

                {/* Challenges and Solutions */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-neutral-800/60">
                  <div className="space-y-2">
                    <h5 className="text-xs font-mono uppercase tracking-wider text-red-500/80">
                      Technical Challenge
                    </h5>
                    <p className="text-xs leading-relaxed text-neutral-400">
                      {selectedProject.caseStudy.challenges}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h5 className="text-xs font-mono uppercase tracking-wider text-emerald-500/80">
                      Engineering Solution
                    </h5>
                    <p className="text-xs leading-relaxed text-neutral-400">
                      {selectedProject.caseStudy.solution}
                    </p>
                  </div>
                </div>

                {/* Learnings */}
                <div className="space-y-3 pt-4 border-t border-neutral-800/60">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 flex items-center space-x-2">
                    <Award className="w-3.5 h-3.5 text-neutral-500" />
                    <span>Key Lessons learned</span>
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
    </section>
  );
}
