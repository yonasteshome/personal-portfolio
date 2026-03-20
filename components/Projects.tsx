"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Car, ShoppingBag, MapPin, Layers } from "lucide-react";

interface Project {
  title: string;
  category: string;
  desc: string;
  tech: string[];
  github: string;
  demo: string;
  icon: React.ReactNode;
  image?: string;
  video?: string;
}

const projectData: Project[] = [
  {
    title: "Car Rental System",
    category: "FLEET_MANAGEMENT",
    desc: "Centralised fleet control system with interactive availability calendars and automated rental agreements. Features a custom-built scheduling engine for seamless vehicle management.",
    tech: ["TypeScript", "PostgreSQL", "Prisma", "Framer"],
    github: "https://github.com/yonasteshome/vehicle-rental-system",
    demo: "https://vehicle-rental-system-wrjt.vercel.app/landing",
    icon: <Car size={24} />,
    image: "/projects/car-rental.png",
    video: "/rental.mp4"
  },
  {
    title: "REAL-TIME FOOD_DELIVERY",
    category: "LOGISTICS_INTELLIGENCE",
    desc: "A mission-critical food ordering and delivery ecosystem featuring a live map-tracking system. Engineered for sub-second synchronization between couriers and customers via a custom geospatial dispatch engine.",
    tech: ["Next.js", "Socket.io", "Mapbox", "Redis", "Node.js"],
    github: "https://github.com/yonasteshome/REAL-TIME-FOOD_DELIVERY",
    demo: "https://food-delivery-live.vercel.app",
    icon: <MapPin size={24} />, 
    video: "/delivery.mp4",
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
  }
  
];

export default function Projects({ theme, isDarkMode }: { theme: any; isDarkMode: boolean }) {
  if (!theme) return null;

  return (
    <section className={`py-40 px-6 md:px-12 lg:px-24 border-t border-white/5 transition-colors duration-700 ${isDarkMode ? "bg-[#0a0a0b]" : "bg-[#fcfcfd]"}`}>
      {/* Max-width expanded to 1600px to take up horizontal space */}
      <div className="max-w-[1600px] mx-auto">
        
        {/* Header Section */}
        <div className="mb-40">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 text-emerald-500 font-mono text-xs tracking-[0.5em] font-bold uppercase mb-4"
          >
            <Layers size={14} />
            <span>PROJECT_ARCHIVE_V3.0</span>
          </motion.div>
          {/* Renamed Section to "WORKS" */}
          <h2 className={`text-6xl md:text-9xl font-black tracking-tighter ${theme.text} uppercase leading-none`}>
            SELECTED <span className="text-emerald-500 font-outline-2">WORKS</span>
          </h2>
        </div>

        {/* Alternating Project Rows */}
        <div className="space-y-64">
          {projectData.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <div 
                key={index}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16 lg:gap-32`}
              >
                {/* Visual Side (Kept original 16/10 aspect ratio and 3/5 width) */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9, x: isEven ? -100 : 100 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full lg:w-3/5 group relative"
                >
                  <div className="relative overflow-hidden rounded-[2.5rem] aspect-[8/4] bg-zinc-900 border border-white/10 shadow-2xl">
                    {project.video ? (
                      <video
                        src={project.video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000 ease-in-out"
                      />
                    ) : (
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-in-out"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-500" />
                  </div>

                  <motion.div 
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className={`absolute -bottom-8 ${isEven ? '-right-8' : '-left-8'} hidden md:block z-20 bg-emerald-500 p-8 rounded-2xl shadow-xl`}
                  >
                    <div className="text-black font-black text-3xl">0{index + 1}</div>
                    <div className="text-black/60 font-mono text-[10px] font-bold uppercase">DEPLOY_ID</div>
                  </motion.div>
                </motion.div>

                {/* Info Side - Text sizes increased for a wider look */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? 100 : -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="w-full lg:w-2/5 space-y-10"
                >
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                       <span className="p-3 bg-emerald-500/10 text-emerald-500 rounded-xl">
                        {project.icon}
                      </span>
                      <span className="font-mono text-sm text-emerald-500 font-bold tracking-[0.3em] uppercase">
                        {project.category}
                      </span>
                    </div>
                    <h3 className={`text-5xl md:text-7xl font-black ${theme.text} uppercase tracking-tighter leading-[0.85]`}>
                      {project.title}
                    </h3>
                  </div>

                  <p className={`${theme.subtext} text-xl leading-relaxed font-medium italic`}>
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((tag) => (
                      <span key={tag} className="text-[11px] font-mono py-2 px-4 border border-emerald-500/20 bg-emerald-500/5 text-emerald-500 uppercase rounded-sm">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-10 pt-8 border-t border-white/5">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="group/link flex items-center gap-2 text-sm font-mono font-bold text-zinc-500 hover:text-white transition-colors">
                      <Github size={20} className="group-hover/link:rotate-12 transition-transform" /> 
                      <span>SRC_CODE</span>
                    </a>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="group/link flex items-center gap-2 text-sm font-mono font-bold text-emerald-500 hover:text-emerald-400 transition-colors">
                      <ExternalLink size={20} className="group-hover/link:-translate-y-1 group-hover/link:translate-x-1 transition-transform" /> 
                      <span>LIVE_ACCESS</span>
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