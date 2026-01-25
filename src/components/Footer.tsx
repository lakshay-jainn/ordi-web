import Link from "next/link";
import { Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-void-dark border-t border-white/5 pt-16 pb-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand Column */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold font-sans tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-starlight to-starlight/40">Ordinateur</h2>
          <p className="text-starlight/60 text-sm max-w-xs">
            The Computer Science Society of Hansraj College. Exploring the boundaries of technology and the event horizon of innovation.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-accretion font-medium">Navigation</h3>
          <ul className="space-y-2 text-sm text-starlight/70">
             <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
             <li><Link href="/events" className="hover:text-white transition-colors">Events</Link></li>
             <li><Link href="/departments" className="hover:text-white transition-colors">Departments</Link></li>
             <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="text-accretion font-medium">Contact</h3>
          <ul className="space-y-2 text-sm text-starlight/70">
             <li><span className="block text-white/40 text-xs">Email</span> ordinateursociety@hrc.du.ac.in</li>
             <li><span className="block text-white/40 text-xs">Address</span> Hansraj College, University of Delhi, North Campus, Delhi-110007</li>
          </ul>
        </div>

        {/* Socials */}
        <div className="space-y-4">
            <h3 className="text-accretion font-medium">Connect</h3>
            <div className="flex gap-4">
                <SocialButton icon={<Instagram className="w-4 h-4"/>} href="https://www.instagram.com/ordinateur.hrc" />
                <SocialButton icon={<Linkedin className="w-4 h-4"/>} href="https://www.linkedin.com/company/ordinateur-hrc" />
            </div>
        </div>
      </div>
      
      <div className="mt-16 pt-8 border-t border-white/5 text-center text-xs text-white/20">
        © {new Date().getFullYear()} Ordinateur Society. All rights reserved.
      </div>
    </footer>
  );
}

function SocialButton({ icon, href }: { icon: React.ReactNode; href: string }) {
    return (
        <Link href={href} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-starlight/60 hover:text-accretion hover:border-accretion/50 hover:bg-accretion/10 transition-all duration-300">
            {icon}
        </Link>
    )
}

