"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Terminal, ArrowLeft } from "lucide-react";

export default function NotFound() {
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalHistory, setTerminalHistory] = useState<string[]>([
    "System error: Page not found (404)",
    "Type 'help' to see available commands."
  ]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = terminalInput.trim().toLowerCase();
    if (!cmd) return;

    let response = "";
    switch (cmd) {
      case "help":
        response = "Available commands: help, home, about, projects, clear";
        break;
      case "home":
        response = "Redirecting to Home page...";
        window.location.href = "/";
        break;
      case "about":
        response = "Redirecting to About section...";
        window.location.href = "/#about";
        break;
      case "projects":
        response = "Redirecting to Projects section...";
        window.location.href = "/#projects";
        break;
      case "clear":
        setTerminalHistory([]);
        setTerminalInput("");
        return;
      default:
        response = `Command not recognized: '${cmd}'. Type 'help' for instructions.`;
    }

    setTerminalHistory((prev) => [...prev, `> ${terminalInput}`, response]);
    setTerminalInput("");
  };

  return (
    <div className="min-h-screen bg-[#030303] text-neutral-400 font-mono flex items-center justify-center p-6 select-none">
      <div className="max-w-xl w-full border border-neutral-900 bg-neutral-950/80 rounded-xl overflow-hidden shadow-2xl flex flex-col">
        {/* Terminal Header */}
        <div className="px-4 py-3 border-b border-neutral-900 bg-neutral-900/30 flex items-center justify-between">
          <div className="flex items-center space-x-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-neutral-800" />
            <span className="w-2.5 h-2.5 rounded-full bg-neutral-800" />
            <span className="w-2.5 h-2.5 rounded-full bg-neutral-800" />
          </div>
          <span className="text-[10px] font-semibold text-neutral-600">sh — bash</span>
          <Terminal className="w-3.5 h-3.5 text-neutral-600" />
        </div>

        {/* Terminal Body */}
        <div className="p-6 space-y-4 min-h-[250px] flex flex-col justify-between">
          <div className="space-y-2 text-xs">
            {terminalHistory.map((line, idx) => (
              <div key={idx} className={line.startsWith(">") ? "text-neutral-200" : ""}>
                {line}
              </div>
            ))}
          </div>

          <form onSubmit={handleCommand} className="flex items-center text-xs mt-4">
            <span className="text-emerald-500 mr-2 font-bold">$</span>
            <input
              type="text"
              value={terminalInput}
              onChange={(e) => setTerminalInput(e.target.value)}
              placeholder="Type a command..."
              className="bg-transparent border-none outline-none text-neutral-200 w-full"
              autoFocus
            />
          </form>
        </div>

        {/* Terminal Footer Navigation */}
        <div className="px-4 py-3 border-t border-neutral-900 bg-neutral-900/10 flex justify-between items-center text-[10px]">
          <Link
            href="/"
            className="flex items-center space-x-1 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3 h-3" />
            <span>Go Back Home</span>
          </Link>
          <span className="text-neutral-700">Code: 404_PAGE_NOT_FOUND</span>
        </div>
      </div>
    </div>
  );
}
