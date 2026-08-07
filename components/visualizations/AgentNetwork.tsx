"use client";

import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function ParticleNetwork() {
  const pointsRef = useRef<THREE.Points>(null);

  const particleCount = 2000;

  // Generate random points in a sphere
  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(Math.random() * 2 - 1);
      const r = Math.cbrt(Math.random()) * 5; // Radius of 5

      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return pos;
  }, [particleCount]);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.05;
      pointsRef.current.rotation.x += delta * 0.02;
    }
  });

  return (
    <group>
      <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#38bdf8"
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
}

export default function AgentNetwork() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // PERFORMANCE OPTIMIZATION: Wrap the Canvas inside an IntersectionObserver.
    // Since the Canvas is positioned deep below the fold (in the Multi-Agent Execution section),
    // mounting and rendering it on initial load is wasteful. It allocates WebGL resources,
    // compiles shaders, and runs a render loop at 60 FPS in the background.
    // By only mounting when within or close to the viewport (200px margin), we free up CPU/GPU cycles
    // during initial page load, improving LCP, FID, and reducing battery/power consumption.
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { rootMargin: "200px" } // Pre-render slightly before scrolling into view for a seamless experience
    );

    const currentRef = containerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full h-[400px] md:h-[600px] absolute inset-0 -z-10 opacity-30 pointer-events-none">
      {isVisible && (
        <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
          <ParticleNetwork />
        </Canvas>
      )}
    </div>
  );
}
