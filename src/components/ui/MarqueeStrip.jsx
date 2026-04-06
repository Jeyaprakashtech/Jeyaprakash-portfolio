"use client";
import { motion } from "framer-motion";
import { MARQUEE_ITEMS } from "../../assets/Content";

function MarqueeItem({ label, color }) {
  return (
    <div className="group flex items-center gap-2 mx-5 flex-shrink-0 cursor-default">
      
      {/* Dot */}
      <span
        className="inline-block w-1.5 h-1.5 rounded-full flex-shrink-0"
        style={{ background: color, boxShadow: `0 0 5px ${color}` }}
      />

      {/* Text */}
      <span
        className="font-mono font-semibold text-[13px] whitespace-nowrap
                   text-[#5E5478] transition-colors duration-200
                   group-hover:text-white"
      >
        {label}
      </span>
    </div>
  );
}

export default function MarqueeStrip() {
  const doubled = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <motion.div
      className="mt-20 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      {/* Top line */}
      <div className="h-px mb-5 bg-[linear-gradient(90deg,transparent,#2A1F50,#7C3AED,#2A1F50,transparent)]" />

      <div className="relative overflow-hidden">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none bg-[linear-gradient(90deg,#060612,transparent)]" />

        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none bg-[linear-gradient(270deg,#060612,transparent)]" />

        {/* 🚀 CSS MARQUEE (NO GLITCH) */}
        <div className="flex w-max marquee">
          {doubled.map((item, i) => (
            <MarqueeItem key={i} label={item.label} color={item.color} />
          ))}
        </div>
      </div>

      {/* Bottom line */}
      <div className="h-px mt-5 bg-[linear-gradient(90deg,transparent,#2A1F50,#7C3AED,#2A1F50,transparent)]" />
    </motion.div>
  );
}