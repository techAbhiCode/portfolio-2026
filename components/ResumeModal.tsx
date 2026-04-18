"use client";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, FileText } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="glass w-full max-w-4xl h-[85vh] rounded-[2.5rem] relative z-10 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-white/5 flex justify-between items-center bg-white/5">
              <div className="flex items-center gap-2">
                <FileText className="text-accent" />
                <h3 className="font-bold">Shivam_Resume.pdf</h3>
              </div>
              <div className="flex gap-4">
                <a 
                  href="/shivam-resume.pdf" 
                  download 
                  className="p-2 glass rounded-full hover:bg-emerald-500/20 text-emerald-500 transition-colors"
                >
                  <Download size={20} />
                </a>
                <button onClick={onClose} className="p-2 glass rounded-full hover:bg-white/10">
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* PDF Preview Area */}
            <div className="flex-1 bg-white/5 p-4">
              <iframe 
                src="/shivam-resume.pdf#toolbar=0" 
                className="w-full h-full rounded-2xl border border-white/10"
                title="Resume Preview"
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}