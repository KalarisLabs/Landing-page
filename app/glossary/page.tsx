import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { glossaryTerms } from "@/data/glossary";

export const metadata: Metadata = {
  title: "AI & Scientific Computing Glossary | Kalaris Labs",
  description:
    "Definitions of the key concepts behind autonomous scientific discovery: agentic AI, research orchestration, GPU scientific computing, LLM inference, and more.",
  alternates: { canonical: "https://kalarislabs.com/glossary" },
};

function GlossarySchema() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "AI & Scientific Computing Glossary",
    description:
      "Definitions of key concepts behind autonomous scientific discovery: agentic AI, research orchestration, GPU scientific computing, and more.",
    publisher: {
      "@type": "Organization",
      name: "Kalaris Labs",
      url: "https://kalarislabs.com",
    },
    url: "https://kalarislabs.com/glossary",
    mainEntity: glossaryTerms.map((t) => ({
      "@type": "DefinedTerm",
      name: t.term,
      description: t.shortDefinition,
      url: `https://kalarislabs.com/glossary/${t.slug}`,
      inDefinedTermSet: "https://kalarislabs.com/glossary",
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function GlossaryPage() {
  const grouped = glossaryTerms.reduce<Record<string, typeof glossaryTerms>>((acc, term) => {
    const letter = term.term[0].toUpperCase();
    (acc[letter] = acc[letter] || []).push(term);
    return acc;
  }, {});

  return (
    <div className="pt-32 pb-24 md:pt-48 md:pb-32 min-h-screen">
      <GlossarySchema />
      <Container>
        <div className="max-w-3xl mb-16">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-accent-blue)] mb-6">
            Kalaris Labs Glossary
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-8">
            The Language of Autonomous Science
          </h1>
          <p className="text-xl md:text-2xl text-[var(--color-muted-foreground)] leading-relaxed">
            Plain-language definitions of the concepts behind autonomous scientific
            discovery, agentic AI, and GPU-native research infrastructure.
          </p>
        </div>

        <div className="h-px w-full bg-[var(--color-border)] mb-16" />

        <div className="space-y-16">
          {Object.entries(grouped)
            .sort(([a], [b]) => a.localeCompare(b))
            .map(([letter, terms]) => (
              <div key={letter}>
                <h2 className="font-mono text-sm uppercase tracking-[0.2em] text-[var(--color-muted-foreground)] mb-6">
                  {letter}
                </h2>
                <div className="grid gap-4 md:grid-cols-2">
                  {terms.map((term) => (
                    <Link
                      key={term.slug}
                      href={`/glossary/${term.slug}`}
                      className="group p-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-1)] hover:border-[var(--color-border-strong)] transition-colors"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-lg font-medium tracking-tight group-hover:text-[var(--color-accent-blue)] transition-colors">
                          {term.term}
                        </h3>
                        <ArrowRight
                          size={16}
                          className="shrink-0 mt-1 text-[var(--color-muted-foreground)] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all"
                        />
                      </div>
                      <p className="mt-3 text-sm text-[var(--color-muted-foreground)] leading-relaxed">
                        {term.shortDefinition}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </Container>
    </div>
  );
}
