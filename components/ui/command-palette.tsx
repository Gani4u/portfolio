"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import {
  Search,
  User,
  Briefcase,
  Cpu,
  Layers,
  GitBranch,
  Mail,
  MessageSquare,
  FileText,
  Terminal,
  Award,
  Sun,
  Moon,
} from "lucide-react";

interface CommandItem {
  icon: React.ReactNode;
  label: string;
  category: string;
  shortcut?: string;
  action: () => void;
}

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { theme, setTheme } = useTheme();
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  const commands: CommandItem[] = [
    // Navigation
    {
      icon: <User className="w-4 h-4" />,
      label: "Go to About",
      category: "Navigation",
      action: () => scrollToSection("about"),
    },
    {
      icon: <Briefcase className="w-4 h-4" />,
      label: "Go to Experience",
      category: "Navigation",
      action: () => scrollToSection("experience"),
    },
    {
      icon: <Layers className="w-4 h-4" />,
      label: "Go to Projects",
      category: "Navigation",
      action: () => scrollToSection("projects"),
    },
    {
      icon: <Cpu className="w-4 h-4" />,
      label: "Go to Skills & Tech Stack",
      category: "Navigation",
      action: () => scrollToSection("skills"),
    },
    {
      icon: <GitBranch className="w-4 h-4" />,
      label: "Go to Timeline",
      category: "Navigation",
      action: () => scrollToSection("timeline"),
    },
    {
      icon: <Award className="w-4 h-4" />,
      label: "Go to Achievements",
      category: "Navigation",
      action: () => scrollToSection("achievements"),
    },
    {
      icon: <FileText className="w-4 h-4" />,
      label: "Go to Resume Preview",
      category: "Navigation",
      action: () => scrollToSection("resume"),
    },
    {
      icon: <Mail className="w-4 h-4" />,
      label: "Go to Contact",
      category: "Navigation",
      action: () => scrollToSection("contact"),
    },

    // Projects
    {
      icon: <Terminal className="w-4 h-4" />,
      label: "Project: Risk Audit Desktop (Tauri Compliance App)",
      category: "Projects",
      action: () => {
        scrollToSection("projects");
        setTimeout(() => {
          const btn = document.getElementById("btn-case-study-riskmanagement");
          if (btn) btn.click();
        }, 300);
      },
    },
    {
      icon: <Terminal className="w-4 h-4" />,
      label: "Project: AquaTrack (Water Management)",
      category: "Projects",
      action: () => {
        scrollToSection("projects");
        setTimeout(() => {
          const btn = document.getElementById("btn-case-study-aquatrack");
          if (btn) btn.click();
        }, 300);
      },
    },
    {
      icon: <Terminal className="w-4 h-4" />,
      label: "Project: LearnSphere (E-Learning)",
      category: "Projects",
      action: () => {
        scrollToSection("projects");
        setTimeout(() => {
          const btn = document.getElementById("btn-case-study-learnsphere");
          if (btn) btn.click();
        }, 300);
      },
    },

    // Contact
    {
      icon: <Mail className="w-4 h-4" />,
      label: "Email Ganesh (ganeshkchavan7777@gmail.com)",
      category: "Contact",
      action: () => {
        window.open("mailto:ganeshkchavan7777@gmail.com", "_blank");
        setOpen(false);
      },
    },
    {
      icon: <MessageSquare className="w-4 h-4" />,
      label: "WhatsApp Chat (+91 7892327392)",
      category: "Contact",
      action: () => {
        window.open("https://wa.me/917892327392", "_blank");
        setOpen(false);
      },
    },
    {
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      label: "LinkedIn Profile",
      category: "Contact",
      action: () => {
        window.open("https://www.linkedin.com/in/ganesh-chavan-35435526b", "_blank");
        setOpen(false);
      },
    },
    {
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
        </svg>
      ),
      label: "GitHub Repositories",
      category: "Contact",
      action: () => {
        window.open("https://github.com/Gani4u", "_blank");
        setOpen(false);
      },
    },

    // Theme Switcher
    {
      icon: theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />,
      label: `Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`,
      category: "Preferences",
      action: () => {
        setTheme(theme === "dark" ? "light" : "dark");
        setOpen(false);
      },
    },
  ];

  const filteredCommands = commands.filter((cmd) =>
    cmd.label.toLowerCase().includes(search.toLowerCase()) ||
    cmd.category.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    setSelectedIndex(0);
  }, [search]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!open) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % filteredCommands.length);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % filteredCommands.length);
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (filteredCommands[selectedIndex]) {
          filteredCommands[selectedIndex].action();
        }
      } else if (e.key === "Escape") {
        e.preventDefault();
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, filteredCommands, selectedIndex]);

  useEffect(() => {
    if (listRef.current) {
      const selectedElement = listRef.current.children[selectedIndex] as HTMLElement;
      if (selectedElement) {
        selectedElement.scrollIntoView({
          block: "nearest",
        });
      }
    }
  }, [selectedIndex]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="hidden md:flex items-center space-x-2 text-xs text-neutral-400 bg-neutral-900 border border-neutral-800 hover:border-neutral-700 px-3 py-1.5 rounded-lg transition-all"
      >
        <span>Search portfolio...</span>
        <kbd className="bg-neutral-800 text-neutral-400 px-1.5 py-0.5 rounded border border-neutral-700 text-[10px] font-mono leading-none">
          Ctrl K
        </kbd>
      </button>

      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh]">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: -10 }}
              transition={{ duration: 0.15 }}
              className="relative max-w-lg w-full mx-4 bg-neutral-900/95 border border-neutral-800 rounded-xl shadow-2xl overflow-hidden text-neutral-100 flex flex-col max-h-[50vh]"
            >
              <div className="flex items-center border-b border-neutral-800 px-4 py-3 bg-neutral-950/50">
                <Search className="w-4 h-4 text-neutral-500 mr-3 flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Type a command or search..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full bg-transparent text-sm text-neutral-200 placeholder-neutral-500 outline-none border-none py-1"
                  autoFocus
                />
                <button
                  onClick={() => setOpen(false)}
                  className="text-[10px] bg-neutral-800 border border-neutral-700 px-1.5 py-0.5 rounded text-neutral-400 font-mono"
                >
                  ESC
                </button>
              </div>

              <div
                ref={listRef}
                className="overflow-y-auto p-2 space-y-0.5 flex-1 scrollbar-thin scrollbar-thumb-neutral-800"
              >
                {filteredCommands.length > 0 ? (
                  filteredCommands.map((cmd, index) => {
                    const isSelected = index === selectedIndex;
                    const showHeader =
                      index === 0 ||
                      filteredCommands[index - 1].category !== cmd.category;

                    return (
                      <React.Fragment key={cmd.label}>
                        {showHeader && (
                          <div className="text-[10px] font-semibold text-neutral-500 uppercase tracking-wider px-3 pt-3 pb-1">
                            {cmd.category}
                          </div>
                        )}
                        <button
                          onClick={cmd.action}
                          onMouseEnter={() => setSelectedIndex(index)}
                          className={`w-full flex items-center justify-between text-left px-3 py-2.5 rounded-lg text-sm transition-colors ${
                            isSelected
                              ? "bg-neutral-800 text-white font-medium"
                              : "text-neutral-400 hover:text-neutral-200"
                          }`}
                        >
                          <div className="flex items-center space-x-3">
                            <span className={isSelected ? "text-white" : "text-neutral-500"}>
                              {cmd.icon}
                            </span>
                            <span>{cmd.label}</span>
                          </div>
                          {cmd.shortcut && (
                            <span className="text-[10px] font-mono text-neutral-600">
                              {cmd.shortcut}
                            </span>
                          )}
                        </button>
                      </React.Fragment>
                    );
                  })
                ) : (
                  <div className="text-center py-8 text-neutral-500 text-sm">
                    No results found for &ldquo;{search}&rdquo;
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
