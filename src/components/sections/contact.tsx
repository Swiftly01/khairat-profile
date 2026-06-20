"use client";
import emailjs from "@emailjs/browser";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

// ── paste your credentials here ──────────────────────────────
const EJS_SERVICE = "service_1n90ttc";
const EJS_TEMPLATE = "template_hnx03a2";
const EJS_PUBLIC = "lroUsWuepmRvWlKC4";
// ─────────────────────────────────────────────────────────────

function Field({
  label,
  placeholder,
  type = "text",
  name,
}: {
  label: string;
  placeholder: string;
  type?: string;
  name: string;
}) {
  return (
    <div>
      <label className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required
        className="mt-2 w-full rounded-xl bg-background/60 border border-border px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all"
      />
    </div>
  );
}

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("sending");

    try {
      await emailjs.sendForm(EJS_SERVICE, EJS_TEMPLATE, formRef.current, EJS_PUBLIC);
      setStatus("sent");
      formRef.current.reset();
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative px-4 sm:px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto h-12 w-12 rounded-full border-2 border-primary/40 grid place-items-center"
        >
          <div className="h-2.5 w-2.5 rounded-full bg-primary animate-pulse" />
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-8 font-display font-bold uppercase tracking-tight"
          style={{ fontSize: "clamp(2rem, 6vw, 4rem)" }}
        >
          Let's make something together.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-muted-foreground max-w-xl mx-auto"
        >
          Looking for a freelance designer, a class for your team, or just want to chat about design
          and teaching? Drop me a note.
        </motion.p>

        <motion.form
          ref={formRef}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          onSubmit={handleSubmit}
          className="mt-10 glass rounded-3xl p-5 sm:p-8 text-left"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Name" name="from_name" placeholder="John Doe" />
            <Field label="Email" name="from_email" placeholder="john@studio.com" type="email" />
          </div>
          <div className="mt-4">
            <label className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
              Project Brief
            </label>
            <textarea
              name="message"
              rows={4}
              required
              placeholder="Tell me about your project, timeline, and team…"
              className="mt-2 w-full rounded-xl bg-background/60 border border-border px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all resize-none"
            />
          </div>

          {/* Status messages */}
          {status === "sent" && (
            <p className="mt-4 text-sm text-emerald-400 font-medium text-center">
              Message sent! I'll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="mt-4 text-sm text-red-400 font-medium text-center">
              ❌ Something went wrong. Try emailing me directly at khairatabolarin01@gmail.com
            </p>
          )}

          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            type="submit"
            disabled={status === "sending" || status === "sent"}
            className="mt-5 w-full rounded-full bg-primary text-primary-foreground py-3.5 text-sm font-semibold inline-flex items-center justify-center gap-2 hover:bg-primary-glow hover:shadow-[var(--shadow-glow)] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "sending" ? (
              "Sending…"
            ) : status === "sent" ? (
              "Message Sent ✓"
            ) : (
              <>
                Send Message <Send size={14} />
              </>
            )}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
