"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { posts } from "@/lib/data/content";

export default function BlogPreviewSection() {
  return (
    <section className="py-24 md:py-32 border-t border-[var(--color-border)]">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <SectionLabel label="Blog" index="09" />
            <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4">
              Latest Updates
            </h2>
            <p className="text-[var(--color-muted-foreground)] max-w-lg">
              Notes on engineering, research, and building the future of autonomous science.
            </p>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 h-10 px-5 rounded-lg border border-[var(--color-border-strong)] text-sm font-medium text-[var(--color-foreground)] hover:bg-[var(--color-surface-2)] transition-colors shrink-0"
          >
            Read all posts
            <ArrowUpRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                href={post.href}
                className="group block p-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-1)] hover:border-[var(--color-border-strong)] hover:bg-[var(--color-surface-2)] transition-all duration-300 h-full"
              >
                <div className="flex flex-col h-full">
                  <div className="mb-8">
                    <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-[var(--color-surface-2)] text-[var(--color-muted-foreground)] mb-4">
                      {post.category}
                    </span>
                    <h3 className="text-lg font-medium text-[var(--color-foreground)] group-hover:text-[var(--color-accent-blue)] transition-colors leading-snug">
                      {post.title}
                    </h3>
                  </div>
                  <div className="mt-auto pt-4 border-t border-[var(--color-border)] flex items-center justify-between">
                    <span className="text-xs text-[var(--color-muted-foreground)] font-mono">
                      {post.date}
                    </span>
                    <ArrowUpRight
                      size={16}
                      className="text-[var(--color-muted-foreground)] opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
