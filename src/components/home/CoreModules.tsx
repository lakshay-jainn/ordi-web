"use client";

import { Code2, BrainCircuit, Users, Calendar, Sparkles, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { motion } from "framer-motion";

const modules = [
  {
    id: "workshops",
    title: "Workshops",
    tag: "SKILL BUILDING",
    desc: "Rigorous sessions on Full Stack, DevOps, and Systems. Building the foundation.",
    icon: <Code2 className="w-5 h-5" />,
    link: "/workshops"
  },
  {
    id: "research",
    title: "Research",
    tag: "INNOVATION",
    desc: "Bleeding edge Neural Networks & AI implementation. Theory meets code.",
    icon: <BrainCircuit className="w-5 h-5" />,
    link: "/research"
  },
  {
    id: "community",
    title: "Community",
    tag: "ECOSYSTEM",
    desc: "A collective of like-minded builders. We grow together.",
    icon: <Users className="w-5 h-5" />,
    link: "/community"
  },
  {
    id: "events",
    title: "Flagship Events",
    tag: "COMPETITION",
    desc: "Hackathons and CTFs. The ultimate testing ground for your abilities.",
    icon: <Calendar className="w-5 h-5" />,
    link: "/events"
  },
  {
    id: "playground",
    title: "Playground",
    tag: "EXPERIMENTAL",
    desc: "Experimental labs for trying new tech. Failure is just progress.",
    icon: <Sparkles className="w-5 h-5" />,
    link: "/playground"
  },
];

export function CoreModules() {
  return (
    <section className="w-full relative px-4 py-24">
       <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-8">
                <div>
                     <div className="flex items-center gap-3 mb-6">
                        <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-starlight/60 text-xs font-medium tracking-wider uppercase">
                            What We Do
                        </span>
                    </div>
                    <h2 className="text-5xl md:text-7xl font-bold font-sans tracking-tighter mb-8 text-transparent bg-clip-text bg-gradient-to-b from-starlight to-starlight/40">
                        Core Modules
                    </h2>
                </div>
                 <p className="text-starlight/60 text-lg font-light tracking-wide max-w-md md:text-right">
                    Five strategic pillars driving innovation and technical excellence.
                </p>
            </div>

            {/* Compact Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {modules.map((module, i) => (
                    <motion.div 
                        key={module.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                        whileHover={{ 
                            scale: 1.05, 
                            y: -10,
                            transition: { type: "spring", stiffness: 400, damping: 10 } 
                        }}
                        className={cn(
                            "group relative flex flex-col p-8 rounded-3xl border border-white/10 bg-white/[0.02] overflow-hidden cursor-pointer",
                            "hover:bg-white/[0.05] hover:border-accretion/30 hover:shadow-2xl hover:shadow-accretion/10 transition-colors duration-300"
                        )}
                    >
                        {/* Fruitful Background Element: Watermark Number */}
                        <div className="absolute -right-4 -top-12 text-[180px] font-bold text-white/[0.02] group-hover:text-white/[0.04] transition-colors select-none font-sans tracking-tighter z-0">
                            {i + 1}
                        </div>
                        
                        {/* Spotlight Gradient on Hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-accretion/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none" />

                         {/* Header: Icon & Tag */}
                        <div className="relative z-10 flex items-start justify-between mb-8">
                             <div className="w-14 h-14 rounded-2xl border border-white/10 flex items-center justify-center text-starlight/80 bg-void-light group-hover:text-void group-hover:bg-accretion group-hover:border-accretion group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-accretion/50">
                                {module.icon}
                            </div>
                            <span className="text-[10px] uppercase tracking-widest text-white/30 font-semibold group-hover:text-accretion/80 transition-colors border border-white/5 bg-void/50 px-2 py-1 rounded-md backdrop-blur-sm">
                                {module.tag}
                            </span>
                        </div>
                        
                        {/* Content */}
                        <div className="relative z-10 mt-auto">
                            <h3 className="text-3xl font-bold text-white mb-3 tracking-tight group-hover:text-accretion transition-colors">
                                {module.title}
                            </h3>
                            <p className="text-starlight/60 text-base leading-relaxed mb-6 font-light group-hover:text-white/90 transition-colors">
                                {module.desc}
                            </p>
                            
                            <div className="flex items-center gap-2 text-white/40 text-xs font-mono font-medium uppercase tracking-wider group-hover:text-accretion transition-colors">
                                Explore <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
       </div>
    </section>
  );
}
