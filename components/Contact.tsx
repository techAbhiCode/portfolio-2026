"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {FaGithub, FaLinkedin} from "react-icons/fa";
import { Mail, Copy, Check } from "lucide-react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "shivamtech431@gmail.com"; // Aapka asli email yahan aayega

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 max-w-4xl mx-auto px-4 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="glass p-12 rounded-[3rem] space-y-8"
      >
        <h2 className="text-5xl font-black italic tracking-tighter">
          READY TO START <br />
          <span className="text-accent underline underline-offset-8">THE NEXT BIG THING?</span>
        </h2>
        
        <p className="text-gray-500 max-w-md mx-auto">
          Currently looking for backend or SDE opportunities or collaborative SaaS projects. 
          Drop a message and let&apos;s build something insane.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          {/* Custom Copy Email Button */}
          <button 
            onClick={copyToClipboard}
            className="flex items-center gap-4 bg-foreground text-background px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform group"
          >
            <Mail size={20} />
            {email}
            <div className="border-l border-background/20 pl-4">
              {copied ? <Check size={18} className="text-emerald-400" /> : <Copy size={18} />}
            </div>
          </button>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/shivam-shiv-50a4bb343/" className="p-4 glass rounded-full hover:bg-white/10 transition-colors"><FaLinkedin /></a>
            <a href="https://github.com/techAbhiCode" className="p-4 glass rounded-full hover:bg-white/10 transition-colors"><FaGithub /></a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}