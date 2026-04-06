"use client";
import { motion } from "framer-motion";

export default function CtaButton() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.a
        href="#projects"
        className="relative inline-flex items-center gap-2 px-7 h-13 w-full md:w-fit justify-center
                   font-body font-medium text-[15px] text-white rounded-md overflow-hidden"
        
        style={{
          background: "linear-gradient(90deg, #7C3AED, #EC4899)",
          boxShadow: "0 0 24px rgba(124, 58, 237, 0.35)",
        }}

        // ✅ ONLY HERE
        whileHover={{
          
          y: -2,
          boxShadow: "0 0 40px rgba(124,58,237,0.6)",
        }}
        whileTap={{
          scale: 0.95,
        }}

        transition={{ type: "spring", stiffness: 260, damping: 18 }}
      >
        {/* Shine effect (no hover here) */}
        <span
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(120deg, transparent, rgba(255,255,255,0.2), transparent)",
            opacity: 0.6,
          }}
        />

        {/* Content */}
        <span className="relative z-10 flex items-center gap-2">
          View My Work
          <span className="inline-block">↓</span>
        </span>
      </motion.a>
    </motion.div>
  );
}