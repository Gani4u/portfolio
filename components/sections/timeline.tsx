"use client";

import React from "react";
import { ArrowDown, GraduationCap, Code, Briefcase, Search, Award } from "lucide-react";

export function Timeline() {
  const steps = [
    {
      year: "2020",
      title: "Started B.E. in CS",
      subtitle: "B.E. in Computer Science & Engineering",
      description: "Began academic journey in Software Engineering at VTU Belagavi (Karwar, Karnataka). Developed interest in algorithms and database designs.",
      icon: <GraduationCap className="w-4 h-4 text-neutral-400" />
    },
    {
      year: "2023",
      title: "AI Internship & Hackathons",
      subtitle: "Machine Learning & Open Source",
      description: "Gained early hands-on exposure working on predictive modules. Won the Hackzion v.1 Hackathon for creating an innovative open-source web project.",
      icon: <Award className="w-4 h-4 text-neutral-400" />
    },
    {
      year: "2024",
      title: "Graduation (B.E. CSE)",
      subtitle: "VTU Belagavi • 7.09 CGPA",
      description: "Successfully graduated with B.E. degree in Computer Science and Engineering. Co-founded Jester's Club and led cultural events.",
      icon: <GraduationCap className="w-4 h-4 text-neutral-400" />
    },
    {
      year: "2024 – 2025",
      title: "KodNest Specialist Training",
      subtitle: "Java Full Stack Development",
      description: "Joined intensive training program at KodNest Technologies Pvt Ltd. Mastered enterprise Java, Spring Boot, microservices architecture, and SQL database designs.",
      icon: <Code className="w-4 h-4 text-neutral-400" />
    },
    {
      year: "Feb 2025 – Aug 2025",
      title: "Radixile Technologies Solutions",
      subtitle: "Java Full Stack Developer Intern",
      description: "Developed visitor tracking and resident communication REST APIs. Maintained backend microservices using Spring Boot, Hibernate, and PostgreSQL.",
      icon: <Briefcase className="w-4 h-4 text-neutral-400" />
    },
    {
      year: "Sep 2025 – Present",
      title: "eJAmerica",
      subtitle: "Full Stack Developer",
      description: "Working on eJTime multi-tenant SaaS workforce management tool. Engineered time zone translation systems, session tracking APIs, and dashboards using Next.js, NestJS, and Prisma.",
      icon: <Briefcase className="w-4 h-4 text-neutral-400" />
    },
    {
      year: "Active",
      title: "Next Career Milestone",
      subtitle: "Seeking Java Backend / Full Stack Roles",
      description: "Looking for challenges to build scalable backend systems, design distributed architectures, and optimize databases.",
      icon: <Search className="w-4 h-4 text-emerald-400 animate-pulse" />,
      active: true
    }
  ];

  return (
    <section id="timeline" className="py-24 bg-black border-b border-neutral-900 scroll-mt-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-xs font-mono tracking-widest text-neutral-500 uppercase">
            05 / Journey
          </h2>
          <h3 className="text-3xl font-bold tracking-tight text-white mt-2">
            Timeline
          </h3>
        </div>

        {/* Tree List */}
        <div className="relative flex flex-col items-center">
          {steps.map((step, idx) => (
            <React.Fragment key={idx}>
              {/* Card Container */}
              <div className="w-full grid grid-cols-1 md:grid-cols-9 items-center gap-6 relative">
                {/* Left Side: Year Label (Desktop only) */}
                <div className="hidden md:block md:col-span-3 text-right font-mono text-xs font-semibold text-neutral-500">
                  {step.year}
                </div>

                {/* Center Node Column */}
                <div className="hidden md:flex md:col-span-1 justify-center relative">
                  <div className={`w-8 h-8 rounded-full border flex items-center justify-center bg-neutral-950 z-10 ${
                    step.active ? "border-emerald-500 shadow-md shadow-emerald-500/10" : "border-neutral-800"
                  }`}>
                    {step.icon}
                  </div>
                </div>

                {/* Right Side: Timeline Content Box */}
                <div className="md:col-span-5 p-6 rounded-xl border border-neutral-900 bg-neutral-950/40 hover:bg-neutral-950/80 transition-colors">
                  {/* Mobile Year Badge */}
                  <span className="inline-block md:hidden text-[9px] font-mono text-neutral-500 border border-neutral-800 bg-neutral-900 px-2 py-0.5 rounded mb-2">
                    {step.year}
                  </span>
                  
                  <h4 className="text-sm font-bold text-white tracking-tight flex items-center gap-2">
                    {step.title}
                    {step.active && (
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                    )}
                  </h4>
                  <p className="text-[10px] text-neutral-400 font-mono mt-1">
                    {step.subtitle}
                  </p>
                  <p className="text-xs text-neutral-500 leading-relaxed mt-2.5">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Connecting Down Arrow */}
              {idx < steps.length - 1 && (
                <div className="my-4 text-neutral-800">
                  <ArrowDown className="w-4 h-4 animate-bounce" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
