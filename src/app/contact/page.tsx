"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Starfield } from "@/components/ui/Starfield";
import { motion, Variants } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Send, CheckCircle, ArrowRight } from "lucide-react";
import { useState } from "react";
import { contactInfo as contactInfoConfig, socialLinks as socialLinksConfig, quickLinks, businessHours } from "@/config/contact";
import { cn } from "@/lib/utils";

// Add icons to contactInfo
const contactInfo = contactInfoConfig.map((info) => {
  let icon = null;
  if (info.title === "Email") icon = <Mail className="w-6 h-6" />;
  else if (info.title === "Phone") icon = <Phone className="w-6 h-6" />;
  else if (info.title === "Location") icon = <MapPin className="w-6 h-6" />;
  return { ...info, icon };
});

// Add icons to socialLinks
const socialLinks = socialLinksConfig.map((link) => {
  let icon = null;
  if (link.name === "Instagram") icon = <Instagram className="w-5 h-5" />;
  else if (link.name === "LinkedIn") icon = <Linkedin className="w-5 h-5" />;
  return { ...link, icon };
});

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

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setError("Please fill in all fields");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address");
      return;
    }

    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Reset after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-void text-starlight selection:bg-accretion selection:text-void-dark relative">
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20">
        <Starfield />
      </div>

      <Navbar />

      <div className="relative z-10 pt-32 pb-20">
        
        {/* HERO SECTION - Unified Style */}
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
                    Get in Touch
                  </span>
                </div>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-sans tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-b from-starlight to-starlight/40">
                  Contact
                </h1>
                <div className="h-1 w-32 bg-gradient-to-r from-accretion via-accretion/50 to-transparent rounded-full" />
              </motion.div>
              <p className="text-starlight/60 text-lg font-light tracking-wide max-w-md md:text-right">
                Have a question or want to collaborate? We'd love to hear from you. Let's build something amazing together.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="px-6 mb-24">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {contactInfo.map((info, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group relative p-8 rounded-3xl border border-white/10 bg-white/[0.02] overflow-hidden hover:border-accretion/30 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
                <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 text-accretion">
                   {info.icon}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 tracking-tight">{info.title}</h3>
                <p className="text-lg font-medium text-accretion mb-4">{info.value}</p>
                <p className="text-starlight/50 text-sm leading-relaxed max-w-[80%]">{info.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Main Content Grid */}
        <section className="px-6 pb-20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Form Section (8 cols) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-8"
            >
              <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.02] overflow-hidden relative p-8 md:p-12">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none mix-blend-overlay" />
                
                <div className="mb-10">
                   <h2 className="text-3xl font-bold text-white mb-4">Send us a Message</h2>
                   <p className="text-starlight/60">Fill out the form below and we will get back to you shortly.</p>
                </div>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-20 text-center"
                  >
                    <div className="w-20 h-20 rounded-full bg-accretion/10 flex items-center justify-center text-accretion mb-6 border border-accretion/20">
                      <CheckCircle className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Message Sent Successfully</h3>
                    <p className="text-starlight/60 max-w-md">Thank you for reaching out. Your message has been received and our team will respond within 24 hours.</p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="mt-8 px-6 py-2 text-sm font-bold text-starlight hover:text-white transition-colors"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-starlight/50 ml-1">Full Name</label>
                        <div className="relative group">
                           <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            className="w-full px-6 py-4 bg-void/50 border border-white/10 rounded-2xl text-white placeholder:text-starlight/20 focus:outline-none focus:border-accretion/50 focus:bg-void/80 transition-all duration-300"
                           />
                           <div className="absolute inset-0 rounded-2xl border border-white/5 pointer-events-none group-hover:border-white/20 transition-colors" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-starlight/50 ml-1">Email Address</label>
                         <div className="relative group">
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@example.com"
                            className="w-full px-6 py-4 bg-void/50 border border-white/10 rounded-2xl text-white placeholder:text-starlight/20 focus:outline-none focus:border-accretion/50 focus:bg-void/80 transition-all duration-300"
                          />
                          <div className="absolute inset-0 rounded-2xl border border-white/5 pointer-events-none group-hover:border-white/20 transition-colors" />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-starlight/50 ml-1">Subject</label>
                      <div className="relative group">
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="Project Inquiry"
                          className="w-full px-6 py-4 bg-void/50 border border-white/10 rounded-2xl text-white placeholder:text-starlight/20 focus:outline-none focus:border-accretion/50 focus:bg-void/80 transition-all duration-300"
                        />
                        <div className="absolute inset-0 rounded-2xl border border-white/5 pointer-events-none group-hover:border-white/20 transition-colors" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-starlight/50 ml-1">Message</label>
                      <div className="relative group">
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us about your project..."
                          rows={6}
                          className="w-full px-6 py-4 bg-void/50 border border-white/10 rounded-2xl text-white placeholder:text-starlight/20 focus:outline-none focus:border-accretion/50 focus:bg-void/80 transition-all duration-300 resize-none"
                        />
                         <div className="absolute inset-0 rounded-2xl border border-white/5 pointer-events-none group-hover:border-white/20 transition-colors" />
                      </div>
                    </div>

                    {error && (
                      <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-200 text-sm flex items-center gap-2">
                         <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                         {error}
                      </div>
                    )}

                    <div className="pt-4">
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full md:w-auto px-10 py-4 bg-white text-void font-bold rounded-full hover:bg-starlight hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-xl shadow-white/5 cursor-pointer flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed group"
                      >
                        {loading ? (
                          <>
                            <div className="w-5 h-5 border-2 border-void border-t-transparent rounded-full animate-spin" />
                            <span>Processing...</span>
                          </>
                        ) : (
                          <>
                            <span>Send Message</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Sidebar Info (4 cols) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-4 space-y-8"
            >
               {/* Quick Links */}
               <div className="p-8 rounded-3xl border border-white/10 bg-white/[0.02]">
                  <h3 className="font-bold text-white mb-6 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accretion" />
                    Connect
                  </h3>
                  <div className="space-y-4">
                     {socialLinks.map((social, idx) => (
                        <a 
                          key={idx}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/20 hover:bg-white/10 transition-all group"
                        >
                           <div className="flex items-center gap-3">
                             <span className="text-starlight/60 group-hover:text-white transition-colors">
                               {social.icon}
                             </span>
                             <span className="text-starlight/80 group-hover:text-white font-medium">{social.name}</span>
                           </div>
                           <ArrowRight className="w-4 h-4 text-starlight/40 group-hover:text-white group-hover:-rotate-45 transition-all" />
                        </a>
                     ))}
                  </div>
               </div>

               {/* Business Hours */}
               <div className="p-8 rounded-3xl border border-white/10 bg-white/[0.02]">
                  <h3 className="font-bold text-white mb-6 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accretion" />
                    Office Hours
                  </h3>
                  <div className="space-y-4">
                     {businessHours.map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between text-sm">
                           <span className="text-starlight/60">{item.day}</span>
                           <span className="text-white font-mono">{item.hours}</span>
                        </div>
                     ))}
                  </div>
               </div>
            </motion.div>

          </div>
        </section>

      </div>

      <Footer />
    </main>
  );
}
