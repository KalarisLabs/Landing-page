"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Container } from "@/components/ui/Container";

export default function ManifestoSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <section ref={ref} className="relative py-40 md:py-64 overflow-hidden bg-[var(--color-background)]">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[800px] rounded-full bg-[var(--color-accent-blue)] opacity-[0.02] blur-[100px]" />
      </div>

      <Container className="relative z-10 text-center">
        <motion.div style={{ y, opacity }}>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-muted-foreground)] mb-8">
            The Kalaris Manifesto
          </p>
          <h2 className="text-[clamp(2rem,5vw,4rem)] leading-[1.1] font-display italic tracking-tight mb-8">
            Science is too important <br className="hidden md:block" />
            to be bottle-necked by human limits.
          </h2>
          <p className="text-lg md:text-xl text-[var(--color-muted-foreground)] max-w-2xl mx-auto leading-relaxed">
            We are building the infrastructure to transition scientific discovery from an artisanal, human-bound process to an industrial, computationally scalable one.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
