"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Starfield } from "@/components/ui/Starfield";
import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, MapPin, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { events } from "@/config/eventConfigs/list";

export default function EventsPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-void text-starlight selection:bg-accretion selection:text-void-dark relative">
      <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
        <Starfield />
      </div>

      <Navbar />

      <div className="relative z-10">
        {/* EVENTS HERO SECTION */}
        <section className="w-full px-4 pt-32 pb-4">
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
                    Our Activities
                  </span>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold font-sans tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-b from-starlight to-starlight/40">
                  Events
                </h1>
                <div className="h-1 w-32 bg-gradient-to-r from-accretion via-accretion/50 to-transparent rounded-full" />
              </motion.div>
              <p className="text-starlight/60 text-lg font-light tracking-wide max-w-md md:text-right">
                Join us for workshops, hackathons, and tech talks. We foster a community where learning meets innovation through hands-on experiences.
              </p>
            </div>
          </div>
        </section>

        {/* Clean Grid Section */}
        <section className="px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.map((event: any, index: number) => (
                <Link href={`/events/${event.id}`} key={event.id} className="block h-full">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className="group relative h-full bg-white/[0.03] border border-white/10 hover:border-white/30 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 flex flex-col"
                  >
                    {/* Image Container */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-void-darker">
                      <motion.img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover transition-transform duration-700"
                        style={{ scale: hoveredIndex === index ? 1.05 : 1 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-void/80 to-transparent opacity-60" />
                      
                      {/* Floating Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest bg-void/80 backdrop-blur border border-white/10 rounded-full text-starlight">
                          {event.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="mb-auto">
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="text-2xl font-bold text-white leading-tight group-hover:text-accretion transition-colors">
                            {event.title}
                          </h3>
                          <ArrowUpRight className="w-5 h-5 text-starlight/30 group-hover:text-accretion transition-colors transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </div>
                        <p className="text-starlight/60 text-sm line-clamp-3 mb-6">
                          {event.description}
                        </p>
                      </div>

                      {/* Meta Data */}
                      <div className="pt-6 border-t border-white/5 flex flex-col gap-3">
                        <div className="flex items-center gap-3 text-starlight/50 text-xs font-medium uppercase tracking-wider">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-3 text-starlight/50 text-xs font-medium uppercase tracking-wider">
                          <MapPin className="w-3.5 h-3.5" />
                          <span>{event.location || "TBA"}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Minimal CTA */}
        <section className="px-6 mt-10 pb-10">
          <div className="max-w-7xl mx-auto border-t border-white/10 pt-20 pb-10 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Stay Connected</h2>
            <p className="text-starlight/60 mb-8 max-w-xl mx-auto">
              Don't miss out on future events. Follow our socials to get the latest updates straight to your feed.
            </p>
            <button className="px-8 py-3 bg-white text-void font-bold rounded-full hover:bg-starlight hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-white/20">
              Join Community
            </button>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
