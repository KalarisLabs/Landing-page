import type { Metadata } from "next";
import localFont from 'next/font/local';
import { IBM_Plex_Mono, Instrument_Serif, Syncopate } from 'next/font/google';
import "./design-system.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Script from "next/script";

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-ibm-plex-mono',
  display: 'swap',
});

const instrumentSerif = Instrument_Serif({
  weight: ['400'],
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-instrument-serif',
  display: 'swap',
});

const syncopate = Syncopate({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-syncopate',
  display: 'swap',
});

const satoshi = localFont({
  src: [
    {
      path: '../public/fonts/satoshi-400.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/satoshi-500.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/satoshi-700.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/satoshi-900.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-satoshi',
  display: 'swap',
});

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID;
const GSC_VERIFICATION = process.env.NEXT_PUBLIC_GSC_VERIFICATION;

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
  manifest: "/manifest.webmanifest",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  other: GSC_VERIFICATION ? { "google-site-verification": GSC_VERIFICATION } : {},
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
        logo: "https://kalarislabs.com/favicon.png",
        description: "Building the infrastructure for agentic scientific computing.",
        sameAs: [
          "https://github.com/kalarislabs",
          "https://twitter.com/kalarislabs",
          "https://linkedin.com/company/kalarislabs",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+1-000-000-0000",
          contactType: "customer service",
          availableLanguage: ["English"],
        },
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
          availability: "https://schema.org/InStock",
        },
      },
    ],
  };

  return (
    <html lang="en" className={`light ${satoshi.variable} ${ibmPlexMono.variable} ${instrumentSerif.variable} ${syncopate.variable}`} suppressHydrationWarning>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {GA_MEASUREMENT_ID && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_MEASUREMENT_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}
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