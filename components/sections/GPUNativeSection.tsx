"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";

const capabilities = [
  { title: "CUDA Native", description: "Direct CUDA kernel execution for maximum throughput", code: "cuda.launch(kernel, grid, block)" },
  { title: "TensorRT", description: "Optimized inference with INT8/FP16 precision", code: "trt.optimize(model, precision='fp16')" },
  { title: "Distributed Inference", description: "Multi-GPU sharding with automatic load balancing", code: "ray.remote(num_gpus=4)" },
  { title: "Mixed Precision", description: "Automatic precision selection per layer for optimal perf", code: "torch.autocast('cuda')" },
  { title: "Model Routing", description: "Intelligent routing to the best model for each task", code: "router.dispatch(task, models)" },
  { title: "Batch Scheduling", description: "Dynamic batching across concurrent research workloads", code: "scheduler.batch(requests)" },
  { title: "Inference Optimization", description: "Quantization, pruning, and graph optimization", code: "onnx.quantize(model, int8)" },
];

export default function GPUNativeSection() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Content */}
          <div>
            <SectionLabel label="GPU Native" index="05" />
            <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4">
              Built on{" "}
              <span className="text-gradient-green">GPU-native</span>{" "}
              infrastructure.
            </h2>
            <p className="text-[var(--color-muted-foreground)] mb-8 max-w-md">
              Every layer of the stack is optimized for GPU execution — from inference to verification. No CPU bottlenecks. No wasted compute.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { value: "<50ms", label: "P99 latency" },
                { value: "8×", label: "Throughput gain" },
                { value: "94%", label: "GPU utilization" },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-1)]">
                  <p className="text-xl font-mono font-semibold text-[var(--color-accent-green)]">
                    {stat.value}
                  </p>
                  <p className="text-[11px] font-mono text-[var(--color-muted-foreground)] mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Capability cards */}
          <div className="space-y-3">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="p-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-1)] hover:border-[var(--color-accent-green)]/30 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-sm font-medium text-[var(--color-foreground)] mb-1">
                      {cap.title}
                    </h3>
                    <p className="text-xs text-[var(--color-muted-foreground)]">
                      {cap.description}
                    </p>
                  </div>
                </div>
                <div className="mt-3 p-2 rounded-md bg-[var(--color-surface-0)] border border-[var(--color-border)]">
                  <code className="text-xs font-mono text-[var(--color-accent-green)]">
                    {cap.code}
                  </code>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
