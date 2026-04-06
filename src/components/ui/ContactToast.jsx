"use client";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactToast({ show }) {
  return (
    <AnimatePresence mode="wait">
      {show && (
        <motion.div
          className="
            fixed bottom-8 right-8 z-[9999]
            flex items-center gap-3 px-5 py-3 rounded-xl
            pointer-events-none
            bg-[#0E0C1A]
            border border-[#7C3AED]
            shadow-[0_8px_32px_rgba(124,58,237,0.3)]
          "
          initial={{ opacity: 0, y: 16, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.95 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-[16px]">📋</span>

          <span className="font-body font-medium text-[14px] text-[#F0EEFF]">
            Email copied to clipboard!
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}