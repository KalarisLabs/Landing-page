"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";

const skills = [
  {
    name: "Literature Review",
    description: "Ingests thousands of papers, preprints, and datasets. Builds citation graphs and identifies gaps in current knowledge.",
    tag: "knowledge",
  },
  {
    name: "Hypothesis Generation",
    description: "Proposes novel research questions by cross-referencing findings across domains using multi-agent reasoning.",
    tag: "reasoning",
  },
  {
    name: "Peer Review",
    description: "Adversarial critique of manuscripts — identifying weak evidence, confounding variables, and logical gaps.",
    tag: "verification",
  },
  {
    name: "Citation Validation",
    description: "Verifies every citation against source material. Detects hallucinated references and outdated findings.",
    tag: "verification",
  },
  {
    name: "Benchmarking",
    description: "Automated evaluation pipelines with standardized metrics, ablation studies, and statistical significance testing.",
    tag: "evaluation",
  },
  {
    name: "Simulation",
    description: "Runs computational experiments with configurable parameters, environment isolation, and result logging.",
    tag: "execution",
  },
  {
    name: "Statistics",
    description: "Bayesian and frequentist analysis, power calculations, multiple testing correction, and effect size estimation.",
    tag: "analysis",
  },
  {
    name: "Experiment Planning",
    description: "Designs study protocols, sample size calculations, and control strategies for both computational and wet-lab work.",
    tag: "planning",
  },
  {
    name: "Lab Automation",
    description: "Interfaces with robotic lab equipment, LIMS systems, and electronic lab notebooks via standardized protocols.",
    tag: "execution",
  },
  {
    name: "Dataset Builder",
    description: "Curates, cleans, and versions datasets with full provenance tracking and schema validation.",
    tag: "data",
  },
];

const tagColors: Record<string, string> = {
  knowledge: "var(--color-accent-blue)",
  reasoning: "var(--color-accent-purple)",
  verification: "var(--color-accent-red)",
  evaluation: "var(--color-accent-amber)",
  execution: "var(--color-accent-green)",
  analysis: "var(--color-accent-cyan)",
  planning: "var(--color-accent-blue)",
  data: "var(--color-accent-green)",
};

export default function AgentSkillsInteractive() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="border border-[var(--color-border)] rounded-2xl overflow-hidden bg-[var(--color-surface-0)]">
          {/* Frame Header */}
          <div className="flex justify-between items-center border-b border-[var(--color-border)] px-6 py-3.5">
            <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--color-muted-foreground)]">
              ) Agent Skills
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--color-muted-foreground)]">
              [3/5]
            </span>
          </div>

          {/* Content */}
          <div className="p-8 md:p-12">
            <div className="mb-10">
              <h2 className="text-[2rem] md:text-[2.25rem] font-bold tracking-tight mb-3">
                Modular Agent Capabilities
              </h2>
              <p className="text-[var(--color-muted-foreground)] max-w-lg text-[0.9375rem]">
                Each skill is an independently deployable module that agents compose at runtime.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--color-border)] rounded-xl overflow-hidden border border-[var(--color-border)]">
              {skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  onMouseEnter={() => setActive(i)}
                  onMouseLeave={() => setActive(null)}
                  onFocus={() => setActive(i)}
                  onBlur={() => setActive(null)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActive(active === i ? null : i);
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-expanded={active === i}
                  aria-controls={`skill-desc-${i}`}
                  className="group relative p-5 bg-[var(--color-surface-0)] hover:bg-[var(--color-surface-1)] transition-all duration-300 cursor-pointer overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent-blue)] focus-visible:z-10"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-sm font-semibold text-[var(--color-foreground)]">
                          {skill.name}
                        </h3>
                        <span
                          className="inline-block px-2 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider"
                          style={{
                            color: tagColors[skill.tag],
                            backgroundColor: `color-mix(in oklch, ${tagColors[skill.tag]} 12%, transparent)`,
                          }}
                        >
                          {skill.tag}
                        </span>
                      </div>

                      <motion.p
                        id={`skill-desc-${i}`}
                        aria-hidden={active !== i}
                        initial={false}
                        animate={{
                          height: active === i ? "auto" : 0,
                          opacity: active === i ? 1 : 0,
                          marginTop: active === i ? 8 : 0,
                        }}
                        transition={{ duration: 0.25 }}
                        className="text-sm text-[var(--color-muted-foreground)] leading-relaxed overflow-hidden"
                      >
                        {skill.description}
                      </motion.p>
                    </div>

                    <span className="font-mono text-[10px] text-[var(--color-muted-foreground)] opacity-50 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Frame Footer */}
          <div className="flex justify-between items-center border-t border-[var(--color-border)] px-6 py-3.5">
            <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--color-muted-foreground)]">
              ) Capabilities
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--color-muted-foreground)]">
              10 Skills
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
