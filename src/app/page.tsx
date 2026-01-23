import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/home/Hero";
import { AboutSection } from "@/components/home/AboutSection";
import { CoreModules } from "@/components/home/CoreModules";
import { PartnersMarquee } from "@/components/home/PartnersMarquee";
import { EventSlider } from "@/components/home/EventSlider";
import { DepartmentDeck } from "@/components/home/DepartmentDeck";
import { BentoGrid } from "@/components/home/BentoGrid";

import { Starfield } from "@/components/ui/Starfield";

export default function Home() {
  return (
    <main className="min-h-screen bg-void text-starlight selection:bg-accretion selection:text-void-dark relative">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Starfield />
      </div>

      <Navbar />
      
      {/* Snap Container is the HTML/Body essentially, we just mark the snap points */}
      <div className="relative z-10">
         
         {/* Hero Snap */}
         <div className="snap-start min-h-screen flex items-center justify-center w-full">
            <Hero />
         </div>

         {/* About Snap */}
         <div className="snap-start min-h-screen flex items-center justify-center w-full">
            <AboutSection />
         </div>

         {/* Modules Snap */}
         <div className="snap-start min-h-screen flex items-center justify-center w-full">
            <CoreModules />
         </div>

         {/* Events Snap */}
         <div className="snap-start min-h-screen flex items-center justify-center w-full">
            <EventSlider />
         </div>

         {/* Depts Snap */}
         <div className="snap-start min-h-screen flex items-center justify-center w-full">
            <DepartmentDeck />
         </div>
         
         {/* Bento Grid Snap */}
         {/* <div className="snap-start min-h-screen flex items-center justify-center w-full">
             <BentoGrid />
         </div> */}

         {/* Footer Snap (Auto height, snaps to bottom) */}
         <div className="snap-start w-full">
            <PartnersMarquee />
            <Footer />
         </div>
      </div>
    </main>
  );
}
