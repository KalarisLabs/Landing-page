import { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  alternates: {
    canonical: "/about",
  },
  title: "About",
  description: "Learn about Kalaris Labs and our mission to build the infrastructure for autonomous science.",
};

function AboutSchema() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Kalaris Labs",
    description: "We are a team of researchers, engineers, and infrastructure builders dedicated to accelerating the pace of scientific discovery through autonomous AI systems.",
    mainEntity: {
      "@type": "Organization",
      name: "Kalaris Labs",
      url: "https://kalarislabs.com",
      logo: "https://kalarislabs.com/assets/black logo kalaris logo ( geometric).png",
      description: "Building the infrastructure for agentic scientific computing.",
      foundingDate: "2024",
      areaServed: "Global",
      knowsAbout: [
        "Agentic AI",
        "Scientific Computing",
        "GPU Inference",
        "Multi-Agent Systems",
        "Research Automation",
      ],
      sameAs: [
        "https://github.com/kalarislabs",
        "https://twitter.com/kalarislabs",
        "https://linkedin.com/company/kalarislabs",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+1-000-000-0000",
        contactType: "customer service",
        availableLanguage: ["English"],
        email: "hello@kalarislabs.com",
      },
    },
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 md:pt-48 md:pb-32 min-h-screen">
      <AboutSchema />
      <Container>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-8">
          About Kalaris Labs
        </h1>
        <div className="prose max-w-3xl">
          <p className="text-xl md:text-2xl text-[var(--color-muted-foreground)] leading-relaxed mb-12">
            We are a team of researchers, engineers, and infrastructure builders dedicated to accelerating the pace of scientific discovery.
          </p>
          
          <h2>Our Mission</h2>
          <p>
            The fundamental bottleneck in science today is no longer raw compute or data collection—it is the human bandwidth required to orchestrate research workflows, synthesize literature, and verify results. 
          </p>
          <p>
            Kalaris Labs is building the infrastructure to transition scientific discovery from an artisanal, human-bound process to an industrial, computationally scalable one. We are creating the runtime that will power the next century of autonomous R&D.
          </p>

          <h2>The Team</h2>
          <p>
            We are headquartered in San Francisco, CA, but operate globally. Our team brings together expertise from distributed systems, artificial intelligence, computational biology, and applied mathematics.
          </p>
        </div>
      </Container>
    </div>
  );
}