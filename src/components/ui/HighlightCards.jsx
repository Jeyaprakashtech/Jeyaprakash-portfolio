"use client";
import { motion } from "framer-motion";
import { HIGHLIGHT_CARDS } from "../../assets/Content";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.25 },
  },
};

const card = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

export default function HighlightCards() {
  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {HIGHLIGHT_CARDS.map(({ icon, title, desc }) => (
        <motion.div
          key={title}
          variants={card}
          whileHover={{
            y: -4,
            borderColor: "#7C3AED",
            boxShadow: "0 8px 32px rgba(124,58,237,0.15)",
          }}
          className="flex flex-col gap-3 p-4 rounded-[14px]
                     bg-[#0E0C1A] border border-[#2A1F50]
                     transition-colors duration-300 cursor-default"
        >
          {/* Icon circle */}
          <div
            className="flex items-center justify-center w-11 h-11 rounded-xl
                       bg-[linear-gradient(135deg,rgba(124,58,237,0.15),rgba(168,85,247,0.08))]
                       border border-[rgba(124,58,237,0.2)]"
          >
            {icon}
          </div>

          <div>
            <p className="font-body font-semibold text-[15px] text-[#F0EEFF] mb-1">
              {title}
            </p>
            <p className="font-body text-[13px] text-[#5E5478] leading-[1.5]">
              {desc}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}