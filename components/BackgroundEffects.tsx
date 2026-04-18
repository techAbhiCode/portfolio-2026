"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function BackgroundEffects() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div 
      style={{ x: springX, y: springY }}
      className="fixed inset-0 -z-10 flex items-center justify-center opacity-30 blur-[120px] pointer-events-none"
    >
      <div className="w-[800px] h-[800px] bg-accent/20 rounded-full animate-pulse" />
      <div className="w-[600px] h-[600px] bg-blue-500/10 rounded-full ml-40" />
    </motion.div>
  );
}