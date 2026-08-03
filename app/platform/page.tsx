import { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Platform",
  description: "The Kalaris Labs Platform: Agentic AI, GPU inference, and Research Orchestration.",
};

export default function PlatformPage() {
  return (
    <div className="pt-32 pb-24 md:pt-48 md:pb-32 min-h-screen">
      <Container>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-8">
          The Platform
        </h1>
        <div className="prose max-w-3xl">
          <p className="text-xl md:text-2xl text-[var(--color-muted-foreground)] leading-relaxed mb-12">
            A vertically integrated stack for autonomous scientific computing.
          </p>
          
          <h2>Research Runtime</h2>
          <p>
            The core orchestration engine that manages the lifecycle of scientific experiments. It handles agent coordination, compute allocation, memory persistence, and result verification.
          </p>

          <h2>Multi-Agent Graph</h2>
          <p>
            A directed graph of specialized agents (Planner, Researcher, Critic, Verifier, Publisher) that collaborate, critique, and converge on verified scientific output.
          </p>

          <h2>Inference Engine</h2>
          <p>
            GPU-native inference with TensorRT, mixed precision, and intelligent model routing to maximize throughput and minimize latency for heavy research workloads.
          </p>

          <h2>Verification System</h2>
          <p>
            Adversarial review, citation checking, and reproducibility validation built directly into the runtime to prevent hallucinations and ensure scientific rigor.
          </p>
        </div>
      </Container>
    </div>
  );
}
