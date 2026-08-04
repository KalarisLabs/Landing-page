import { Metadata } from "next";
import PlatformClient, { PlatformSchema } from "./PlatformClient";

export const metadata: Metadata = {

  title: "Platform",
  description: "Six infrastructure layers for agentic scientific computing: Research Runtime, Multi-Agent Graph, Inference Engine, Verification System, GPU Runtime, and Agent Skills.",
  alternates: {
    canonical: "/platform",
  },
};

export default function PlatformPage() {
  return (
    <>
      <PlatformSchema />
      <PlatformClient />
    </>
  );
}