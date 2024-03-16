import LandingPage from "@/containers/LandingPage";
import HeroPage from "@/containers/HeroPage";
import FooterPage from "@/containers/FooterPage";
import TokenomicsPage from "@/containers/TokenomicsPage";
import LurryNamePage from "@/containers/LurryNamePage";

const Home = () => {
  return (
    <>
      <LandingPage />
      {/* <LurryNamePage /> */}
      <HeroPage />
      <TokenomicsPage />
      <FooterPage />
    </>
  );
};

export default Home;
