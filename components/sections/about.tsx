"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function About() {
  const metrics = [
    {
      value: "9+ Months",
      label: "Professional Engineering Experience",
      detail: "Building and optimization of enterprise-grade software workflows.",
    },
    {
      value: "4+",
      label: "Real-world Applications",
      detail: "Engineering complete products from conceptual specs to build production.",
    },
    {
      value: "SaaS",
      label: "Enterprise SaaS Architectures",
      detail: "Designing multi-tenant database isolations and user RBAC hierarchies.",
    },
    {
      value: "Production",
      label: "Production Deployments",
      detail: "Managing secure containerized services and RDS configurations.",
    },
  ];

  const highlights = [
    "Specialist in Java RESTful API designs (Spring Boot, Spring Security)",
    "Hands-on expertise in Node.js backend engines (NestJS, Express)",
    "Proficient in database mappings and ORMs (Prisma, Hibernate, JPA)",
    "Experienced in cloud topologies (AWS EC2, AWS S3, AWS RDS)",
    "Advocate of clean code, automated builds, and type safety"
  ];

  return (
    <section id="about" className="py-24 bg-black border-b border-neutral-900 scroll-mt-14">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-xs font-mono tracking-widest text-neutral-500 uppercase">
            01 / Professional Profile
          </h2>
          <h3 className="text-3xl font-bold tracking-tight text-white mt-2">
            Engineering Strategy & Metrics
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Engineering Philosophy Description */}
          <div className="lg:col-span-6 space-y-6 text-neutral-400">
            <p className="text-base leading-relaxed text-neutral-300">
              I am a systems-focused software engineer specializing in scalable backend architectures and modern web integration models. My primary focus revolves around designing type-safe APIs, configuring high-performance data layers, and automating deployment pipelines.
            </p>
            <p className="text-sm leading-relaxed">
              Leveraging Java, Spring Boot, and NestJS, I engineer backend systems that prioritize security (JWT authentication and Role-Based Access Control) and minimize computational latency. I replace traditional monolith complexities with clean, modular, and cloud-ready codebases.
            </p>

            <div className="pt-4 space-y-3">
              <h4 className="text-xs font-mono uppercase text-neutral-500 tracking-wider">
                Engineering Core Competencies
              </h4>
              <ul className="grid grid-cols-1 gap-2.5 text-xs font-mono">
                {highlights.map((h) => (
                  <li key={h} className="flex items-center space-x-2 text-neutral-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-neutral-500 flex-shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Metrics Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {metrics.map((m, index) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="p-6 rounded-xl border border-neutral-900 bg-neutral-950/40 hover:bg-neutral-950/80 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="text-3xl font-extrabold text-white tracking-tight font-mono group-hover:text-blue-500 transition-colors">
                    {m.value}
                  </div>
                  <div className="text-xs text-neutral-300 font-semibold mt-3">
                    {m.label}
                  </div>
                </div>
                <div className="text-xs text-neutral-500 mt-2 leading-relaxed">
                  {m.detail}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
