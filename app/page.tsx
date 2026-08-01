import React from "react";
import { Header } from "@/components/layout/header";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Skills } from "@/components/sections/skills";
import { ProjectsSection } from "@/components/sections/projects-section";
import { Timeline } from "@/components/sections/timeline";
import { GithubActivity } from "@/components/sections/github-activity";
import { Achievements } from "@/components/sections/achievements";
import { ResumeSection } from "@/components/sections/resume-section";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/layout/footer";
import { FloatingContact } from "@/components/ui/floating-contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-neutral-100 flex flex-col selection:bg-neutral-800 selection:text-white">
      {/* Navigation Header */}
      <Header />

      {/* Main Sections */}
      <main className="flex-1">
        <Hero />
        <About />
        <Experience />
        <ProjectsSection />
        <Skills />
        <Timeline />
        <GithubActivity />
        <Achievements />
        <ResumeSection />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Button (WhatsApp) */}
      <FloatingContact />
    </div>
  );
}
