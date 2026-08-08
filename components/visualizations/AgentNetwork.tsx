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
  const [hasBeenInView, setHasBeenInView] = useState(false);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isIntersecting = entry.isIntersecting;
        setInView(isIntersecting);
        if (isIntersecting) {
          setHasBeenInView(true);
        }
      },
      {
        rootMargin: "200px", // Pre-load slightly before coming into view
        threshold: 0.01,
      }
    );

    observer.observe(container);

    return () => {
      observer.unobserve(container);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-[400px] md:h-[600px] absolute inset-0 -z-10 opacity-30 pointer-events-none"
    >
      {/*
        PERFORMANCE OPTIMIZATION:
        1. Lazy-mount the Canvas only after it has been in/near the viewport once (prevents initial page load main-thread blocking).
        2. Dynamically toggle the `frameloop` prop between "always" and "never" when off-screen.
           This reduces background CPU/GPU usage to 0% when the user scrolls away, while retaining WebGL context and scene state.
      */}
      {hasBeenInView && (
        <Canvas camera={{ position: [0, 0, 8], fov: 60 }} frameloop={inView ? "always" : "never"}>
          <ParticleNetwork />
        </Canvas>
      )}
    </div>
  );
}
