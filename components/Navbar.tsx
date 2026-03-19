"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Terminal } from 'lucide-react';

interface NavbarProps {
  theme: any;
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean) => void;
  setIsInteractive: (val: boolean) => void;
}

const Navbar = ({ theme, isDarkMode, setIsDarkMode, setIsInteractive }: NavbarProps) => {
  // Explicitly defining the hex values ensures Framer Motion animations 
  // don't conflict with Tailwind's CSS transitions.
  const activeTextColor = isDarkMode ? "#f1f5f9" : "#0f172a"; 

  return (
    <nav className={`fixed top-0 left-0 flex items-center justify-between px-10 md:px-20 h-28 w-full z-50 border-b backdrop-blur-md transition-colors duration-500 ${theme.nav}`}>
      
      {/* Brand / Logo Section */}
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-lg" style={{ backgroundColor: "#10b981" }}>
          <Terminal size={24} className="text-black" />
        </div>
        <span className={`text-4xl font-black tracking-tighter transition-colors duration-500 ${theme.text} leading-none`}>
          Yonas<span className="text-[#10b981]">_</span>
        </span>
      </div>

      {/* Center Navigation Links */}
      <div className="hidden md:flex items-center gap-12">
        {['About', 'Experience', 'Skills', 'Work', 'Contact'].map((item) => (
          <motion.a 
            key={item}
            href={`#${item.toLowerCase()}`}
            onMouseEnter={() => setIsInteractive(true)}
            onMouseLeave={() => setIsInteractive(false)}
            // 'animate' forces the color to update instantly when theme toggles
            animate={{ color: activeTextColor }}
            whileHover={{ 
              color: "#10b981", 
              letterSpacing: "0.1em", 
              y: -2 
            }}
            transition={{ 
              color: { duration: 0.3 },
              letterSpacing: { duration: 0.3, ease: "easeOut" }
            }}
            className="text-lg font-black uppercase tracking-tight cursor-none"
          >
            {item}
          </motion.a>
        ))}
      </div>
      
      {/* Theme Toggle Action */}
      <div className="flex items-center gap-6">
        <button 
          onClick={() => setIsDarkMode(!isDarkMode)}
          onMouseEnter={() => setIsInteractive(true)}
          onMouseLeave={() => setIsInteractive(false)}
          className={`p-3 rounded-xl transition-all duration-500 border shadow-sm active:scale-90 ${
            isDarkMode 
              ? 'bg-zinc-900 border-zinc-700 text-yellow-400 hover:border-yellow-400/50' 
              : 'bg-white border-slate-200 text-slate-600 hover:border-slate-400'
          }`}
        >
          {isDarkMode ? (
            <Sun size={22} className="transition-transform duration-500 hover:rotate-90" />
          ) : (
            <Moon size={22} className="transition-transform duration-500 hover:-rotate-12" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;