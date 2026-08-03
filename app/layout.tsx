import type { Metadata } from "next";
import "./design-system.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";

export const metadata: Metadata = {
  metadataBase: new URL("https://kalarislabs.com"),
  title: {
    default: "Kalaris Labs | Infrastructure for Agentic Scientific Computing",
    template: "%s | Kalaris Labs",
  },
  description:
    "Building the infrastructure for agentic scientific computing — combining self-learning AI systems, GPU-native execution, optimized inference, multi-agent orchestration, and verifiable research workflows to power the next generation of autonomous R&D.",
  keywords: [
    "agentic AI",
    "scientific computing",
    "autonomous R&D",
    "GPU inference",
    "multi-agent systems",
    "research automation",
    "scientific discovery",
    "AI infrastructure",
    "research runtime",
    "inference optimization",
  ],
  authors: [{ name: "Kalaris Labs", url: "https://kalarislabs.com" }],
  creator: "Kalaris Labs",
  publisher: "Kalaris Labs",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Kalaris Labs | Infrastructure for Agentic Scientific Computing",
    description:
      "Building the infrastructure for agentic scientific computing — self-learning AI, GPU-native execution, multi-agent orchestration, and verifiable research workflows.",
    url: "https://kalarislabs.com",
    siteName: "Kalaris Labs",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kalaris Labs | Infrastructure for Agentic Scientific Computing",
    description:
      "Building the infrastructure for agentic scientific computing — self-learning AI, GPU-native execution, multi-agent orchestration, and verifiable research workflows.",
  },
  alternates: {
    canonical: "https://kalarislabs.com",
  },
  icons: {
    icon: "/assets/black logo kalaris logo ( geometric).png",
    shortcut: "/assets/black logo kalaris logo ( geometric).png",
    apple: "/assets/black logo kalaris logo ( geometric).png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://kalarislabs.com/#organization",
        name: "Kalaris Labs",
        url: "https://kalarislabs.com",
        description:
          "Building the infrastructure for agentic scientific computing.",
        sameAs: ["https://github.com/kalarislabs"],
      },
      {
        "@type": "ResearchOrganization",
        "@id": "https://kalarislabs.com/#research-org",
        name: "Kalaris Labs",
        url: "https://kalarislabs.com/research",
        parentOrganization: {
          "@id": "https://kalarislabs.com/#organization",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://kalarislabs.com/#website",
        url: "https://kalarislabs.com",
        name: "Kalaris Labs",
        publisher: {
          "@id": "https://kalarislabs.com/#organization",
        },
        potentialAction: {
          "@type": "SearchAction",
          target: "https://kalarislabs.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "SoftwareApplication",
        name: "Kalaris Research Platform",
        applicationCategory: "ScientificApplication",
        operatingSystem: "Cloud",
        description:
          "Agentic scientific computing platform combining GPU-native execution, multi-agent orchestration, and verifiable research workflows.",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
          description: "Contact for pricing",
        },
      },
    ],
  };

  return (
    <html lang="en" className="light" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=Instrument+Serif:ital@0;1&family=Syncopate:wght@700;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="icon"
          type="image/png"
          href="/assets/black logo kalaris logo ( geometric).png"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
