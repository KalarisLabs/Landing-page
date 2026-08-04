import { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  alternates: {
    canonical: "/infrastructure",
  },
  title: "Infrastructure",
  description: "GPU-native architecture for high-performance scientific workflows.",
};

function InfrastructureSchema() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Kalaris Labs Infrastructure",
    description: "GPU-native architecture for high-performance scientific workflows: CUDA Native, Distributed Inference, Mixed Precision & TensorRT, Knowledge Graph Storage.",
    hasPart: [
      { "@type": "SoftwareApplication", name: "CUDA Native", description: "Direct CUDA kernel execution for maximum throughput." },
      { "@type": "SoftwareApplication", name: "Distributed Inference", description: "Multi-node, multi-GPU sharding with automatic load balancing." },
      { "@type": "SoftwareApplication", name: "Mixed Precision & TensorRT", description: "Automatic precision selection (FP16/INT8) and TensorRT optimization." },
      { "@type": "SoftwareApplication", name: "Knowledge Graph Storage", description: "Scalable graph database for semantic relationships in scientific data." },
    ],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}

export default function InfrastructurePage() {
  return (
    <div className="pt-32 pb-24 md:pt-48 md:pb-32 min-h-screen">
      <InfrastructureSchema />
      <Container>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-8">
          Infrastructure
        </h1>
        <div className="prose max-w-3xl">
          <p className="text-xl md:text-2xl text-[var(--color-muted-foreground)] leading-relaxed mb-12">
            Built from the ground up for GPU-native execution and distributed orchestration.
          </p>
          
          <h2>CUDA Native</h2>
          <p>
            Direct CUDA kernel execution for maximum throughput. We minimize CPU-GPU memory transfers to ensure that hardware is fully utilized during intensive computational tasks.
          </p>

          <h2>Distributed Inference</h2>
          <p>
            Multi-node, multi-GPU sharding with automatic load balancing. Our stack uses Ray and custom scheduling algorithms to distribute massive LLM inference workloads efficiently.
          </p>

          <h2>Mixed Precision & TensorRT</h2>
          <p>
            Automatic precision selection (FP16/INT8) and TensorRT optimization ensure that models run at maximum speed without sacrificing scientific accuracy.
          </p>

          <h2>Knowledge Graph Storage</h2>
          <p>
            A highly scalable, distributed graph database optimized for storing semantic relationships between millions of scientific papers, hypotheses, and datasets.
          </p>
        </div>
      </Container>
    </div>
  );
}