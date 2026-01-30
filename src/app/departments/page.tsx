"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Starfield } from "@/components/ui/Starfield";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Linkedin, Mail, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import { departmentsList, executiveBoard } from "@/config/departments";
import { cn } from "@/lib/utils";

export default function DepartmentsPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-void text-starlight selection:bg-accretion selection:text-void-dark relative">
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20">
        <Starfield />
      </div>

      <Navbar />

      <div className="relative z-10">
        {/* DEPARTMENTS HERO SECTION */}
        <section className="w-full px-4 pt-32 pb-24">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-starlight/60 text-xs font-medium tracking-wider uppercase backdrop-blur-md">
                    Team Structure
                  </span>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold font-sans tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-b from-starlight to-starlight/40">
                  Departments
                </h1>
                <div className="h-1 w-32 bg-gradient-to-r from-accretion via-accretion/50 to-transparent rounded-full" />
              </motion.div>
              <p className="text-starlight/60 text-lg font-light tracking-wide max-w-md md:text-right">
                The five specialized pillars that drive Ordinateur's vision.
              </p>
            </div>

            {/* DEPARTMENT CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {departmentsList.map((dept, i) => (
                <motion.div
                  key={dept.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="group relative rounded-3xl border border-white/10 bg-white/[0.02] overflow-hidden hover:border-accretion/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(234,179,8,0.1)]"
                >
                  <Link href={`/departments/${dept.id}`} className="absolute inset-0 z-20" />
                  
                  <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none mix-blend-overlay" />
                  <div className="h-1.5 w-full bg-gradient-to-r from-accretion/80 via-accretion to-accretion/80 opacity-20 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="absolute -right-20 -top-20 w-64 h-64 bg-accretion/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-accretion/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  
                  <div className="relative p-8 flex flex-col h-full z-10 backdrop-blur-[1px]">
                    <div className="flex items-start gap-4 mb-8">
                       <div className="w-14 h-14 rounded-2xl border border-white/10 bg-void/40 flex items-center justify-center text-starlight/80 group-hover:bg-accretion group-hover:text-void group-hover:border-accretion group-hover:scale-105 transition-all duration-300 shadow-xl relative overflow-hidden">
                           <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                           {dept.icon}
                       </div>
                       <div className="pt-1">
                           <span className="text-[10px] uppercase tracking-[0.2em] text-accretion/60 font-bold block mb-1">
                               {dept.label}
                           </span>
                           <h3 className="text-3xl font-bold text-white tracking-tight leading-none group-hover:text-accretion transition-colors duration-300">
                               {dept.name}
                           </h3>
                       </div>
                    </div>
                    
                    <p className="text-starlight/60 text-base leading-relaxed mb-8 flex-grow font-light">
                      {dept.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                      {dept.tags.map(tag => (
                        <span key={tag} className="text-[11px] font-mono font-medium text-accretion/60 bg-accretion/[0.03] px-3 py-1.5 rounded-lg border border-accretion/10 group-hover:border-accretion/30 group-hover:text-accretion group-hover:bg-accretion/[0.08] transition-all">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="pt-6 mt-auto border-t border-white/5 flex items-center justify-between group-hover:border-accretion/20 transition-colors">
                      <span className="text-xs uppercase tracking-widest text-starlight/40 font-semibold group-hover:text-accretion transition-colors">
                        Discover
                      </span>
                      <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-starlight/40 group-hover:border-accretion group-hover:text-accretion group-hover:bg-accretion/10 transition-all duration-300">
                         <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* LEADERSHIP SECTION - SOLAR SYSTEM LAYOUT V2 FIXED */}
        <section className="w-full px-4 pt-20 pb-40 border-t border-white/5 bg-gradient-to-b from-white/[0.01] to-void relative">
           
           {/* Background Stars/Noise */}
           {/* <div className="absolute inset-0 z-0">
               <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] pointer-events-none mix-blend-overlay" />
           </div> */}

          <div className="max-w-[1400px] mx-auto relative z-10">
            <div className="text-center mb-16 relative z-20">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accretion/20 bg-accretion/5 text-accretion text-xs font-bold tracking-widest uppercase backdrop-blur-md mb-6">
                    <Sparkles className="w-3 h-3" /> 2025-26 Board
                </div>
                <h2 className="text-5xl md:text-7xl font-bold font-sans tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-starlight to-starlight/40">
                  Leadership Core
                </h2>
            </div>
            
            {/* DESKTOP SOLAR SYSTEM LAYOUT */}
            <div className="hidden lg:flex items-center justify-center relative min-h-[600px] w-full mt-30">
                
                {/* 1. THE SUN (Convenors) - Static Center */}
                <div className="absolute z-20 flex gap-4 items-center justify-center">
                    {executiveBoard.convenors.map((member, idx) => (
                        <motion.div
                             key={idx}
                             initial={{ scale: 0.8, opacity: 0 }}
                             whileInView={{ scale: 1, opacity: 1 }}
                             transition={{ duration: 0.8 }}
                             viewport={{ once: true }}
                             className="w-[160px] h-[220px] relative group"
                        >
                            <div className="absolute -inset-4 bg-accretion/20 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition duration-1000" />
                            <div className="w-full h-full bg-void border border-white/10 rounded-[1.5rem] overflow-hidden p-2 backdrop-blur-xl relative z-10 shadow-2xl hover:border-accretion/50 transition-all duration-500 hover:scale-105">
                                <div className="relative h-[140px] w-full rounded-[1.2rem] overflow-hidden mb-2">
                                     <img src={member.photo} alt={member.name} className="w-full h-full object-cover saturate-0 group-hover:saturate-100 transition-all duration-500" />
                                     <div className="absolute top-2 left-2">
                                        <span className="px-2 py-0.5 rounded-full bg-accretion text-void text-[7px] font-black tracking-widest uppercase">{member.role}</span>
                                     </div>
                                </div>
                                <div className="text-center">
                                    <h3 className="text-sm font-bold text-white leading-tight mb-1">{member.name}</h3>
                                    <div className="w-6 h-[2px] bg-accretion/50 mx-auto rounded-full" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* 2. CIRCULAR ROTATING ORBIT */}
                <div className="absolute w-[600px] h-[600px] rounded-full border border-accretion/10 animate-orbit-slow z-10">
                    {/* Orbital Ring Decoration */}
                    <div className="absolute inset-0 rounded-full border border-dashed border-white/10" />
                    
                    {/* All Core Team Members - positioned on the circle */}
                    {executiveBoard.core.map((member, idx) => {
                        const totalMembers = executiveBoard.core.length;
                        const angle = (360 / totalMembers) * idx - 90; // Start from top
                        const angleRad = (angle * Math.PI) / 180;
                        const radius = 300; // Half of 600
                        
                        const x = Math.cos(angleRad) * radius;
                        const y = Math.sin(angleRad) * radius;

                        return (
                            <div
                                key={idx}
                                className="absolute top-1/2 left-1/2"
                                style={{
                                    transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`
                                }}
                            >
                                {/* Counter-rotate to keep cards upright while orbit spins */}
                                <div className="animate-counter-orbit">
                                    <div className="group relative flex flex-col items-center">
                                        {/* Planet Card - LARGER SIZE */}
                                        <div className="relative w-24 h-24 rounded-full p-1 bg-void border-2 border-white/20 group-hover:border-accretion shadow-[0_0_40px_rgba(0,0,0,0.8)] group-hover:shadow-[0_0_60px_rgba(234,179,8,0.3)] group-hover:scale-110 transition-all duration-500 cursor-pointer">
                                            <div className="w-full h-full rounded-full overflow-hidden">
                                                <img src={member.photo} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                                            </div>
                                            {/* Glow effect on hover */}
                                            <div className="absolute -inset-2 bg-accretion/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
                                        </div>
                                        
                                        {/* Name Label */}
                                        <div className="mt-2 text-center bg-void/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 group-hover:border-accretion/40 transition-colors whitespace-nowrap">
                                            <h4 className="text-white text-xs font-bold group-hover:text-accretion transition-colors">
                                                {member.name}
                                            </h4>
                                            <span className="text-[8px] text-starlight/50 uppercase tracking-wider">
                                                {member.role}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                
                {/* Outer decorative static circle */}
                <div className="absolute w-[700px] h-[700px] rounded-full border border-white/5 pointer-events-none" />
            </div>

             {/* --- MOBILE GRID LAYOUT (Hidden on desktop) --- */}
             <div className="lg:hidden flex flex-col gap-16 mt-12">
                <div className="flex flex-col gap-8 items-center">
                    {executiveBoard.convenors.map((member, idx) => (
                         <div key={idx} className="w-full max-w-[320px]">
                            <div className="bg-void border border-white/10 rounded-[2rem] p-5 text-center shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-accretion/50 to-transparent" />
                                <img src={member.photo} alt={member.name} className="w-full aspect-[4/5] object-cover rounded-[1.5rem] mb-5 grayscale hover:grayscale-0 transition-all" />
                                <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                                <div className="inline-block px-3 py-1 bg-accretion/10 rounded-full text-[10px] text-accretion font-bold uppercase tracking-widest">{member.role}</div>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                    {executiveBoard.core.map((member, idx) => (
                         <div key={idx} className="bg-white/[0.03] border border-white/5 rounded-2xl p-4 flex flex-col items-center text-center hover:bg-white/[0.06] transition-colors">
                             <img src={member.photo} alt={member.name} className="w-20 h-20 rounded-full object-cover mb-3 grayscale" />
                             <h4 className="text-white text-sm font-bold leading-tight mb-1">{member.name}</h4>
                             <p className="text-[9px] text-starlight/40 uppercase tracking-wider">{member.role}</p>
                         </div>
                    ))}
                </div>
            </div>

          </div>
        </section>
      </div>
      
      <Footer />
    </main>
  );
}