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
        <div className="border border-[var(--color-border)] rounded-2xl overflow-hidden bg-[var(--color-surface-0)]">
          {/* Frame Header */}
          <div className="flex justify-between items-center border-b border-[var(--color-border)] px-6 py-3.5">
            <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--color-muted-foreground)]">
              ) The Future of R&D
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--color-muted-foreground)]">
              [1/5]
            </span>
          </div>

          {/* Content */}
          <div className="p-10 md:p-16">
            <div className="max-w-[900px] mx-auto">
              <p className="text-[clamp(1.5rem,3.5vw,2.75rem)] leading-[1.35] font-light tracking-tight">
                {words.map((word, i) => (
                  <Word key={i} progress={scrollYProgress} index={i} total={words.length}>
                    {word}
                  </Word>
                ))}
              </p>
            </div>
          </div>

          {/* Frame Footer */}
          <div className="flex justify-between items-center border-t border-[var(--color-border)] px-6 py-3.5">
            <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--color-muted-foreground)]">
              ) Manifesto
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--color-muted-foreground)]">
              Autonomous Science
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
