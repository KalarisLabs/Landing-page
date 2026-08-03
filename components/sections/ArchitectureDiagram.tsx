"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";

const nodes = [
  { label: "Scientists", sublabel: "Human researchers", color: "var(--color-accent-blue)" },
  { label: "Copilot", sublabel: "AI interface layer", color: "var(--color-accent-purple)" },
  { label: "Research Runtime", sublabel: "Orchestration engine", color: "var(--color-accent-blue)" },
  { label: "Multi-Agent Graph", sublabel: "Agent coordination", color: "var(--color-accent-cyan)" },
  { label: "Agent Skills", sublabel: "Task capabilities", color: "var(--color-accent-green)" },
  { label: "Memory", sublabel: "Scientific knowledge", color: "var(--color-accent-amber)" },
  { label: "Inference", sublabel: "Model execution", color: "var(--color-accent-purple)" },
  { label: "GPU Runtime", sublabel: "Hardware layer", color: "var(--color-accent-green)" },
  { label: "Verification", sublabel: "Result validation", color: "var(--color-accent-red)" },
  { label: "Scientific Output", sublabel: "Papers, data, models", color: "var(--color-accent-blue)" },
];

export default function ArchitectureDiagram() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="text-center mb-16">
          <SectionLabel label="Architecture" index="01" className="justify-center" />
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4">
            Platform Architecture
          </h2>
          <p className="text-[var(--color-muted-foreground)] max-w-lg mx-auto">
            A vertically integrated stack from human intent to verified scientific output.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          {nodes.map((node, i) => (
            <motion.div
              key={node.label}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {/* Node */}
              <div className="flex items-center gap-4 py-3 px-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-1)] hover:border-[var(--color-border-strong)] hover:bg-[var(--color-surface-2)] transition-all duration-300 group cursor-default">
                <div
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ backgroundColor: node.color }}
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-[var(--color-foreground)]">
                    {node.label}
                  </p>
                  <p className="text-xs text-[var(--color-muted-foreground)] font-mono">
                    {node.sublabel}
                  </p>
                </div>
                <span className="font-mono text-[10px] text-[var(--color-muted-foreground)] opacity-0 group-hover:opacity-100 transition-opacity">
                  L{i}
                </span>
              </div>

              {/* Connector */}
              {i < nodes.length - 1 && (
                <div className="flex justify-center py-1">
                  <motion.div
                    className="w-px h-6 bg-gradient-to-b from-[var(--color-border-strong)] to-transparent"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.08 + 0.2 }}
                    style={{ transformOrigin: "top" }}
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
