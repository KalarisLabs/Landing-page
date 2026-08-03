import { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Kalaris Labs.",
};

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 md:pt-48 md:pb-32 min-h-screen">
      <Container>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-8">
          Contact Us
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="prose">
            <p className="text-xl text-[var(--color-muted-foreground)] leading-relaxed mb-8">
              Whether you're a researcher interested in our platform, an engineer wanting to join the team, or a partner looking to collaborate—we'd love to hear from you.
            </p>
            
            <div className="space-y-6 mt-12">
              <div>
                <h3 className="text-lg font-medium text-[var(--color-foreground)] mb-1">General Inquiries</h3>
                <a href="mailto:hello@kalarislabs.com" className="text-[var(--color-accent-blue)] hover:underline">hello@kalarislabs.com</a>
              </div>
              <div>
                <h3 className="text-lg font-medium text-[var(--color-foreground)] mb-1">Research & Partnerships</h3>
                <a href="mailto:research@kalarislabs.com" className="text-[var(--color-accent-blue)] hover:underline">research@kalarislabs.com</a>
              </div>
              <div>
                <h3 className="text-lg font-medium text-[var(--color-foreground)] mb-1">Careers</h3>
                <a href="mailto:careers@kalarislabs.com" className="text-[var(--color-accent-blue)] hover:underline">careers@kalarislabs.com</a>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-1)]">
            <h2 className="text-2xl font-light mb-6">Send a message</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[var(--color-muted-foreground)] mb-1">Name</label>
                <input type="text" id="name" className="w-full h-11 px-4 rounded-lg border border-[var(--color-border-strong)] bg-[var(--color-surface-0)] text-[var(--color-foreground)] focus:outline-none focus:border-[var(--color-accent-blue)] transition-colors" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[var(--color-muted-foreground)] mb-1">Email</label>
                <input type="email" id="email" className="w-full h-11 px-4 rounded-lg border border-[var(--color-border-strong)] bg-[var(--color-surface-0)] text-[var(--color-foreground)] focus:outline-none focus:border-[var(--color-accent-blue)] transition-colors" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[var(--color-muted-foreground)] mb-1">Message</label>
                <textarea id="message" rows={4} className="w-full p-4 rounded-lg border border-[var(--color-border-strong)] bg-[var(--color-surface-0)] text-[var(--color-foreground)] focus:outline-none focus:border-[var(--color-accent-blue)] transition-colors resize-none"></textarea>
              </div>
              <button type="button" className="w-full h-11 rounded-lg bg-[var(--color-foreground)] text-[var(--color-background)] font-medium hover:opacity-90 transition-opacity mt-4">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
}
