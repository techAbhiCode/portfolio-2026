"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import {
  Shield,
  Cpu,
  ChevronDown,
  Play,
  LayoutDashboard,
  X,
  ExternalLink,
  Link2,
  ShoppingCart,
  Rocket,
  Code2,
} from "lucide-react";

// 1. Projects Data Array
const projects = [
  {
    id: "netguard",
    title: "NetGuard-AI",
    githubLink: "#", // Yahan link dalein
    liveLink: "#",
    subtitle: "ML-Driven Intrusion Detection System",
    status: "Completed",
    problem:
      "Traditional systems failed to detect complex, non-rule-based network anomalies.",
    solution:
      "Developed a Java-based engine that integrates a pre-trained ML model to analyze live traffic.",
    result:
      "Successfully detected threats with 98% accuracy in local environments.",
    tags: ["Spring Boot", "Python", "ML"],
    icon: <Shield className="text-accent" />,
    color: "border-l-red-500",
  },
  {
    id: "ecomart",
    title: "EcoMart",
    githubLink: "#", // Yahan link dalein
    liveLink: "#",
    subtitle: "E-commerce Platform",
    status: "Building",
    problem:
      "Monolithic e-commerce Production grade apps are hard to scale and maintain.",
    solution: "Building a decoupled architecture using Spring Boot and React.",
    result: "In development",
    tags: ["Java Spring Boot", "React", "PostgreSQL"],
    icon: <ShoppingCart className="text-emerald-400" />,
    color: "border-l-emerald-500",
  },
  {
    id: "swifturl",
    title: "SwiftUrl",
    githubLink: "https://github.com/techAbhiCode/url-shortener-sb", // Yahan link dalein
    liveLink: "https://myswifturl.vercel.app", // Yahan link dalein
    subtitle: "Fully Encrypted SaaS URL Shortener",
    status: "Live", // Ab ye live hai!
    problem:
      "Public URL shorteners lack privacy, detailed analytics, and secure user management.",
    solution:
      "Developed a containerized Spring Boot backend (Docker) deployed on Render. Integrated JWT-based Auth and a React-based Analytics Dashboard with real-time click tracking and visual graphs.",
    result:
      "Deployed a production-ready SaaS with sub-second redirect latency and secure data encryption.",
    tags: ["Java", "Spring Boot", "Docker", "JWT", "Render", "Vercel"],
    icon: <Link2 className="text-orange-400" />,
    color: "border-l-orange-500",
  },
];

