import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Terminal, Star, GitFork, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const repos = [
  { name: "kalaris-runtime", description: "Research runtime for autonomous scientific workflows", stars: "—", forks: "—", language: "Python" },
  { name: "agent-skills", description: "Modular agent capability framework", stars: "—", forks: "—", language: "Python" },
  { name: "inference-engine", description: "GPU-optimized inference serving with TensorRT", stars: "—", forks: "—", language: "Rust" },
  { name: "verification-suite", description: "Automated research verification and reproducibility testing", stars: "—", forks: "—", language: "Python" },
];

const langColors: Record<string, string> = {
  Python: "var(--color-accent-blue)",
  Rust: "var(--color-accent-amber)",
  TypeScript: "var(--color-accent-cyan)",
};

export default function OpenSourceSection() {
  return (
    <section className="py-24 md:py-32 border-t border-[var(--color-border)]">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <SectionLabel label="Open Source" index="08" />
            <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4">
              Open Source
            </h2>
            <p className="text-[var(--color-muted-foreground)] max-w-lg">
              Core infrastructure components available under permissive licenses.
            </p>
          </div>
          <Link
            href="https://github.com/kalarislabs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 h-10 px-5 rounded-lg border border-[var(--color-border-strong)] text-sm font-medium text-[var(--color-foreground)] hover:bg-[var(--color-surface-2)] transition-colors shrink-0"
          >
            <Terminal size={16} />
            View on GitHub
            <ArrowUpRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {repos.map((repo) => (
            <div
              key={repo.name}
              className="p-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-1)] hover:border-[var(--color-border-strong)] transition-all duration-300"
            >
              <div className="flex items-start gap-3 mb-3">
                <Terminal size={18} className="text-[var(--color-muted-foreground)] mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-mono font-medium text-[var(--color-accent-blue)]">
                    kalarislabs/{repo.name}
                  </p>
                  <p className="text-sm text-[var(--color-muted-foreground)] mt-1">
                    {repo.description}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 mt-4 pt-4 border-t border-[var(--color-border)]">
                <div className="flex items-center gap-1.5">
                  <div
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: langColors[repo.language] || "var(--color-muted-foreground)" }}
                  />
                  <span className="text-xs text-[var(--color-muted-foreground)]">{repo.language}</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-[var(--color-muted-foreground)]">
                  <Star size={12} />
                  {repo.stars}
                </div>
                <div className="flex items-center gap-1 text-xs text-[var(--color-muted-foreground)]">
                  <GitFork size={12} />
                  {repo.forks}
                </div>
                <span className="ml-auto inline-block px-2 py-0.5 rounded-full text-[10px] font-mono border border-[var(--color-border)] text-[var(--color-muted-foreground)]">
                  Coming soon
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
