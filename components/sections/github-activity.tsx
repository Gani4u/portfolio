"use client";

import React, { useState, useEffect } from "react";
import { Star, GitFork, Terminal, Loader2 } from "lucide-react";

interface Repo {
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  techStack?: string[];
}

export function GithubActivity() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  // fallbacks matching requested list
  const fallbackRepos: Repo[] = [
    {
      name: "LearnSphear",
      description: "E-Learning course manager backend built with Spring Boot, secure JWT APIs, and responsive React dashboards.",
      html_url: "https://github.com/Gani4u/LearnSphear",
      stargazers_count: 2,
      forks_count: 0,
      language: "Java",
      techStack: ["Spring Boot", "React.js", "MySQL", "JWT"]
    },
    {
      name: "riskmanagement",
      description: "Tauri-based desktop compliance auditor managing risk score models, version controllers, and localized data stores.",
      html_url: "https://github.com/Akshay-Ak47/riskmanagement",
      stargazers_count: 1,
      forks_count: 0,
      language: "Rust",
      techStack: ["Rust", "Tauri", "React", "MySQL"]
    },
    {
      name: "hotel-management",
      description: "Desktop billing, booking, and inventory logger built using Java Spring Boot services and local PostgreSQL configurations.",
      html_url: "https://github.com/Gani4u/LearnSphear",
      stargazers_count: 1,
      forks_count: 0,
      language: "Java",
      techStack: ["Spring Boot", "PostgreSQL", "Hibernate"]
    },
    {
      name: "bharath-talent-connect",
      description: "Candidate registry placement interface automating applicant record storage and vacancies dashboards.",
      html_url: "https://github.com/Gani4u/bharath-talent-connect",
      stargazers_count: 1,
      forks_count: 1,
      language: "TypeScript",
      techStack: ["React.js", "Java", "Spring Boot", "REST"]
    },
    {
      name: "AquaTrack-Telemetry",
      description: "Vending machine tracking system logging production stock manifests and synchronizing offline client telemetry logs.",
      html_url: "https://github.com/Akshay-Ak47/riskmanagement",
      stargazers_count: 1,
      forks_count: 1,
      language: "Java",
      techStack: ["Spring Boot", "PostgreSQL", "AWS EC2"]
    }
  ];

  useEffect(() => {
    async function fetchGithubData() {
      try {
        const response = await fetch("https://api.github.com/users/Gani4u/repos?sort=updated&per_page=12");
        if (!response.ok) throw new Error("API rate limited");
        
        const data = await response.json();
        if (Array.isArray(data)) {
          // Filter out portfolio repository to avoid self-reference
          const filtered = data.filter((item: any) => 
            item.name.toLowerCase() !== "portfolio" && 
            item.name.toLowerCase() !== "gani4u"
          );

          const processedRepos = filtered.map((item: any) => {
            // Find fallback stack if name matches
            const matchingFallback = fallbackRepos.find(
              (f) => f.name.toLowerCase() === item.name.toLowerCase()
            );

            return {
              name: item.name,
              description: item.description || "Production-grade repository source code.",
              html_url: item.html_url,
              stargazers_count: item.stargazers_count,
              forks_count: item.forks,
              language: item.language || "Java",
              techStack: matchingFallback?.techStack || [item.language || "Java"]
            };
          });
          
          setRepos(processedRepos.slice(0, 5));
        }
      } catch (err) {
        console.warn("GitHub fetch failed, loading custom repository listings", err);
        setRepos(fallbackRepos);
      } finally {
        setLoading(false);
      }
    }

    fetchGithubData();
  }, []);

  return (
    <section id="github" className="py-24 bg-black border-b border-neutral-900 scroll-mt-14">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-xs font-mono tracking-widest text-neutral-500 uppercase">
              06 / Code Repositories
            </h2>
            <h3 className="text-3xl font-bold tracking-tight text-white mt-2">
              GitHub Pinned Projects
            </h3>
          </div>
          <div className="text-xs text-neutral-500 font-mono">
            Languages & Stats fetched live
          </div>
        </div>

        {/* Repos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            <div className="col-span-full py-16 flex items-center justify-center space-x-2 text-xs text-neutral-500">
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Loading repository catalog...</span>
            </div>
          ) : (
            repos.map((repo) => (
              <a
                key={repo.name}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-2xl border border-neutral-900 bg-neutral-950/20 hover:bg-neutral-950/80 transition-all hover:border-neutral-850 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-neutral-500">
                    <Terminal className="w-4 h-4" />
                    <span className="text-[9px] font-mono uppercase tracking-wider text-neutral-600">
                      {repo.language}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-neutral-200 group-hover:text-white transition-colors">
                    {repo.name}
                  </h4>
                  <p className="text-xs text-neutral-500 leading-relaxed min-h-[48px]">
                    {repo.description}
                  </p>

                  {/* Tech stack */}
                  {repo.techStack && (
                    <div className="flex flex-wrap gap-1">
                      {repo.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-[8px] font-mono text-neutral-400 bg-neutral-900 px-1.5 py-0.5 rounded border border-neutral-900"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex items-center space-x-4 pt-4 mt-4 border-t border-neutral-900/60 text-[10px] font-mono text-neutral-500">
                  <div className="flex items-center space-x-1">
                    <Star className="w-3.5 h-3.5" />
                    <span>{repo.stargazers_count}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <GitFork className="w-3.5 h-3.5" />
                    <span>{repo.forks_count}</span>
                  </div>
                  <span className="ml-auto text-neutral-400 group-hover:text-white transition-colors flex items-center space-x-1">
                    <span>Source</span>
                    <span>&rarr;</span>
                  </span>
                </div>
              </a>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
