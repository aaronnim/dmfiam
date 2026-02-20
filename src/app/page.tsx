import { Hero } from "@/components/Hero";
import { DemoVideoSection } from "@/components/home/DemoVideoSection";
import { ProblemSection } from "@/components/home/ProblemSection";
import { SolutionSection } from "@/components/home/SolutionSection";
import { FeatureGrid } from "@/components/home/FeatureGrid";
import { AudienceSection } from "@/components/home/AudienceSection";
import { SmeTeaser } from "@/components/home/SmeTeaser";
import { DeploymentSection } from "@/components/home/DeploymentSection";
import { TrustSection, FinalCta } from "@/components/home/TrustSection";

export default function Home() {
  return (
    <>
      <Hero />
      <DemoVideoSection />
      <ProblemSection />
      <SolutionSection />
      <FeatureGrid />
      <AudienceSection />
      <SmeTeaser />
      <DeploymentSection />
      <TrustSection />
      <FinalCta />
    </>
  );
}
