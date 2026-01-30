"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Starfield } from "@/components/ui/Starfield";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Mail, Linkedin, ArrowRight } from "lucide-react";
import { useParams } from "next/navigation";
import { useMemo } from "react";
// Centralized data imports
import { departmentsData, DepartmentId, departmentsList } from "@/config/departments";

export default function DepartmentPage() {
  const params = useParams();
  const deptId = params.id as string;

  const dept = useMemo(() => {
    return departmentsData[deptId as DepartmentId];
  }, [deptId]);

  if (!dept) {
    return (
      <main className="min-h-screen bg-void text-starlight flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Department Not Found</h1>
          <Link href="/departments" className="text-blue-400 hover:text-blue-300">
            ← Back to Departments
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-void text-starlight selection:bg-accretion selection:text-void-dark relative overflow-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Starfield />
      </div>

      <Navbar />

      <div className="relative z-10">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="px-4 pt-8">
          <Link href="/departments" className="inline-flex items-center gap-2 text-starlight/60 hover:text-white transition-colors group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Departments
          </Link>
        </motion.div>

        {/* Hero Section */}
        <section className="min-h-[50vh] flex items-center justify-center px-4 py-20 relative">
          <div className="max-w-6xl mx-auto w-full text-center">
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-starlight/60 text-xs font-medium tracking-wider uppercase inline-block mb-6">
              {dept.label} 
            </motion.span>
            <h1 className="text-7xl md:text-9xl font-bold tracking-tighter mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
              {dept.name} 
            </h1>
            <p className="text-xl md:text-2xl text-starlight/80 max-w-3xl mx-auto font-light">
              {dept.longDescription}
            </p>
          </div>
        </section>

        {/* Team Section - HIERARCHICAL ORBITAL LAYOUT */}
        <section className="px-4 py-20 relative overflow-visible">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl font-bold mb-8 text-center tracking-tighter">Meet The Team</h2>
            <p className="text-center text-starlight/60 mb-16 max-w-2xl mx-auto">Our hierarchical constellation of talent, orbiting towards excellence.</p>
            
            {/* DESKTOP: SOLAR SYSTEM ORBITAL LAYOUT */}
            <div className="hidden lg:flex items-center justify-center relative min-h-[1200px] w-full">
              
              {/* === OUTER ORBIT: MEMBERS === */}
              {/* Use smaller orbit if no seniors */}
              <div className={`absolute ${dept.seniorMembers.length > 0 ? 'w-[1100px] h-[1100px]' : 'w-[900px] h-[900px]'} rounded-full border border-white/10 animate-orbit-slow z-0`}>
                <div className="absolute inset-0 rounded-full border border-dashed border-white/5" />
                {/* Subtle outer glow */}
                <div className="absolute inset-0 rounded-full bg-white/[0.02] blur-3xl" />
                {dept.members.map((member, idx) => {
                  const total = dept.members.length;
                  const angle = (360 / total) * idx - 90;
                  const angleRad = (angle * Math.PI) / 180;
                  const radius = dept.seniorMembers.length > 0 ? 550 : 450;
                  const x = Math.cos(angleRad) * radius;
                  const y = Math.sin(angleRad) * radius;
                  return (
                    <div key={idx} className="absolute top-1/2 left-1/2" style={{ transform: `translate(-50%, -50%) translate(${x}px, ${y}px)` }}>
                      <div className="animate-counter-orbit">
                        <div className="group flex flex-col items-center">
                          {/* MUCH BIGGER MEMBER CARD */}
                          <div className={`relative w-28 h-28 rounded-full p-1 bg-void border-2 border-white/40 group-hover:border-white/90 shadow-[0_0_40px_rgba(0,0,0,0.6)] group-hover:shadow-[0_0_50px_rgba(255,255,255,0.15)] group-hover:scale-110 transition-all duration-500 cursor-pointer`}>
                            <div className="w-full h-full rounded-full overflow-hidden">
                              <img src={member.photo} alt={member.name} className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-all duration-500" />
                            </div>
                            {/* Glow ring on hover */}
                            <div className="absolute -inset-2 rounded-full bg-white/15 blur-lg opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
                          </div>
                          <div className="mt-3 text-center bg-void/95 backdrop-blur-md px-4 py-2 rounded-xl border border-white/15 group-hover:border-white/40 transition-all whitespace-nowrap shadow-xl">
                            <h4 className="text-white text-sm font-bold group-hover:text-white transition-colors">{member.name}</h4>
                            <span className="text-[9px] text-starlight/60 uppercase tracking-wider">Member</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* === INNER ORBIT: SENIOR MEMBERS === */}
              {dept.seniorMembers.length > 0 && (
                <div className="absolute w-[650px] h-[650px] rounded-full border-2 border-accretion/30 z-10" style={{ animation: 'spin 45s linear infinite reverse' }}>
                  <div className="absolute inset-0 rounded-full border border-dashed border-accretion/20" />
                  {/* Orbital glow */}
                  <div className="absolute inset-0 rounded-full bg-accretion/10 blur-3xl" />
                  {dept.seniorMembers.map((member, idx) => {
                    const total = dept.seniorMembers.length;
                    const angle = (360 / total) * idx - 90;
                    const angleRad = (angle * Math.PI) / 180;
                    const radius = 325;
                    const x = Math.cos(angleRad) * radius;
                    const y = Math.sin(angleRad) * radius;
                    return (
                      <div key={idx} className="absolute top-1/2 left-1/2" style={{ transform: `translate(-50%, -50%) translate(${x}px, ${y}px)` }}>
                        <div style={{ animation: 'spin 45s linear infinite' }}>
                          <div className="group flex flex-col items-center">
                            {/* LARGER SENIOR CARD */}
                            <div className={`relative w-28 h-28 rounded-full p-1 bg-void border-2 border-accretion/60 group-hover:border-accretion shadow-[0_0_40px_rgba(234,179,8,0.2)] group-hover:shadow-[0_0_60px_rgba(234,179,8,0.4)] group-hover:scale-110 transition-all duration-500 cursor-pointer`}>
                              <div className="w-full h-full rounded-full overflow-hidden">
                                <img src={member.photo} alt={member.name} className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500" />
                              </div>
                              {/* Glow ring */}
                              <div className="absolute -inset-2 rounded-full bg-accretion/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
                            </div>
                            <div className="mt-4 text-center bg-void/95 backdrop-blur-md px-5 py-2 rounded-xl border border-accretion/30 group-hover:border-accretion/60 transition-all whitespace-nowrap shadow-xl">
                              <h4 className="text-white text-base font-bold group-hover:text-accretion transition-colors">{member.name}</h4>
                              <span className="text-[10px] text-accretion/80 uppercase tracking-widest font-semibold">Senior</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* === CENTER: DEPARTMENT HEADS (THE SUN) === */}
              <div className="absolute z-30 flex gap-5 items-center justify-center">
                
                {dept.heads.map((member, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: idx * 0.2 }}
                    viewport={{ once: true }}
                    className="w-[150px] h-[220px] relative group"
                  >
                    
                    <div className={`w-full h-full bg-void border-2 border-white/20 group-hover:border-accretion rounded-[1.5rem] overflow-hidden p-2 backdrop-blur-xl relative z-10 shadow-2xl hover:shadow-[0_0_60px_rgba(234,179,8,0.2)] transition-all duration-500 hover:scale-105`}>
                      <div className="relative h-[140px] w-full rounded-[1.2rem] overflow-hidden mb-2">
                        <img src={member.photo} alt={member.name} className="w-full h-full object-cover transition-all duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-t from-void/60 to-transparent" />
                        <div className="absolute top-2 left-2">
                          <span className={`px-2 py-0.5 rounded-full bg-gradient-to-r ${dept.color} text-white text-[7px] font-black tracking-widest uppercase shadow-lg`}>HEAD</span>
                        </div>
                      </div>
                      <div className="text-center">
                        <h3 className="text-sm font-bold text-white leading-tight mb-1 group-hover:text-accretion transition-colors">{member.name}</h3>
                        <div className={`w-10 h-[2px] bg-gradient-to-r ${dept.color} mx-auto rounded-full`} />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Outermost decorative ring */}
              <div className="absolute w-[950px] h-[950px] rounded-full border border-white/[0.03] pointer-events-none" />
              <div className="absolute w-[1050px] h-[1050px] rounded-full border border-dashed border-white/[0.02] pointer-events-none" />
            </div>

            {/* MOBILE: STACKED GRID LAYOUT */}
            <div className="lg:hidden space-y-16">
              {/* Heads */}
              <div>
                <SectionHeader title="Department Heads" accent={dept.accent} />
                <div className="grid grid-cols-1 gap-6">
                  {dept.heads.map((member, idx) => (
                    <TeamCard key={idx} member={member} role="Head" dept={dept} variant="head" />
                  ))}
                </div>
              </div>
              
              {/* Seniors */}
              {dept.seniorMembers.length > 0 && (
                <div>
                  <SectionHeader title="Senior Members" accent={dept.accent} />
                  <div className="grid grid-cols-2 gap-4">
                    {dept.seniorMembers.map((member, idx) => (
                      <TeamCard key={idx} member={member} role="Senior" dept={dept} variant="senior" />
                    ))}
                  </div>
                </div>
              )}
              
              {/* Members */}
              {dept.members.length > 0 && (
                <div>
                  <SectionHeader title="Members" accent={dept.accent} />
                  <div className="grid grid-cols-2 gap-4">
                    {dept.members.map((member, idx) => (
                      <TeamCard key={idx} member={member} role="Member" dept={dept} variant="member" />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Bottom Explore Links */}
        <section className="px-4 py-24 border-t border-white/5 bg-white/[0.01]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-white/80">Explore Other Departments</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {departmentsList
                .filter((d) => d.id !== deptId)
                .map((d) => (
                  <Link
                    key={d.id}
                    href={`/departments/${d.id}`}
                    className="group relative p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-white/30 transition-all duration-300"
                  >
                    <div className={`w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-4 ${d.accent}`}>
                      {d.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white transition-colors">{d.name} </h3>
                    <div className="mt-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-starlight/20 group-hover:text-starlight/60 transition-colors">
                      View <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}

function SectionHeader({ title, accent }: { title: string; accent: string }) {
  return (
    <div className="flex items-center gap-4 mb-12">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />
      <span className={`text-xs font-bold tracking-widest uppercase ${accent} opacity-80`}>{title}</span>
      <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
    </div>
  );
}

function TeamCard({ member, role, dept, variant }: { member: any; role: string; dept: any; variant: 'head' | 'senior' | 'member' }) {
  const isHead = variant === 'head';
  const isCompact = variant === 'member';

  return (
    <motion.div 
      whileHover={{ y: -10 }} 
      className={`relative group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl transition-all duration-500 hover:border-white/40`}
    >
      {/* NO GRAYSCALE HERE - images are 100% color */}
      <div className={`absolute -inset-1 rounded-2xl bg-gradient-to-br ${dept.color} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500`} />
      
      <div className={`absolute top-0 left-0 right-0 ${isHead ? 'h-1' : 'h-[2px] opacity-70'} bg-gradient-to-r ${dept.color}`} />

      <div className={`relative w-full ${isCompact ? 'h-48' : 'h-64'} overflow-hidden`}>
        <img 
          src={member.photo} 
          alt={member.name} 
          className="w-full transition-all duration-700 scale-100 group-hover:scale-110" 
          style={{ filter: 'none' }} // Explicitly forcing no filter
        />
        <div className="absolute inset-0 bg-gradient-to-t from-void/90 via-transparent to-transparent" />
      </div>
      
      <div className="p-6 relative z-10">
        <h3 className={`${isCompact ? 'text-base' : 'text-xl'} font-bold text-white mb-1 transition-colors duration-300 group-hover:${dept.accent}`}>
          {member.name}
        </h3>
        
        <p className={`text-[10px] font-black ${dept.accent} uppercase tracking-[0.25em] mb-4 opacity-70 group-hover:opacity-100 transition-opacity`}>
          {role}
        </p>
        
        <div className="flex gap-3">
          {member.email !== "-" && (
            <a href={`mailto:${member.email}`} className="p-2 rounded-lg bg-white/5 text-starlight/60 hover:text-white hover:bg-white/10 transition-all border border-white/5">
              <Mail className="w-3.5 h-3.5" />
            </a>
          )}
          {member.linkedin !== "-" && (
            <a 
              href={`https://linkedin.com/in/${member.linkedin}`} target="_blank" 
              className={`p-2 rounded-lg bg-white/5 text-starlight/60 hover:${dept.accent} hover:bg-white/10 transition-all border border-white/5`}
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}