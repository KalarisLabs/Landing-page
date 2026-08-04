import { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Security",
  description: "Security practices, compliance, and responsible disclosure for Kalaris Labs infrastructure.",
};

function SecuritySchema() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Security at Kalaris Labs",
    description: "Security practices, compliance certifications, and responsible vulnerability disclosure for Kalaris Labs agentic scientific computing infrastructure.",
    publisher: {
      "@type": "Organization",
      name: "Kalaris Labs",
      url: "https://kalarislabs.com",
    },
    mainEntity: {
      "@type": "SecurityService",
      name: "Kalaris Security Program",
      description: "Comprehensive security for autonomous scientific computing infrastructure.",
      serviceType: "Information Security",
      provider: {
        "@type": "Organization",
        name: "Kalaris Labs",
      },
    },
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}

export default function SecurityPage() {
  return (
    <div className="pt-32 pb-24 md:pt-48 md:pb-32 min-h-screen">
      <SecuritySchema />
      <Container>
        <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-8">
          Security
        </h1>
        <div className="prose max-w-3xl">
          <p className="text-xl md:text-2xl text-[var(--color-muted-foreground)] leading-relaxed mb-12">
            We take the security of your research, data, and intellectual property seriously.
          </p>

          <h2>Security Architecture</h2>
          <p className="mb-4">
            Our platform is built on a defense-in-depth model with multiple security layers:
          </p>
          <ul className="mb-8">
            <li><strong>Network Isolation:</strong> Customer workloads run in dedicated, isolated VPCs with no shared tenancy.</li>
            <li><strong>Encryption:</strong> TLS 1.3 in transit, AES-256 at rest. Customer-managed keys available.</li>
            <li><strong>Runtime Sandboxing:</strong> Agent executions run in hardened containers with seccomp profiles and dropped capabilities.</li>
            <li><strong>Supply Chain Security:</strong> SLSA Level 3 build provenance, signed container images, SBOMs for all dependencies.</li>
          </ul>

          <h2>Data Protection</h2>
          <p className="mb-4">
            Your scientific data never leaves your control:
          </p>
          <ul className="mb-8">
            <li>No training on customer data without explicit opt-in</li>
            <li>Data residency controls (US, EU regions available)</li>
            <li>Automatic data lifecycle management with configurable retention</li>
            <li>Cryptographic erasure on deletion</li>
          </ul>

          <h2>Compliance & Certifications</h2>
          <p className="mb-4">
            In progress / planned:
          </p>
          <ul className="mb-8">
            <li>SOC 2 Type II (audit scheduled Q1 2027)</li>
            <li>ISO 27001 (controls implemented, certification pending)</li>
            <li>GDPR-compliant data processing</li>
            <li>CCPA/CPRA ready</li>
          </ul>

          <h2>Responsible Disclosure</h2>
          <p className="mb-4">
            If you discover a security vulnerability, please report it to <code className="bg-[var(--color-surface-1)] px-1.5 py-0.5 rounded">security@kalarislabs.com</code>.
          </p>
          <p className="mb-4">
            We commit to:
          </p>
          <ul className="mb-8">
            <li>Acknowledging receipt within 24 hours</li>
            <li>Providing a preliminary assessment within 72 hours</li>
            <li>Coordinating disclosure timeline with reporter</li>
            <li>No legal action against good-faith researchers</li>
          </ul>

          <h2>Bug Bounty</h2>
          <p className="mb-4">
            We run a private bug bounty program via HackerOne. Eligible researchers receive:
          </p>
          <ul className="mb-8">
            <li>Critical: up to $25,000</li>
            <li>High: up to $10,000</li>
            <li>Medium: up to $3,000</li>
            <li>Low: up to $500</li>
          </ul>

          <h2>Contact</h2>
          <p>
            Security questions: <a href="mailto:security@kalarislabs.com" className="text-[var(--color-accent-blue)] hover:underline">security@kalarislabs.com</a>
          </p>
        </div>
      </Container>
    </div>
  );
}