"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Terminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>(["Welcome to Shivam.dev Terminal. Type 'help' to start."]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    let response = "";
    const cmd = input.toLowerCase().trim();

    if (cmd === "help") response = "Commands: whoami, projects, clear";
    else if (cmd === "whoami") response = "I'm Shivam, a Java/Spring Boot Dev with 1.5 years exp.";
    else if (cmd === "projects") response = "Opening NetGuard-AI...";
    else if (cmd === "clear") { setHistory([]); setInput(""); return; }
    else response = `Command not found: ${cmd}`;

    setHistory([...history, `> ${input}`, response]);
    setInput("");
  };

  return (
    <div className="py-20 max-w-4xl mx-auto">
      <div className="bg-[#0f172a] rounded-t-xl p-3 flex gap-2 border-b border-white/5">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
      </div>
      <div className="bg-black/40 backdrop-blur-xl p-6 rounded-b-xl h-64 overflow-y-auto font-mono text-sm text-emerald-400">
        {history.map((line, i) => (
          <div key={i} className="mb-1 italic">{line}</div>
        ))}
        <form onSubmit={handleCommand} className="flex gap-2">
          <span>$</span>
          <input 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="bg-transparent outline-none flex-1"
            autoFocus
          />
        </form>
      </div>
    </div>
  );
}