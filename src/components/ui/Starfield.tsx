"use client";

import React, { useRef, useState, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

const StarBackground = (props: any) => {
  const ref = useRef<any>(null);
  
  const sphere = useMemo(() => {
    const coords = new Float32Array(3000 * 3);
    for (let i = 0; i < 3000; i++) {
        const r = 1.5 * Math.cbrt(Math.random()); 
        const theta = Math.random() * 2 * Math.PI;
        const phi = Math.acos(2 * Math.random() - 1);
        
        const x = r * Math.sin(phi) * Math.cos(theta);
        const y = r * Math.sin(phi) * Math.sin(theta);
        const z = r * Math.cos(phi);
        
        coords[i * 3] = x;
        coords[i * 3 + 1] = y;
        coords[i * 3 + 2] = z;
    }
    return coords;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 20;
      ref.current.rotation.y -= delta / 25;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#E2E8F0"
          size={0.003}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
};

export function Starfield() {
  return (
    <div className="fixed inset-0 w-full h-full -z-50 pointer-events-none">
       {/* Deep Void Background */}
      <div className="absolute inset-0 bg-void" />
      
      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-void/80 to-void opacity-80 z-[1]" />
      
      <Canvas camera={{ position: [0, 0, 1] }} className="absolute inset-0 z-[0]">
        <StarBackground />
      </Canvas>
    </div>
  );
}


