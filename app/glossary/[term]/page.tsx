import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { glossaryTerms } from "@/data/glossary";

export function generateStaticParams() {
  return glossaryTerms.map((term) => ({ term: term.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ term: string }>;
}): Promise<Metadata> {
  const { term } = await params;
  const entry = glossaryTerms.find((t) => t.slug === term);
  if (!entry) return { title: "Not Found" };
  return {
    title: `${entry.term} | Kalaris Labs Glossary`,
    description: entry.shortDefinition,
    alternates: { canonical: `https://kalarislabs.com/glossary/${entry.slug}` },
  };
}

function TermSchema({ entry }: { entry: (typeof glossaryTerms)[number] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: entry.term,
    description: entry.shortDefinition,
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      name: "AI & Scientific Computing Glossary",
      url: "https://kalarislabs.com/glossary",
    },
    url: `https://kalarislabs.com/glossary/${entry.slug}`,
    isPartOf: {
      "@type": "CollectionPage",
      url: "https://kalarislabs.com/glossary",
    },
  };
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://kalarislabs.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Glossary",
        item: "https://kalarislabs.com/glossary",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: entry.term,
        item: `https://kalarislabs.com/glossary/${entry.slug}`,
      },
    ],
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
    </>
  );
}

export default async function GlossaryTermPage({
  params,
}: {
  params: Promise<{ term: string }>;
}) {
  const { term } = await params;
  const entry = glossaryTerms.find((t) => t.slug === term);
  if (!entry) notFound();

  const related = entry.relatedTerms
    .map((slug) => glossaryTerms.find((t) => t.slug === slug))
    .filter((t): t is (typeof glossaryTerms)[number] => Boolean(t));

  return (
    <div className="pt-32 pb-24 md:pt-48 md:pb-32 min-h-screen">
      <TermSchema entry={entry} />
      <Container>
        <div className="max-w-3xl">
          <Link
            href="/glossary"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] transition-colors mb-8"
          >
            <ArrowLeft size={14} />
            Back to Glossary
          </Link>

          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-accent-blue)] mb-6">
            Kalaris Labs Glossary
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-8">
            {entry.term}
          </h1>

          <p className="text-xl md:text-2xl text-[var(--color-muted-foreground)] leading-relaxed mb-12">
            {entry.shortDefinition}
          </p>

          <div className="h-px w-full bg-[var(--color-border)] mb-12" />

          <h2>What is {entry.term}?</h2>
          <p>{entry.definition}</p>

          {related.length > 0 && (
            <>
              <div className="h-px w-full bg-[var(--color-border)] my-12" />
              <h2>Related Concepts</h2>
              <div className="grid gap-4 md:grid-cols-2 mt-6">
                {related.map((t) => (
                  <Link
                    key={t.slug}
                    href={`/glossary/${t.slug}`}
                    className="group p-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-1)] hover:border-[var(--color-border-strong)] transition-colors"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-medium tracking-tight group-hover:text-[var(--color-accent-blue)] transition-colors">
                        {t.term}
                      </h3>
                      <ArrowRight
                        size={16}
                        className="shrink-0 mt-1 text-[var(--color-muted-foreground)] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all"
                      />
                    </div>
                    <p className="mt-3 text-sm text-[var(--color-muted-foreground)] leading-relaxed">
                      {t.shortDefinition}
                    </p>
                  </Link>
                ))}
              </div>
            </>
          )}

          <div className="mt-16 p-8 rounded-xl border border-[var(--color-border-strong)] bg-[var(--color-surface-1)]">
            <h3 className="text-2xl font-light mb-4 mt-0">
              How Kalaris Builds for {entry.term}
            </h3>
            <p className="text-[var(--color-muted-foreground)] mb-6">
              Our platform is infrastructure for autonomous scientific discovery —
              orchestration, verification, and GPU-native execution.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/platform"
                className="inline-flex items-center gap-2 h-11 px-6 rounded-lg bg-[var(--color-foreground)] text-[var(--color-background)] font-medium hover:opacity-90 transition-opacity"
              >
                Explore the Platform
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 h-11 px-6 rounded-lg border border-[var(--color-border-strong)] text-[var(--color-foreground)] hover:bg-[var(--color-surface-2)] transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
