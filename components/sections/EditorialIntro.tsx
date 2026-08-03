"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Container } from "@/components/ui/Container";

const TEXT =
  "Scientific discovery is shifting from isolated tools to autonomous systems that plan, execute, verify, and continuously improve. The frontier of R&D belongs to teams that treat agents as first-class collaborators, reproducibility as a primitive, and compute as a lever.";

function Word({
  progress,
  index,
  total,
  children,
}: {
  progress: import("framer-motion").MotionValue<number>;
  index: number;
  total: number;
  children: React.ReactNode;
}) {
  const start = index / total;
  const end = start + 1 / total;
  const opacity = useTransform(progress, [start, end], [0.12, 1]);

  return (
    <motion.span style={{ opacity }} className="inline-block mr-[0.3em]">
      {children}
    </motion.span>
  );
}

export default function EditorialIntro() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.4"],
  });

  const words = TEXT.split(" ");

  return (
    <section ref={ref} className="py-32 md:py-48">
      <Container>
        <div className="max-w-[900px] mx-auto">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-muted-foreground)] mb-12">
            The future of R&D
          </p>
          <p className="text-[clamp(1.5rem,3.5vw,2.75rem)] leading-[1.35] font-light tracking-tight">
            {words.map((word, i) => (
              <Word key={i} progress={scrollYProgress} index={i} total={words.length}>
                {word}
              </Word>
            ))}
          </p>
        </div>
      </Container>
    </section>
  );
}
