"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import {
  Cpu,
  Zap,
  BrainCircuit,
  ShieldCheck,
  Database,
  Gauge,
  GitGraph,
  Settings,
} from "lucide-react";

const cards = [
  {
    icon: Cpu,
    title: "Research Runtime",
    description: "Orchestrates end-to-end research workflows — from hypothesis to verified output.",
    accent: "var(--color-accent-blue)",
  },
  {
    icon: Zap,
    title: "Inference Engine",
    description: "GPU-native inference with TensorRT, mixed precision, and intelligent model routing.",
    accent: "var(--color-accent-green)",
  },
  {
    icon: BrainCircuit,
    title: "Agent Skills",
    description: "Modular capabilities — literature review, experiment design, statistical analysis.",
    accent: "var(--color-accent-purple)",
  },
  {
    icon: ShieldCheck,
    title: "Verification",
    description: "Adversarial review, citation checking, and reproducibility validation built in.",
    accent: "var(--color-accent-red)",
  },
  {
    icon: Database,
    title: "Scientific Memory",
    description: "Persistent knowledge graphs that grow with every experiment and literature scan.",
    accent: "var(--color-accent-amber)",
  },
  {
    icon: Gauge,
    title: "GPU Scheduler",
    description: "Distributed compute allocation across CUDA devices with automatic scaling.",
    accent: "var(--color-accent-green)",
  },
  {
    icon: GitGraph,
    title: "Knowledge Graph",
    description: "Cross-domain linkage of findings, hypotheses, datasets, and research artifacts.",
    accent: "var(--color-accent-cyan)",
  },
  {
    icon: Settings,
    title: "Model Optimization",
    description: "Quantization, pruning, and ONNX export for deployment-ready research models.",
    accent: "var(--color-accent-purple)",
  },
];

export default function InfrastructureGrid() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="border border-[var(--color-border)] rounded-2xl overflow-hidden bg-[var(--color-surface-0)]">
          {/* Frame Header */}
          <div className="flex justify-between items-center border-b border-[var(--color-border)] px-6 py-3.5">
            <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--color-muted-foreground)]">
              ) What We Do
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--color-muted-foreground)]">
              [2/5]
            </span>
          </div>

          {/* Content */}
          <div className="p-8 md:p-12">
            <div className="mb-10">
              <h2 className="text-[2rem] md:text-[2.5rem] font-bold tracking-tight mb-3">
                Core Infrastructure
              </h2>
              <p className="text-[var(--color-muted-foreground)] max-w-lg text-[0.9375rem]">
                Eight foundational systems that power autonomous scientific computing.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--color-border)]">
              {cards.map((card, i) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{
                      duration: 0.5,
                      delay: i * 0.06,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="group relative p-6 bg-[var(--color-surface-0)] hover:bg-[var(--color-surface-1)] transition-all duration-300 cursor-default"
                  >
                    <div className="relative">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                        style={{ backgroundColor: `color-mix(in oklch, ${card.accent} 15%, transparent)` }}
                      >
                        <Icon
                          size={20}
                          style={{ color: card.accent }}
                        />
                      </div>
                      <h3 className="text-base font-semibold mb-2 text-[var(--color-foreground)]">
                        {card.title}
                      </h3>
                      <p className="text-sm text-[var(--color-muted-foreground)] leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Frame Footer */}
          <div className="flex justify-between items-center border-t border-[var(--color-border)] px-6 py-3.5">
            <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--color-muted-foreground)]">
              ) Infrastructure
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--color-muted-foreground)]">
              8 Systems
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
