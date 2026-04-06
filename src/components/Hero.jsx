"use client";
import TypingText from "./ui/TypingText";
import Avatarcard from "./ui/Avatarcard";
import ScrollCue from "./ui/ScrollCue";
import { motion } from "framer-motion";
import GostButton from "./ui/GostButton";
import CtaButton from "./ui/CtaButton";
import SectionBadge from "./ui/SectionBadge";
import HeroBg from "./ui/HeroBg";
import RoleReveal from "./ui/RoleReveal";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden flex flex-col bg-transparent justify-center"
    >
      <HeroBg />

      {/* Main */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="container-main relative z-5 w-full
                   flex flex-col lg:flex-row
                   items-center justify-between
                   gap-12 py-10 lg:py-28"
      >
        {/* LEFT */}
        <div className="flex-1 flex flex-col  gap-2 items-center text-center lg:items-start lg:text-left">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-1 "
          >
            {/* desktop badge*/}
            <div className="lg:block hidden">
              <SectionBadge label={"◆ I AM"} />
            </div>
            {/* mobile badge*/}
            <div className="lg:hidden flex items-center justify-center  gap-3 mt-15">
              <div className="w-[60px] h-px bg-gradient-to-r from-transparent to-cyan-400" />
              <span className="font-mono text-sm text-cyan-400 tracking-[0.12em]">
                ◆ I AM ◆
              </span>
              <div className="w-[60px] h-px bg-gradient-to-r from-cyan-400 to-transparent" />
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-extrabold max-w-[480px]
                       text-3xl md:text-4xl lg:text-6xl leading-[1.08]"
          >
            Jeya
            <span className="bg-gradient-to-br from-purple-600 to-pink-500 bg-clip-text text-transparent">
              prakash
            </span>
          </motion.h1>

          {/* Role */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            <TypingText />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="font-body text-sm lg:text-lg text-[#A89EC4]
                       leading-[1.8] mb-5 max-w-[480px] text-justify"
          >
            I build <span className="text-white">high-performance</span> digital
            products that combine speed, scalability and exceptional user
            experience. From idea to deployment — I deliver complete{" "}
            <span className="text-white">end-to-end solution.</span>
          </motion.p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.75 }}
            >
              <CtaButton />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <GostButton />
            </motion.div>
          </div>
        </div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="w-full lg:w-[45%] hidden lg:flex justify-center lg:justify-end relative"
        >
          {/* AVATAR */}
          <div className="relative z-5  ">
            <Avatarcard />
          </div>
        </motion.div>
      </motion.div>

      <ScrollCue />
    </section>
  );
}
