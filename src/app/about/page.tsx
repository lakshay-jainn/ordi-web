"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Starfield } from "@/components/ui/Starfield";
import { motion, Variants } from "framer-motion";
import { Target, Lightbulb, ArrowRight, BookOpen, Quote, Shield, Zap, Users } from "lucide-react";
import Link from "next/link";
// Import centralized data
import { coreValues, milestones as milestonesConfig } from "@/config/about";
import { cn } from "@/lib/utils";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: [0.22, 1, 0.36, 1]
    },
  },
};

export default function AboutUs() {
  return (
    <main className="min-h-screen bg-void text-starlight selection:bg-accretion selection:text-void-dark relative">
      <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
        <Starfield />
      </div>

      <Navbar />

      <div className="relative z-10 pt-32 pb-20">
        
        {/* HERO SECTION - Matched to Departments/Events Style */}
        <section className="w-full px-6 mb-24">
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
                    Our Story
                  </span>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold font-sans tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-b from-starlight to-starlight/40">
                  About Us
                </h1>
                <div className="h-1 w-32 bg-gradient-to-r from-accretion via-accretion/50 to-transparent rounded-full" />
              </motion.div>
              <p className="text-starlight/60 text-lg font-light tracking-wide max-w-md md:text-right">
                Where code meets creativity. Ordinateur is the Departmental Computer Science Society of Hansraj College.
              </p>
            </div>
          </div>
        </section>

        {/* Vision & Mission - Dept Card Style */}
        <section className="px-6 mb-24">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative rounded-3xl border border-white/10 bg-white/[0.02] overflow-hidden hover:border-accretion/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(234,179,8,0.1)] flex flex-col"
            >
              <div className="h-1.5 w-full bg-gradient-to-r from-accretion/80 via-accretion to-accretion/80 opacity-60 group-hover:opacity-100 transition-opacity" />
              <div className="relative p-10 flex flex-col h-full z-10 backdrop-blur-[1px]">
                 <div className="flex items-start gap-6 mb-8">
                     {/* <div className="w-16 h-16 rounded-2xl border border-white/10 bg-void/40 flex items-center justify-center text-starlight/80 group-hover:bg-accretion group-hover:text-void group-hover:border-accretion group-hover:scale-110 transition-all duration-300 shadow-xl relative overflow-hidden">
                        <Lightbulb className="w-8 h-8" />
                     </div> */}
                     <div className="pt-2">
                        <span className="text-[10px] uppercase tracking-[0.2em] text-accretion/60 font-bold block mb-1">Guide</span>
                        <h2 className="text-4xl font-bold text-white tracking-tight leading-none group-hover:text-accretion transition-colors duration-300">Mission</h2>
                     </div>
                 </div>
                 <p className="text-starlight/70 text-lg leading-relaxed flex-grow">
                  To inspire, educate, and empower students through technology, fostering a culture of innovation, collaboration, and continuous learning. We bridge the gap between academic theory and real-world application.
                 </p>
                 <div className="absolute -right-10 -bottom-10 text-[12rem] font-bold text-white/[0.01] group-hover:text-white/[0.03] transition-colors select-none font-sans tracking-tighter pointer-events-none">M</div>
              </div>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
               className="group relative rounded-3xl border border-white/10 bg-white/[0.02] overflow-hidden hover:border-accretion/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(234,179,8,0.1)] flex flex-col"
            >
              <div className="h-1.5 w-full bg-gradient-to-r from-accretion/80 via-accretion to-accretion/80 opacity-60 group-hover:opacity-100 transition-opacity" />
               <div className="relative p-10 flex flex-col h-full z-10 backdrop-blur-[1px]">
                 <div className="flex items-start gap-6 mb-8">
                     {/* <div className="w-16 h-16 rounded-2xl border border-white/10 bg-void/40 flex items-center justify-center text-starlight/80 group-hover:bg-accretion group-hover:text-void group-hover:border-accretion group-hover:scale-110 transition-all duration-300 shadow-xl relative overflow-hidden">
                        <Target className="w-8 h-8" />
                     </div> */}
                     <div className="pt-2">
                        <span className="text-[10px] uppercase tracking-[0.2em] text-accretion/60 font-bold block mb-1">Goal</span>
                        <h2 className="text-4xl font-bold text-white tracking-tight leading-none group-hover:text-accretion transition-colors duration-300">Vision</h2>
                     </div>
                 </div>
                 <p className="text-starlight/70 text-lg leading-relaxed flex-grow">
                  To become a beacon of technological excellence, creating a vibrant ecosystem where the next generation of tech leaders emerges, equipped with the skills and mindset to shape the digital future.
                 </p>
                 <div className="absolute -right-10 -bottom-10 text-[12rem] font-bold text-white/[0.01] group-hover:text-white/[0.03] transition-colors select-none font-sans tracking-tighter pointer-events-none">V</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Core Values - CoreModules Style */}
        <section className="px-6 mb-24">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6 px-2">
              <div>
                 <h2 className="text-4xl font-bold font-sans tracking-tight text-white mb-2">Core Values</h2>
                 <p className="text-starlight/60">The principles that guide our every action.</p>
              </div>
              <div className="h-px flex-1 bg-white/10 md:ml-8 mb-4 max-w-sm" />
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {coreValues.map((value: any, idx: number) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="group relative flex flex-col p-8 rounded-3xl border border-white/10 bg-white/[0.02] overflow-hidden cursor-default hover:bg-white/[0.05] hover:border-accretion/30 hover:shadow-2xl hover:shadow-accretion/10 transition-colors duration-300"
                >
                  {/* Watermark Number */}
                  <div className="absolute -right-4 -top-8 text-[120px] font-bold text-white/[0.02] group-hover:text-white/[0.04] transition-colors select-none font-sans tracking-tighter z-0">
                     0{idx + 1}
                  </div>
                  
                  {/* Icon Box */}
                  <div className="relative z-10 w-14 h-14 rounded-2xl border border-white/10 bg-void-light flex items-center justify-center text-starlight/80 group-hover:text-void group-hover:bg-accretion group-hover:border-accretion group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-accretion/50 mb-6">
                    {value.icon}
                  </div>

                  <div className="relative z-10 mt-auto">
                    <h3 className="text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-accretion transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-starlight/60 text-sm leading-relaxed font-light group-hover:text-white/90 transition-colors">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Journey - Vertical Timeline with Structured Cards */}
        <section className="px-6 mb-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 font-sans tracking-tight text-white">Our Journey</h2>
              <p className="text-starlight/60">A history of growth and innovation.</p>
            </div>

            <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-accretion/20 before:to-transparent">
              {milestonesConfig.map((milestone, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
                >
                  {/* Timeline Dot */}
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-void shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 shadow-[0_0_20px_rgba(0,0,0,0.8)] group-hover:border-accretion/50 transition-colors">
                    <div className="w-2.5 h-2.5 bg-accretion rounded-full group-hover:scale-150 transition-transform duration-500" />
                  </div>
                  
                  {/* Card */}
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] group/card">
                    <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:border-accretion/20 transition-all duration-300 relative overflow-hidden">
                       <div className="absolute top-0 left-0 w-1 h-full bg-accretion/0 group-hover/card:bg-accretion/50 transition-colors duration-300" />
                       
                       <span className="text-accretion font-bold font-mono text-sm tracking-wider mb-2 block">{milestone.year}</span>
                       <h3 className="text-xl font-bold text-white mb-2 group-hover/card:text-accretion transition-colors">{milestone.title}</h3>
                       <p className="text-starlight/60 text-sm leading-relaxed group-hover/card:text-starlight/80 transition-colors">{milestone.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Departments Link */}
        <section className="px-6">
           <div className="max-w-7xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden border border-white/10">
               <div className="absolute inset-0 bg-white/[0.02]" />
               <div className="absolute inset-0 bg-gradient-to-r from-accretion/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
               
               <div className="relative p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Expertise Areas</h2>
                    <p className="text-starlight/60 max-w-lg text-lg">
                      Explore the specialized teams that drive our technical initiatives and creative projects.
                    </p>
                  </div>
                  <Link href="/departments">
                    <button className="px-8 py-4 bg-white text-void font-bold rounded-full hover:bg-starlight hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl shadow-white/5 cursor-pointer flex items-center gap-2 group">
                      View Departments <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </Link>
               </div>
            </div>
          </div>
        </section>

      </div>

      <Footer />
    </main>
  );
}