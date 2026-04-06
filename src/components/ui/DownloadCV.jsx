"use client";
import { motion } from "framer-motion";

export default function DownloadCV() {
  return (
    <motion.div
      className="mt-10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
    >
      <motion.a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-7 h-12 w-full justify-center
                   font-body font-medium text-[15px] text-[#C084FC]
                   border border-[#2A1F50] rounded-xl bg-[rgba(124, 58, 237, 0)]"
        whileHover={{
          borderColor: "#7C3AED",
          color: "#F0EEFF",
          backgroundColor: "rgba(124,58,237,0.08)",
          y: -2,
          boxShadow: "0 8px 24px rgba(124,58,237,0.15)",
        }}
        transition={{ duration: 0.2 }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 3v13M5 16l7 5 7-5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Download CV
      </motion.a>
    </motion.div>
  );
}