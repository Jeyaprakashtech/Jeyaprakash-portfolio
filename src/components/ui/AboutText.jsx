"use client";
import { motion } from "framer-motion";

export default function AboutText() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
      className="font-body text-sm lg:text-lg text-justify text-[#A89EC4] leading-[1.8]"
    >
      <p className="mb-5">
        I'm a{" "}
        <span className="text-[#F0EEFF] font-medium">
          full-stack developer and UI/UX designer
        </span>{" "}
        based in Chennai, India — passionate about crafting digital
        experiences that are as beautiful as they are functional. I
        started with curiosity, stayed for the craft.
      </p>

      <p>
        What sets me apart is the{" "}
        <span className="text-[#C084FC] font-medium">
          duality of design thinking and engineering precision.
        </span>{" "}
        I don't just build what's asked — I question, prototype,
        refine, then ship something that genuinely works and looks
        the part. Code and design aren't two worlds. For me, they're one.
      </p>
    </motion.div>
  );
}