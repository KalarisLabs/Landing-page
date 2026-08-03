"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="relative py-32 md:py-48 overflow-hidden border-t border-[var(--color-border)]">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-[var(--color-accent-blue)] opacity-[0.03] blur-[100px]" />
      </div>

      <Container className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] font-light tracking-tight mb-8">
            Build the future of <br className="hidden md:block" />
            <span className="font-display italic text-gradient">autonomous science.</span>
          </h2>
          <p className="text-lg md:text-xl text-[var(--color-muted-foreground)] max-w-2xl mx-auto mb-12">
            Whether you are a researcher looking to accelerate discovery, or an engineer building infrastructure — join us.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-xl bg-[var(--color-foreground)] text-[var(--color-background)] text-base font-medium hover:opacity-90 transition-opacity w-full sm:w-auto"
            >
              Get in touch
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/manifesto"
              className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-xl border border-[var(--color-border-strong)] bg-[var(--color-surface-1)] text-base font-medium text-[var(--color-foreground)] hover:bg-[var(--color-surface-2)] transition-colors w-full sm:w-auto"
            >
              Read the Manifesto
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
