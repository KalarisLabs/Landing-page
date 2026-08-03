import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description: "Updates and insights from Kalaris Labs on building autonomous scientific infrastructure.",
};

const posts = [
  {
    category: "Engineering",
    title: "Serving 100B Parameter Models on Consumer Hardware",
    date: "Aug 15, 2026",
    slug: "serving-100b-models-consumer-hardware",
    excerpt: "How we optimized our inference engine using mixed precision and TensorRT to run massive research models locally.",
  },
  {
    category: "Research",
    title: "Automating Literature Review: A Graph-Based Approach",
    date: "Jul 22, 2026",
    slug: "automating-literature-review",
    excerpt: "Introducing a new semantic search architecture that allows agents to traverse millions of papers to find hidden connections.",
  },
  {
    category: "Infrastructure",
    title: "Building a Fault-Tolerant Research Runtime",
    date: "Jul 05, 2026",
    slug: "fault-tolerant-research-runtime",
    excerpt: "Scientific experiments can take days to run. Here's how we ensure agentic workflows don't fail when intermediate steps hallucinate.",
  },
];

export default function BlogIndexPage() {
  return (
    <div className="pt-32 pb-24 md:pt-48 md:pb-32 min-h-screen">
      <Container>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-8">
          The Blog
        </h1>
        <p className="text-xl md:text-2xl text-[var(--color-muted-foreground)] leading-relaxed mb-16 max-w-3xl">
          Notes on engineering, research, and building the future of autonomous science.
        </p>

        <div className="flex flex-col border-t border-[var(--color-border)]">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group py-8 md:py-12 border-b border-[var(--color-border)] hover:border-[var(--color-border-strong)] transition-colors"
            >
              <div className="flex flex-col md:flex-row gap-4 md:gap-12">
                <div className="md:w-48 shrink-0">
                  <span className="text-sm font-mono text-[var(--color-muted-foreground)] block mb-2">
                    {post.date}
                  </span>
                  <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-[var(--color-surface-1)] text-[var(--color-accent-blue)]">
                    {post.category}
                  </span>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl md:text-3xl font-medium text-[var(--color-foreground)] group-hover:text-[var(--color-accent-blue)] transition-colors mb-4 flex items-center justify-between">
                    {post.title}
                    <ArrowUpRight size={24} className="text-[var(--color-muted-foreground)] opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </h2>
                  <p className="text-lg text-[var(--color-muted-foreground)] leading-relaxed max-w-2xl">
                    {post.excerpt}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
