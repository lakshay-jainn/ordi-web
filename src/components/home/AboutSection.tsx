"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={containerRef} className="w-full relative z-20 px-4 py-24">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
            <div>
              {/* Pill / Tag */}
              <div className="flex items-center gap-3 mb-6">
                 <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-starlight/60 text-xs font-medium tracking-wider uppercase">
                    Discover
                 </span>
              </div>
              
              {/* Gradient Header - ORDINATEUR STYLE */}
              <h2 className="text-5xl md:text-7xl font-bold font-sans tracking-tighter mb-8 text-transparent bg-clip-text bg-gradient-to-b from-starlight to-starlight/40">
                About Us
              </h2>
              
              <p className="text-starlight text-xl font-light leading-relaxed max-w-lg">
                The singularity where <span className="text-accretion font-normal">code meets creativity</span>. We are the architects of the digital horizon.
              </p>
            </div>
            
            <p className="text-lg text-starlight/60 leading-relaxed max-w-lg">
              Ordinateur is a collective of developers, designers, and innovators at Hansraj College.
              We don't just write code; we craft experiences, solve problems, and build the future.
            </p>

            {/* FRUITFUL STATS ROW (Reference Style) */}
            <div className="grid grid-cols-3 gap-8 py-8 border-t border-white/10">
                <div>
                    <div className="text-3xl md:text-4xl font-bold text-accretion tracking-tight mb-1">2018</div>
                    <div className="text-xs text-starlight/50 uppercase tracking-widest font-medium">Established</div>
                </div>
                <div>
                    <div className="text-3xl md:text-4xl font-bold text-accretion tracking-tight mb-1">50+</div>
                    <div className="text-xs text-starlight/50 uppercase tracking-widest font-medium">Members</div>
                </div>
                <div>
                     <div className="text-3xl md:text-4xl font-bold text-accretion tracking-tight mb-1">10+</div>
                    <div className="text-xs text-starlight/50 uppercase tracking-widest font-medium">Events</div>
                </div>
            </div>

            <div className="pt-4">
                <Link href="/about" className="group inline-flex items-center gap-3 text-white text-lg font-bold hover:text-accretion transition-colors">
                    Explore Our Legacy
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
        </motion.div>

        {/* Visual Element: Nano Banana Placeholder (Clean, No Overlay) */}
        <motion.div 
            style={{ y }} 
            className="relative h-[500px] flex items-center justify-center p-8"
        >
             <div className="relative w-full h-full border border-white/10 rounded-3xl overflow-hidden group">
                 {/* Placeholder Image */}
                 <img 
                    src="/braindump/about_placeholder_nano_banana.png" 
                    alt="About Ordinateur" 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700 hover:scale-105 transform ease-out"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent pointer-events-none" />
             </div>
        </motion.div>
      </div>
    </section>
  );
}
