import { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  alternates: {
    canonical: "/research",
  },
  title: "Research",
  description: "Publications, benchmarks, and datasets from Kalaris Labs.",
};

function ResearchSchema() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Kalaris Labs Research",
    description: "Publications, benchmarks, datasets, and open problems in autonomous scientific computing from Kalaris Labs.",
    hasPart: [
      { "@type": "Article", name: "Publications", url: "https://kalarislabs.com/research#publications", description: "Technical reports, whitepapers, and peer-reviewed research." },
      { "@type": "Dataset", name: "Benchmarks", url: "https://kalarislabs.com/research#benchmarks", description: "Standardized evaluations for scientific reasoning, planning, and inference optimization." },
      { "@type": "Dataset", name: "Datasets", url: "https://kalarislabs.com/research#datasets", description: "Open datasets curated for training and evaluating scientific AI agents." },
      { "@type": "CreativeWork", name: "Open Problems", url: "https://kalarislabs.com/research#open-problems", description: "Key challenges in verification, multi-agent orchestration, and hardware optimization." },
    ],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}

export default function ResearchPage() {
  return (
    <div className="pt-32 pb-24 md:pt-48 md:pb-32 min-h-screen">
      <ResearchSchema />
      <Container>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-8">
          Research
        </h1>
        <div className="prose max-w-3xl">
          <p className="text-xl md:text-2xl text-[var(--color-muted-foreground)] leading-relaxed mb-12">
            Pushing the boundaries of autonomous scientific computing.
          </p>
          
          <h2 id="publications">Publications</h2>
          <p className="text-[var(--color-muted-foreground)]">
            Technical reports, whitepapers, and peer-reviewed research. (Content coming soon)
          </p>

          <h2 id="benchmarks">Benchmarks</h2>
          <p className="text-[var(--color-muted-foreground)]">
            Standardized evaluations for scientific reasoning, planning, and inference optimization. (Content coming soon)
          </p>

          <h2 id="datasets">Datasets</h2>
          <p className="text-[var(--color-muted-foreground)]">
            Open datasets curated for training and evaluating scientific AI agents. (Content coming soon)
          </p>

          <h2 id="open-problems">Open Problems</h2>
          <p className="text-[var(--color-muted-foreground)]">
            Key challenges in verification, multi-agent orchestration, and hardware optimization that we are actively exploring. (Content coming soon)
          </p>
        </div>
      </Container>
    </div>
  );
}