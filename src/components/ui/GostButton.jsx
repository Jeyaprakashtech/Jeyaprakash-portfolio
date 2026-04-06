"use client";
import { motion } from "framer-motion";

export default function GostButton() {
  return (
    <motion.div
      
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
    >
      <motion.a
        href="#contact"
        className="inline-flex w-full items-center gap-2 px-7 h-13 justify-center
                   font-body font-medium text-[15px] text-[#C084FC]
                   border border-[#2A1F50] rounded-md bg-[rgba(124, 58, 237, 0)]"
        whileHover={{
          borderColor: "#7C3AED",
          color: "#F0EEFF",
          backgroundColor: "rgba(124,58,237,0.08)",
          y: -2,
          boxShadow: "0 8px 24px rgba(124,58,237,0.15)",
        }}
        transition={{ duration: 0.2 }}
      >
        Get in touch ↗
      </motion.a>
    </motion.div>
  );
}