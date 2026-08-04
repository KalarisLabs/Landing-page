import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const seoPages: Record<string, { title: string; description: string }> = {
  "agentic-science": {
    title: "Agentic Science",
    description: "How AI agents are transforming the scientific method through autonomous reasoning and execution.",
  },
  "autonomous-scientific-discovery": {
    title: "Autonomous Scientific Discovery",
    description: "The infrastructure and methodology behind scaling scientific discovery without human bottlenecks.",
  },
  "scientific-inference": {
    title: "Scientific Inference",
    description: "Optimizing GPU-native inference for heavy scientific workloads and reasoning models.",
  },
  "research-orchestration": {
    title: "Research Orchestration",
    description: "Coordinating multi-agent graphs to execute complex, multi-step research workflows.",
  },
  "research-verification": {
    title: "Research Verification",
    description: "Automated systems for validating citations, checking reproducibility, and preventing hallucinations in AI science.",
  },
  "autonomous-rd": {
    title: "Autonomous R&D",
    description: "Industrializing research and development pipelines with self-learning AI agents.",
  },
  "scientific-copilot": {
    title: "Scientific Copilot",
    description: "Integrating AI assistants deeply into the scientific process to augment human researchers.",
  },
  "gpu-scientific-computing": {
    title: "GPU Scientific Computing",
    description: "Leveraging raw CUDA execution and TensorRT for massive-scale computational biology and physics.",
  },
  "seo-agent": {
    title: "SEO Agent",
    description: "Deploying autonomous SEO agents and modern AIO/GEO strategies to guarantee maximum visibility and robust indexing in generative engines.",
  },
};

export function generateStaticParams() {
  return Object.keys(seoPages).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = seoPages[slug];
  if (!page) {
    return { title: "Not Found" };
  }
  return {
    title: page.title,
    description: page.description,
  };
}

export default async function ProgrammaticSEOPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = seoPages[slug];

  if (!page) {
    notFound();
  }

  return (
    <div className="pt-32 pb-24 md:pt-48 md:pb-32 min-h-screen">
      <Container>
        <div className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-accent-blue)] mb-6">
            Kalaris Labs Research Concept
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-8">
            {page.title}
          </h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-xl md:text-2xl text-[var(--color-muted-foreground)] leading-relaxed mb-12">
              {page.description}
            </p>

            <div className="h-px w-full bg-[var(--color-border)] mb-12" />

            <h2>Introduction to {page.title}</h2>
            <p>
              The paradigm of {page.title.toLowerCase()} represents a fundamental shift in how we approach problem-solving at the edge of human knowledge. As datasets grow exponentially and hypothesis spaces expand beyond cognitive limits, traditional manual methodologies become severe bottlenecks.
            </p>

            <h2>The Kalaris Infrastructure Approach</h2>
            <p>
              At Kalaris Labs, we do not view this as a purely algorithmic challenge, but as an infrastructure problem. Enabling true {page.title.toLowerCase()} requires a vertically integrated stack that can orchestrate agents, manage long-term memory, verify intermediate results, and execute efficiently on GPU hardware.
            </p>
            
            <ul>
              <li><strong>Scalability:</strong> Moving from artisanal, one-off experiments to industrialized, continuous execution.</li>
              <li><strong>Verification:</strong> Implementing adversarial checking and mathematical validation at every step.</li>
              <li><strong>Performance:</strong> Utilizing bare-metal CUDA capabilities for complex simulations and model inference.</li>
            </ul>

            <h2>Future Implications</h2>
            <p>
              As the capabilities of autonomous systems mature, the role of the human researcher shifts from manual execution to high-level direction and strategic oversight. The infrastructure we are building today will serve as the runtime for the discoveries of tomorrow.
            </p>

            <div className="mt-16 p-8 rounded-xl border border-[var(--color-border-strong)] bg-[var(--color-surface-1)]">
              <h3 className="text-2xl font-light mb-4 mt-0">Ready to build the future of science?</h3>
              <p className="text-[var(--color-muted-foreground)] mb-6">
                Join us in building the infrastructure for autonomous scientific discovery.
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
        </div>
      </Container>
    </div>
  );
}
