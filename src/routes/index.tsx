import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowUpRight, Menu, X, Star, Plus, Send } from "lucide-react";

const SocialIcon = ({ d }: { d: string }) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d={d} />
  </svg>
);
const ICONS = {
  x: "M18.244 2H21l-6.52 7.45L22 22h-6.79l-5.32-6.96L3.77 22H1l7-8L1.5 2h6.91l4.79 6.34L18.24 2zm-2.38 18.4h1.88L7.27 3.5H5.27l10.6 16.9z",
  fb: "M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.14 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.77l-.44 2.91h-2.33V22c4.78-.8 8.44-4.94 8.44-9.94z",
  ig: "M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 01-1.38-.9 3.7 3.7 0 01-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63a5.86 5.86 0 00-2.13 1.38A5.86 5.86 0 00.63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91a5.86 5.86 0 001.38 2.13 5.86 5.86 0 002.13 1.38c.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.86 5.86 0 002.13-1.38 5.86 5.86 0 001.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.86 5.86 0 00-1.38-2.13A5.86 5.86 0 0019.86.63C19.1.33 18.22.13 16.95.07 15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 100 12.32 6.16 6.16 0 000-12.32zM12 16a4 4 0 110-8 4 4 0 010 8zm6.4-11.85a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z",
  li: "M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 110-4.13 2.06 2.06 0 010 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z",
};
import heroPortrait from "@/assets/profile.png";
import container from "@/assets/container.png";
import civic from "@/assets/civic-intel.png";
import whelm from "@/assets/whelm.png";
import bolo from "@/assets/bolo.png";
import shoe from "@/assets/shoe.png";
import Contact from "@/components/sections/contact";

function ThemeToggle() {
  const [dark, setDark] = useState(true);
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const isDark = stored ? stored === "dark" : true;
    setDark(isDark);
    document.documentElement.classList.toggle("light", !isDark);
  }, []);
  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("light", !next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };
  return (
    <button
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="relative inline-flex h-9 w-9 items-center justify-center rounded-full bg-surface-elevated border border-border hover:border-primary/40 hover:text-primary transition-all"
    >
      <motion.svg
        key={dark ? "moon" : "sun"}
        initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {dark ? (
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        ) : (
          <>
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
          </>
        )}
      </motion.svg>
    </button>
  );
}

