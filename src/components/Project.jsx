"use client";
import { motion } from "framer-motion";
import { PROJECTS } from "../assets/Content";
import SectionBadge from "./ui/SectionBadge";
import FeaturedCard from "./ui/FeaturedCard";
import ProjectCard from "./ui/ProjectCard";



export default function Projects() {
  const featured = PROJECTS.find((p) => p.featured);
  const regular = PROJECTS.filter((p) => !p.featured);
  const TOTAL_PROJECTS = PROJECTS.findLastIndex((e) => e.id) + 1;

  
  return (
    <section
      id="projects"
      className="relative overflow-hidden py-10 lg:py-20 bg-[#060612]"
    >
      {/* Bg glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 40%, rgba(124,58,237,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="container-main relative z-5">

        <SectionBadge label="◆ WHAT I BUILT" />

        {/* Heading */}
        <motion.div
          className="flex flex-wrap items-center gap-4 mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display font-bold leading-[1.15] text-[clamp(32px,4.5vw,52px)] text-[#F0EEFF]">
            Featured{" "}
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <span className="px-3 py-1 rounded-full font-mono font-semibold text-[12px] text-[#A855F7] bg-[#A855F71A] border border-[#A855F740]">
            {TOTAL_PROJECTS} Projects →
          </span>
        </motion.div>

        {/* Featured */}
        {featured && (
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
          >
            <FeaturedCard project={featured} />
          </motion.div>
        )}

        {/* Divider */}
        <motion.div
          className="flex items-center gap-4 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex-1 h-px bg-gradient-to-r from-[#2A1F50] to-transparent" />
          <span className="font-mono text-[11px] text-[#5E5478] tracking-[0.1em] whitespace-nowrap">
            MORE WORK
          </span>
          <div className="flex-1 h-px bg-gradient-to-l from-[#2A1F50] to-transparent" />
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {regular.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              delay={i * 0.06}
              
            />

          ))}
        </div>

        {/* Footer */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-mono text-[13px] text-[#5E5478]">
            Showing {PROJECTS.length} of {TOTAL_PROJECTS} projects
          </span>
          { PROJECTS.length > 4 && (
            <motion.a
            href="#projects"
            className="
              group flex items-center gap-2 px-7 h-[48px]
              rounded-xl font-body font-medium text-[15px]
              border border-[#2A1F50]
              text-[#C084FC]
              bg-[rgba(124, 58, 237, 0)]
              hover:bg-[#7C3AED14]
              hover:border-[#7C3AED]
              transition-all duration-200
              hover:-translate-y-0.5
            "
            whileHover={{
              boxShadow: "0 8px 24px rgba(124,58,237,0.15)",
            }}
          >
            <span className="group-hover:text-[#F0EEFF] transition-colors">
              See All Projects →
            </span>
          </motion.a>
          )}
          
        </motion.div>

      </div>
    </section>
  );
}