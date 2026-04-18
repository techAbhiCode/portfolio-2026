"use client";
import { motion } from "framer-motion";
import { Server, Cloud, Database, Layout, Terminal, Code2, Workflow, BrainCircuit, GitBranch, ShieldCheck } from "lucide-react";

const skills = [
  {
    title: "Backend Mastery",
    desc: "1.5 Years of Hands On Experience",
    tech: ["Java", "Spring Boot", "Microservices", "Go", "Python"],
    icon: <Server className="text-accent" />,
    size: "md:col-span-2 md:row-span-2", // Large Card
    details: "Specialized in building scalable REST APIs and production-ready backend systems."
  },
 {
    title: "Version Control",
    desc: "Team Collaboration",
    tech: ["Git", "GitHub", "GitHub Actions", "GitHub Pages"],
    icon: <GitBranch className="text-red-400" />,
    size: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Machine Learning",
    desc: "Model Training & Integration",
    tech: ["Python", "Scikit-Learn", "Data Pre-processing"],
    icon: <BrainCircuit className="text-purple-400" />,
    size: "md:col-span-1 md:row-span-2", // Dedicated ML Card
  },
  {
    title: "Cloud & AWS",
    desc: "8+ Months Hands-on",
    tech: ["EC2", "S3", "IAM", "CloudWatch"],
    icon: <Cloud className="text-sky-400" />,
    size: "md:col-span-1 md:row-span-1", // Medium Card
  },
  {
    title: "Database",
    desc: "Persistent Storage",
    tech: ["MongoDB", "MySQL", "PostgreSQL", "Neon DB", "Redis"],
    icon: <Database className="text-emerald-400" />,
    size: "md:col-span-1 md:row-span-1", // Small Card
  },
  {
    title: "Frontend Tech",
    desc: "Modern UI/UX",
    tech: ["Next.js", "React", "Tailwind CSS"],
    icon: <Layout className="text-purple-400" />,
    size: "md:col-span-1 md:row-span-1", // Small Card
  },
  {
    title: "System Security",
    desc: "Core NIPS Logic",
    tech: ["Network Security", "Threat Detection"],
    icon: <ShieldCheck className="text-orange-400" />,
    size: "md:col-span-1 md:row-span-1",
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 max-w-10xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-3xl font-bold mb-8 flex items-center gap-3"
      >
        <Code2 className="text-accent" /> Technical Arsenal
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[180px]">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            viewport={{ once: true }}
            className={`glass p-6 rounded-3xl group transition-all duration-500 flex flex-col justify-between group hover:border-accent/50 transition-all duration-500 ${skill.size}`}
          >
            <div className="flex justify-between items-start">
              <div className="p-3 bg-white/5 rounded-2xl group-hover:bg-accent/10 transition-colors">
                {skill.icon}
              </div>
              <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">{skill.desc}</span>
            </div>

            <div>
              <h3 className="text-lg font-bold mt-2">{skill.title}</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {skill.tech.map((t) => (
                  <span key={t} className="text-[10px] px-2 py-0.5 bg-white/5 rounded-md border border-white/10 group-hover:border-accent/30 transition-colors">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}