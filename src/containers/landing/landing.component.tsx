import { useEffect, useRef } from "react";

import {
  LandingPageDiv,
  CloudsAndSunDiv,
  LeftCloud,
  RightCloud,
  LurrySun,
} from "./landing.styled";

import LandingOverlay from "../../components/landing-overlay/landing-overlay.component";

export const LandingComponent = () => {
  const leftCloudRef = useRef<HTMLImageElement>(null);
  const rightCloudRef = useRef<HTMLImageElement>(null);
  const sunRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const leftCloud = leftCloudRef.current;
      const rightCloud = rightCloudRef.current;
      const sun = sunRef.current;

      if (leftCloud && rightCloud && sun) {
        leftCloud.style.transform = `translateX(-${scrollY * 0.8}px)`;
        rightCloud.style.transform = `translateX(${scrollY * 0.4}px)`;
        sun.style.transform = `translateY(-${scrollY * 0.4}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <LandingOverlay />
      <LandingPageDiv id="home-page">
        <CloudsAndSunDiv>
          <LeftCloud
            id="left-cloud"
            src={"/assets/leftCloud.png"}
            ref={leftCloudRef}
          />
          <LurrySun id="lurry-sun" src={"/assets/lurrySun.png"} ref={sunRef} />
          <RightCloud
            id="right-cloud"
            src={"/assets/rightCloud.png"}
            ref={rightCloudRef}
          />
        </CloudsAndSunDiv>
      </LandingPageDiv>
    </>
  );
};
