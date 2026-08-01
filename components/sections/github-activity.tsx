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
}

export function GithubActivity() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    totalStars: 0,
    totalRepos: 18,
    languages: ["Java", "TypeScript", "JavaScript", "HTML", "CSS"],
  });

  const fallbackRepos: Repo[] = [
    {
      name: "LearnSphear",
      description: "E-Learning platform backend build with Spring Boot, JPA, MySQL and full-featured React student/trainer UI dashboards.",
      html_url: "https://github.com/Gani4u/LearnSphear",
      stargazers_count: 2,
      forks_count: 0,
      language: "Java"
    },
    {
      name: "bharath-talent-connect",
      description: "Enterprise candidate matching portal built with Java Spring Boot backend APIs, JWT authorizations, and Next.js interfaces.",
      html_url: "https://github.com/Gani4u/bharath-talent-connect",
      stargazers_count: 1,
      forks_count: 0,
      language: "TypeScript"
    },
    {
      name: "eJTime-SaaS",
      description: "Next.js / NestJS implementation of a multi-tenant business workforce tracking software with timezone offset resolvers.",
      html_url: "https://github.com/Gani4u/bharath-talent-connect",
      stargazers_count: 1,
      forks_count: 1,
      language: "TypeScript"
    }
  ];

  useEffect(() => {
    async function fetchGithubData() {
      try {
        const response = await fetch("https://api.github.com/users/Gani4u/repos?sort=updated&per_page=6");
        if (!response.ok) throw new Error("API rate limited");
        
        const data = await response.json();
        if (Array.isArray(data)) {
          const processedRepos = data.map((item: any) => ({
            name: item.name,
            description: item.description || "No description provided.",
            html_url: item.html_url,
            stargazers_count: item.stargazers_count,
            forks_count: item.forks,
            language: item.language || "Java",
          }));
          
          setRepos(processedRepos.slice(0, 3));
          
          const stars = processedRepos.reduce((acc, curr) => acc + curr.stargazers_count, 0);
          setStats({
            totalStars: stars || 4,
            totalRepos: data.length || 18,
            languages: Array.from(new Set(processedRepos.map((r) => r.language).filter(Boolean))) as string[],
          });
        }
      } catch (err) {
        console.warn("GitHub fetch failed, using fallback repository data", err);
        setRepos(fallbackRepos);
        setStats({
          totalStars: 4,
          totalRepos: 18,
          languages: ["Java", "TypeScript", "JavaScript"],
        });
      } finally {
        setLoading(false);
      }
    }

    fetchGithubData();
  }, []);

  return (
    <section id="github" className="py-24 bg-black border-b border-neutral-900 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-xs font-mono tracking-widest text-neutral-500 uppercase">
            06 / Source
          </h2>
          <h3 className="text-3xl font-bold tracking-tight text-white mt-2">
            GitHub Activity
          </h3>
        </div>

        {/* Info Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          <div className="p-5 rounded-xl border border-neutral-950 bg-neutral-950/40 text-center">
            <h4 className="text-[10px] font-mono uppercase text-neutral-500">Public Repositories</h4>
            <div className="text-3xl font-bold text-white font-mono mt-2">{stats.totalRepos}</div>
          </div>
          <div className="p-5 rounded-xl border border-neutral-950 bg-neutral-950/40 text-center">
            <h4 className="text-[10px] font-mono uppercase text-neutral-500">Total Stars</h4>
            <div className="text-3xl font-bold text-white font-mono mt-2">{stats.totalStars}</div>
          </div>
          <div className="p-5 rounded-xl border border-neutral-950 bg-neutral-950/40 text-center">
            <h4 className="text-[10px] font-mono uppercase text-neutral-500">Core Languages</h4>
            <div className="flex flex-wrap justify-center gap-1.5 mt-3">
              {stats.languages.map((l) => (
                <span
                  key={l}
                  className="text-[9px] font-mono text-neutral-400 bg-neutral-900 px-2 py-0.5 rounded border border-neutral-900"
                >
                  {l}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Repos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {loading ? (
            <div className="col-span-3 py-16 flex items-center justify-center space-x-2 text-xs text-neutral-500">
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Loading GitHub data...</span>
            </div>
          ) : (
            repos.map((repo) => (
              <a
                key={repo.name}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-2xl border border-neutral-900 bg-neutral-950/20 hover:bg-neutral-950/80 transition-all hover:border-neutral-800 flex flex-col justify-between group"
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
                    <span>Code</span>
                    <span>&rarr;</span>
                  </span>
                </div>
              </a>
            ))
          )}
        </div>

        {/* Contribution Graph Heatmap */}
        <div className="p-6 rounded-2xl border border-neutral-900 bg-neutral-950/40 overflow-hidden">
          <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-500 mb-6 flex items-center gap-2">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
            <span>Contribution Heatmap</span>
          </h4>
          <div className="flex justify-center overflow-x-auto select-none py-4">
            <img
              src="https://ghchart.rshah.org/707070/Gani4u"
              alt="Ganesh Chavan's GitHub Contributions Calendar"
              className="max-w-none filter invert opacity-85 hover:opacity-100 transition-opacity"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </div>
          <div className="text-center text-[10px] text-neutral-600 font-mono mt-4">
            Contributions fetched live from github.com/Gani4u
          </div>
        </div>
      </div>
    </section>
  );
}
