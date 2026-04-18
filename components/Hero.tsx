"use client";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { FileText }  from "lucide-react";
import ResumeModal from "./ResumeModal";



export default function Hero() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 w-full max-w-6xl items-center">
        
        {/* Left: Text Content with Description */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-7 space-y-8"
        >
          <div className="space-y-4 ">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
              Hi, I&apos;m <span className="text-accent">Shivam</span>. <br />
              I build <span className="italic">production-ready</span> systems.
            </h1>
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-xl">
              Java/Spring Boot Developer with 1.5 years of hands on experience in building 
              scalable backend architectures and containerized cloud solutions.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <button className="flex items-center gap-2 bg-foreground text-background px-8 py-3 rounded-full font-bold hover:scale-105 transition-all shadow-lg shadow-accent/20">
              <a href="#projects" className="flex items-center gap-2">
                View My Work <ArrowRight size={18} />
              </a>
            </button>
            <button 
              onClick={() => setIsResumeOpen(true)} // Modal open logic
              className="flex items-center gap-2 glass px-8 py-3 rounded-full font-bold hover:bg-white/5 transition-all"
            >
              View Resume <FileText size={18} />
            </button>
            
          </div>
        </motion.div>

        {/* Right: Photo (Central Focus) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="lg:col-span-5 relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-accent to-blue-600 rounded-[3rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative glass p-3 rounded-[3rem] border-2 border-accent/30 overflow-hidden aspect-[4/5] shadow-2xl">
            <Image 
              src="/shivam-profile.jpeg" 
              alt="Shivam"
              fill
              className="object-cover rounded-[2.5rem]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
          </div>
        </motion.div>

      </div>
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </section>
  );
}