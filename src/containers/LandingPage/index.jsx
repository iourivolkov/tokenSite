import { useEffect } from "react";

import { LandingPageDiv, CloudsAndSunDiv, Clouds, LurrySun } from "./styled";

const LandingPage = () => {
  useEffect(() => {
    const handleScroll = () => {
      const sun = document.getElementById("sun");
      const leftCloud = document.getElementById("left-cloud");
      const rightCloud = document.getElementById("right-cloud");
      const value = window.scrollY;

      console.log(sun);
      console.log(leftCloud);

      // if (value < 800) {
      //   sun.style.top = value * -1 + "px";
      //   leftCloud.style.left = value * -1 + "px";
      //   rightCloud.style.right = value * -1 + "px";
      // }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <LandingPageDiv>
      <CloudsAndSunDiv>
        <Clouds id="left-cloud" src={"/assets/leftCloud.png"} />
        <LurrySun id="lurry-sun" src={"/assets/lurrySun.png"} />
        <Clouds id="right-cloud" src={"/assets/rightCloud.png"} />
      </CloudsAndSunDiv>
    </LandingPageDiv>
  );
};

export default LandingPage;
