"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What is a research runtime?",
    answer: "A research runtime is an orchestration engine that manages the lifecycle of scientific experiments. It handles agent coordination, compute allocation, memory persistence, and result verification, allowing researchers to define high-level goals while the runtime handles execution details.",
  },
  {
    question: "How does the inference engine differ from standard LLM APIs?",
    answer: "Our inference engine is optimized specifically for research workloads. It uses TensorRT and mixed precision for high throughput, intelligently routes tasks between specialized models (e.g., a reasoning model vs. a math model), and supports distributed execution across multiple GPUs for large-scale data processing.",
  },
  {
    question: "How do you ensure scientific validity and prevent hallucinations?",
    answer: "We treat verification as a first-class primitive. The system uses adversarial agent patterns (e.g., a Critic agent evaluating a Researcher agent), automated citation checking against source material, and reproducible execution environments for computational experiments.",
  },
  {
    question: "Can I deploy Kalaris on my own infrastructure?",
    answer: "Yes, the Kalaris platform is designed to be environment-agnostic. While we offer a managed cloud solution, the core infrastructure can be deployed on-premise or within your own VPC to meet strict data privacy and security requirements.",
  },
  {
    question: "What scientific domains are currently supported?",
    answer: "Our platform is domain-agnostic at the infrastructure layer, but our pre-trained agent skills are currently optimized for computational biology, materials science, and machine learning research. We are actively expanding to other quantitative disciplines.",
  },
];

function FAQSchema() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 md:py-32">
      <FAQSchema />
      <Container>
        <div className="border border-[var(--color-border)] rounded-2xl overflow-hidden bg-[var(--color-surface-0)]">
          {/* Frame Header */}
          <div className="flex justify-between items-center border-b border-[var(--color-border)] px-6 py-3.5">
            <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--color-muted-foreground)]">
              ) FAQ
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--color-muted-foreground)]">
              [5/5]
            </span>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr]">
            {/* Left: Title */}
            <div className="border-b lg:border-b-0 lg:border-r border-[var(--color-border)] p-8 lg:p-10">
              <h2 className="text-[2rem] md:text-[2.25rem] font-bold tracking-tight mb-3">
                Common Questions
              </h2>
              <p className="text-[var(--color-muted-foreground)] text-[0.9375rem]">
                Everything you need to know about the platform and our approach to autonomous science.
              </p>
            </div>

            {/* Right: Accordion */}
            <div className="flex flex-col">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                const buttonId = `faq-btn-${index}`;
                const panelId = `faq-panel-${index}`;
                return (
                  <div
                    key={index}
                    className={`border-b border-[var(--color-border)] last:border-b-0 transition-colors ${
                      isOpen ? "bg-[var(--color-surface-1)]" : ""
                    }`}
                  >
                    <button
                      id={buttonId}
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      className="flex items-center justify-between w-full p-6 text-left hover:bg-[var(--color-surface-1)] focus-visible:bg-[var(--color-muted)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--color-accent-blue)] transition-all"
                    >
                      <span className="text-[0.9375rem] font-medium text-[var(--color-foreground)] pr-8">
                        {faq.question}
                      </span>
                      <span className="text-[var(--color-muted-foreground)] shrink-0">
                        {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={panelId}
                          role="region"
                          aria-labelledby={buttonId}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        >
                          <div className="px-6 pb-6 pt-0 text-[var(--color-muted-foreground)] text-sm leading-relaxed">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Frame Footer */}
          <div className="flex justify-between items-center border-t border-[var(--color-border)] px-6 py-3.5">
            <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--color-muted-foreground)]">
              ) Support
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--color-muted-foreground)]">
              5 Questions
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}