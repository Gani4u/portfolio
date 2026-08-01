"use client";

import React, { useState, useEffect } from "react";
import { Star, GitFork, Terminal, ExternalLink } from "lucide-react";

interface Repo {
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  techStack: string[];
}

export function GithubActivity() {
  const [repos] = useState<Repo[]>([
    {
      name: "LearnSpear",
      description: "E-Learning course manager backend built with Spring Boot, secure JWT APIs, and responsive React dashboards.",
      html_url: "https://github.com/Gani4u/LearnSphear",
      stargazers_count: 2,
      forks_count: 0,
      language: "Java",
      techStack: ["Spring Boot", "React.js", "MySQL", "JWT"]
    },
    {
      name: "Food Dynasty",
      description: "A premium restaurant landing and food browsing web application highlighting menu items and reservation workflows.",
      html_url: "https://walio25.github.io/food-dynasty/",
      stargazers_count: 3,
      forks_count: 1,
      language: "JavaScript",
      techStack: ["HTML5", "CSS3", "Vanilla JS", "Responsive"]
    },
    {
      name: "Bharath Talent Connect",
      description: "Candidate registry placement interface automating applicant record storage and vacancies dashboards.",
      html_url: "https://gani4u.github.io/bharath-talent-connect",
      stargazers_count: 2,
      forks_count: 1,
      language: "TypeScript",
      techStack: ["React.js", "Java", "Spring Boot", "REST"]
    }
  ]);

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
            Direct reference source links
          </div>
        </div>

        {/* Repos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {repos.map((repo) => (
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
                  <span>Visit Live</span>
                  <ExternalLink className="w-3 h-3" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
