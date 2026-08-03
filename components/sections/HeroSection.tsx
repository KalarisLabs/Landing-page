"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight, Settings } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      {/* Top Scenic Banner */}
      <div className={styles.bannerContainer}>
        <Image
          src="/assets/hero_scenic_mosaic.png"
          alt="Classical scenic landscape overlooking a sea with columns"
          width={1920}
          height={480}
          priority
          className={styles.bannerImage}
        />
      </div>

      <Container className={styles.contentWrapper}>
        <div className={styles.gridContainer}>
          {/* Left Column: Headline */}
          <div className={styles.leftCol}>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={styles.headline}
            >
              The Infrastructure Layer for Agentic Scientific Discovery.
            </motion.h1>
          </div>

          {/* Right Column: Copy & CTAs */}
          <div className={styles.rightCol}>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={styles.subtitle}
            >
              Self-learning AI systems, GPU-native execution, optimized inference,
              multi-agent orchestration, and verifiable research workflows —
              powering the next generation of autonomous R&D.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className={styles.ctaGroup}
            >
              <Link href="/manifesto" className={styles.primaryCta}>
                <Settings size={14} />
                Read the Manifesto
                <ArrowRight size={14} />
              </Link>
              <Link href="/platform" className={styles.secondaryCta}>
                Explore Platform
                <ArrowUpRight size={14} />
              </Link>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
