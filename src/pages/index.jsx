import LandingPage from "@/containers/LandingPage";
import HeroPage from "@/containers/HeroPage";
import FooterPage from "@/containers/FooterPage";
import TokenomicsPage from "@/containers/TokenomicsPage";
import LurryNamePage from "@/containers/LurryNamePage";
import HeaderNav from "@/components/HeaderNav";
import { useEffect, useState } from "react";

const Home = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const scrollStatus = () => {
      setIsScrolling(window.scrollY >= 20);
    };
    scrollStatus();
  }, []);

  return (
    <>
      {isScrolling && <HeaderNav />}
      <LandingPage />
      {/* <LurryNamePage /> */}
      <HeroPage />
      <TokenomicsPage />
      <FooterPage />
    </>
  );
};

export default Home;
