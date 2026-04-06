"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { TABS, SKILLS } from "../assets/Content";
import SectionBadge from "./ui/SectionBadge";
import TabNav from "./ui/TabNav";
import SkillCard from "./ui/SkillCard";
import MarqueeStrip from "./ui/MarqueeStrip";

export default function Skills() {
  const [activeTab, setActiveTab] = useState("Frontend");

  const handleTabChange = (tab) => {
    if (tab === activeTab) return;
    setActiveTab(tab);
  };

  return (
    <section
      id="skills"
      className="relative overflow-hidden py-10 lg:py-20 bg-[#060612]"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_70%_50%_at_50%_60%,rgba(124,58,237,0.05)_0%,transparent_70%)]" />

      <div className="container-main relative z-5">

        <SectionBadge label="◆ WHAT I KNOW" />

        {/* Heading */}
        <motion.h2
          className="font-display font-bold leading-[1.15]
                     text-[clamp(32px,4.5vw,52px)]
                     text-[#F0EEFF] mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          My{" "}
          <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            Tech Stack
          </span>
        </motion.h2>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <TabNav
            tabs={TABS}
            activeTab={activeTab}
            onTabChange={handleTabChange}
          />
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          key={`skills-${activeTab}`}
          className="grid gap-3
                     grid-cols-2
                     sm:grid-cols-3
                     md:grid-cols-4
                     lg:grid-cols-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25 }}
        >
          {SKILLS[activeTab].map(({ name, color, icon }, i) => (
            <SkillCard
              key={`${activeTab}-${name}`}
              name={name}
              color={color}
              icons={icon}
              delay={i * 0.05}
            />
          ))}
        </motion.div>

        <MarqueeStrip />

      </div>
    </section>
  );
}