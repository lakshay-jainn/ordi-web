"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Raw mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring physics for the ring (laggy follow)
  const ringX = useSpring(mouseX, { stiffness: 200, damping: 20, mass: 0.5 });
  const ringY = useSpring(mouseY, { stiffness: 200, damping: 20, mass: 0.5 });
  
  // Tighter spring for the dot (instant follow)
  const dotX = useSpring(mouseX, { stiffness: 1000, damping: 50 });
  const dotY = useSpring(mouseY, { stiffness: 1000, damping: 50 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    // Hover logic for interactive elements
    const handleMouseOver = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (target.tagName.toLowerCase() === 'a' || 
            target.tagName.toLowerCase() === 'button' ||
            target.closest('a') ||
            target.closest('button') ||
            target.closest('[data-hover="true"]') 
           ) {
            setIsHovering(true);
        } else {
            setIsHovering(false);
        }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    document.body.addEventListener("mouseenter", handleMouseEnter);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <>
      {/* The Core Dot (Follows strictly) */}
      <motion.div 
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{ x: dotX, y: dotY, translateX: "-50%", translateY: "-50%" }}
      />
      
      {/* The Event Horizon Ring (Lags behind) */}
      <motion.div 
        className="fixed top-0 left-0 border border-accretion rounded-full pointer-events-none z-[9998]"
        style={{ 
            x: ringX, 
            y: ringY, 
            translateX: "-50%", 
            translateY: "-50%" 
        }}
        animate={{
            width: isHovering ? 64 : 32,
            height: isHovering ? 64 : 32,
            opacity: isHovering ? 0.8 : 0.4,
            borderColor: isHovering ? "#FDE047" : "#EAB308",
            mixBlendMode: isHovering ? "difference" : "normal"
        }}
        transition={{ duration: 0.2 }}
      />
    </>
  );
}
