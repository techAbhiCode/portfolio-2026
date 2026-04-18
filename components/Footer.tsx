"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {Mail, ExternalLink, Trophy, Code } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-20 border-t border-white/5">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left: LeetCode Stats */}
        <div className="glass p-8 rounded-3xl space-y-4 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
            <Trophy size={80} />
          </div>
          <h3 className="text-xl font-bold flex items-center gap-2">
            <Code size={20} className="text-yellow-500" /> Coding Stats
          </h3>
          <div className="flex gap-8 items-center">
            <div>
              <p className="text-3xl font-black text-accent">150+</p>
              <p className="text-xs text-gray-500 uppercase font-mono">Solved Problems</p>
            </div>
            <div className="h-10 w-[1px] bg-white/10" />
            <div>
              <p className="text-3xl font-black text-emerald-500">LeetCode</p>
              <p className="text-xs text-gray-500 uppercase font-mono">Active Solver</p>
            </div>
          </div>
          <a 
            href="https://leetcode.com/u/techabhicode99" 
            target="_blank" 
            className="inline-flex items-center gap-2 text-xs font-bold text-gray-400 hover:text-white transition-colors"
          >
            Verify Profile <ExternalLink size={14} />
          </a>
        </div>

        {/* Right: Contact & Socials */}
        <div className="space-y-6 md:text-right">
          <h2 className="text-4xl font-bold italic">Let&apos;s Build Together.</h2>
          <p className="text-gray-500 max-w-sm md:ml-auto">
            Currently open to backend roles and collaborative full-stack projects.
          </p>
          <div className="flex gap-4 md:justify-end">
            <a href="https://github.com/techAbhiCode" className="p-3 glass rounded-full hover:scale-110 transition-transform"><FaGithub size={20} /></a>
            <a href="https://www.linkedin.com/in/shivam-shiv-50a4bb343/" className="p-3 glass rounded-full hover:scale-110 transition-transform"><FaLinkedin size={20} /></a>
            <a href="mailto:shivamtech431@gmail.com" className="p-3 glass rounded-full hover:scale-110 transition-transform"><Mail size={20} /></a>
          </div>
        </div>
      </div>

      <div className="mt-20 text-center text-[10px] text-gray-600 font-mono uppercase tracking-[0.2em]">
        © 2026 Shivam Dev • Built with Next.js & Coffee
      </div>
    </footer>
  );
}