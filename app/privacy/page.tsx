import { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  alternates: {
    canonical: "/privacy",
  },
  title: "Privacy Policy",
  description: "Privacy policy for Kalaris Labs.",
};

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-24 md:pt-48 md:pb-32 min-h-screen">
      <Container>
        <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-8">
          Privacy Policy
        </h1>
        <div className="prose max-w-3xl">
          <p className="text-[var(--color-muted-foreground)] mb-8">Last updated: August 2, 2026</p>
          
          <h2>1. Information We Collect</h2>
          <p>
            Kalaris Labs respects your privacy. We collect minimal information necessary to operate our platform and services. This may include account details, telemetry from infrastructure usage, and logs from agentic interactions if explicitly opted in.
          </p>

          <h2>2. Use of Data in Scientific Workflows</h2>
          <p>
            Any proprietary scientific data, datasets, or unpublished research fed into the Kalaris Research Runtime remains strictly confidential. We do not use customer research data to train our foundational models without explicit consent.
          </p>

          <h2>3. Data Security</h2>
          <p>
            We implement industry-standard security measures, including at-rest and in-transit encryption, to protect your data.
          </p>

          <h2>4. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us at privacy@kalarislabs.com.
          </p>
        </div>
      </Container>
    </div>
  );
}
