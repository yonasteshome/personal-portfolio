"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import {
  Terminal,
  Cpu,
  Zap,
  Layers,
  Activity,
  Shield,
  Users,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

interface AboutProps {
  theme: any;
  isDarkMode: boolean;
}

const About = ({ theme, isDarkMode }: AboutProps) => {

  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const card: Variants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  const sections = [
    {
      title: "Identity",
      icon: Terminal,
      items: ["Full-Stack Developer", "QA Tester", "Problem Solver"],
    },
    {
      title: "Mindset",
      icon: Cpu,
      items: ["Critical Thinker", "Logical Decisions", "System-Oriented"],
    },
    {
      title: "Learning",
      icon: Zap,
      items: ["Fast Learner", "Learn by Building", "Adapts Quickly"],
    },
    {
      title: "Work Style",
      icon: Layers,
      items: ["Clean Code", "Maintainable Systems", "Performance Aware"],
    },
    {
      title: "Problem Solving",
      icon: Activity,
      items: ["Breaks Complexity", "Debugging", "Optimization"],
    },
    {
      title: "Collaboration",
      icon: Users,
      items: ["Clear Communication", "Solo & Team Work", "Open Feedback"],
    },
    {
      title: "Quality & UX",
      icon: Shield,
      items: ["User-Focused", "Quality First", "Test Driven"],
    },
    {
      title: "Direction",
      icon: ArrowUpRight,
      items: ["Real Products", "Growing Engineer", "Long-Term Thinking"],
    },
  ];

  return (
    <section
      id="about"
      className={`relative py-36 px-6 md:px-24 overflow-hidden ${
        isDarkMode ? "bg-[#0b0b0c]" : "bg-[#f7f7f8]"
      }`}
    >

      {/* BACKGROUND GLOW */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-emerald-500/10 blur-[180px] rounded-full" />

      <div className="max-w-[1400px] mx-auto space-y-28 relative z-10">

        {/* HEADER */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-4xl space-y-10"
        >
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-3"
          >
            <Sparkles className="text-emerald-400" size={22} />

            <span
              className={`text-xs tracking-[0.45em] uppercase font-semibold ${theme.subtext}`}
            >
              About Me
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className={`text-5xl md:text-7xl font-black leading-[0.95] tracking-tight ${theme.text}`}
          >
            Structured Thinking.
            <br />
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 text-transparent bg-clip-text">
              Reliable Systems.
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className={`max-w-xl text-lg leading-relaxed ${theme.subtext}`}
          >
            I build scalable software, solve complex problems, and design
            maintainable systems with strong focus on performance,
            reliability, and user experience.
          </motion.p>
        </motion.div>

        {/* GRID */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {sections.map((section, i) => {
            const Icon = section.icon;

            return (
              <motion.div
                key={i}
                variants={card}
                whileHover={{ y: -12 }}
                className={`group relative p-7 rounded-3xl border backdrop-blur-xl transition-all duration-500
                ${
                  isDarkMode
                    ? "bg-white/[0.03] border-white/10 hover:border-emerald-400/40"
                    : "bg-white border-black/10 shadow-lg"
                }`}
              >

                {/* CARD GLOW */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-emerald-400/10 to-transparent rounded-3xl" />

                {/* ICON */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-emerald-400/10 text-emerald-400 group-hover:scale-110 transition">
                    <Icon size={22} />
                  </div>

                  <h4
                    className={`text-sm tracking-[0.18em] font-bold uppercase ${theme.text}`}
                  >
                    {section.title}
                  </h4>
                </div>

                {/* BADGES */}
                <div className="flex flex-wrap gap-2.5">
                  {section.items.map((item, idx) => (
                    <span
                      key={idx}
                      className={`px-3 py-1.5 text-[11px] rounded-full border font-medium transition
                      ${
                        isDarkMode
                          ? "border-white/10 text-zinc-400 group-hover:text-zinc-200"
                          : "border-zinc-200 text-zinc-600"
                      }`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default About;