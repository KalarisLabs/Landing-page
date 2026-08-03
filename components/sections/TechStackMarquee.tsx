"use client";

import { Container } from "@/components/ui/Container";
import styles from "./TechStackMarquee.module.css";

const technologies = [
  { name: "NVIDIA CUDA", icon: "⚡" },
  { name: "TensorRT", icon: "◆" },
  { name: "NIM", icon: "▲" },
  { name: "PyTorch", icon: "🔥" },
  { name: "Ray", icon: "☀" },
  { name: "Kubernetes", icon: "⎈" },
  { name: "Docker", icon: "🐳" },
  { name: "ONNX", icon: "◎" },
  { name: "Hugging Face", icon: "🤗" },
  { name: "vLLM", icon: "▶" },
  { name: "Triton", icon: "△" },
];

function TechItem({ name, icon }: { name: string; icon: string }) {
  return (
    <div className={styles.techItem}>
      <span className={styles.techIcon}>{icon}</span>
      <span className={styles.techName}>
        {name}
      </span>
    </div>
  );
}

export default function TechStackMarquee() {
  const items = [...technologies, ...technologies, ...technologies, ...technologies]; // Added more duplication for smooth endless scroll on ultrawide

  return (
    <section className={styles.section}>
      <Container>
        <p className={styles.title}>
          Built for
        </p>
      </Container>

      <div className={styles.marqueeContainer}>
        {/* Fade edges */}
        <div className={styles.fadeLeft} />
        <div className={styles.fadeRight} />

        <div className={styles.marqueeTrack}>
          {items.map((tech, i) => (
            <TechItem key={`${tech.name}-${i}`} {...tech} />
          ))}
        </div>
      </div>
    </section>
  );
}
