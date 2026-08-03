"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

const nodes = [
  {
    num: "01",
    tag: "01 · SCIENTISTS",
    label: "Scientists",
    sublabel: "Human researchers",
    desc: "The entry point of every research workflow. Human scientists define high-level goals, set constraints, and review synthesized outputs.",
    color: "var(--color-accent-blue)",
    diagram: (
      <svg width="160" height="160" viewBox="0 0 100 100" fill="none" className="text-white opacity-85">
        <circle cx="50" cy="35" r="14" stroke="currentColor" strokeWidth="1.5" />
        <path d="M25 85c0-14 11-25 25-25s25 11 25 25" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="50" cy="35" r="5" fill="currentColor" opacity="0.4" />
      </svg>
    ),
  },
  {
    num: "02",
    tag: "02 · COPILOT",
    label: "Copilot",
    sublabel: "AI interface layer",
    desc: "A conversational AI bridge that translates human research intent into structured instructions for the orchestration engine.",
    color: "var(--color-accent-purple)",
    diagram: (
      <svg width="160" height="160" viewBox="0 0 100 100" fill="none" className="text-white opacity-85">
        <rect x="15" y="20" width="70" height="50" rx="8" stroke="currentColor" strokeWidth="1.5" />
        <path d="M30 40h40M30 50h25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M40 70l10 15 10-15" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    num: "03",
    tag: "03 · RESEARCH RUNTIME",
    label: "Research Runtime",
    sublabel: "Orchestration engine",
    desc: "The core engine that manages the lifecycle of scientific experiments — handling agent coordination, compute allocation, memory persistence, and result verification.",
    color: "var(--color-accent-blue)",
    diagram: (
      <svg width="160" height="160" viewBox="0 0 100 100" fill="none" className="text-white opacity-85">
        <rect x="10" y="10" width="80" height="80" rx="4" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
        <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="50" cy="50" r="8" fill="currentColor" />
        <path d="M50 10v20M50 70v20M10 50h20M70 50h20" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    num: "04",
    tag: "04 · MULTI-AGENT GRAPH",
    label: "Multi-Agent Graph",
    sublabel: "Agent coordination",
    desc: "A directed graph of specialized agents (Planner, Researcher, Critic, Verifier, Publisher) that collaborate and converge on verified scientific output.",
    color: "var(--color-accent-cyan)",
    diagram: (
      <svg width="160" height="160" viewBox="0 0 100 100" fill="none" className="text-white opacity-85">
        <circle cx="20" cy="50" r="8" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="50" cy="25" r="8" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="50" cy="75" r="8" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="80" cy="50" r="8" stroke="currentColor" strokeWidth="1.5" />
        <path d="M28 46l14-13M28 54l14 13M58 29l14 13M58 71l14-13M28 50h44" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" />
      </svg>
    ),
  },
  {
    num: "05",
    tag: "05 · AGENT SKILLS",
    label: "Agent Skills",
    sublabel: "Task capabilities",
    desc: "Pluggable skill sets — literature review, experiment design, statistical analysis, and code generation — extending the capabilities of every agent.",
    color: "var(--color-accent-green)",
    diagram: (
      <svg width="160" height="160" viewBox="0 0 100 100" fill="none" className="text-white opacity-85">
        <path d="M20 20h25v25H20zM55 20h25v25H55zM20 55h25v25H20z" stroke="currentColor" strokeWidth="1.5" />
        <rect x="55" y="55" width="25" height="25" rx="2" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" />
        <path d="M45 32.5h10M32.5 45v10" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    num: "06",
    tag: "06 · MEMORY",
    label: "Memory",
    sublabel: "Scientific knowledge",
    desc: "Persistent knowledge graphs that grow with every experiment, literature scan, and verified finding — forming the institutional memory of your lab.",
    color: "var(--color-accent-amber)",
    diagram: (
      <svg width="160" height="160" viewBox="0 0 100 100" fill="none" className="text-white opacity-85">
        <ellipse cx="50" cy="30" rx="30" ry="10" stroke="currentColor" strokeWidth="1.5" />
        <path d="M20 30v15c0 5.5 13.4 10 30 10s30-4.5 30-10V30" stroke="currentColor" strokeWidth="1.5" />
        <path d="M20 45v15c0 5.5 13.4 10 30 10s30-4.5 30-10V45" stroke="currentColor" strokeWidth="1.5" />
        <path d="M20 60v15c0 5.5 13.4 10 30 10s30-4.5 30-10V60" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    num: "07",
    tag: "07 · INFERENCE",
    label: "Inference",
    sublabel: "Model execution",
    desc: "GPU-native inference with TensorRT, mixed precision, and intelligent model routing to maximize throughput and minimize latency for heavy research workloads.",
    color: "var(--color-accent-purple)",
    diagram: (
      <svg width="160" height="160" viewBox="0 0 100 100" fill="none" className="text-white opacity-85">
        <path d="M15 15h70v50H15z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M15 65l15 20h40l15-20" stroke="currentColor" strokeWidth="1.5" />
        <rect x="25" y="25" width="12" height="12" rx="1" stroke="currentColor" strokeWidth="1.2" />
        <rect x="44" y="25" width="12" height="12" rx="1" stroke="currentColor" strokeWidth="1.2" />
        <rect x="63" y="25" width="12" height="12" rx="1" stroke="currentColor" strokeWidth="1.2" />
        <line x1="31" y1="45" x2="69" y2="45" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    num: "08",
    tag: "08 · GPU RUNTIME",
    label: "GPU Runtime",
    sublabel: "Hardware layer",
    desc: "Direct CUDA kernel execution for maximum throughput. Hardware-level optimizations minimize CPU-GPU memory transfers and maximize utilization.",
    color: "var(--color-accent-green)",
    diagram: (
      <svg width="160" height="160" viewBox="0 0 100 100" fill="none" className="text-white opacity-85">
        <rect x="20" y="20" width="60" height="60" rx="6" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 30h10M10 40h10M10 50h10M10 60h10M10 70h10" stroke="currentColor" strokeWidth="1.5" />
        <path d="M80 30h10M80 40h10M80 50h10M80 60h10M80 70h10" stroke="currentColor" strokeWidth="1.5" />
        <rect x="35" y="35" width="30" height="30" fill="currentColor" opacity="0.3" />
        <circle cx="50" cy="50" r="4" fill="currentColor" />
      </svg>
    ),
  },
  {
    num: "09",
    tag: "09 · VERIFICATION",
    label: "Verification",
    sublabel: "Result validation",
    desc: "Adversarial review, citation checking, and reproducibility validation built directly into the runtime to prevent hallucinations and ensure scientific rigor.",
    color: "var(--color-accent-red)",
    diagram: (
      <svg width="160" height="160" viewBox="0 0 100 100" fill="none" className="text-white opacity-85">
        <path d="M50 15L15 30v25c0 20 18 30 35 35 17-5 35-15 35-35V30L50 15z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M35 50l10 10 20-20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    num: "10",
    tag: "10 · SCIENTIFIC OUTPUT",
    label: "Scientific Output",
    sublabel: "Papers, data, models",
    desc: "The final deliverables: verified papers, reproducible datasets, trained models, and structured knowledge — all traceable back to their originating hypotheses.",
    color: "var(--color-accent-blue)",
    diagram: (
      <svg width="160" height="160" viewBox="0 0 100 100" fill="none" className="text-white opacity-85">
        <rect x="25" y="15" width="50" height="65" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M35 30h30M35 40h25M35 50h20M35 60h28" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M50 80v10M40 90h20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function ArchitectureDiagram() {
  const [activeTab, setActiveTab] = useState(2);
  const activeItem = nodes[activeTab];

  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="border border-[var(--color-border)] rounded-2xl overflow-hidden bg-[var(--color-surface-0)]">
          {/* Frame Header */}
          <div className="flex justify-between items-center border-b border-[var(--color-border)] px-6 py-3.5">
            <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--color-muted-foreground)]">
              ) Platform Architecture
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--color-muted-foreground)]">
              [{activeItem.num}/10]
            </span>
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_2.5fr]">
            {/* Left Column */}
            <div className="border-b lg:border-b-0 lg:border-r border-[var(--color-border)] p-8 lg:p-10">
              <h2 className="text-[2rem] md:text-[2.25rem] font-bold leading-[1.15] tracking-tight mb-3">
                A vertically integrated stack from <span className="text-[var(--color-accent-blue)]">human intent</span> to verified output.
              </h2>
              <p className="text-[var(--color-muted-foreground)] text-[0.9375rem] leading-relaxed mb-8">
                Ten interconnected layers that power autonomous scientific computing.
              </p>

              <div className="flex flex-col gap-1">
                {nodes.map((node, idx) => (
                  <button
                    key={node.num}
                    onClick={() => setActiveTab(idx)}
                    className={`flex items-center justify-between px-4 py-3 rounded-lg text-left transition-all duration-200 cursor-pointer w-full ${
                      activeTab === idx
                        ? "bg-[var(--color-surface-2)] border border-[var(--color-border)] font-semibold text-[var(--color-foreground)]"
                        : "border border-transparent text-[var(--color-muted-foreground)] hover:bg-[var(--color-surface-1)] hover:text-[var(--color-foreground)]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[11px] text-[var(--color-muted-foreground)] opacity-80">{node.num}</span>
                      <span className="text-[0.9375rem]">{node.label}</span>
                    </div>
                    {activeTab === idx && (
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent-blue)]" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column */}
            <div className="p-8 lg:p-10 flex flex-col gap-6">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="border border-[var(--color-border)] rounded-xl overflow-hidden"
              >
                {/* Blueprint Diagram Area */}
                <div className="bg-[#2563eb] h-[260px] md:h-[300px] flex items-center justify-center relative">
                  <div className="absolute top-3 left-3 w-2 h-2 bg-white/20 border border-white/30" />
                  <div className="absolute top-3 right-3 w-2 h-2 bg-white/20 border border-white/30" />
                  <div className="absolute bottom-3 left-3 w-2 h-2 bg-white/20 border border-white/30" />
                  <div className="absolute bottom-3 right-3 w-2 h-2 bg-white/20 border border-white/30" />
                  {activeItem.diagram}
                </div>

                {/* Detail Panel */}
                <div className="p-6 md:p-8 bg-[var(--color-surface-0)] border-t border-[var(--color-border)]">
                  <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--color-accent-blue)] font-semibold mb-1.5">
                    {activeItem.tag}
                  </p>
                  <h3 className="text-[1.5rem] md:text-[1.75rem] font-bold tracking-tight mb-3">
                    {activeItem.label}
                  </h3>
                  <p className="text-[0.9375rem] leading-relaxed text-[var(--color-muted-foreground)] mb-6">
                    {activeItem.desc}
                  </p>

                  <div className="pt-5 border-t border-dashed border-[var(--color-border)]">
                    <p className="font-mono text-[11px] uppercase tracking-[0.05em] text-[var(--color-muted-foreground)] mb-1">
                      System Layer
                    </p>
                    <p className="text-sm text-[var(--color-muted-foreground)] leading-relaxed">
                      {activeItem.sublabel}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Frame Footer */}
          <div className="flex justify-between items-center border-t border-[var(--color-border)] px-6 py-3.5">
            <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--color-muted-foreground)]">
              ) Kalaris Labs Stack
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--color-muted-foreground)]">
              Architecture Overview
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
