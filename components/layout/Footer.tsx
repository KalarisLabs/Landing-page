"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { MessageSquare } from "lucide-react";
import styles from "./Footer.module.css";

const footerColumns = [
  {
    title: "Platform",
    links: [
      { label: "Overview", href: "/platform" },
      { label: "Research Runtime", href: "/research-orchestration" },
      { label: "Inference Engine", href: "/scientific-inference" },
      { label: "Agent Skills", href: "/agentic-science" },
      { label: "GPU Runtime", href: "/gpu-scientific-computing" },
      { label: "Verification", href: "/research-verification" },
    ],
  },
  {
    title: "Research",
    links: [
      { label: "Publications", href: "/research" },
      { label: "Benchmarks", href: "/research#benchmarks" },
      { label: "Datasets", href: "/research#datasets" },
      { label: "Open Problems", href: "/research#open-problems" },
    ],
  },
  {
    title: "Engineering",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Glossary", href: "/glossary" },
      { label: "Architecture", href: "/infrastructure" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Manifesto", href: "/manifesto" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

const legalLinks = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Security", href: "/security" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.contentWrapper}>
          {/* Brand Column */}
          <div className={styles.brandColumn}>
            <span className={styles.brandTitle}>KalarisLabs</span>
            <p className={styles.brandDescription}>
              Infrastructure layer for agentic scientific computing. Made for teams scaling autonomous R&D.
            </p>
          </div>

          {/* Links Grid */}
          <div className={styles.linksGrid}>
            {footerColumns.map((column) => (
              <div key={column.title}>
                <p className={styles.columnTitle}>{column.title}</p>
                <ul className={styles.linkList}>
                  {column.links.map((link) => (
                    <li key={link.href} className={styles.linkItem}>
                      <Link href={link.href}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <span className={styles.copyright}>
            © {currentYear} Kalaris Labs. All rights reserved.
          </span>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Social Connect */}
            <div className={styles.socialLinks}>
              <a
                href="https://github.com/kalarislabs"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                aria-label="GitHub"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/></svg>
              </a>
              <a
                href="https://twitter.com/kalarislabs"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                aria-label="Twitter"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              <a
                href="https://discord.gg/kalarislabs"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                aria-label="Discord"
              >
                <MessageSquare size={20} />
              </a>
            </div>
          </div>
        </div>
      </Container>

      {/* Big Futuristic Tech Branding Section (Moved outside Container to span edge-to-edge) */}
      <div className={styles.giantBackgroundContainer}>
        <span className={styles.giantText}>KALARIS LABS</span>
      </div>
    </footer>
  );
}
