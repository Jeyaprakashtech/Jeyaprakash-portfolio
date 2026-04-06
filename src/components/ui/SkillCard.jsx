"use client";
import { motion } from "framer-motion";
import SkillIcon from "./SkillIcon";

export default function SkillCard({ name, color,icons, delay = 0 }) {
  return (
    <motion.div
      className="flex flex-col p-4 rounded-2xl cursor-default
                 bg-[#0E0C1A] border border-[#2A1F50]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut", delay }}
      whileHover={{
        y: -4,
        borderColor: color,
        boxShadow: `0 8px 28px ${color}22`,
      }}
    >
      {/* Icon + Name */}
      <div className="flex items-center gap-3">
        <SkillIcon name={name} color={color} icons={icons} />
        <span className="font-body font-semibold text-[14px] text-[#F0EEFF] leading-tight">
          {name}
        </span>
      </div>
    </motion.div>
  );
}