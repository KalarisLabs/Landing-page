"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import dynamic from "next/dynamic";

const AgentNetwork = dynamic(() => import("@/components/visualizations/AgentNetwork"), {
  ssr: false,
});

const agents = [
  { name: "Planner", role: "Decomposes research goals into executable tasks", color: "var(--color-accent-blue)" },
  { name: "Researcher", role: "Executes literature review and data collection", color: "var(--color-accent-cyan)" },
  { name: "Critic", role: "Adversarially evaluates methods and conclusions", color: "var(--color-accent-amber)" },
  { name: "Verifier", role: "Validates reproducibility and statistical rigor", color: "var(--color-accent-red)" },
  { name: "Publisher", role: "Compiles findings into structured outputs", color: "var(--color-accent-green)" },
];

export default function AgentGraphVisualization() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <AgentNetwork />
      <Container className="relative z-10">
        <div className="border border-[var(--color-border)] rounded-2xl overflow-hidden bg-[var(--color-surface-0)]">
          {/* Frame Header */}
          <div className="flex justify-between items-center border-b border-[var(--color-border)] px-6 py-3.5">
            <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--color-muted-foreground)]">
              ) Multi-Agent
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--color-muted-foreground)]">
              [4/5]
            </span>
          </div>

          {/* Content */}
          <div className="p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-[2rem] md:text-[2.25rem] font-bold tracking-tight mb-3">
                Multi-Agent Execution
              </h2>
              <p className="text-[var(--color-muted-foreground)] max-w-lg mx-auto text-[0.9375rem]">
                A directed graph of specialized agents that collaborate, critique, and converge on verified scientific output.
              </p>
            </div>

            {/* Agent Graph */}
            <div className="relative max-w-2xl mx-auto">
              {/* Background connection lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 600 500" fill="none">
                <motion.path
                  d="M300 60 L300 130"
                  stroke="url(#lineGradient)"
                  strokeWidth="1"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                />
                <motion.path
                  d="M300 170 L300 240"
                  stroke="url(#lineGradient)"
                  strokeWidth="1"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                />
                <motion.path
                  d="M300 280 L300 350"
                  stroke="url(#lineGradient)"
                  strokeWidth="1"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                />
                <motion.path
                  d="M300 390 L300 460"
                  stroke="url(#lineGradient)"
                  strokeWidth="1"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                />
                <motion.path
                  d="M380 260 Q450 200 380 150"
                  stroke="url(#lineGradient)"
                  strokeWidth="0.5"
                  strokeDasharray="4 4"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.4 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 1.2 }}
                />
                <defs>
                  <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="oklch(0.65 0.18 250)" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="oklch(0.65 0.18 250)" stopOpacity="0.1" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Agent nodes */}
              <div className="relative flex flex-col items-center gap-4">
                {agents.map((agent, i) => (
                  <motion.div
                    key={agent.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: i * 0.15,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="relative w-full max-w-sm"
                  >
                    <div className="flex items-center gap-4 p-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-0)] hover:bg-[var(--color-surface-1)] hover:border-[var(--color-border-strong)] transition-all duration-300 group">
                      <motion.div
                        className="w-3 h-3 rounded-full shrink-0"
                        style={{ backgroundColor: agent.color }}
                        animate={{
                          boxShadow: [
                            `0 0 0 0 ${agent.color}40`,
                            `0 0 0 8px ${agent.color}00`,
                          ],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.4,
                        }}
                      />
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-[var(--color-foreground)]">
                          {agent.name}
                        </p>
                        <p className="text-xs text-[var(--color-muted-foreground)] font-mono">
                          {agent.role}
                        </p>
                      </div>
                      <span className="font-mono text-[10px] text-[var(--color-muted-foreground)]">
                        agent_{i}
                      </span>
                    </div>

                    {i < agents.length - 1 && (
                      <div className="flex justify-center py-1">
                        <motion.div
                          className="w-px h-4"
                          style={{
                            background: `linear-gradient(to bottom, ${agent.color}40, transparent)`,
                          }}
                          initial={{ scaleY: 0 }}
                          whileInView={{ scaleY: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.15 + 0.3 }}
                        />
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Frame Footer */}
          <div className="flex justify-between items-center border-t border-[var(--color-border)] px-6 py-3.5">
            <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--color-muted-foreground)]">
              ) Agent Graph
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--color-muted-foreground)]">
              5 Agents
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
