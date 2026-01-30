"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Starfield } from "@/components/ui/Starfield";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { BookOpen, Download, ArrowRight, FileText, Users, Calendar } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const magazines = [
  {
    year: "2024",
    title: "Bitwise 2024",
    description: "The latest edition exploring Generative AI, Quantum Computing, and the future of software development.",
    month: "December 2024",
    issues: 4,
    articles: "45+",
    contributors: "50+",
    cover: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=1000&fit=crop",
    featured: true
  },
  {
    year: "2023",
    title: "Bitwise 2023",
    description: "A comprehensive look at Web3, Blockchain, and the evolving landscape of digital privacy.",
    month: "December 2023",
    issues: 4,
    articles: "42+",
    contributors: "48+",
    cover: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=1000&fit=crop"
  },
  {
    year: "2022",
    title: "Bitwise 2022",
    description: "Celebrating open source contributions and the rapid growth of the developer community.",
    month: "December 2022",
    issues: 4,
    articles: "40+",
    contributors: "45+",
    cover: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=1000&fit=crop"
  },
  {
    year: "2021",
    title: "Bitwise 2021",
    description: "Chronicles of digital transformation during a year of remote work and virtual collaboration.",
    month: "December 2021",
    issues: 4,
    articles: "38+",
    contributors: "42+",
    cover: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=1000&fit=crop"
  },
  {
    year: "2020",
    title: "Bitwise 2020",
    description: "The dawn of a new decade in tech: Cloud computing, AI ethics, and sustainable tech.",
    month: "December 2020",
    issues: 4,
    articles: "36+",
    contributors: "40+",
    cover: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=1000&fit=crop"
  }
];

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
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function MagazinePage() {
  const [hoveredYear, setHoveredYear] = useState<string | null>(null);

  const featuredMagazine = magazines.find(m => m.featured);
  const pastMagazines = magazines.filter(m => !m.featured);

  return (
    <main className="min-h-screen bg-void text-starlight selection:bg-accretion selection:text-void-dark relative">
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20">
        <Starfield />
      </div>

      <Navbar />

      <div className="relative z-10 pt-32 pb-20">
        
        {/* HERO SECTION - Matched to About/Dept Style */}
        <section className="w-full px-6 mb-24">
          <div className="max-w-7xl mx-auto">
             <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-starlight/60 text-xs font-medium tracking-wider uppercase backdrop-blur-md">
                    Editorial
                  </span>
                </div>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-sans tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-b from-starlight to-starlight/40">
                  Bitwise
                </h1>
                <div className="h-1 w-32 bg-gradient-to-r from-accretion via-accretion/50 to-transparent rounded-full" />
              </motion.div>
              <p className="text-starlight/60 text-lg font-light tracking-wide max-w-md md:text-right">
                Our annual publication featuring insights, research, and stories lying at the intersection of technology and creativity.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Issue Section */}
        {featuredMagazine && (
          <section className="px-6 mb-32">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col items-start mb-8">
                 <h2 className="text-sm font-semibold tracking-widest uppercase text-accretion mb-2">Latest Release</h2>
                 <div className="h-px w-full max-w-[100px] bg-accretion/50" />
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative rounded-[2rem] border border-white/10 bg-white/[0.02] overflow-hidden shadow-2xl shadow-black/50"
              >
                <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none mix-blend-overlay" />
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  {/* Cover Image Container (5 cols) */}
                  <div className="lg:col-span-5 relative h-[500px] lg:h-auto overflow-hidden border-b lg:border-b-0 lg:border-r border-white/10 bg-void-dark">
                    <img 
                      src={featuredMagazine.cover} 
                      alt={featuredMagazine.title}
                      className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-out" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent opacity-40" />
                  </div>

                  {/* Content Container (7 cols) */}
                  <div className="lg:col-span-7 p-8 md:p-12 lg:p-16 flex flex-col justify-center relative overflow-hidden">
                    {/* Watermark Year */}
                    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 text-[20rem] font-bold text-white/[0.02] select-none pointer-events-none font-sans tracking-tighter">
                      {featuredMagazine.year}
                    </div>

                    <div className="relative z-10">
                      <div className="mb-8 flex items-center justify-between">
                        <span className="px-4 py-1.5 rounded-full bg-accretion/10 text-accretion text-xs font-bold uppercase tracking-wider border border-accretion/20 shadow-[0_0_15px_rgba(234,179,8,0.1)]">
                          Latest Release
                        </span>
                        <span className="text-starlight/40 font-mono text-xs uppercase tracking-wider">
                          {featuredMagazine.month}
                        </span>
                      </div>

                      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-[0.9]">
                        {featuredMagazine.title}
                      </h2>
                      <p className="text-starlight/70 text-lg md:text-xl leading-relaxed mb-10 font-light max-w-xl">
                        {featuredMagazine.description}
                      </p>

                      {/* Glass Stats Boxes */}
                      <div className="grid grid-cols-3 gap-4 mb-10">
                         {[
                           { label: "Issues", value: featuredMagazine.issues },
                           { label: "Articles", value: featuredMagazine.articles },
                           { label: "Authors", value: featuredMagazine.contributors }
                         ].map((stat, i) => (
                           <div key={i} className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-sm text-center group/stat hover:bg-white/[0.05] transition-colors">
                              <div className="text-2xl md:text-3xl font-bold text-white mb-1 group-hover/stat:text-accretion transition-colors">{stat.value}</div>
                              <div className="text-[10px] md:text-xs text-starlight/40 uppercase tracking-widest font-medium">{stat.label}</div>
                           </div>
                         ))}
                      </div>

                      <div className="flex flex-wrap gap-4">
                        <button className="px-8 py-4 bg-white text-void font-bold rounded-full hover:bg-starlight hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl shadow-white/5 cursor-pointer flex items-center gap-2 group/btn">
                          <BookOpen className="w-5 h-5 group-hover/btn:rotate-12 transition-transform" />
                          <span>Read Online</span>
                        </button>
                        <button className="px-8 py-4 border border-white/10 bg-white/[0.02] text-white font-bold rounded-full hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex items-center gap-2 group/btn">
                          <Download className="w-5 h-5 group-hover/btn:-translate-y-1 transition-transform" />
                          <span>PDF</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* Past Issues Grid */}
        <section className="px-6 pb-20">
           <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
                <div>
                   <h3 className="text-3xl font-bold text-white tracking-tight">Archive</h3>
                   <p className="text-starlight/50 mt-2">Previous editions of Bitwise Magazine.</p>
                </div>
                <div className="h-px flex-1 bg-white/10 md:ml-8 mb-4 max-w-sm" />
              </div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                 {pastMagazines.map((mag) => (
                    <motion.div
                      key={mag.year}
                      variants={itemVariants}
                      className="group relative cursor-pointer"
                    >
                       <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] mb-5">
                          {/* Image */}
                          <img 
                            src={mag.cover} 
                            alt={mag.title}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                          />
                          
                          {/* Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-void/90 via-void/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                          
                          {/* Hover Action */}
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px] bg-void/20">
                             <div className="w-12 h-12 rounded-full bg-white text-void flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-xl">
                                <ArrowRight className="w-5 h-5" />
                             </div>
                          </div>

                          {/* Year Badge */}
                          <div className="absolute top-3 right-3 px-2 py-1 rounded bg-black/50 backdrop-blur-md border border-white/10 text-xs font-mono text-white/80">
                             {mag.year}
                          </div>
                       </div>

                       <h3 className="text-lg font-bold text-white group-hover:text-accretion transition-colors mb-1">{mag.title}</h3>
                       <div className="flex items-center gap-4 text-xs text-starlight/50">
                          <span className="flex items-center gap-1"><FileText className="w-3 h-3" /> {mag.articles} Articles</span>
                          <span className="flex items-center gap-1"><Users className="w-3 h-3" /> {mag.contributors} Contr.</span>
                       </div>
                    </motion.div>
                 ))}
              </motion.div>
           </div>
        </section>

      </div>

      <Footer />
    </main>
  );
}
