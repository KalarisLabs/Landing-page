import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FileText, BookOpen, BarChart, Code, GraduationCap } from "lucide-react";

const publications = [
  { icon: FileText, type: "Technical Report", title: "Research Runtime Architecture", status: "In preparation", date: "2026" },
  { icon: BookOpen, type: "Whitepaper", title: "Multi-Agent Scientific Workflows", status: "In preparation", date: "2026" },
  { icon: BarChart, type: "Benchmark", title: "Inference Optimization Benchmarks", status: "In preparation", date: "2026" },
  { icon: Code, type: "Open Source", title: "Agent Skills Framework", status: "Coming soon", date: "2026" },
  { icon: GraduationCap, type: "Research Paper", title: "Verification in AI-Assisted Science", status: "In preparation", date: "2026" },
];

export default function PublicationsSection() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="mb-16">
          <SectionLabel label="Publications" index="07" />
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4">
            Publications & Reports
          </h2>
          <p className="text-[var(--color-muted-foreground)] max-w-lg">
            Technical reports, whitepapers, benchmarks, and research papers from the Kalaris Labs team.
          </p>
        </div>

        <div className="space-y-3">
          {publications.map((pub) => {
            const Icon = pub.icon;
            return (
              <div
                key={pub.title}
                className="flex items-center gap-4 p-5 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-1)] hover:border-[var(--color-border-strong)] transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-[var(--color-surface-2)] flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-[var(--color-muted-foreground)]" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-[var(--color-foreground)]">
                    {pub.title}
                  </p>
                  <p className="text-xs font-mono text-[var(--color-muted-foreground)]">
                    {pub.type}
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider border border-[var(--color-border)] text-[var(--color-muted-foreground)]">
                    {pub.status}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
