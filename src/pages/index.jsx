import LandingPage from "@/containers/LandingPage";
import HeroPage from "@/containers/HeroPage";
import FooterPage from "@/containers/FooterPage";
import RoadmapPage from "@/containers/RoadmapPage";
import TokenomicsPage from "@/containers/TokenomicsPage";

const Home = () => {
  return (
    <>
      {/* <LandingPage /> */}
      <HeroPage />
      <RoadmapPage />
      <TokenomicsPage />
      <FooterPage />
    </>
  );
};

export default Home;