import { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  alternates: {
    canonical: "/manifesto",
  },
  title: "The Manifesto",
  description: "Why we are building the infrastructure for autonomous science.",
};

function ManifestoSchema() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "The Kalaris Manifesto: Why We Are Building the Infrastructure for Autonomous Science",
    description: "Science is too important to be bottlenecked by human limits. The transition from artisanal, human-bound research to industrial, computationally scalable autonomous R&D.",
    author: {
      "@type": "Organization",
      name: "Kalaris Labs",
      url: "https://kalarislabs.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Kalaris Labs",
      logo: {
        "@type": "ImageObject",
        url: "https://kalarislabs.com/assets/black logo kalaris logo ( geometric).png",
      },
    },
    datePublished: "2026-01-01",
    dateModified: "2026-08-03",
    articleSection: "Manifesto",
    keywords: "autonomous science, agentic AI, research infrastructure, scientific computing",
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}

export default function ManifestoPage() {
  return (
    <div className="pt-32 pb-24 md:pt-48 md:pb-32 min-h-screen">
      <ManifestoSchema />
      <Container>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display italic tracking-tight mb-12">
          The Kalaris Manifesto
        </h1>
        
        <div className="prose max-w-3xl">
          <p className="text-xl md:text-2xl text-[var(--color-foreground)] leading-relaxed mb-12">
            Science is too important to be bottle-necked by human limits.
          </p>

          <p>
            For the past four hundred years, the scientific method has been executed almost exclusively by humans. We formulate hypotheses, read the literature, design experiments, operate the instruments, gather the data, perform the statistical analyses, and write the papers. 
          </p>

          <p>
            But the scale of modern scientific challenges—from protein folding and drug discovery to climate modeling and clean energy—has outpaced the cognitive bandwidth of human researchers. We have more data than we can read, more hypotheses than we can test, and more papers published daily than any one scientist could consume in a lifetime.
          </p>

          <h2>The Autonomous Transition</h2>
          <p>
            We believe that the next epoch of human advancement requires a fundamental shift: the transition from science as an artisanal, human-bound process to science as an industrial, computationally scalable one.
          </p>

          <p>
            Large Language Models and Agentic AI are not just tools; they are a new substrate for reasoning. By treating AI agents as first-class collaborators in the research loop, we can parallelize the cognitive labor of science.
          </p>

          <h2>Why Infrastructure Matters</h2>
          <p>
            Building autonomous research systems requires more than simply prompting a frontier model. It requires a vertically integrated stack that can orchestrate complex, multi-step workflows, manage long-term scientific memory, verify intermediate results, and execute on high-performance GPU hardware.
          </p>

          <p>
            Kalaris Labs is building this infrastructure layer. We provide the runtime, the inference engine, the verification tools, and the multi-agent graph needed to power the next generation of autonomous R&D.
          </p>

          <p className="mt-12 text-[var(--color-foreground)] font-medium">
            Join us in building the future of discovery.
          </p>
        </div>
      </Container>
    </div>
  );
}