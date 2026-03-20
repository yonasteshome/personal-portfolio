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
    icon: <Car size={20} />,
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
    icon: <MapPin size={20} />, 
    video: "/delivery.mp4",
  },
  {
    title: "Advanced E-Commerce",
    category: "RETAIL_PROTOCOL",
    desc: "Scalable retail architecture with atomic design, Redux state management, and secure Stripe API integration. Optimized for conversion with fluid micro-interactions and rapid search capabilities.",
    tech: ["React", "Redux", "Stripe", "Tailwind"],
    github: "https://github.com/Yonas_/ecommerce-v3",
    demo: "https://obsidian-store.io",
    icon: <ShoppingBag size={20} />,
    image: "/projects/ecommerce.png",
  }
];

export default function Projects({ theme, isDarkMode }: { theme: any; isDarkMode: boolean }) {
  if (!theme) return null;

  return (
    <section className={`py-24 px-6 md:px-12 lg:px-24 border-t border-white/5 transition-colors duration-700 ${isDarkMode ? "bg-[#0a0a0b]" : "bg-[#fcfcfd]"}`}>
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header Section - Scale Reduced */}
        <div className="mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-emerald-500 font-mono text-[10px] tracking-[0.4em] font-bold uppercase mb-2"
          >
            <Layers size={12} />
            <span>PROJECT_ARCHIVE_V3.0</span>
          </motion.div>
          <h2 className={`text-5xl md:text-7xl font-black tracking-tighter ${theme.text} uppercase leading-none`}>
            SELECTED <span className="text-emerald-500">WORKS</span>
          </h2>
        </div>

        {/* Project Rows - Reduced spacing from space-y-64 to space-y-32 */}
        <div className="space-y-32">
          {projectData.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <div 
                key={index}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20`}
              >
                {/* Visual Side - Refined Scale */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full lg:w-1/2 group relative"
                >
                  <div className="relative overflow-hidden rounded-3xl aspect-[16/9] bg-zinc-900 border border-white/10 shadow-xl">
                    {project.video ? (
                      <video
                        src={project.video}
                        autoPlay loop muted playsInline
                        className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000 ease-in-out"
                      />
                    ) : (
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-in-out"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 group-hover:opacity-10 transition-opacity duration-500" />
                  </div>

                  {/* Smaller Indicator Badge */}
                  <motion.div 
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className={`absolute -bottom-4 ${isEven ? '-right-4' : '-left-4'} hidden md:block z-20 bg-emerald-500 p-5 rounded-xl shadow-lg`}
                  >
                    <div className="text-black font-black text-xl">0{index + 1}</div>
                    <div className="text-black/60 font-mono text-[8px] font-bold uppercase tracking-tighter">DEPLOY_ID</div>
                  </motion.div>
                </motion.div>

                {/* Info Side - Scale Reduced for Text */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="w-full lg:w-1/2 space-y-6"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                       <span className="p-2 bg-emerald-500/10 text-emerald-500 rounded-lg">
                        {project.icon}
                      </span>
                      <span className="font-mono text-[10px] text-emerald-500 font-bold tracking-[0.2em] uppercase">
                        {project.category}
                      </span>
                    </div>
                    {/* Header reduced from 7xl to 5xl */}
                    <h3 className={`text-4xl md:text-5xl font-black ${theme.text} uppercase tracking-tighter leading-[0.9]`}>
                      {project.title}
                    </h3>
                  </div>

                  {/* Description reduced to text-lg */}
                  <p className={`${theme.subtext} text-lg leading-relaxed font-medium italic max-w-lg`}>
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tag) => (
                      <span key={tag} className="text-[9px] font-mono py-1.5 px-3 border border-emerald-500/20 bg-emerald-500/5 text-emerald-500 uppercase rounded-sm">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-8 pt-6 border-t border-white/5">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="group/link flex items-center gap-2 text-[11px] font-mono font-bold text-zinc-500 hover:text-white transition-colors">
                      <Github size={16} className="group-hover/link:rotate-12 transition-transform" /> 
                      <span>SRC_CODE</span>
                    </a>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="group/link flex items-center gap-2 text-[11px] font-mono font-bold text-emerald-500 hover:text-emerald-400 transition-colors">
                      <ExternalLink size={16} className="group-hover/link:-translate-y-1 group-hover/link:translate-x-1 transition-transform" /> 
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