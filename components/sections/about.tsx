"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Star, ShieldAlert } from "lucide-react";

export function About() {
  const metrics = [
    {
      value: "2+",
      label: "Years Professional Experience",
      detail: "Building and shipping enterprise software solutions.",
    },
    {
      value: "3+",
      label: "Major Project Architectures",
      detail: "LearnSphere, AquaTrack, and eJTime multi-tenant platform.",
    },
    {
      value: "20+",
      label: "REST APIs Developed",
      detail: "High-performance, secure backend API integrations.",
    },
    {
      value: "100%",
      label: "Production SaaS Uptime",
      detail: "Managing deployments on cloud systems with minimal downtime.",
    },
  ];

  const highlights = [
    "Specialist in Java, Spring Boot, and NestJS backends",
    "Hands-on expertise in Next.js & React single-page architectures",
    "Proficient in database design & ORMs (Prisma, Hibernate, JPA)",
    "Experienced in AWS EC2, S3, and RDS deployments",
    "Passionate about secure auth flows (JWT, OTP, role-based controls)"
  ];

  return (
    <section id="about" className="py-24 bg-black border-b border-neutral-900 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-xs font-mono tracking-widest text-neutral-500 uppercase">
            01 / Profile
          </h2>
          <h3 className="text-3xl font-bold tracking-tight text-white mt-2">
            About & Key Metrics
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Side: Summary & Highlights */}
          <div className="lg:col-span-6 space-y-6 text-neutral-400">
            <p className="text-base leading-relaxed text-neutral-300">
              I am a results-oriented Full Stack Developer specializing in Java, Spring Boot, and NestJS. I build enterprise-grade backend APIs, manage database schemas, and develop responsive, animations-enabled frontend pages using Next.js.
            </p>
            <p className="text-sm leading-relaxed">
              My engineering philosophy focuses on micro-optimization, REST compliance, robust security guardrails (JWT/OTP authentication), and cloud reliability. I enjoy solving architectural bottlenecks and turning complex business demands into clean, scalable software.
            </p>

            <div className="pt-4 space-y-3">
              <h4 className="text-xs font-mono uppercase text-neutral-500 tracking-wider">
                Core Strengths
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
                {highlights.map((h) => (
                  <li key={h} className="flex items-center space-x-2 text-neutral-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-neutral-500 flex-shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Side: Metrics Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {metrics.map((m, index) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-xl border border-neutral-900 bg-neutral-950/40 hover:bg-neutral-950/80 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="text-4xl lg:text-5xl font-bold text-white tracking-tight font-mono group-hover:text-neutral-200 transition-colors">
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
