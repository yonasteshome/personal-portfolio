"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Car, ShoppingBag, UtensilsCrossed, Layers } from "lucide-react";

interface Project {
  title: string;
  category: string;
  desc: string;
  tech: string[];
  github: string;
  demo: string;
  icon: React.ReactNode;
  image: string;
}

const projectData: Project[] = [
  {
    title: "Real-time Food Engine",
    category: "LOGISTICS_NETWORK",
    desc: "A full-stack delivery ecosystem featuring live socket-based tracking, driver dispatch logic, and instant status updates.",
    tech: ["Next.js", "Socket.io", "Node.js", "MongoDB"],
    github: "https://github.com/Yonas_/food-delivery",
    demo: "https://food-delivery-live.vercel.app",
    icon: <UtensilsCrossed size={24} />,
    image: "/projects/food-delivery.png",
  },
  {
    title: "Advanced E-Commerce",
    category: "RETAIL_PROTOCOL",
    desc: "Scalable retail architecture with atomic design, Redux state management, and secure Stripe API integration.",
    tech: ["React", "Redux", "Stripe", "Tailwind"],
    github: "https://github.com/Yonas_/ecommerce-v3",
    demo: "https://obsidian-store.io",
    icon: <ShoppingBag size={24} />,
    image: "/projects/ecommerce.png",
  },
  {
    title: "Car Rental System",
    category: "FLEET_MANAGEMENT",
    desc: "Centralised fleet control system with interactive availability calendars and automated rental agreements.",
    tech: ["TypeScript", "PostgreSQL", "Prisma", "Framer"],
    github: "https://github.com/Yonas_/car-rental",
    demo: "https://drive-rentals.net",
    icon: <Car size={24} />,
    image: "/projects/car-rental.png",
  },
];

// FIXED: Using destructuring to receive the theme prop correctly
export default function Projects({ theme, isDarkMode }: { theme: any; isDarkMode: boolean }) {
  
  // Safety guard: if theme is missing, don't crash the app
  if (!theme) return null;

  return (
    <section className={`py-24 px-12 md:px-32 border-t border-white/5 transition-colors duration-700 ${isDarkMode ? "bg-[#0a0a0b]" : "bg-[#fcfcfd]"}`}>
      <div className="max-w-[1700px] mx-auto">
        
        {/* Header Section */}
        <div className="mb-20">
          <div className="flex items-center gap-3 text-emerald-500 font-mono text-xs tracking-[0.5em] font-bold uppercase mb-4">
            <Layers size={14} />
            <span>DEPLOYED_ASSETS_V3.0</span>
          </div>
          <h2 className={`text-6xl md:text-8xl font-black tracking-tighter ${theme.text} uppercase leading-none`}>
            FEATURED <span className="text-emerald-500">LABS</span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {projectData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white/[0.02] border border-white/5 rounded-2xl overflow-hidden hover:border-emerald-500/40 transition-all duration-500"
            >
              <div className="h-56 bg-zinc-900 overflow-hidden relative">
                <div className="absolute inset-0 bg-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
              </div>

              <div className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="p-2 bg-emerald-500/10 text-emerald-500 rounded-lg">
                    {project.icon}
                  </span>
                  <span className="font-mono text-[10px] text-zinc-500 tracking-widest uppercase">
                    {project.category}
                  </span>
                </div>

                <h3 className={`text-2xl font-black ${theme.text} uppercase tracking-tight mb-4 group-hover:text-emerald-400 transition-colors`}>
                  {project.title}
                </h3>

                <p className={`${theme.subtext} text-sm leading-relaxed mb-6 font-medium line-clamp-3`}>
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tag) => (
                    <span key={tag} className="text-[9px] font-mono py-1 px-2 border border-white/10 bg-white/5 text-zinc-400 uppercase">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center pt-6 border-t border-white/5">
                  <a href={project.github} className="flex items-center gap-2 text-[10px] font-mono text-zinc-500 hover:text-white transition-colors">
                    <Github size={14} /> SOURCE_CODE
                  </a>
                  <a href={project.demo} className="flex items-center gap-2 text-[10px] font-mono text-emerald-500 hover:text-emerald-400 transition-colors">
                    <ExternalLink size={14} /> ACCESS_LIVE
                  </a>
                </div>
              </div>

              <div className="absolute -inset-px bg-gradient-to-r from-emerald-500/20 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}