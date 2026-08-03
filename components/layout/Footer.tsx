import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Terminal, Rss, ArrowUpRight } from "lucide-react";

const footerColumns = [
  {
    title: "Platform",
    links: [
      { label: "Overview", href: "/platform" },
      { label: "Research Runtime", href: "/research-runtime" },
      { label: "Inference Engine", href: "/scientific-inference" },
      { label: "Agent Skills", href: "/scientific-ai-agents" },
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
      { label: "Documentation", href: "/docs" },
      { label: "Open Source", href: "/open-source" },
      { label: "Architecture", href: "/infrastructure" },
      { label: "Changelog", href: "/changelog" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Manifesto", href: "/manifesto" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
      { label: "Press", href: "/press" },
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
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface-0)]">
      {/* Newsletter CTA */}
      <Container className="py-16 md:py-20 border-b border-[var(--color-border)]">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-lg">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-muted-foreground)] mb-3">
              Stay updated
            </p>
            <h3 className="text-2xl md:text-3xl font-light text-[var(--color-foreground)]">
              Research, engineering, and infrastructure updates from the frontier.
            </h3>
          </div>
          <div className="flex gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 h-11 px-6 rounded-lg border border-[var(--color-border-strong)] text-sm font-medium text-[var(--color-foreground)] hover:bg-[var(--color-surface-2)] transition-colors"
            >
              Get in touch
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </Container>

      {/* Link Columns */}
      <Container className="py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <p className="font-mono text-xs uppercase tracking-[0.15em] text-[var(--color-muted-foreground)] mb-4">
                {column.title}
              </p>
              <ul className="space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>

      {/* Bottom Bar */}
      <Container className="py-6 border-t border-[var(--color-border)]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo + Copyright */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 100 100"
                fill="none"
                className="text-[var(--color-muted-foreground)]"
              >
                {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                  <rect
                    key={i}
                    x="30"
                    y="47"
                    width="40"
                    height="5"
                    rx="1"
                    fill="currentColor"
                    transform={`rotate(${-60 + i * 20} 30 50)`}
                    opacity={0.6 + i * 0.05}
                  />
                ))}
              </svg>
              <span className="text-xs font-medium tracking-wider uppercase text-[var(--color-muted-foreground)]">
                Kalaris Labs
              </span>
            </div>
            <span className="text-xs text-[var(--color-muted-foreground)]">
              © {currentYear} Kalaris Labs. All rights reserved.
            </span>
          </div>

          {/* Legal + Social */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-3 border-l border-[var(--color-border)] pl-4">
              <a
                href="https://github.com/kalarislabs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] transition-colors"
                aria-label="GitHub"
              >
                <Terminal size={16} />
              </a>
              <a
                href="/rss.xml"
                className="text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] transition-colors"
                aria-label="RSS Feed"
              >
                <Rss size={16} />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
