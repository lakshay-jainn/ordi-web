"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const partners = [
  "Cup.ji",
  "Unstop",
  "Feeding India",
  "TechSurge",
  "CodeChef",
  "Github",
  "Digital Ocean",
];

export function PartnersMarquee() {
  return (
    <section className="py-24 relative overflow-hidden z-20 w-full">
      {/* Background Gradient to mask edges */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-void to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-void to-transparent z-10 pointer-events-none" />

      <motion.div 
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         transition={{ duration: 0.8 }}
         className="max-w-7xl mx-auto px-4 mb-16 text-center"
      >
         <div className="flex items-center justify-center gap-3 mb-6">
             <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-starlight/60 text-xs font-medium tracking-wider uppercase">
                Community
             </span>
        </div>
         <h2 className="text-5xl md:text-7xl font-bold font-sans tracking-tighter mb-8 text-transparent bg-clip-text bg-gradient-to-b from-starlight to-starlight/40">Our Partners</h2>
         <p className="text-white/60 text-lg">Supported by the best.</p>
      </motion.div>
      
      {/* Seamless Infinite Marquee */}
      <div className="relative flex w-full overflow-hidden">
        {/* Track 1 */}
        <div className="flex animate-marquee whitespace-nowrap items-center min-w-full shrink-0 gap-24 pr-24">
            {partners.map((partner, i) => (
                <span 
                    key={`t1-${partner}-${i}`} 
                    className="text-4xl md:text-5xl font-bold text-white/30 hover:text-white transition-colors duration-500 cursor-default select-none tracking-tight"
                >
                    {partner}
                </span>
            ))}
        </div>
        
        {/* Track 2 (Duplicate for Seamless Loop) */}
        <div className="flex animate-marquee whitespace-nowrap items-center min-w-full shrink-0 gap-24 pr-24" aria-hidden="true">
            {partners.map((partner, i) => (
                <span 
                    key={`t2-${partner}-${i}`} 
                    className="text-4xl md:text-5xl font-bold text-white/30 hover:text-white transition-colors duration-500 cursor-default select-none tracking-tight"
                >
                    {partner}
                </span>
            ))}
        </div>
      </div>
    </section>
  );
}