export default function Projects() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isArchOpen, setIsArchOpen] = useState(false);

  // Filter selected project data
  const activeProject = projects.find((p) => p.id === selectedId);

  return (
    <section id="projects" className="py-20 max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-10 flex items-center gap-3">
        <Code2 className="text-accent" /> My Work
      </h2>

      {/* 2. Grid View (Initials Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <motion.div
            layoutId={project.id}
            key={project.id}
            onClick={() => {
              setSelectedId(project.id);
              setIsArchOpen(false); // Reset arch view
            }}
            className="glass p-6 rounded-3xl cursor-pointer hover:border-accent/50 transition-colors group flex flex-col justify-between h-[250px]"
          >
            <div>
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-white/5 rounded-2xl group-hover:scale-110 transition-transform">
                  {project.icon}
                </div>
                {project.status === "Building" && (
                  <span className="text-[10px] bg-orange-500/10 text-orange-500 px-2 py-1 rounded-full border border-orange-500/20 font-bold animate-pulse">
                    BUILDING
                  </span>
                )}
                {project.status === "Completed" && (
                  <span className="text-[10px] bg-green-500/10 text-green-500 px-2 py-1 rounded-full border border-green-500/20 font-bold animate-pulse">
                    COMPLETED
                  </span>
                )}
                {project.status === "Live" && (
                  <span className="text-[10px] bg-blue-500/10 text-blue-500 px-2 py-1 rounded-full border border-blue-500/20 font-bold animate-pulse">
                    LIVE
                  </span>
                )}
              </div>
              <motion.h3 className="text-xl font-bold">
                {project.title}
              </motion.h3>
              <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                {project.subtitle}
              </p>
            </div>

            <div className="flex gap-2 mt-4">
              {project.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="text-[9px] px-2 py-1 bg-white/5 rounded-md border border-white/10 italic"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* 3. Detailed View (Modal Overlay) */}
      <AnimatePresence>
        {selectedId && activeProject && (
          <div className="fixed inset-0 z-110 flex items-center justify-center p-4 md:p-10">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-xl"
            />

            {/* Content Container */}
            <motion.div
              layoutId={selectedId}
              // FIX: h-auto aur overflow-y-auto ensure karein
              className="glass w-full max-w-5xl h-fit max-h-[90vh] overflow-y-auto rounded-[2.5rem] relative z-10 shadow-2xl custom-scrollbar"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedId(null)}
                className="absolute top-6 right-6 p-2 glass rounded-full hover:bg-white/10 z-20"
              >
                <X size={20} />
              </button>

              <div className="p-8 md:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                  {/* Left: Video Placeholder */}
                  <div className="relative group rounded-3xl overflow-hidden glass aspect-video flex items-center justify-center bg-black/40">
                    <Play
                      size={48}
                      className="text-accent opacity-50 group-hover:opacity-100 transition-all cursor-pointer"
                    />
                    <p className="absolute bottom-4 left-6 text-xs font-mono text-gray-400">
                      {activeProject.id}_walkthrough.mp4
                    </p>
                  </div>

                  {/* Right: Details */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-4xl font-bold">
                        {activeProject.title}
                      </h3>
                      <p className="text-accent font-medium">
                        {activeProject.subtitle}
                      </p>
                    </div>

                    <div className="space-y-4">
                      {[
                        {
                          label: "Problem",
                          text: activeProject.problem,
                          color: "border-l-red-500",
                        },
                        {
                          label: "Solution",
                          text: activeProject.solution,
                          color: "border-l-accent",
                        },
                        {
                          label: "Result",
                          text: activeProject.result,
                          color: "border-l-emerald-500",
                        },
                      ].map((item) => (
                        <div
                          key={item.label}
                          className={`glass p-4 rounded-2xl border-l-4 ${item.color}`}
                        >
                          <h4 className="text-xs font-bold uppercase text-gray-500 mb-1">
                            {item.label}
                          </h4>
                          <p className="text-sm opacity-90">{item.text}</p>
                        </div>
                      ))}
                    </div>

                    {/* Architecture Toggle */}
                    <button
                      onClick={() => setIsArchOpen(!isArchOpen)}
                      className="flex items-center gap-2 text-sm font-bold text-accent"
                    >
                      <LayoutDashboard size={18} />
                      {isArchOpen ? "Hide Architecture" : "Peek Under the Hood"}
                    </button>
                  </div>
                </div>

                {/* Expandable Architecture View */}
                {/* Expandable Architecture View */}
                <AnimatePresence>
                  {isArchOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="mt-10 pt-10 border-t border-white/5"
                    >
                      {activeProject.id === "swifturl" ? (
                        /* --- Yahan Paste Karein --- */
                        <div className="glass p-8 rounded-3xl border-dashed border-white/20 text-center">
                          <p className="text-gray-400 font-mono italic text-sm mb-4">
                            [ React Frontend (Vercel) ] ↔ [ JWT Auth Layer ] ↔ [
                            Dockerized Spring Boot (Render) ] ↔ [ PostgreSQL ]
                          </p>
                          <div className="flex justify-center flex-wrap gap-6">
                            <span className="text-[10px] text-accent uppercase tracking-widest border border-accent/20 px-2 py-1 rounded">
                              Analytics: Chart.js
                            </span>
                            <span className="text-[10px] text-accent uppercase tracking-widest border border-accent/20 px-2 py-1 rounded">
                              Deployment: Docker Engine
                            </span>
                          </div>
                        </div>
                      ) : (
                        /* Default architecture for other projects */
                        <div className="glass p-8 rounded-3xl border-dashed border-white/20 text-center">
                          <p className="text-gray-400 font-mono italic text-sm">
                            [ Client ] → [ Spring Boot API ] → [ Business Logic
                            ] → [ Database ]
                          </p>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Footer Actions in Detail View */}
                <div className="mt-10 flex gap-4 border-t border-white/5 pt-8">
                  <a
                    href={activeProject.githubLink}
                    target="_blank"
                    className="flex-1 glass py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-accent hover:text-white transition-all"
                  >
                    <FaGithub size={18} /> View Source
                  </a>
                  <a
                    href={activeProject.liveLink}
                    target="_blank"
                    className="flex-1 glass py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-white/10 transition-all"
                  >
                    <ExternalLink size={18} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
