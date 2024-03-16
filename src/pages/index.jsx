import LandingPage from "@/containers/LandingPage";
import HeroPage from "@/containers/HeroPage";
import FooterPage from "@/containers/FooterPage";
import TokenomicsPage from "@/containers/TokenomicsPage";
import LurryNamePage from "@/containers/LurryNamePage";
import HeaderNav from "@/components/HeaderNav";

const Home = () => {
  return (
    <>
      <HeaderNav />
      <LandingPage />
      {/* <LurryNamePage /> */}
      <HeroPage />
      <TokenomicsPage />
      <FooterPage />
    </>
  );
};

export default Home;
