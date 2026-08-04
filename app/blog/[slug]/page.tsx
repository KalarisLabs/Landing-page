import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const blogPosts: Record<string, { title: string; date: string; category: string; content: string; description: string }> = {
  "serving-100b-models-consumer-hardware": {
    title: "Serving 100B Parameter Models on Consumer Hardware",
    date: "2026-08-15",
    category: "Engineering",
    description: "How we optimized our inference engine using mixed precision and TensorRT to run massive research models locally.",
    content: "When we started building the Kalaris inference engine, one of our primary goals was to make running massive foundational models feasible outside of massive datacenter clusters. In this post, we discuss how we utilized TensorRT and int8 quantization...",
  },
  "automating-literature-review": {
    title: "Automating Literature Review: A Graph-Based Approach",
    date: "2026-07-22",
    category: "Research",
    description: "Introducing a new semantic search architecture that allows agents to traverse millions of papers to find hidden connections.",
    content: "The corpus of human scientific knowledge is expanding faster than any individual can comprehend. We present our approach to solving this using a distributed graph of researcher agents that can traverse semantic connections across millions of PDFs...",
  },
  "fault-tolerant-research-runtime": {
    title: "Building a Fault-Tolerant Research Runtime",
    date: "2026-07-05",
    category: "Infrastructure",
    description: "Scientific experiments can take days to run. Here's how we ensure agentic workflows don't fail when intermediate steps hallucinate.",
    content: "Unlike standard API requests which take milliseconds, scientific orchestration workflows can run for days. This requires a completely different approach to infrastructure, focusing on state persistence, checkpointing, and graceful recovery from agent hallucinations...",
  },
  "seo-agents-aio-geo-strategies": {
    title: "Autonomous SEO Agents: Mastering AIO and GEO in 2026",
    date: "2026-09-01",
    category: "Infrastructure",
    description: "How autonomous SEO agents leverage multi-agent orchestration and schema verification to maximize brand visibility and citation rates in AI Overviews and Generative Engines.",
    content: "In 2026, the search landscape has shifted fundamentally. Organic search clicks have dropped significantly as AI Overviews (AIO) and generative answer engines (ChatGPT, Perplexity, Gemini) satisfy user intent directly on the results page. In this post, we introduce how autonomous SEO agents built on Kalaris infrastructure implement multi-agent orchestration to continuously audit off-page trust signals and verify on-page structured schema, turning search optimization into a scalable, closed-loop engineering discipline.",
  },
};

export function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts[slug];
  if (!post) return { title: "Not Found" };
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: ["Kalaris Labs"],
    },
  };
}

function BlogPostSchema({ post, slug }: { post: typeof blogPosts[string]; slug: string }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: "Kalaris Labs",
      url: "https://kalarislabs.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Kalaris Labs",
      logo: {
        "@type": "ImageObject",
        url: "https://kalarislabs.com/assets/black logo kalaris logo ( geometric).png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://kalarislabs.com/blog/${slug}`,
    },
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://kalarislabs.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://kalarislabs.com/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: `https://kalarislabs.com/blog/${slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
    </>
  );
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    notFound();
  }

  return (
    <div className="pt-32 pb-24 md:pt-48 md:pb-32 min-h-screen">
      <Container>
        <div className="max-w-3xl mx-auto">
          <BlogPostSchema post={post} slug={slug} />
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] transition-colors mb-12"
          >
            <ArrowLeft size={16} />
            Back to Blog
          </Link>

          <header className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-[var(--color-surface-1)] text-[var(--color-accent-blue)]">
                {post.category}
              </span>
              <span className="text-sm font-mono text-[var(--color-muted-foreground)]">
                {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-light tracking-tight leading-tight">
              {post.title}
            </h1>
          </header>

          <article className="prose prose-invert max-w-none text-lg text-[var(--color-muted-foreground)]">
            <p className="lead text-xl text-[var(--color-foreground)] mb-8">
              {post.content}
            </p>

            <p>
              (This is a placeholder for the full blog post content. The production version will use MDX or a headless CMS to render rich text, code blocks, and diagrams.)
            </p>

            <h2>Technical Deep Dive</h2>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
            </p>

            <h3>Key Takeaways</h3>
            <ul>
              <li>Optimize memory bandwidth over compute</li>
              <li>Always verify agent outputs adversarially</li>
              <li>Persist state at every decision boundary</li>
            </ul>
          </article>
        </div>
      </Container>
    </div>
  );
}