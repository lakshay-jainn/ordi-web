"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Starfield } from "@/components/ui/Starfield";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";
import { Search, Download, Heart, Share2, Filter } from "lucide-react";
import { galleryCategories, galleryImages } from "@/config/gallery";
import { cn } from "@/lib/utils";

function getGalleryCount(category?: string | null): number {
  if (!category) {
    return Object.values(galleryImages).reduce((acc, arr) => acc + arr.length, 0);
  }
  return (galleryImages[category as keyof typeof galleryImages] || []).length;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
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

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("events");
  const [selectedImage, setSelectedImage] = useState<(typeof galleryImages.events)[0] | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const currentImages = useMemo(() => {
    const images = galleryImages[activeCategory as keyof typeof galleryImages] || [];
    if (!searchQuery) return images;
    return images.filter(
      (img) =>
        img.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        img.date.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [activeCategory, searchQuery]);

  return (
    <main className="min-h-screen bg-void text-starlight selection:bg-accretion selection:text-void-dark relative">
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20">
        <Starfield />
      </div>

      <Navbar />

      <div className="relative z-10 pt-32 pb-20">
        
        {/* HERO SECTION - Matched to Departments/About */}
        <section className="w-full px-6 mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-starlight/60 text-xs font-medium tracking-wider uppercase backdrop-blur-md">
                    Visual Archive
                  </span>
                </div>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-sans tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-b from-starlight to-starlight/40">
                  Gallery
                </h1>
                <div className="h-1 w-32 bg-gradient-to-r from-accretion via-accretion/50 to-transparent rounded-full" />
              </motion.div>
              <p className="text-starlight/60 text-lg font-light tracking-wide max-w-md md:text-right">
                Explore moments from our events, workshops, hackathons, and community gatherings.
              </p>
            </div>

            {/* Controls Bar */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 p-1">
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2 w-full lg:w-auto">
                {galleryCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={cn(
                      "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border",
                      activeCategory === category.id
                        ? "bg-white text-void border-white"
                        : "bg-white/5 text-starlight/60 border-white/10 hover:bg-white/10 hover:text-starlight"
                    )}
                  >
                    {category.name} <span className="opacity-50 ml-1 text-xs">({getGalleryCount(category.id)})</span>
                  </button>
                ))}
              </div>

               {/* Search */}
               <div className="relative w-full lg:max-w-sm group">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-starlight/40 group-focus-within:text-accretion transition-colors" />
                  <input
                    type="text"
                    placeholder="Search gallery..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-white/[0.03] border border-white/10 rounded-full text-sm text-white placeholder:text-starlight/30 focus:outline-none focus:border-accretion/50 focus:bg-white/[0.05] transition-all"
                  />
                </div>
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="px-6 pb-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              key={activeCategory}
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <AnimatePresence mode="wait">
                {currentImages.map((image) => (
                  <motion.div
                    key={image.id}
                    variants={itemVariants}
                    className="group relative cursor-pointer aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] hover:border-white/20 transition-all duration-500"
                    onClick={() => setSelectedImage(image)}
                  >
                     {/* Hover Overlay */}
                     <div className="absolute inset-0 bg-void/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 backdrop-blur-[2px]" />

                    {/* Image */}
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />

                    {/* Content */}
                    <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                      <p className="text-accretion font-mono text-xs uppercase tracking-wider mb-2">{image.date}</p>
                      <h3 className="text-xl font-bold text-white mb-4 leading-tight">{image.title}</h3>
                      
                      <div className="flex items-center gap-3">
                         <button className="p-2 rounded-full bg-white/10 hover:bg-white text-white hover:text-void transition-colors">
                            <Download className="w-4 h-4" />
                         </button>
                         <div className="text-xs text-starlight/50 ml-auto font-medium tracking-wide">CLICK TO VIEW</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* No Results */}
            {currentImages.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-32 border border-dashed border-white/10 rounded-3xl"
              >
                <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-6 h-6 text-starlight/40" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">No images found</h3>
                <p className="text-starlight/60">Try adjusting your search terms</p>
              </motion.div>
            )}
          </div>
        </section>

        {/* Image Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-50 bg-void/95 backdrop-blur-xl flex items-center justify-center p-4"
            >
              <div
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-7xl w-full max-h-[90vh] flex flex-col items-center"
              >
                <motion.img
                  layoutId={String(selectedImage.id)}
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="w-auto h-auto max-h-[85vh] object-contain rounded-xl shadow-2xl shadow-black/50"
                />

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-6 px-8 py-4 bg-void/80 border border-white/10 backdrop-blur-md rounded-full"
                >
                   <div className="text-left mr-4 border-r border-white/10 pr-6">
                      <h3 className="text-white font-bold whitespace-nowrap">{selectedImage.title}</h3>
                      <p className="text-accretion text-xs font-mono">{selectedImage.date}</p>
                   </div>
                   
                   <div className="flex items-center gap-2">
                      <button className="p-3 rounded-full hover:bg-white/10 transition-colors text-starlight hover:text-white" title="Download">
                         <Download className="w-5 h-5" />
                      </button>
                      <button className="p-3 rounded-full hover:bg-white/10 transition-colors text-starlight hover:text-white" title="Share">
                         <Share2 className="w-5 h-5" />
                      </button>
                   </div>
                </motion.div>
                
                <button 
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-starlight hover:text-white transition-colors"
                >
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <Footer />
    </main>
  );
}
