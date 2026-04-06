"use client";
import { motion } from "framer-motion";
import { INFO_PILLS } from "../../assets/Content";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.85 },
  show:   { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function InfoPills() {
  return (
    <motion.div
      className="flex flex-wrap gap-3 mt-8"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      {INFO_PILLS.map(({ emoji, text }) => (
        <motion.span
          key={text}
          variants={item}
          className="flex items-center gap-2 px-4 py-2 rounded-full
                     font-body text-sm font-medium text-[#A89EC4]
                     bg-[#0E0C1A] border border-[#2A1F50]"
        >
          <span className="text-[15px]">{emoji}</span>
          {text}
        </motion.span>
      ))}
    </motion.div>
  );
}