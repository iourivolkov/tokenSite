import { useEffect } from "react";

import {
  LandingPageDiv,
  CloudsAndSunDiv,
  LeftCloud,
  RightCloud,
  LurrySun,
} from "./styled";

const LandingPage = () => {
  return (
    <LandingPageDiv>
      <CloudsAndSunDiv>
        <LeftCloud id="left-cloud" src={"/assets/leftCloud.png"} />
        <LurrySun id="lurry-sun" src={"/assets/lurrySun.png"} />
        <RightCloud id="right-cloud" src={"/assets/rightCloud.png"} />
      </CloudsAndSunDiv>
    </LandingPageDiv>
  );
};

export default LandingPage;
