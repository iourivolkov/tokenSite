import styled from "styled-components";
import { device } from "../../constants/breakpoints";

export const LandingPageDiv = styled.div`
  background: linear-gradient(#d8f8ff, #ffffff);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CloudsAndSunDiv = styled.div`
  display: flex;
  position: relative;
  overflow: hidden;
  height: 100%;
  padding-top: 100px;
  align-items: center;

  @media ${device.xs} {
    padding-top: 0px;
  }
`;

export const LeftCloud = styled.img`
  position: relative;
  object-fit: contain;
  top: 0;
  width: clamp(10rem, 30vw, 50rem);
  width: 50%;
  z-index: 1;
`;

export const RightCloud = styled.img`
  position: relative;
  object-fit: contain;
  top: 0;
  width: clamp(10rem, 30vw, 50rem);
  width: 50%;
  z-index: 3;
  margin-left: 0px;

  @media ${device.md} {
    margin-left: 0px;
  }

  @media ${device.xs} {
    margin-left: 0px;
  }
`;

export const LurrySun = styled.img`
  position: absolute;
  width: 800px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  margin-top: -100px;

  @media ${device.md} {
    /* left: 50%;
    */
    /* top: 50%; */
    /* transform: translate(-50%, -50%); */
  }

  @media ${device.sm} {
    /* left: 50%; */
    /* top: 50%; */
    /* transform: translate(-50%, -50%); */
  }

  @media ${device.xs} {
    /* left: 50%;
    */
    /* top: 50%; */
    /* transform: translate(-50%, -50%); */
  }
`;
