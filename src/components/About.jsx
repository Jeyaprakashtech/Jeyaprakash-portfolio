"use client";
import { motion } from "framer-motion";
import SectionBadge   from "./ui/SectionBadge";
import AboutPhoto     from "./ui/AboutPhoto";
import AboutText      from "./ui/AboutText";
import InfoPills      from "./ui/InfoPills";
import HighlightCards from "./ui/HighlightCards";
import DownloadCV     from "./ui/DownloadCV";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-10 lg:py-20"
    >
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none
                   bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(124,58,237,0.06)_0%,transparent_70%)]"
      />

      <div className="container-main relative z-[5]">

        {/* Badge */}
        <SectionBadge label="◆ WHO I AM" />

        {/* Heading */}
        <motion.h2
          className="font-display font-bold leading-[1.15]
                     text-[clamp(32px,4.5vw,52px)] text-[#F0EEFF]
                     mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
        >
          The Dev Who{" "}
          <span
            className="bg-gradient-to-br from-[#EC4899] to-[#A855F7]
                       bg-clip-text text-transparent"
            style={{ WebkitBackgroundClip: "text" }}
          >
            Also Designs.
          </span>
        </motion.h2>

        {/* Layout */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* LEFT */}
          <AboutPhoto />

          {/* RIGHT */}
          <div className="flex-1 w-full flex flex-col">
            <AboutText />
            <InfoPills />
            <HighlightCards />
            <DownloadCV />
          </div>

        </div>
      </div>
    </section>
  );
}