export const Route = createFileRoute("/")({
  component: Index,
});

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [
    { label: "Work", href: "#work" },
    { label: "Teaching", href: "#teaching" },
    { label: "Process", href: "#process" },
    { label: "About", href: "#about" },
  ];
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 sm:pt-6"
    >
      <nav
        className={`mx-auto flex max-w-5xl items-center justify-between rounded-full px-4 sm:px-6 py-3 transition-all duration-300 ${scrolled ? "glass shadow-[var(--shadow-elegant)]" : "glass"}`}
      >
        <a href="#" className="font-display text-sm sm:text-base font-bold tracking-tight">
          KHAIRAT<span className="text-primary">ABOLARIN</span>
        </a>
        <ul className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} className="transition-colors hover:text-foreground">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary-glow hover:scale-105"
          >
            Contact Me
          </a>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full bg-surface-elevated"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <motion.div
        initial={false}
        animate={
          open
            ? { opacity: 1, y: 0, pointerEvents: "auto" }
            : { opacity: 0, y: -10, pointerEvents: "none" }
        }
        transition={{ duration: 0.25 }}
        className="md:hidden mx-auto mt-2 max-w-5xl glass rounded-3xl p-5"
      >
        <ul className="flex flex-col gap-3 text-sm">
          {links.map((l) => (
            <li key={l.label}>
              <a
                onClick={() => setOpen(false)}
                href={l.href}
                className="block py-2 text-muted-foreground hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              onClick={() => setOpen(false)}
              href="#contact"
              className="mt-2 block rounded-full bg-primary text-center px-5 py-2.5 text-sm font-semibold text-primary-foreground"
            >
              Contact Me
            </a>
          </li>
        </ul>
      </motion.div>
    </motion.header>
  );
}

function FloatingShapes() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 -left-32 h-[420px] w-[420px] rounded-full bg-primary/25 blur-[120px]"
      />
      <motion.div
        animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 -right-32 h-[420px] w-[420px] rounded-full bg-primary-glow/20 blur-[120px]"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,oklch(0.65_0.22_250/0.12),transparent_50%)]" />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative min-h-dvh pt-32 sm:pt-40 pb-16 px-4 sm:px-6">
      <FloatingShapes />
      <div className="relative mx-auto max-w-7xl grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-12 items-center">
        <motion.div initial="hidden" animate="show" variants={stagger}>
          <motion.h1
            variants={fadeUp}
            className="font-display font-bold leading-[1.05] tracking-tight"
            style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}
          >
            <span className="text-gradient">Designing</span>
            <br />
            Useful Things,
            <br />
            Sharing What
            <br />I{" "}
            <span className="text-gradient">
              <TypeAnimation
                sequence={["Learn.", 2000, "Build.", 2000, "Teach.", 2000, "Ship.", 2000]}
                speed={40}
                repeat={Infinity}
                cursor={true}
              />
            </span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl text-base sm:text-lg text-muted-foreground"
          >
            Product Designer and Design Instructor creating user-centered experiences and helping
            others grow through practical design education.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary-glow hover:scale-105 hover:shadow-[var(--shadow-glow)]"
            >
              View Projects
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 rounded-full glass px-6 py-3 text-sm font-semibold transition-all hover:bg-surface-elevated"
            >
              <span className="flex -space-x-1">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-amber-400" />
                <span className="h-3 w-3 rounded-full bg-primary" />
              </span>
              Let's Connect
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,oklch(0.65_0.22_250/0.35),transparent_70%)] blur-2xl" />
          <motion.img
            src={heroPortrait}
            alt="Khairat Abolarin portrait"
            width={1024}
            height={1024}
            className="relative w-full h-auto object-contain"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>

      <StatsBar />
    </section>
  );
}

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          const start = performance.now();
          const dur = 1400;
          const tick = (t: number) => {
            const p = Math.min(1, (t - start) / dur);
            setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          obs.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [value]);
  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

