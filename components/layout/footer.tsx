"use client";

import React from "react";

export function Footer() {
  const basePath = process.env.NODE_ENV === "production" ? "/portfolio" : "";

  return (
    <footer className="border-t border-neutral-900 bg-black py-12 text-neutral-500 text-xs">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-semibold text-neutral-350">Designed and engineered by Ganesh Chavan.</p>
          <p className="mt-1 text-neutral-600">
            Built with Next.js, TypeScript, Tailwind CSS and Framer Motion. Hosted on GitHub Pages.
          </p>
        </div>

        <div className="flex items-center space-x-6 font-mono text-[10px]">
          <a
            href="https://github.com/Gani4u"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/ganesh-chavan-35435526b"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:ganeshkchavan7777@gmail.com"
            className="hover:text-white transition-colors"
          >
            Email
          </a>
          <a
            href={`${basePath}/resume.pdf`}
            className="hover:text-white transition-colors animate-pulse"
          >
            Resume
          </a>
        </div>
      </div>
    </footer>
  );
}
