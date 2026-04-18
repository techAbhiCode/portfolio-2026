"use client";
import { useTheme } from "next-themes";
import { Moon, Sun, Terminal } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 w-[90%] md:w-[60%] z-50 glass rounded-full px-6 py-3 flex justify-between items-center">
      <div className="flex items-center gap-2 font-bold italic">
        <Terminal size={20} className="text-accent" />
        <span><a href="#hero" className="hover:text-accent transition-colors">SHIVAM.DEV</a></span>
      </div>
      
      <div className="flex gap-6 text-sm font-medium">
        <a href="#projects" className="hover:text-accent transition-colors">Work</a>
        <a href="#skills" className="hover:text-accent transition-colors">Tech</a>
      </div>

      <button 
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="p-2 rounded-full hover:bg-white/10 transition-all"
      >
        {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
      </button>
    </nav>
  );
}