function StatsBar() {
  const stats = [
    { value: 5, suffix: "", label: "Projects Shipped" },
    { value: 10, suffix: "+", label: "Students Taught" },
    { value: 2, suffix: "", label: "Years Designing" },
    { value: 2, suffix: "", label: "Community Workshops" },
  ];
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={stagger}
      className="relative mx-auto mt-16 sm:mt-24 max-w-7xl grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4"
    >
      {stats.map((s) => (
        <motion.div
          key={s.label}
          variants={fadeUp}
          whileHover={{ y: -4 }}
          className="glass rounded-2xl sm:rounded-3xl p-5 sm:p-6"
        >
          <div className="font-display text-3xl sm:text-5xl font-bold text-primary">
            <Counter value={s.value} suffix={s.suffix} />
          </div>
          <div className="mt-2 text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            {s.label}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

function SectionLabel({ children }: { children: string }) {
  return <div className="section-label mb-4">{children}</div>;
}

function About() {
  const skills = [
    { title: "Product Design", body: "End to end product thinking from strategy to ship." },
    { title: "UI Design", body: "Crafted interfaces with sharp typographic systems." },
    { title: "UX Research", body: "Insight-driven decisions grounded in real user data." },
    { title: "Design Education", body: "Mentoring designers through structured frameworks." },
  ];
  return (
    <section id="about" className="relative px-4 sm:px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-10 lg:gap-16">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
        >
          <motion.div variants={fadeUp}>
            <SectionLabel>01 — About</SectionLabel>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-display font-bold leading-tight"
            style={{ fontSize: "clamp(1.875rem, 4vw, 3rem)" }}
          >
            I design with curiosity
            <br />
            and teach with <span className="text-gradient">honesty.</span>
          </motion.h2>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
        >
          <motion.p variants={fadeUp} className="text-muted-foreground text-base sm:text-lg">
            I'm Khairat — a Product & UI Designer with 2 years of experience shipping real
            interfaces, and a Design Instructor where I help students go from zero to
            portfolio-ready.
          </motion.p>
          <motion.div variants={stagger} className="mt-8 grid sm:grid-cols-2 gap-4">
            {skills.map((s) => (
              <motion.div
                key={s.title}
                variants={fadeUp}
                whileHover={{ y: -4, borderColor: "oklch(0.65 0.22 250 / 0.4)" }}
                className="glass rounded-2xl p-5 transition-colors"
              >
                <h3 className="font-display text-base font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({
  tag,
  title,
  desc,
  cta = "View Site",
  gradient,
  children,
  link = "#",
}: {
  tag: string;
  title: string;
  desc: string;
  cta?: string;
  gradient: string;
  link?: string;
  children?: React.ReactNode;
}) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -6 }}
      className="glass rounded-3xl p-5 sm:p-6 transition-all hover:shadow-[var(--shadow-glow)]"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="section-label">{tag}</div>
          <h3 className="mt-2 font-display text-xl sm:text-2xl font-bold">{title}</h3>
        </div>
        <a
          href={link}
          className="group inline-flex items-center gap-1 text-xs sm:text-sm text-primary border-b border-primary/40 pb-0.5 shrink-0"
        >
          {cta}
          <ArrowUpRight
            size={14}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>
      </div>
      <p className="mt-3 text-sm text-muted-foreground">{desc}</p>
      <div className={`mt-5 relative overflow-hidden rounded-2xl  ${gradient}`}>{children}</div>
    </motion.article>
  );
}

function Work() {
  return (
    <section id="work" className="relative px-4 sm:px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
          className="grid lg:grid-cols-[1fr_auto] gap-6 items-end mb-10"
        >
          <div>
            <motion.div variants={fadeUp}>
              <SectionLabel>02 — Selected Work</SectionLabel>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="font-display font-bold leading-tight"
              style={{ fontSize: "clamp(1.875rem, 4vw, 3rem)" }}
            >
              Selected <span className="text-gradient">Projects</span>
            </motion.h2>
          </div>
          <motion.p
            variants={fadeUp}
            className="text-sm text-muted-foreground lg:text-right max-w-xs"
          >
            A few projects I'm proud of, built while learning, iterating, and shipping.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
          className="grid gap-5"
        >
          <ProjectCard
            link=" https://www.qwikcare.org"
            tag="Health"
            title="QwikCare"
            desc="A unified platform bringing doctors, nurses, pharmacies, labs, and caregivers together streamlining referrals, records, and patient care in one connected ecosystem."
            gradient="bg-gradient-to-br from-violet-500/40 via-fuchsia-500/30 to-primary/40"
          >
            <img src={container} alt="container" />
          </ProjectCard>

          <div className="grid md:grid-cols-2 gap-5">
            <ProjectCard
              link=" http://www.civicintelafrica.com/"
              tag="Election"
              title="CivicIntel"
              desc="Helping citizens navigate elections with confidence by simplifying access to trusted voter information, candidate details, and civic resources."
              gradient="bg-gradient-to-br from-blue-700/40 to-primary/30"
            >
              <img src={civic} alt="civic" />
            </ProjectCard>
            <ProjectCard
              link="https://www.bql.com.ng"
              tag="Education"
              title="Bolo Quiz"
              desc="An interactive quiz competition platform that helps secondary school students learn, compete, and grow through engaging educational challenges."
              gradient="bg-gradient-to-br from-sky-500/40 to-indigo-600/40"
            >
              <img src={bolo} alt="civic" />
            </ProjectCard>
            <ProjectCard
              link="https://www.behance.net/gallery/226178775/LarBuy"
              tag="Growth"
              title="Whelm"
              cta="View Case Study"
              desc="A social platform app for growth, motivation, learning and self-improvement without distractions."
              gradient="bg-gradient-to-br from-emerald-700/40 to-teal-900/40"
            >
              <img src={whelm} alt="civic" />
            </ProjectCard>
            <ProjectCard
              link="https://www.behance.net/gallery/214533649/Royal-Shoe-Store-(Project-Case-Study)"
              tag="E-Commerce"
              title="Royal Shoe Store"
              cta="View Case Study"
              desc="A web/app for individsocial platform app for growth, motivation, learning and self-improvement without distractions."
              gradient="bg-gradient-to-br from-amber-700/30 to-yellow-900/40"
            >
              <img src={shoe} alt="civic" />
            </ProjectCard>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ScrollRow({ children, ariaLabel }: { children: React.ReactNode; ariaLabel: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const scrollBy = (dir: number) => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.8), behavior: "smooth" });
  };
  return (
    <div className="relative group">
      <motion.div
        ref={ref}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        variants={stagger}
        role="region"
        aria-label={ariaLabel}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </motion.div>
      <button
        onClick={() => scrollBy(-1)}
        aria-label="Scroll left"
        className="hidden md:grid absolute left-2 top-1/2 -translate-y-1/2 h-10 w-10 place-items-center rounded-full glass border border-border opacity-0 group-hover:opacity-100 transition-opacity hover:text-primary z-10"
      >
        <ArrowRight size={16} className="rotate-180" />
      </button>
      <button
        onClick={() => scrollBy(1)}
        aria-label="Scroll right"
        className="hidden md:grid absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 place-items-center rounded-full glass border border-border opacity-0 group-hover:opacity-100 transition-opacity hover:text-primary z-10"
      >
        <ArrowRight size={16} />
      </button>
    </div>
  );
}

function ScrollLabel() {
  return (
    <div className="hidden sm:flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground shrink-0">
      Scroll <ArrowRight size={14} className="text-primary" />
    </div>
  );
}

function Process() {
  const steps = [
    {
      n: "01/07",
      title: "Discover",
      body: "Stakeholder interviews, market scans, competitive audits.",
    },
    {
      n: "02/07",
      title: "Research",
      body: "User interviews, ethnographic studies, behavioural signals.",
    },
    { n: "03/07", title: "Define", body: "Problem framing, opportunity mapping, success metrics." },
    {
      n: "04/07",
      title: "Ideate",
      body: "Co-design workshops, divergent exploration, rapid sketches.",
    },
    { n: "05/07", title: "Design", body: "Wireframes, prototypes, high fidelity systems, motion." },
    {
      n: "06/07",
      title: "Prototype",
      body: "Interactive flows, motion specs, validation with users.",
    },
    { n: "07/07", title: "Ship", body: "Hand-off, QA, launch support, iteration loops." },
  ];
  return (
    <section id="process" className="relative px-4 sm:px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
          className="flex items-end justify-between gap-4 mb-10"
        >
          <div>
            <motion.div variants={fadeUp}>
              <SectionLabel>03 — Method</SectionLabel>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="font-display font-bold leading-tight"
              style={{ fontSize: "clamp(1.875rem, 4vw, 3rem)" }}
            >
              A repeatable <span className="text-gradient">process,</span>
              <br />
              not a magic trick.
            </motion.h2>
          </div>
          <motion.div variants={fadeUp}>
            <ScrollLabel />
          </motion.div>
        </motion.div>

        <ScrollRow ariaLabel="Process steps">
          {steps.map((s) => (
            <motion.div
              key={s.title}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl p-5 snap-start shrink-0 w-[260px] sm:w-[280px]"
            >
              <div className="text-xs text-primary font-semibold">{s.n}</div>
              <h3 className="mt-4 font-display text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-xs text-muted-foreground">{s.body}</p>
            </motion.div>
          ))}
        </ScrollRow>
      </div>
    </section>
  );
}

function Toolkit() {
  return (
    <section className="relative px-4 sm:px-6 py-10 sm:py-16">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
          className="flex items-end justify-between gap-4 mb-10"
        >
          <div>
            <motion.div variants={fadeUp}>
              <SectionLabel>04 — What I Do</SectionLabel>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="font-display font-bold leading-tight"
              style={{ fontSize: "clamp(1.875rem, 4vw, 3rem)" }}
            >
              A small toolkit I keep
              <br />
              <span className="text-gradient">sharpening.</span>
            </motion.h2>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-auto"
        >
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -4 }}
            className="glass rounded-2xl p-6 md:row-span-2"
          >
            <div className="section-label">Product Design</div>
            <h3 className="mt-6 font-display text-xl font-bold">Ideate → Screens</h3>
            <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
              <li>User flows</li>
              <li>Wireframes</li>
              <li>Prototyping in Figma</li>
              <li>Simple design systems</li>
            </ul>
          </motion.div>
          <motion.div variants={fadeUp} whileHover={{ y: -4 }} className="glass rounded-2xl p-6">
            <div className="section-label">UI Design</div>
            <h3 className="mt-3 font-display text-lg font-bold">Clean, responsive interfaces</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Components, layout, typography and small touches of motion.
            </p>
          </motion.div>
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -4 }}
            className="rounded-2xl p-6 bg-primary text-primary-foreground"
          >
            <div className="text-xs font-semibold uppercase tracking-widest opacity-90">
              Research
            </div>
            <h3 className="mt-3 font-display text-lg font-bold">Talking to Users</h3>
            <p className="mt-2 text-sm opacity-90">Short interviews and basic usability testing.</p>
          </motion.div>
          <motion.div variants={fadeUp} whileHover={{ y: -4 }} className="glass rounded-2xl p-6">
            <div className="section-label">Teaching</div>
            <h3 className="mt-3 font-display text-lg font-bold">Design Instructor</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Hands-on classes for beginners: Figma, UI/UX basics and first portfolio projects.
            </p>
          </motion.div>
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -4 }}
            className="glass rounded-2xl p-6 flex flex-col items-center justify-center text-center"
          >
            <div className="font-display text-4xl font-bold text-primary">
              <Counter value={10} suffix="+" />
            </div>
            <div className="mt-2 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
              Students Taught
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Teaching() {
  const items = [
    {
      t: "Figma from scratch",
      d: "Frames, components, auto-layout, and prototyping the essentials beginners get stuck on.",
    },
    {
      t: "Thinking like a designer",
      d: "Simple UX exercises and real briefs so students learn by doing, not just watching.",
    },
    {
      t: "Portfolio reviews",
      d: "Helping students shape their first case studies and apply for junior roles with confidence.",
    },
  ];
  return (
    <section id="teaching" className="relative px-4 sm:px-6 py-10 sm:py-16">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-primary text-primary-foreground p-6 sm:p-10 lg:p-14 overflow-hidden relative"
        >
          <div className="absolute -top-32 -right-20 w-80 h-80 bg-primary-glow/40 rounded-full blur-3xl" />
          <div className="relative grid lg:grid-cols-2 gap-10">
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest opacity-90">
                05 — Teaching
              </div>
              <h2
                className="mt-3 font-display font-bold leading-tight"
                style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
              >
                Teaching What
                <br />I Am Learning
              </h2>
              <p className="mt-4 text-sm sm:text-base opacity-90 max-w-md">
                I teach Product & UI/UX Design by walking students through the basics of Figma,
                design thinking, and putting a portfolio together — the stuff I wish someone had
                explained clearly when I started.
              </p>
              <div className="mt-6 space-y-3">
                {items.map((i) => (
                  <details
                    key={i.t}
                    className="group rounded-xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/15 px-4 py-3 transition-all"
                  >
                    <summary className="flex items-center gap-3 cursor-pointer list-none">
                      <span className="grid place-items-center h-6 w-6 rounded-full bg-primary-foreground/20 transition-transform group-open:rotate-45">
                        <Plus size={14} />
                      </span>
                      <span className="font-semibold text-sm">{i.t}</span>
                    </summary>
                    <p className="mt-2 ml-9 text-xs opacity-90">{i.d}</p>
                  </details>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-background/95 text-foreground p-6 sm:p-8 self-start">
              <div className="flex gap-1 text-amber-400">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="mt-4 text-sm sm:text-base italic text-muted-foreground leading-relaxed">
                "She is a very practical instructor. As a student, I found her way of teaching UI/UX
                very easy to follow because she breaks down complex topics into simple steps. She
                doesn't just teach theory — she shows how design actually works in real projects."
              </p>
              <div className="mt-5 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-rose-300 to-amber-200" />
                <div>
                  <div className="font-semibold text-sm">Jimoh Lateefat</div>
                  <div className="text-xs text-muted-foreground">Student, UI/UX Cohort '25</div>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-3 gap-4 pt-5 border-t border-border">
                {[
                  { v: 9, s: "+", l: "Students" },
                  { v: 2, s: "", l: "Workshops" },
                  { v: 1, s: "y+", l: "Teaching" },
                ].map((x) => (
                  <div key={x.l}>
                    <div className="font-display text-2xl font-bold">
                      <Counter value={x.v} suffix={x.s} />
                    </div>
                    <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">
                      {x.l}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Voices() {
  const items = [
    {
      tag: "Client",
      body: "Working with Khairat was smooth and straightforward. She understood the project goals quickly and translated them into a clean, user friendly design that actually improved how people use the platform.",
      name: "Kareem Kazeem",
      role: "Founder",
    },
    {
      tag: "Student",
      body: "UI/UX design became much easier to understand through a simple and practical teaching style that connects lessons to real projects. She helped improve both my skills and confidence through hands-on learning instead of just theory.",
      name: "Jimoh Lateefat",
      role: "Student Product Design Class",
    },
    {
      tag: "Collaborators",
      body: "Collaborating with her was easy because she communicates her design decisions clearly and is always open to feedback and improvement. She works in a very structured and thoughtful way, which makes the design process smooth and effective.",
      name: "Akinyoola Akintayo",
      role: "UI/UX Designer",
    },
  ];
  return (
    <section className="relative px-4 sm:px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
          className="flex items-end justify-between gap-4 mb-10"
        >
          <div>
            <motion.div variants={fadeUp}>
              <SectionLabel>06 — Voices</SectionLabel>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="font-display font-bold leading-tight"
              style={{ fontSize: "clamp(1.875rem, 4vw, 3rem)" }}
            >
              From Clients, Students
              <br />
              and <span className="text-gradient">Collaborators.</span>
            </motion.h2>
          </div>
          <motion.div variants={fadeUp}>
            <ScrollLabel />
          </motion.div>
        </motion.div>
        <ScrollRow ariaLabel="Testimonials">
          {items.map((i) => (
            <motion.div
              key={i.name}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="glass rounded-3xl p-6 flex flex-col snap-start shrink-0 w-[300px] sm:w-[360px]"
            >
              <div className="section-label">{i.tag}</div>
              <p className="mt-4 text-sm text-foreground/85 leading-relaxed flex-1">{i.body}</p>
              <div className="mt-6 pt-5 border-t border-border flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-rose-300 to-amber-200 shrink-0" />
                <div className="min-w-0">
                  <div className="font-semibold text-sm truncate">{i.name}</div>
                  <div className="text-xs text-muted-foreground truncate">{i.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </ScrollRow>
      </div>
    </section>
  );
}

// function Contact() {
//   return (
//     <section id="contact" className="relative px-4 sm:px-6 py-20 sm:py-28">
//       <div className="mx-auto max-w-3xl text-center">
//         <motion.div
//           initial={{ opacity: 0, scale: 0.5 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//           className="mx-auto h-12 w-12 rounded-full border-2 border-primary/40 grid place-items-center"
//         >
//           <div className="h-2.5 w-2.5 rounded-full bg-primary animate-pulse" />
//         </motion.div>
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.1 }}
//           className="mt-8 font-display font-bold uppercase tracking-tight"
//           style={{ fontSize: "clamp(2rem, 6vw, 4rem)" }}
//         >
//           Let's make something together.
//         </motion.h2>
//         <motion.p
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           className="mt-4 text-muted-foreground max-w-xl mx-auto"
//         >
//           Looking for a freelance designer, a class for your team, or just want to chat about design
//           and teaching? Drop me a note.
//         </motion.p>

//         <motion.form
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.3 }}
//           onSubmit={(e) => e.preventDefault()}
//           className="mt-10 glass rounded-3xl p-5 sm:p-8 text-left"
//         >
//           <div className="grid sm:grid-cols-2 gap-4">
//             <Field label="Name" placeholder="John Doe" />
//             <Field label="Email" placeholder="john@studio.com" type="email" />
//           </div>
//           <div className="mt-4">
//             <label className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
//               Project Brief
//             </label>
//             <textarea
//               rows={4}
//               placeholder="Tell me about your project, timeline, and team…"
//               className="mt-2 w-full rounded-xl bg-background/60 border border-border px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all resize-none"
//             />
//           </div>
//           <motion.button
//             whileHover={{ scale: 1.01 }}
//             whileTap={{ scale: 0.99 }}
//             type="submit"
//             className="mt-5 w-full rounded-full bg-primary text-primary-foreground py-3.5 text-sm font-semibold inline-flex items-center justify-center gap-2 hover:bg-primary-glow hover:shadow-[var(--shadow-glow)] transition-all"
//           >
//             Send Message <Send size={14} />
//           </motion.button>
//         </motion.form>
//       </div>
//     </section>
//   );
// }

// function Field({
//   label,
//   placeholder,
//   type = "text",
// }: {
//   label: string;
//   placeholder: string;
//   type?: string;
// }) {
//   return (
//     <div>
//       <label className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
//         {label}
//       </label>
//       <input
//         type={type}
//         placeholder={placeholder}
//         className="mt-2 w-full rounded-xl bg-background/60 border border-border px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all"
//       />
//     </div>
//   );
// }

function Footer() {
  const socials = [ICONS.x, ICONS.fb, ICONS.ig, ICONS.li];
  return (
    <footer className="px-4 sm:px-6 pt-10 pb-8 border-t border-border">
      <div className="mx-auto max-w-7xl grid gap-10 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="font-display font-bold text-sm tracking-tight">KHAIRAT_ABOLARIN_2026</div>
          <p className="mt-3 text-xs text-muted-foreground max-w-xs">
            Building bridges between human problems and digital solutions with a Product Thinking
            lens.
          </p>
        </div>
        <div>
          <div className="text-xs font-semibold mb-3">Navigation</div>
          <ul className="space-y-2 text-xs text-muted-foreground">
            <li>
              <a href="#work" className="hover:text-foreground">
                Work
              </a>
            </li>
            <li>
              <a href="#teaching" className="hover:text-foreground">
                Teaching
              </a>
            </li>
            <li>
              <a href="#process" className="hover:text-foreground">
                Process
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-foreground">
                About
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div className="text-xs font-semibold mb-3">Connect</div>
          <div className="flex gap-2">
            {socials.map((d, i) => (
              <a
                key={i}
                href="#"
                aria-label="social"
                className="h-9 w-9 grid place-items-center rounded-full bg-surface-elevated border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
              >
                <SocialIcon d={d} />
              </a>
            ))}
          </div>
        </div>
        <div>
          <div className="text-xs font-semibold mb-3">Contact</div>
          <div className="text-xs text-muted-foreground space-y-2">
            <div>khairatabolarin01@gmail.com</div>
            <a href="#" className="text-foreground hover:text-primary">
              Link to my Resume
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl mt-10 pt-6 border-t border-border text-xs text-muted-foreground flex flex-wrap justify-between gap-2">
        <span>© 2026 Khairat Abolarin. All rights reserved.</span>
        <span>Designed & built with care.</span>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="relative min-h-dvh">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Work />
        <Process />
        <Toolkit />
        <Teaching />
        <Voices />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
