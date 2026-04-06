"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { SHAPES, CONTACT_INFO } from "../assets/Content";
import SectionBadge from "./ui/SectionBadge";
import ContactInfo from "./ui/ContactInfo";
import ContactForm from "./ui/ContactForm";
import ContactToast from "./ui/ContactToast";

export default function Contact() {
  const [toastShow, setToastShow] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(CONTACT_INFO.email);
    setToastShow(true);
    setTimeout(() => setToastShow(false), 3000);
  };
  const copyPhone = () => {
    navigator.clipboard.writeText(CONTACT_INFO.phone);
    setToastShow(true);
    setTimeout(() => setToastShow(false), 3000);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-10 lg:py-20 bg-[#060612]"
    >
      {/* Floating shapes */}
      {SHAPES.map((s, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none rounded-full z-0"
          style={{
            width: s.size,
            height: s.size,
            top: s.top,
            left: s.left,
            right: s.right,
            bottom: s.bottom,
            background: s.color,
            filter: `blur(${s.blur}px)`,
          }}
          animate={{
            y: ["0px", "-20px", "0px"],
            rotate: [0, 8, 0],
          }}
          transition={{
            duration: 6 + i * 1.5,
            delay: i * 0.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 70%, rgba(124,58,237,0.05) 0%, transparent 70%)",
        }}
      />

      <ContactToast show={toastShow} />

      <div className="container-main relative z-5">
        {/* Badge */}
        <SectionBadge label="◆ GET IN TOUCH" />

        {/* Heading */}
        <motion.h2
          className="font-display font-bold leading-[1.15]
                     text-[clamp(32px,4.5vw,52px)] text-[#F0EEFF] mb-4"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
        >
          Let's Build Something{" "}
          <span className="bg-gradient-to-r from-[#7C3AED] to-[#EC4899] bg-clip-text text-transparent">
            Together
          </span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          className="font-body mb-16 text-[17px] text-[#A89EC4] leading-[1.7] max-w-[520px]"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.12 }}
        >
          Have a project in mind? Need a website? Or just want to say hi?
          I'm always open.
        </motion.p>

        {/* Two columns */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <ContactInfo onCopyEmail={copyEmail} onCopyPhone={copyPhone}/>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}