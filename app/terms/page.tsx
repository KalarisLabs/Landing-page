import { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for Kalaris Labs.",
};

export default function TermsPage() {
  return (
    <div className="pt-32 pb-24 md:pt-48 md:pb-32 min-h-screen">
      <Container>
        <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-8">
          Terms of Service
        </h1>
        <div className="prose max-w-3xl">
          <p className="text-[var(--color-muted-foreground)] mb-8">Last updated: August 2, 2026</p>
          
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using the Kalaris Labs platform, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
          </p>

          <h2>2. Use of Services</h2>
          <p>
            Our platform provides autonomous scientific computing infrastructure. You agree to use these services only for lawful research and engineering purposes. You may not use our infrastructure to generate malicious content, conduct cyberattacks, or violate intellectual property rights.
          </p>

          <h2>3. Intellectual Property</h2>
          <p>
            You retain all rights to the scientific output and models generated using our platform, provided they do not infringe on the rights of others. Kalaris Labs retains all rights to the underlying infrastructure, code, and agentic workflows.
          </p>

          <h2>4. Limitation of Liability</h2>
          <p>
            While our verification systems are robust, Kalaris Labs does not guarantee the absolute accuracy of AI-generated scientific output. Researchers must independently verify critical findings before publication or deployment in safety-critical environments.
          </p>
        </div>
      </Container>
    </div>
  );
}
