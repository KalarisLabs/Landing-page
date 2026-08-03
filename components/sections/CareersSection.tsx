import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const roles = [
  { title: "Senior AI Researcher", team: "Reasoning & Alignment", location: "San Francisco / Remote" },
  { title: "Staff Software Engineer", team: "Inference Infrastructure", location: "San Francisco / Remote" },
  { title: "Distributed Systems Engineer", team: "Compute Platform", location: "Remote (US/EU)" },
  { title: "Scientific Computing Specialist", team: "Agent Skills", location: "San Francisco / Remote" },
];

export default function CareersSection() {
  return (
    <section className="py-24 md:py-32 border-t border-[var(--color-border)]">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <SectionLabel label="Careers" index="10" />
            <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4">
              Join Kalaris Labs
            </h2>
            <p className="text-[var(--color-muted-foreground)] max-w-lg">
              We are assembling a team of exceptional researchers and engineers to build the infrastructure for autonomous science.
            </p>
          </div>
          <Link
            href="/careers"
            className="inline-flex items-center gap-2 h-10 px-5 rounded-lg border border-[var(--color-border-strong)] text-sm font-medium text-[var(--color-foreground)] hover:bg-[var(--color-surface-2)] transition-colors shrink-0"
          >
            View all open roles
            <ArrowUpRight size={14} />
          </Link>
        </div>

        <div className="flex flex-col">
          {roles.map((role) => (
            <Link
              key={role.title}
              href="/careers"
              className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-6 border-b border-[var(--color-border)] hover:border-[var(--color-accent-blue)] transition-colors duration-300 first:border-t"
            >
              <div>
                <h3 className="text-lg font-medium text-[var(--color-foreground)] group-hover:text-[var(--color-accent-blue)] transition-colors mb-1">
                  {role.title}
                </h3>
                <div className="flex items-center gap-3 text-sm text-[var(--color-muted-foreground)]">
                  <span className="font-mono">{role.team}</span>
                  <span className="w-1 h-1 rounded-full bg-[var(--color-border-strong)]" />
                  <span>{role.location}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-[var(--color-foreground)] opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                Apply now
                <ArrowUpRight size={16} />
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
