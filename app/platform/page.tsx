"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import styles from "./platform.module.css";

const catalogItems = [
  {
    num: "01",
    tag: "01 - RESEARCH RUNTIME",
    title: "Research Runtime",
    desc: "The core orchestration engine that manages the lifecycle of autonomous scientific experiments. It handles agent coordination, compute allocation, memory persistence, and result verification.",
    arch: "A high-performance sandboxed execution stack that runs on distributed Kubernetes clusters. It handles execution, metrics collection, and real-time state recovery, allowing agents to test hypotheses in a secure and reproducible manner.",
    diagram: (
      <svg width="180" height="180" viewBox="0 0 100 100" fill="none" className="text-white opacity-85">
        <rect x="10" y="10" width="80" height="80" rx="4" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
        <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="50" cy="50" r="8" fill="currentColor" />
        <path d="M50 10v20M50 70v20M10 50h20M70 50h20" stroke="currentColor" strokeWidth="1.5" />
        <path d="M30 30l10 10M60 60l10 10" stroke="currentColor" strokeWidth="1" />
      </svg>
    )
  },
  {
    num: "02",
    tag: "02 - MULTI-AGENT GRAPH",
    title: "Multi-Agent Graph",
    desc: "A directed graph of specialized agents (Planner, Researcher, Critic, Verifier, Publisher) that collaborate, critique, and converge on verified scientific output.",
    arch: "State-driven DAG orchestration using custom message-passing and consensus models. Each agent is modeled as an independent worker node that communicates using structured JSON schemas and goes through multi-round peer reviews.",
    diagram: (
      <svg width="180" height="180" viewBox="0 0 100 100" fill="none" className="text-white opacity-85">
        <circle cx="20" cy="50" r="8" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="50" cy="25" r="8" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="50" cy="75" r="8" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="80" cy="50" r="8" stroke="currentColor" strokeWidth="1.5" />
        <path d="M28 46l14-13M28 54l14 13M58 29l14 13M58 71l14-13M28 50h44" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" />
        <path d="M48 33v34" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    )
  },
  {
    num: "03",
    tag: "03 - INFERENCE ENGINE",
    title: "Inference Engine",
    desc: "GPU-native inference with TensorRT, mixed precision, and intelligent model routing to maximize throughput and minimize latency for heavy workloads.",
    arch: "Leverages direct FP16/INT8 CUDA execution paths, dynamically routing queries to optimized vLLM instances. A caching layer maintains persistent model weights in GPU VRAM to ensure zero cold-start latencies.",
    diagram: (
      <svg width="180" height="180" viewBox="0 0 100 100" fill="none" className="text-white opacity-85">
        <path d="M15 15h70v50H15z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M15 65l15 20h40l15-20" stroke="currentColor" strokeWidth="1.5" />
        <rect x="25" y="25" width="12" height="12" rx="1" stroke="currentColor" strokeWidth="1.2" />
        <rect x="44" y="25" width="12" height="12" rx="1" stroke="currentColor" strokeWidth="1.2" />
        <rect x="63" y="25" width="12" height="12" rx="1" stroke="currentColor" strokeWidth="1.2" />
        <line x1="31" y1="45" x2="69" y2="45" stroke="currentColor" strokeWidth="1.5" />
        <path d="M50 45v15" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    )
  },
  {
    num: "04",
    tag: "04 - VERIFICATION SYSTEM",
    title: "Verification System",
    desc: "Adversarial review, citation checking, and reproducibility validation built directly into the platform to prevent hallucinations and ensure absolute scientific integrity.",
    arch: "An automated compiler that parses generated scientific code, cross-references all factual claims against public databases (PubMed, arXiv), and runs isolated code testing suites to verify mathematical claims.",
    diagram: (
      <svg width="180" height="180" viewBox="0 0 100 100" fill="none" className="text-white opacity-85">
        <path d="M50 15L15 30v25c0 20 18 30 35 35 17-5 35-15 35-35V30L50 15z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M35 50l10 10 20-20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    num: "05",
    tag: "05 - GPU RUNTIME",
    title: "GPU Runtime",
    desc: "Direct CUDA kernel execution for scientific research. We minimize CPU-GPU memory overhead by pinning allocations directly in high-bandwidth memory (HBM).",
    arch: "Utilizes optimized execution queues with low-latency memory scheduling. Highly parallel scientific algorithms run directly on bare-metal hardware, avoiding virtualization bottlenecks entirely.",
    diagram: (
      <svg width="180" height="180" viewBox="0 0 100 100" fill="none" className="text-white opacity-85">
        <rect x="20" y="20" width="60" height="60" rx="6" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 30h10M10 40h10M10 50h10M10 60h10M10 70h10" stroke="currentColor" strokeWidth="1.5" />
        <path d="M80 30h10M80 40h10M80 50h10M80 60h10M80 70h10" stroke="currentColor" strokeWidth="1.5" />
        <rect x="35" y="35" width="30" height="30" fill="currentColor" opacity="0.3" />
        <circle cx="50" cy="50" r="4" fill="currentColor" />
      </svg>
    )
  },
  {
    num: "06",
    tag: "06 - AGENT SKILLS",
    title: "Agent Skills",
    desc: "Pluggable skill sets that extend the capabilities of AI agents, providing pre-validated code libraries for mathematical modeling, simulations, and data analysis.",
    arch: "Dynamic skill registration via package-like descriptors. The agent downloads, installs, and validates new packages in real-time within the sandboxed environment to acquire fresh capabilities.",
    diagram: (
      <svg width="180" height="180" viewBox="0 0 100 100" fill="none" className="text-white opacity-85">
        <path d="M20 20h25v25H20zM55 20h25v25H55zM20 55h25v25H20z" stroke="currentColor" strokeWidth="1.5" />
        <rect x="55" y="55" width="25" height="25" rx="2" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" />
        <path d="M45 32.5h10M32.5 45v10" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    )
  }
];

export default function PlatformPage() {
  const [activeTab, setActiveTab] = useState(0);
  const activeItem = catalogItems[activeTab];

  return (
    <div className={styles.pageWrapper}>
      <Container>
        <div className={styles.catalogFrame}>
          {/* Header Bar */}
          <div className={styles.frameHeader}>
            <span>) Platform Catalog</span>
            <span>[{activeItem.num}/06]</span>
          </div>

          {/* Main Content Grid */}
          <div className={styles.catalogGrid}>
            {/* Left Column: List of Tabs */}
            <div className={styles.leftCol}>
              <h1 className={styles.title}>
                All the legos to build the <span className={styles.titleHighlight}>perfect runtime</span> for research.
              </h1>
              <p className={styles.description}>
                Focused execution, inference, and verification blocks to power autonomous scientific Discovery.
              </p>

              <div className={styles.tabList}>
                {catalogItems.map((item, idx) => (
                  <button
                    key={item.num}
                    onClick={() => setActiveTab(idx)}
                    className={`${styles.tabBtn} ${activeTab === idx ? styles.tabBtnActive : ""}`}
                  >
                    <div className={styles.tabLabel}>
                      <span className={styles.tabNum}>{item.num}</span>
                      <span>{item.title}</span>
                    </div>
                    {activeTab === idx && <div className={styles.activeDot} />}
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column: Active Preview */}
            <div className={styles.rightCol}>
              <div className={styles.previewCard}>
                {/* Blueprint Diagram with Crosshairs */}
                <div className={styles.diagramArea}>
                  <div className={`${styles.crosshair} ${styles.chTopLeft}`} />
                  <div className={`${styles.crosshair} ${styles.chTopRight}`} />
                  <div className={`${styles.crosshair} ${styles.chBottomLeft}`} />
                  <div className={`${styles.crosshair} ${styles.chBottomRight}`} />
                  {activeItem.diagram}
                </div>

                {/* Details Section */}
                <div className={styles.detailArea}>
                  <div className={styles.detailTag}>{activeItem.tag}</div>
                  <h2 className={styles.detailTitle}>{activeItem.title}</h2>
                  <p className={styles.detailDesc}>{activeItem.desc}</p>

                  <div className={styles.detailArchitecture}>
                    <p className={styles.archTitle}>Architecture Detail</p>
                    <p className={styles.archText}>{activeItem.arch}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bar */}
          <div className={styles.frameFooter}>
            <span>) Kalaris Labs Stack</span>
            <span>Platform Core</span>
          </div>
        </div>
      </Container>
    </div>
  );
}
