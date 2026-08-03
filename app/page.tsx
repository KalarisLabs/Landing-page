import dynamic from "next/dynamic";
import HeroSection from "@/components/sections/HeroSection";
import EditorialIntro from "@/components/sections/EditorialIntro";

const ArchitectureDiagram = dynamic(() => import("@/components/sections/ArchitectureDiagram"));
const InfrastructureGrid = dynamic(() => import("@/components/sections/InfrastructureGrid"));
const AgentSkillsInteractive = dynamic(() => import("@/components/sections/AgentSkillsInteractive"));
const AgentGraphVisualization = dynamic(() => import("@/components/sections/AgentGraphVisualization"));
const GPUNativeSection = dynamic(() => import("@/components/sections/GPUNativeSection"));
const ResearchFocusCards = dynamic(() => import("@/components/sections/ResearchFocusCards"));
const PublicationsSection = dynamic(() => import("@/components/sections/PublicationsSection"));
const OpenSourceSection = dynamic(() => import("@/components/sections/OpenSourceSection"));
const BlogPreviewSection = dynamic(() => import("@/components/sections/BlogPreviewSection"));
const ManifestoSection = dynamic(() => import("@/components/sections/ManifestoSection"));
const CareersSection = dynamic(() => import("@/components/sections/CareersSection"));
const FAQSection = dynamic(() => import("@/components/sections/FAQSection"));
const CTASection = dynamic(() => import("@/components/sections/CTASection"));

export default function Home() {
  return (
    <>
      <HeroSection />
      <EditorialIntro />
      <ArchitectureDiagram />
      <InfrastructureGrid />
      <AgentSkillsInteractive />
      <AgentGraphVisualization />
      <GPUNativeSection />
      <ResearchFocusCards />
      <PublicationsSection />
      <OpenSourceSection />
      <BlogPreviewSection />
      <ManifestoSection />
      <CareersSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
