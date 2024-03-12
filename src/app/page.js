import LandingPage from "@/containers/LandingPage";
import HeroPage from "@/containers/HeroPage";
import FooterPage from "@/containers/FooterPage";
import RoadmapPage from "@/containers/RoadmapPage";
import TokenomicsPage from "@/containers/TokenomicsPage";

export default function Home() {
  return (
    <>
      <LandingPage />
      <HeroPage />
      <RoadmapPage />
      <TokenomicsPage />
      <FooterPage />
    </>
  );
}
