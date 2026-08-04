export interface GlossaryTerm {
  term: string;
  slug: string;
  shortDefinition: string;
  definition: string;
  relatedTerms: string[];
}

export const glossaryTerms: GlossaryTerm[] = [
  {
    term: "Agentic AI",
    slug: "agentic-ai",
    shortDefinition: "AI systems that autonomously plan, execute, and adapt multi-step tasks toward a goal with minimal human oversight.",
    definition:
      "Agentic AI refers to systems that go beyond generating a single response to autonomously planning and executing multi-step workflows. Unlike chatbots, agentic systems maintain state, make tool calls, verify intermediate results, and adapt their strategy when an approach fails. In scientific research, agentic AI can propose hypotheses, design experiments, execute simulations, and revise its plan based on outcomes. Kalaris Labs builds the orchestration and verification infrastructure that makes agentic workflows reliable enough for autonomous R&D.",
    relatedTerms: ["autonomous-scientific-discovery", "research-orchestration", "scientific-copilot", "seo-agent"],
  },
  {
    term: "Autonomous Scientific Discovery",
    slug: "autonomous-scientific-discovery",
    shortDefinition: "The use of AI agents to run the scientific method end-to-end without human bottlenecks.",
    definition:
      "Autonomous scientific discovery is the process of using AI agents to perform the entire scientific loop: reading the literature, formulating hypotheses, designing and running experiments, analyzing results, and writing up conclusions. The goal is not to remove human scientists but to remove the manual bottleneck between insight and validation, enabling research at a scale impossible with traditional workflows. This requires infrastructure for long-running workflows, verification of intermediate claims, and GPU-native execution.",
    relatedTerms: ["agentic-ai", "autonomous-rd", "scientific-inference"],
  },
  {
    term: "Autonomous R&D",
    slug: "autonomous-rd",
    shortDefinition: "Industrializing research and development pipelines with self-learning AI agents that operate continuously.",
    definition:
      "Autonomous R&D applies autonomous AI to the full research and development lifecycle, from literature review and experiment design to formulation, simulation, and iteration toward a product-ready result. Industrializing R&D means moving from artisanal, one-off experiments to continuous, parallelized execution where the cost per experiment drops dramatically and the search space covered grows by orders of magnitude.",
    relatedTerms: ["autonomous-scientific-discovery", "research-verification", "agentic-ai"],
  },
  {
    term: "GPU Scientific Computing",
    slug: "gpu-scientific-computing",
    shortDefinition: "Using GPU-accelerated, CUDA-native execution for large-scale computational biology, physics, and chemistry workloads.",
    definition:
      "GPU scientific computing leverages the massive parallel throughput of graphics processing units for compute-heavy scientific workloads such as molecular dynamics, computational fluid dynamics, and large-scale simulation. Modern scientific AI stacks pair GPU-native inference with these compute kernels, allowing reinforcement learning loops that explore parameter spaces millions of times faster than CPU-only baselines. Kalaris deploys TensorRT-optimized inference and bare-metal CUDA kernels for research workloads.",
    relatedTerms: ["scientific-inference", "autonomous-scientific-discovery", "research-orchestration"],
  },
  {
    term: "Scientific Inference",
    slug: "scientific-inference",
    shortDefinition: "Optimized, GPU-native model inference tuned for heavy scientific workloads and reasoning models.",
    definition:
      "Scientific inference is the serving layer for AI models used in research: reasoning models, simulation surrogates, and scientific language models. Because scientific workloads are token-heavy, long-running, and latency-sensitive, scientific inference requires aggressive quantization, TensorRT compilation, and careful batching to make frontier-scale models feasible on available hardware, including consumer GPUs for individual researchers.",
    relatedTerms: ["gpu-scientific-computing", "research-verification", "autonomous-scientific-discovery"],
  },
  {
    term: "Research Orchestration",
    slug: "research-orchestration",
    shortDefinition: "Coordinating multi-agent graphs to execute complex, multi-step research workflows reliably.",
    definition:
      "Research orchestration is the coordination layer for scientific workflows involving multiple AI agents, tools, and long-running tasks. It manages agent graphs, distributes subtasks, tracks state across steps that may take hours or days, and handles retries when an agent produces an invalid or hallucinated intermediate result. Reliable orchestration is what separates research prototypes from reproducible scientific infrastructure.",
    relatedTerms: ["agentic-ai", "fault-tolerant-research-runtime", "autonomous-scientific-discovery", "seo-agent"],
  },
  {
    term: "Research Verification",
    slug: "research-verification",
    shortDefinition: "Automated systems for validating citations, checking reproducibility, and preventing hallucination in AI-driven research.",
    definition:
      "Research verification is the discipline of automatically checking the outputs of AI research agents before they are trusted: validating that citations exist and say what they claim, verifying numerical results are reproducible, and catching hallucinations that would otherwise propagate through a research pipeline. Verification is the critical safety layer that makes autonomous scientific discovery trustworthy.",
    relatedTerms: ["research-orchestration", "autonomous-rd", "scientific-inference", "ai-overview-optimization"],
  },
  {
    term: "Scientific Copilot",
    slug: "scientific-copilot",
    shortDefinition: "An AI assistant deeply integrated into the scientific process, augmenting rather than replacing human researchers.",
    definition:
      "A scientific copilot is an AI assistant embedded in the researcher's workflow that handles the heavy lifting of literature search, data analysis, and experiment setup while the human directs strategy. The distinction from full automation is human-in-the-loop control at decision points. Copilots lower the barrier to entry and multiply the throughput of existing research teams.",
    relatedTerms: ["agentic-ai", "research-orchestration", "autonomous-scientific-discovery"],
  },
  {
    term: "Agentic Science",
    slug: "agentic-science",
    shortDefinition: "Applying agent-based AI to the scientific method through autonomous reasoning and execution.",
    definition:
      "Agentic science is the application of agent-based AI to scientific practice: agents that can reason about evidence, generate hypotheses, execute experiments, and iterate. It sits at the intersection of AI research, scientific computing, and infrastructure engineering, and represents the practical realization of 'AI that does science' as opposed to 'AI that answers questions about science'.",
    relatedTerms: ["agentic-ai", "autonomous-scientific-discovery", "research-orchestration"],
  },
  {
    term: "Fault-Tolerant Research Runtime",
    slug: "fault-tolerant-research-runtime",
    shortDefinition: "A runtime that keeps multi-day scientific workflows alive through checkpointing, state persistence, and graceful recovery.",
    definition:
      "A fault-tolerant research runtime is infrastructure designed for scientific workflows that run for hours or days. Unlike API requests that complete in milliseconds, research pipelines need checkpointing so a failed intermediate step can be resumed, persistent state so agent context survives restarts, and graceful recovery when an agent hallucinates or hits a flaky tool. This is the foundation of trustworthy autonomous R&D.",
    relatedTerms: ["research-orchestration", "research-verification", "autonomous-rd"],
  },
  {
    term: "Multi-Agent Research Systems",
    slug: "multi-agent-research-systems",
    shortDefinition: "Teams of specialized AI agents that collaborate on research tasks, each handling a distinct role.",
    definition:
      "Multi-agent research systems decompose a research goal into roles handled by specialized agents: a literature agent, a hypothesis agent, an experiment agent, a verification agent, and a writing agent. Coordination between them is managed by an orchestrator that assigns tasks, merges results, and enforces verification checkpoints. The power comes from specialization plus structured collaboration, mirroring how human research teams operate.",
    relatedTerms: ["research-orchestration", "agentic-ai", "research-verification"],
  },
  {
    term: "LLM Inference",
    slug: "llm-inference",
    shortDefinition: "Running large language models to produce outputs; the serving side of every AI research system.",
    definition:
      "LLM inference is the process of running a trained large language model to generate output from a prompt. In scientific systems, inference is the most compute-intensive recurring cost, so optimizing it with quantization, speculative decoding, batching, and GPU-native compilation is critical. Efficient LLM inference is what makes large-scale autonomous research economically viable.",
    relatedTerms: ["scientific-inference", "gpu-scientific-computing", "llm-agents"],
  },
  {
    term: "LLM Agents",
    slug: "llm-agents",
    shortDefinition: "Language models wrapped with tools, memory, and planning loops so they can take actions.",
    definition:
      "LLM agents combine a language model with tools, memory, and a planning loop, letting the model not just generate text but take actions: querying databases, running simulations, writing code, and calling APIs. The agent loop iterates between reasoning and action until a goal is reached. Agents are the building blocks of agentic AI and the foundation of the Kalaris research platform.",
    relatedTerms: ["agentic-ai", "research-orchestration", "scientific-copilot"],
  },
  {
    term: "Model Evaluation",
    slug: "model-evaluation",
    shortDefinition: "Measuring how well an AI model performs on tasks relevant to scientific work, including reliability checks.",
    definition:
      "Model evaluation is the systematic measurement of model performance across benchmarks and real-world tasks. For scientific use, evaluation goes beyond accuracy to include hallucination rates, citation validity, reasoning robustness, and reproducibility. Rigorous evaluation is a prerequisite for trusting an autonomous research system's output.",
    relatedTerms: ["research-verification", "scientific-inference", "llm-agents"],
  },
  {
    term: "Neural Architecture Search",
    slug: "neural-architecture-search",
    shortDefinition: "Automating the design of neural network architectures through search and evaluation.",
    definition:
      "Neural architecture search (NAS) automates the design of neural network architectures by searching a space of possible designs and evaluating candidates on a target task. NAS is compute-intensive, making it a natural fit for GPU scientific computing infrastructure where many candidate architectures can be trained and scored in parallel.",
    relatedTerms: ["gpu-scientific-computing", "scientific-inference", "agentic-ai"],
  },
  {
    term: "Reinforcement Learning",
    slug: "reinforcement-learning",
    shortDefinition: "Training agents to make sequences of decisions by rewarding desirable outcomes.",
    definition:
      "Reinforcement learning (RL) trains an agent to take a sequence of actions that maximizes cumulative reward. In scientific research, RL is used to optimize experimental strategies, tune simulation parameters, and discover policies that outperform hand-crafted heuristics. RL workloads are extremely compute-heavy, requiring the kind of GPU infrastructure and long-running orchestration Kalaris provides.",
    relatedTerms: ["autonomous-rd", "gpu-scientific-computing", "autonomous-scientific-discovery"],
  },
  {
    term: "Hyperparameter Optimization",
    slug: "hyperparameter-optimization",
    shortDefinition: "Automated search over a model's configuration space to find settings that maximize performance.",
    definition:
      "Hyperparameter optimization (HPO) is the automated search for the configuration values that make a model or experiment perform best: learning rates, batch sizes, architecture choices, and simulation parameters. Because each evaluation is expensive, HPO relies on intelligent search strategies and parallel GPU execution to cover the configuration space efficiently.",
    relatedTerms: ["autonomous-rd", "neural-architecture-search", "gpu-scientific-computing"],
  },
  {
    term: "Model Serving",
    slug: "model-serving",
    shortDefinition: "Deploying trained models behind a production API with low latency and high throughput.",
    definition:
      "Model serving is the practice of deploying trained models as reliable, low-latency, high-throughput services. Production serving concerns include batching, quantization, autoscaling, and GPU utilization. For research platforms, good model serving determines whether interactive scientific copilots and agent workflows feel responsive or sluggish.",
    relatedTerms: ["scientific-inference", "llm-inference", "gpu-scientific-computing"],
  },
  {
    term: "Generative Engine Optimization",
    slug: "generative-engine-optimization",
    shortDefinition: "Optimizing web content to be reliably indexed, summarized, and cited by LLM-powered answer engines like ChatGPT, Perplexity, and Gemini.",
    definition:
      "Generative Engine Optimization (GEO) is the strategy of structuring and validating web content specifically for Large Language Model (LLM) answer systems. Unlike traditional SEO focused on keyword density, GEO prioritizes explicit information hierarchy, authoritative schema markup, direct question-and-answer patterns, and verifiable data sources. This ensures that conversational search engines can easily parse, ingest, and accurately cite the site's content.",
    relatedTerms: ["ai-overview-optimization", "seo-agent", "agentic-ai"],
  },
  {
    term: "AI Overview Optimization",
    slug: "ai-overview-optimization",
    shortDefinition: "Optimizing digital assets to appear in Google's AI Overviews, providing clear summaries and definitions that AI models can extract.",
    definition:
      "AI Overview Optimization (AIO) is the discipline of tailoring web resources for Google's AI-generated search overviews. By structuring content using strict Answer Engine Optimization (AEO) rules—such as concise definitions, clear headers, bulleted takeaways, and rich tables—brands can dramatically improve their citation share in AI Overviews, preserving search visibility as click-through rates migrate directly to AI results.",
    relatedTerms: ["generative-engine-optimization", "seo-agent", "research-verification"],
  },
  {
    term: "SEO Agent",
    slug: "seo-agent",
    shortDefinition: "An autonomous AI agent that continuously audits, optimizes, and indexes digital assets for traditional and AI search engines.",
    definition:
      "An SEO Agent is an autonomous, multi-agent system designed to manage and maximize search and citation visibility. Operating on a continuous reinforcement loop, the agent monitors brand presence in Google AI Overviews and generative engine responses (ChatGPT, Perplexity, Gemini), identifies visibility and citation gaps, generates real-time schema.org enhancements, and dynamically syncs discoverability tools like sitemaps, robots.txt, and llms.txt.",
    relatedTerms: ["generative-engine-optimization", "ai-overview-optimization", "research-orchestration"],
  },
];
