"use client";

import React from "react";
import { Mail, MessageSquare, Send } from "lucide-react";

export function Contact() {
  const contacts = [
    {
      title: "Email Address",
      value: "ganeshkchavan7777@gmail.com",
      description: "Direct email contact for job openings, inquiries, or tech queries.",
      href: "mailto:ganeshkchavan7777@gmail.com",
      icon: <Mail className="w-5 h-5 text-neutral-400" />,
      cta: "Send an Email"
    },
    {
      title: "WhatsApp Chat",
      value: "+91 7892327392",
      description: "Fast messaging via WhatsApp. Available on mobile and web.",
      href: "https://wa.me/917892327392",
      icon: <MessageSquare className="w-5 h-5 text-neutral-400" />,
      cta: "Chat on WhatsApp",
      target: "_blank"
    },
    {
      title: "LinkedIn Profile",
      value: "ganesh-chavan-a6b189288",
      description: "Professional networking profile for work history and recommendations.",
      href: "https://www.linkedin.com/in/ganesh-chavan-a6b189288",
      icon: (
        <svg className="w-5 h-5 text-neutral-400 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      cta: "Connect on LinkedIn",
      target: "_blank"
    },
    {
      title: "GitHub Profile",
      value: "github.com/Gani4u",
      description: "Access my repository source code, commits, and open-source works.",
      href: "https://github.com/Gani4u",
      icon: (
        <svg className="w-5 h-5 text-neutral-400 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
        </svg>
      ),
      cta: "Follow on GitHub",
      target: "_blank"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-black scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-xs font-mono tracking-widest text-neutral-500 uppercase">
            09 / Communication
          </h2>
          <h3 className="text-3xl font-bold tracking-tight text-white mt-2">
            Get In Touch
          </h3>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contacts.map((contact) => (
            <a
              key={contact.title}
              href={contact.href}
              target={contact.target}
              rel={contact.target ? "noopener noreferrer" : undefined}
              className="p-6 md:p-8 rounded-2xl border border-neutral-900 bg-neutral-950/40 hover:bg-neutral-950/90 hover:border-neutral-800 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-neutral-400">
                  <div className="p-2 bg-neutral-900 rounded-lg border border-neutral-850">
                    {contact.icon}
                  </div>
                  <h4 className="text-sm font-bold text-neutral-200 group-hover:text-white transition-colors">
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

        {/* Quick Footer Message */}
        <div className="mt-16 text-center text-xs text-neutral-600 font-mono">
          Located in Mysuru / Bangalore, Karnataka, India. Available for remote work or relocation.
        </div>
      </div>
    </section>
  );
}
