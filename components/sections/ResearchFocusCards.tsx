"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const areas = [
  {
    title: "Agentic AI",
    description: "Multi-agent systems that plan, execute, and self-improve without continuous human oversight.",
    href: "/agentic-science",
  },
  {
    title: "Scientific Discovery",
    description: "Autonomous hypothesis generation, experimental design, and knowledge synthesis across domains.",
    href: "/autonomous-scientific-discovery",
  },
  {
    title: "Inference Optimization",
    description: "GPU-native model serving with TensorRT, quantization, and intelligent routing for research workloads.",
    href: "/scientific-inference",
  },
  {
    title: "Reasoning",
    description: "Chain-of-thought, multi-step deduction, and cross-domain reasoning for complex scientific problems.",
    href: "/research-orchestration",
  },
  {
    title: "Verification",
    description: "Automated reproducibility checking, statistical validation, and adversarial review of AI-generated research.",
    href: "/research-verification",
  },
  {
    title: "Research Automation",
    description: "End-to-end workflow automation from literature review to publication-ready manuscript generation.",
    href: "/autonomous-rd",
  },
  {
    title: "Scientific Memory",
    description: "Persistent knowledge representations that grow with every experiment, paper, and dataset processed.",
    href: "/scientific-copilot",
  },
  {
    title: "Distributed Compute",
    description: "Multi-node GPU scheduling, fault-tolerant execution, and resource-aware workload distribution.",
    href: "/gpu-scientific-computing",
  },
];

export default function ResearchFocusCards() {
  return (
    <section className="py-24 md:py-32 border-t border-[var(--color-border)]">
      <Container>
        <div className="mb-16">
          <SectionLabel label="Research" index="06" />
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4">
            Research Focus Areas
          </h2>
          <p className="text-[var(--color-muted-foreground)] max-w-lg">
            Our work spans the full stack of autonomous scientific computing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {areas.map((area, i) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <Link
                href={area.href}
                className="group block p-8 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-1)] hover:border-[var(--color-border-strong)] hover:bg-[var(--color-surface-2)] transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-medium text-[var(--color-foreground)] mb-2 group-hover:text-[var(--color-accent-blue)] transition-colors">
                      {area.title}
                    </h3>
                    <p className="text-sm text-[var(--color-muted-foreground)] leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="text-[var(--color-muted-foreground)] opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0 mt-1"
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
