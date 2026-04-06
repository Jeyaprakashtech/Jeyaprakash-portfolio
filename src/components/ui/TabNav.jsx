"use client";
import { motion } from "framer-motion";

export default function TabNav({ tabs, activeTab, onTabChange }) {
  return (
    <div className="flex items-center gap-2 flex-wrap mb-10">
      {tabs.map((tab) => {
        const isActive = activeTab === tab;
        return (
          <motion.button
            key={tab}
            onClick={() => onTabChange(tab)}
            className="relative px-5 py-2 rounded-full font-body font-medium
                       text-sm cursor-pointer border outline-none
                       transition-colors duration-200"
            style={{
              background: isActive
                ? "linear-gradient(90deg, #7C3AED, #A855F7)"
                : "#0E0C1A",
              color: isActive ? "#F0EEFF" : "#A89EC4",
              borderColor: isActive ? "rgba(124, 58, 237, 0)" : "#2A1F50",
              boxShadow: isActive ? "0 0 18px rgba(124,58,237,0.35)" : "none",
            }}
            whileHover={
              !isActive
                ? { borderColor: "#7C3AED", color: "#F0EEFF" }
                : {}
            }
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.15 }}
          >
            {tab}
          </motion.button>
        );
      })}
    </div>
  );
}