"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      {/* Content */}
      <div className="z-10 text-center px-4 max-w-5xl mx-auto space-y-8">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1.5, ease: "easeOut" }}
           className="relative"
        >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-starlight to-starlight/40 font-sans">
              ORDINATEUR
            </h1>
            <div className="absolute -inset-10 bg-starlight/5 blur-3xl -z-10 rounded-full opacity-50 animate-pulse" />
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg md:text-2xl text-starlight/60 max-w-2xl mx-auto font-light tracking-wide"
        >
          Navigating the <span className="text-accretion">Event Horizon</span> of Technology
        </motion.p>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-starlight/30 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-[0.2em]">Scroll</span>
        <ArrowDown className="w-5 h-5 animate-bounce" />
      </motion.div>
    </section>
  );
}
