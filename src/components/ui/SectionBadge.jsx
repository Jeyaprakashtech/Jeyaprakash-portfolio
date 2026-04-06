"use client";
import { motion } from "framer-motion";

export default function SectionBadge({ label }) {
  return (
    <motion.div
      className="flex items-center gap-3 mb-5"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <span className="font-mono text-sm font-semibold text-cyan-400 tracking-[0.12em]">
        {label}
      </span>
      <div className="w-[60px] h-px bg-gradient-to-r from-cyan-400 to-transparent" />
    </motion.div>
  );
}