"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Car, ShoppingBag, UtensilsCrossed, Layers, ArrowRight } from "lucide-react";

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
    desc: "A full-stack delivery ecosystem featuring live socket-based tracking, driver dispatch logic, and instant status updates. Built for high-concurrency environments with real-time feedback loops.",
    tech: ["Next.js", "Socket.io", "Node.js", "MongoDB"],
    github: "https://github.com/Yonas_/food-delivery",
    demo: "https://food-delivery-live.vercel.app",
    icon: <UtensilsCrossed size={24} />,
    image: "/projects/food-delivery.png",
  },
  {
    title: "Advanced E-Commerce",
    category: "RETAIL_PROTOCOL",
    desc: "Scalable retail architecture with atomic design, Redux state management, and secure Stripe API integration. Optimized for conversion with fluid micro-interactions and rapid search capabilities.",
    tech: ["React", "Redux", "Stripe", "Tailwind"],
    github: "https://github.com/Yonas_/ecommerce-v3",
    demo: "https://obsidian-store.io",
    icon: <ShoppingBag size={24} />,
    image: "/projects/ecommerce.png",
  },
  {
    title: "Car Rental System",
    category: "FLEET_MANAGEMENT",
    desc: "Centralised fleet control system with interactive availability calendars and automated rental agreements. Features a custom-built scheduling engine for seamless vehicle management.",
    tech: ["TypeScript", "PostgreSQL", "Prisma", "Framer"],
    github: "https://github.com/Yonas_/car-rental",
    demo: "https://drive-rentals.net",
    icon: <Car size={24} />,
    image: "/projects/car-rental.png",
  },
];

export default function Projects({ theme, isDarkMode }: { theme: any; isDarkMode: boolean }) {
  if (!theme) return null;

  return (
    <section className={`py-32 px-6 md:px-32 border-t border-white/5 transition-colors duration-700 ${isDarkMode ? "bg-[#0a0a0b]" : "bg-[#fcfcfd]"}`}>
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 text-emerald-500 font-mono text-xs tracking-[0.5em] font-bold uppercase mb-4"
          >
            <Layers size={14} />
            <span>DEPLOYED_ASSETS_V3.0</span>
          </motion.div>
          <h2 className={`text-6xl md:text-9xl font-black tracking-tighter ${theme.text} uppercase leading-none`}>
            FEATURED <span className="text-emerald-500 font-outline-2">LABS</span>
          </h2>
        </div>

        {/* Alternating Project Rows */}
        <div className="space-y-48">
          {projectData.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <div 
                key={index}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-24`}
              >
                {/* Visual Side (Image with Parallax/Hover) */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9, x: isEven ? -100 : 100 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full lg:w-3/5 group relative"
                >
                  <div className="relative overflow-hidden rounded-3xl aspect-[16/10] bg-zinc-900 border border-white/10 shadow-2xl">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-in-out"
                    />
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-500" />
                  </div>

                  {/* Floating Tech Badge */}
                  <motion.div 
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className={`absolute -bottom-6 ${isEven ? '-right-6' : '-left-6'} hidden md:block z-20 bg-emerald-500 p-8 rounded-2xl shadow-xl`}
                  >
                    <div className="text-black font-black text-2xl">0{index + 1}</div>
                    <div className="text-black/60 font-mono text-[10px] font-bold uppercase">Deployment_ID</div>
                  </motion.div>
                </motion.div>

                {/* Info Side */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? 100 : -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="w-full lg:w-2/5 space-y-8"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                       <span className="p-3 bg-emerald-500/10 text-emerald-500 rounded-xl">
                        {project.icon}
                      </span>
                      <span className="font-mono text-xs text-emerald-500 font-bold tracking-[0.3em] uppercase">
                        {project.category}
                      </span>
                    </div>
                    <h3 className={`text-4xl md:text-6xl font-black ${theme.text} uppercase tracking-tight leading-[0.9]`}>
                      {project.title}
                    </h3>
                  </div>

                  <p className={`${theme.subtext} text-lg leading-relaxed font-medium`}>
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tag) => (
                      <span key={tag} className="text-[10px] font-mono py-1.5 px-3 border border-emerald-500/20 bg-emerald-500/5 text-emerald-500 uppercase rounded-sm">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-8 pt-6">
                    <a href={project.github} className="group/link flex items-center gap-2 text-xs font-mono font-bold text-zinc-500 hover:text-white transition-colors">
                      <Github size={18} className="group-hover/link:rotate-12 transition-transform" /> 
                      <span>SOURCE_CODE</span>
                    </a>
                    <a href={project.demo} className="group/link flex items-center gap-2 text-xs font-mono font-bold text-emerald-500 hover:text-emerald-400 transition-colors">
                      <ExternalLink size={18} className="group-hover/link:-translate-y-1 group-hover/link:translate-x-1 transition-transform" /> 
                      <span>ACCESS_LIVE</span>
                    </a>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}