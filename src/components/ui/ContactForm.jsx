"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { SUBJECTS } from "../../assets/Content";
import ContactSuccess from "./ContactSuccess";

const SERVICE_ID  = process.env.NEXT_PUBLIC_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
const PUBLIC_KEY  = process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY;

const INPUT_BASE = {
  background:   "#060612",
  border:       "1px solid #2A1F50",
  borderRadius: "10px",
  color:        "#F0EEFF",
  fontFamily:   "'DM Sans', sans-serif",
  fontSize:     "15px",
  outline:      "none",
  width:        "100%",
  transition:   "border-color 200ms, box-shadow 200ms",
  padding:      "0 14px",
  height:       "48px",
};

function getInputStyle(error, success) {
  return {
    ...INPUT_BASE,
    borderColor: error   ? "#EF4444"
               : success ? "#10B981"
               :           "#2A1F50",
    boxShadow:   error   ? "0 0 0 3px rgba(239,68,68,0.1)"
               : success ? "0 0 0 3px rgba(16,185,129,0.1)"
               :           "none",
  };
}

function Field({ label, required, error, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="font-body font-medium text-[13px] text-[#A89EC4]">
        {label}
        {required && (
          <span className="text-red-500 ml-[3px]">*</span>
        )}
      </label>

      {children}

      {error && (
        <span className="font-body text-[12px] text-red-500">
          {error}
        </span>
      )}
    </div>
  );
}

const EMPTY_FORM = { name: "", email: "", subject: "", message: "" };

function validate(data) {
  const e = {};
  if (!data.name.trim())    e.name = "Name is required";
  if (!data.email.trim())   e.email = "Email is required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    e.email = "Enter a valid email";
  if (!data.subject)        e.subject = "Please select a subject";
  if (!data.message.trim()) e.message = "Message is required";
  else if (data.message.trim().length < 10)
    e.message = "At least 10 characters";
  return e;
}

export default function ContactForm() {
  const [form,    setForm]    = useState(EMPTY_FORM);
  const [errors,  setErrors]  = useState({});
  const [touched, setTouched] = useState({});
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const isOk = (f) => touched[f] && !errors[f] && form[f];

  const handleChange = (field, value) => {
    const updated = { ...form, [field]: value };
    setForm(updated);
    if (touched[field]) setErrors(validate(updated));
  };

  const handleBlur = (field) => {
    setTouched((t) => ({ ...t, [field]: true }));
    setErrors(validate(form));
  };

  const handleSubmit = async () => {
    const allTouched = { name: true, email: true, subject: true, message: true };
    setTouched(allTouched);
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    try {
      setSending(true);
      const send = emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name:  form.name,
          from_email: form.email,
          subject:    form.subject,
          message:    form.message,
          time:       new Date().toLocaleString(),
        },
        PUBLIC_KEY
      );

      const timeout = new Promise((_, rej) =>
        setTimeout(() => rej(new Error("Timeout")), 8000)
      );

      await Promise.race([send, timeout]);

      setSuccess(true);
      setForm(EMPTY_FORM);
    } catch (err) {
      alert(
        err.message === "Timeout"
          ? "Server is slow. Please try again."
          : "Failed to send. Please try again."
      );
    } finally {
      setSending(false);
    }
  };

  const handleReset = () => {
    setSuccess(false);
    setForm(EMPTY_FORM);
    setErrors({});
    setTouched({});
  };

  return (
    <motion.div
      className="relative flex-1 rounded-2xl p-8 
                 bg-[#0E0C1A] border border-[#2A1F50] min-h-[520px]"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
    >
      <ContactSuccess show={success} onReset={handleReset} />

      <div className="flex flex-col gap-6">

        {/* Name + Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

          {/* Name */}
          <Field label="Name" required error={errors.name}>
            <div className="relative">
              <input
                type="text"
                placeholder="Jeyaprakash"
                value={form.name}
                onChange={(e) => handleChange("name", e.target.value)}
                onBlur={() => handleBlur("name")}
                style={getInputStyle(errors.name, isOk("name"))}
                onFocus={(e) => {
                  if (!errors.name) {
                    e.target.style.borderColor = "#7C3AED";
                    e.target.style.boxShadow =
                      "0 0 0 4px rgba(124,58,237,0.15)";
                  }
                }}
              />
              {isOk("name") && (
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-green-500">
                  ✓
                </span>
              )}
            </div>
          </Field>

          {/* Email */}
          <Field label="Email" required error={errors.email}>
            <div className="relative">
              <input
                type="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
                onBlur={() => handleBlur("email")}
                style={getInputStyle(errors.email, isOk("email"))}
                onFocus={(e) => {
                  if (!errors.email) {
                    e.target.style.borderColor = "#7C3AED";
                    e.target.style.boxShadow =
                      "0 0 0 4px rgba(124,58,237,0.15)";
                  }
                }}
              />
              {isOk("email") && (
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-green-500">
                  ✓
                </span>
              )}
            </div>
          </Field>
        </div>

        {/* Subject */}
        <Field label="Subject" required error={errors.subject}>
          <select
            value={form.subject}
            onChange={(e) => handleChange("subject", e.target.value)}
            onBlur={() => handleBlur("subject")}
            style={{
              ...getInputStyle(errors.subject, isOk("subject")),
              appearance: "none",
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none'%3E%3Cpath d='M6 9l6 6 6-6' stroke='%237C3AED' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 16px center",
              paddingRight: "40px",
              color: form.subject ? "#F0EEFF" : "#5E5478",
            }}
          >
            <option value="" disabled>
              Select a subject...
            </option>
            {SUBJECTS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </Field>

        {/* Message */}
        <Field label="Message" required error={errors.message}>
          <textarea
            placeholder="Tell me about your project..."
            value={form.message}
            onChange={(e) => handleChange("message", e.target.value)}
            onBlur={() => handleBlur("message")}
            rows={5}
            style={{
              ...getInputStyle(errors.message, isOk("message")),
              height: "auto",
              minHeight: "140px",
              padding: "14px",
              resize: "vertical",
              lineHeight: 1.7,
            }}
          />
        </Field>

        {/* Button */}
        <motion.button
          onClick={handleSubmit}
          disabled={sending}
          className="w-full flex items-center justify-center gap-3
                     rounded-xl font-body font-semibold text-white
                     text-[16px] h-[52px]
                     bg-gradient-to-r from-[#7C3AED] to-[#A855F7]
                     shadow-[0_0_24px_rgba(124,58,237,0.35)]
                     disabled:opacity-85 disabled:cursor-not-allowed"
          whileHover={!sending ? {
            boxShadow: "0 0 36px rgba(124,58,237,0.6)",
            scale: 1.02,
          } : {}}
          whileTap={!sending ? { scale: 0.98 } : {}}
          transition={{ duration: 0.2 }}
        >
          {sending ? "Sending..." : "Send Message ✦"}
        </motion.button>

      </div>
    </motion.div>
  );
}