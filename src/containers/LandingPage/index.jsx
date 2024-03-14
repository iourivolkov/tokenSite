import { useEffect, useRef, useState } from "react";

import {
  LandingPageDiv,
  CloudsAndSunDiv,
  LeftCloud,
  RightCloud,
  LurrySun,
} from "./styled";

const LandingPage = () => {
  const leftCloudRef = useRef(null);
  const rightCloudRef = useRef(null);
  const sunRef = useRef(null);

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
    <LandingPageDiv>
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
  );
};

export default LandingPage;
