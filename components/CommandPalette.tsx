"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Code, User, Mail, X } from "lucide-react";

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const actions = [
    { name: "View Projects", icon: <Code size={18} />, link: "#projects" },
    { name: "About Me", icon: <User size={18} />, link: "#skills" },
    { name: "Contact", icon: <Mail size={18} />, link: "mailto:shivam@example.com" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] px-4">
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="w-full max-w-lg glass rounded-2xl overflow-hidden shadow-2xl relative z-10"
          >
            <div className="flex items-center gap-3 p-4 border-b border-white/10">
              <Search className="text-gray-400" size={20} />
              <input 
                autoFocus 
                placeholder="Type a command or search..."
                className="bg-transparent border-none outline-none w-full text-sm"
              />
              <kbd className="text-[10px] bg-white/10 px-1.5 py-0.5 rounded border border-white/20">ESC</kbd>
            </div>
            
            <div className="p-2">
              {actions.map((action) => (
                <a 
                  key={action.name} 
                  href={action.link}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/10 transition-colors text-sm"
                >
                  {action.icon} {action.name}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}