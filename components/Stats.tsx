"use client";
import { motion } from "framer-motion";
import { Trophy, Flame, Code2, ExternalLink, Zap } from "lucide-react";

const statsData = [
  {
    label: "LeetCode Solved",
    value: "150+",
    icon: <Trophy className="text-yellow-500" />,
    sub: "DSA Mastery",
    color: "border-b-yellow-500"
  },
  {
    label: "Hands On Exp.",
    value: "1.5 Yrs",
    icon: <Flame className="text-orange-500" />,
    sub: "Java/Spring Boot",
    color: "border-b-orange-500"
  },
  {
    label: "GitHub Activity",
    value: "40+ Repositories",
    icon: <Zap className="text-emerald-500" />,
    sub: "Consistent Commits",
    color: "border-b-emerald-500"
  }
];

export default function Stats() {
  return (
    <section className="py-20 max-w-6xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {statsData.map((stat, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -10 }}
            className={`glass p-8 rounded-[2.5rem] relative overflow-hidden group border-b-4 ${stat.color} transition-all duration-300`}
          >
            {/* Background Icon Watermark */}
            <div className="absolute -right-4 -top-4 w-32 h-32 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
              {stat.icon}
            </div>

            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-white/5 rounded-2xl">
                {stat.icon}
              </div>
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest">{stat.label}</h3>
            </div>

            <div className="space-y-1">
              <p className="text-5xl font-black tracking-tighter">{stat.value}</p>
              <p className="text-xs font-mono text-gray-500 uppercase">{stat.sub}</p>
            </div>

            <div className="mt-6 flex items-center gap-2 text-[10px] font-bold text-accent cursor-pointer group-hover:underline">
              VERIFY PROFILE <ExternalLink size={12} />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}