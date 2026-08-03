"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
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

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 md:py-32 border-t border-[var(--color-border)]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-4">
            <SectionLabel label="FAQ" index="11" />
            <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4">
              Common Questions
            </h2>
            <p className="text-[var(--color-muted-foreground)]">
              Everything you need to know about the platform and our approach to autonomous science.
            </p>
          </div>

          <div className="lg:col-span-8 flex flex-col gap-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-1)] overflow-hidden transition-colors hover:border-[var(--color-border-strong)]"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="flex items-center justify-between w-full p-6 text-left"
                >
                  <span className="text-base font-medium text-[var(--color-foreground)] pr-8">
                    {faq.question}
                  </span>
                  <span className="text-[var(--color-muted-foreground)] shrink-0">
                    {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                  </span>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-6 pb-6 pt-0 text-[var(--color-muted-foreground)] leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
