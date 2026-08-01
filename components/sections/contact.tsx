"use client";

import React from "react";
import { Mail, MessageSquare, MapPin, Calendar, Clock, Send } from "lucide-react";

export function Contact() {
  const contacts = [
    {
      title: "Email Communication",
      value: "ganeshkchavan7777@gmail.com",
      description: "Primary contact for system design audits, job listings, and backend consulting.",
      href: "mailto:ganeshkchavan7777@gmail.com",
      icon: <Mail className="w-5 h-5 text-neutral-400" />,
      cta: "Send Email Inquiry"
    },
    {
      title: "WhatsApp Message",
      value: "+91 7892327392",
      description: "Direct instant chat link for urgent project discussions or quick syncs.",
      href: "https://wa.me/917892327392",
      icon: <MessageSquare className="w-5 h-5 text-neutral-400" />,
      cta: "Start WhatsApp Chat",
      target: "_blank"
    },
    {
      title: "LinkedIn Networking",
      value: "ganesh-chavan-a6b189288",
      description: "Professional networking profile mapping complete endorsements and recommendations.",
      href: "https://www.linkedin.com/in/ganesh-chavan-35435526b",
      icon: (
        <svg className="w-5 h-5 text-neutral-400 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      cta: "Connect on LinkedIn",
      target: "_blank"
    },
    {
      title: "GitHub Repositories",
      value: "github.com/Gani4u",
      description: "Direct tracking link covering active commits, reviews, and microservice projects.",
      href: "https://github.com/Gani4u",
      icon: (
        <svg className="w-5 h-5 text-neutral-400 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
        </svg>
      ),
      cta: "Inspect Source Code",
      target: "_blank"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-black scroll-mt-14">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-xs font-mono tracking-widest text-neutral-500 uppercase">
            09 / Communication
          </h2>
          <h3 className="text-3xl font-bold tracking-tight text-white mt-2">
            Initiate Contact
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            {contacts.map((contact) => (
              <a
                key={contact.title}
                href={contact.href}
                target={contact.target}
                rel={contact.target ? "noopener noreferrer" : undefined}
                className="p-6 rounded-xl border border-neutral-900 bg-neutral-950/40 hover:bg-neutral-950/90 hover:border-neutral-805 transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-neutral-900 rounded-lg border border-neutral-850 text-neutral-400 group-hover:text-blue-500 transition-colors">
                      {contact.icon}
                    </div>
                    <h4 className="text-xs font-bold text-neutral-200 font-mono tracking-wide uppercase">
                      {contact.title}
                    </h4>
                  </div>
                  
                  <p className="text-xs text-neutral-300 font-mono select-all">
                    {contact.value}
                  </p>
                  <p className="text-xs text-neutral-500 leading-relaxed">
                    {contact.description}
                  </p>
                </div>

                <div className="flex items-center space-x-1.5 text-xs text-neutral-400 font-mono pt-6 mt-6 border-t border-neutral-900/60 group-hover:text-white transition-colors">
                  <span>{contact.cta}</span>
                  <Send className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
                </div>
              </a>
            ))}
          </div>

          {/* Right Column: Availability & Response details */}
          <div className="lg:col-span-4 space-y-4">
            {/* Average Response Time Card */}
            <div className="p-6 rounded-xl border border-neutral-900 bg-neutral-950/40 space-y-4">
              <div className="flex items-center space-x-3 text-neutral-400">
                <Clock className="w-5 h-5 text-neutral-500" />
                <h4 className="text-xs font-bold font-mono uppercase tracking-wide">
                  Response SLA
                </h4>
              </div>
              <p className="text-xs text-neutral-500 leading-relaxed">
                I monitor incoming email logs consistently and try to reply **usually within 24 hours** for active job inquiries.
              </p>
            </div>

            {/* Opportunities Status Card */}
            <div className="p-6 rounded-xl border border-neutral-900 bg-neutral-950/40 space-y-4">
              <div className="flex items-center space-x-3 text-neutral-400">
                <Calendar className="w-5 h-5 text-neutral-500" />
                <h4 className="text-xs font-bold font-mono uppercase tracking-wide">
                  Offer Channels
                </h4>
              </div>
              <div className="text-xs text-neutral-500 space-y-2 leading-relaxed">
                <p>Open for the following arrangements:</p>
                <ul className="space-y-1 font-mono text-[10px] text-neutral-400">
                  <li className="flex items-center space-x-2">
                    <span className="w-1 h-1 rounded-full bg-blue-500" />
                    <span>Full-time Positions</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1 h-1 rounded-full bg-blue-500" />
                    <span>Remote Contracts</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1 h-1 rounded-full bg-blue-500" />
                    <span>Hybrid (Bangalore / Mysuru)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1 h-1 rounded-full bg-blue-500" />
                    <span>Open to Relocation</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Geographic Marker Card */}
            <div className="p-6 rounded-xl border border-neutral-900 bg-neutral-950/40 space-y-3">
              <div className="flex items-center space-x-3 text-neutral-400">
                <MapPin className="w-5 h-5 text-neutral-500" />
                <h4 className="text-xs font-bold font-mono uppercase tracking-wide">
                  Location
                </h4>
              </div>
              <p className="text-xs text-neutral-400 font-mono">
                Bangalore / Mysuru, Karnataka, India
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
