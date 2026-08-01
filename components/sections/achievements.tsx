"use client";

import React from "react";
import { achievements } from "../../data/achievements";
import { Award, ShieldAlert, Trophy, Users, GraduationCap } from "lucide-react";

export function Achievements() {
  const getIcon = (type: string) => {
    switch (type) {
      case "hackathon":
        return <Trophy className="w-5 h-5 text-neutral-400" />;
      case "leadership":
        return <Users className="w-5 h-5 text-neutral-400" />;
      case "club":
        return <Award className="w-5 h-5 text-neutral-400" />;
      case "certification":
        return <GraduationCap className="w-5 h-5 text-neutral-400" />;
      default:
        return <Award className="w-5 h-5 text-neutral-400" />;
    }
  };

  return (
    <section id="achievements" className="py-24 bg-black border-b border-neutral-900 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-xs font-mono tracking-widest text-neutral-500 uppercase">
            07 / Accolades
          </h2>
          <h3 className="text-3xl font-bold tracking-tight text-white mt-2">
            Achievements & Certifications
          </h3>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((ach) => (
            <div
              key={ach.id}
              className="p-6 rounded-2xl border border-neutral-900 bg-neutral-950/40 hover:bg-neutral-950/80 transition-all hover:border-neutral-800 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-2 bg-neutral-900 rounded-lg border border-neutral-850">
                    {getIcon(ach.type)}
                  </div>
                  <span className="text-[10px] font-mono text-neutral-500">
                    {ach.date}
                  </span>
                </div>
                
                <h4 className="text-sm font-bold text-neutral-200 group-hover:text-white transition-colors">
                  {ach.title}
                </h4>
                <p className="text-[10px] text-neutral-400 font-mono">
                  {ach.subtitle}
                </p>
                <p className="text-xs text-neutral-500 leading-relaxed pt-2">
                  {ach.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
