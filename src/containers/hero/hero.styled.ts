import styled, { keyframes } from "styled-components";
import { SectionTitle } from "../../components/section-title/section-title.component";
import { device } from "../../constants/breakpoints";

// SLIDE IN ANIMATION
const slideAnimation = keyframes`
  0% {
    transform: translateX(10%) rotate(-70deg);
  } 50% {
    transform: translateX(0) rotate(-70deg);
  } 100% {
    transform: translateX(10%) rotate(-70deg);
  }
`;

// STYLES
export const LorePageContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  padding-bottom: 100px;
`;

export const Heading = styled(SectionTitle)``;

export const Subheading = styled.p`
  font-family: "handjet-regular";
  font-size: 20px;
  color: #000;
`;

export const Text = styled.p`
  font-family: "handjet-regular";
  font-size: 48px;
  color: #000;
  margin-top: 50px;
  text-align: center;
  width: 35ch;

  @media ${device.md} {
    font-size: 32px;
    width: 80%;
  }
`;

export const LurryImage = styled.img`
  position: absolute;
  width: 1000px;
  top: -200px;
  right: -600px;
  z-index: -1;
  transform: rotate(-55deg);

  @media ${device.md} {
    width: 800px;
    right: -450px;
  }

  @media ${device.sm} {
    width: 800px;
    top: -150px;
    right: -400px;
  }

  @media ${device.xs} {
    top: 10%;
    right: -220px;
  }
  /* animation: ${slideAnimation} 15s linear infinite; */
`;
