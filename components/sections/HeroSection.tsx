"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight, Settings } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import styles from "./HeroSection.module.css";

function AsciiScrambleText({ text, active, animateOnMount = false }: { text: string; active: boolean; animateOnMount?: boolean }) {
  const [displayText, setDisplayText] = useState(text);

  useEffect(() => {
    if (!active) {
      setDisplayText(text);
      return;
    }

    let iteration = 0;
    const chars = "XYZ*+-/\\%=#@$&0123456789";
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (index < iteration) return text[index];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(interval);
      }
      iteration += 1 / 3;
    }, 25);

    return () => clearInterval(interval);
  }, [active, text]);

  useEffect(() => {
    if (animateOnMount) {
      let iteration = 0;
      const chars = "XYZ*+-/\\%=#@$&0123456789";
      const interval = setInterval(() => {
        setDisplayText(
          text
            .split("")
            .map((char, index) => {
              if (char === " ") return " ";
              if (index < iteration) return text[index];
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join("")
        );

        if (iteration >= text.length) {
          clearInterval(interval);
        }
        iteration += 1 / 4;
      }, 20);
      return () => clearInterval(interval);
    }
  }, [animateOnMount, text]);

  return <span>{displayText}</span>;
}

export default function HeroSection() {
  const [hoverPrimary, setHoverPrimary] = useState(false);
  const [hoverSecondary, setHoverSecondary] = useState(false);
  const [hoverHeadline, setHoverHeadline] = useState(false);

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
              onMouseEnter={() => setHoverHeadline(true)}
              onMouseLeave={() => setHoverHeadline(false)}
            >
              <AsciiScrambleText
                text="The Infrastructure Layer for Agentic Scientific Discovery."
                active={hoverHeadline}
                animateOnMount={true}
              />
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
              <Link
                href="/manifesto"
                className={styles.primaryCta}
                onMouseEnter={() => setHoverPrimary(true)}
                onMouseLeave={() => setHoverPrimary(false)}
              >
                <Settings size={14} className={`${hoverPrimary ? "rotate-45 transition-transform duration-300" : ""} pointer-events-none`} />
                <span className="pointer-events-none">
                  <AsciiScrambleText text="Read the Manifesto" active={hoverPrimary} />
                </span>
                <ArrowRight size={14} className="pointer-events-none" />
              </Link>
              <Link
                href="/platform"
                className={styles.secondaryCta}
                onMouseEnter={() => setHoverSecondary(true)}
                onMouseLeave={() => setHoverSecondary(false)}
              >
                <span className="pointer-events-none">
                  <AsciiScrambleText text="Explore Platform" active={hoverSecondary} />
                </span>
                <ArrowUpRight size={14} className="pointer-events-none" />
              </Link>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
