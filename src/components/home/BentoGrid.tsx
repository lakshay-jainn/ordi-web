"use client";

import { motion } from "framer-motion";
import { Code2, BrainCircuit, Users, Calendar, ArrowUpRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    title: "Workshops",
    description: "Master Full Stack, DevOps, and System Design through rigorous hands-on sessions.",
    icon: <Code2 className="w-8 h-8" />,
    className: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Research",
    description: "Pushing the boundaries of Neural Networks and Deep Learning.",
    icon: <BrainCircuit className="w-8 h-8" />,
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Community",
    description: "A collective of like-minded innovators and creators.",
    icon: <Users className="w-8 h-8" />,
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Events",
    description: "Where code meets competition. Join our flagship hackathons.",
    icon: <Calendar className="w-8 h-8" />,
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Playground",
    description: "Experimental labs for trying new tech.",
    icon: <Sparkles className="w-8 h-8" />,
    className: "md:col-span-1 md:row-span-1",
  }
];

export function BentoGrid() {
  return (
    <section className="py-24 px-4 max-w-7xl mx-auto z-20 relative">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="mb-16 text-center"
      >
           <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-white">
            What We Do
           </h2>
           <p className="text-starlight/70 text-xl max-w-2xl mx-auto font-light leading-relaxed">
             The operational directives of Ordinateur. Innovation through execution.
           </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-full min-h-[600px]">
        {features.map((feature, i) => (
          <BentoItem key={i} feature={feature} index={i} />
        ))}
      </div>
    </section>
  );
}

function BentoItem({ feature, index }: { feature: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      className={cn(
        "group relative rounded-3xl overflow-hidden bg-transparent border border-white/20 p-8 flex flex-col justify-between hover:border-white transition-all duration-500",
        feature.className
      )}
    >
        <div className="relative z-10">
            <div className="w-16 h-16 rounded-2xl border border-white/20 flex items-center justify-center mb-6 text-starlight group-hover:text-white group-hover:bg-white/10 transition-all duration-300">
                {feature.icon}
            </div>
            
            <h3 className="text-3xl font-bold text-white mb-3 tracking-tight">
                {feature.title}
            </h3>
            
            <p className="text-starlight/60 text-lg leading-relaxed group-hover:text-starlight transition-colors">
                {feature.description}
            </p>
        </div>

        <div className="relative z-10 pt-6 mt-auto">
             <div className="flex items-center gap-2 text-sm font-semibold text-white opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                Explore <ArrowUpRight className="w-4 h-4" />
             </div>
        </div>
    </motion.div>
  );
}
