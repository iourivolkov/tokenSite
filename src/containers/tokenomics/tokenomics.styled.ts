import styled from "styled-components";
import {
  lurryCoin1Animation,
  lurryCoin2Animation,
  lurryCoin3Animation,
  lurryCoin4Animation,
  lurryCoin5Animation,
  lurryCoin6Animation,
  lurryCoin7Animation,
  lurryCoin8Animation,
  lurryCoin9Animation,
  lurryCoin2AnimationMobile,
  lurryCoin5AnimationMobile,
} from "./tokenomics.anim";
import { SectionTitle } from "../../components/section-title/section-title.component";
import { device } from "../../constants/breakpoints";

export const TokenomicsPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  padding-block: 200px;

  @media ${device.md} {
    overflow: hidden;
  }
`;

export const TokenomicsTextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  max-width: 500px;

  @media ${device.md} {
    width: 80%;
  }
  @media ${device.sm} {
    max-width: 300px;
  }
`;

export const Heading = styled(SectionTitle)`
  /* margin-top: -15px; */
`;

export const Subheading = styled.p`
  font-family: "handjet-regular";
  font-size: 20px;
  color: #000;
  margin-bottom: 50px;
  /* z-index: 10; */
`;

export const ContractSubheading = styled.p`
  font-family: "handjet-regular";
  font-size: 24px;
  color: #000;
  margin-bottom: 50px;

  @media ${device.sm} {
    font-size: 20px;
  }
`;

export const Text = styled.p`
  font-family: "handjet-regular";
  font-size: 48px;
  color: #000;

  @media ${device.md} {
    font-size: 40px;
  }

  @media ${device.sm} {
    font-size: 30px;
  }
  /* margin-bottom: -10px; */
  /* z-index: 10; */
`;

export const ClickToCopy = styled.button`
  font-family: "handjet-regular";
  font-size: 48px;
  color: #000;
  border: none;
  background: none;
  cursor: pointer;

  @media ${device.md} {
    font-size: 40px;
  }

  @media ${device.sm} {
    font-size: 30px;
  }
`;

// ANIMATED COINS

// red, black, green -> diff animation speeds -> 8 7 3

export const LurryCoin1 = styled.img`
  position: absolute;
  z-index: -1;
  filter: blur(4px);
  width: 157px;
  height: 180px;
  opacity: 0.9;
  top: 20px;
  right: 450px;
  transform: rotate(-46deg);
  /* animation: ${lurryCoin1Animation} 8s ease-in-out infinite; */
  /* border: 1px solid blue; */

  @media ${device.md} {
    font-size: 40px;
    width: 100px;
    height: 140px;
    top: 30px;
    right: 600px;
  }

  @media ${device.sm} {
    width: 120px;
    height: 120px;
    top: 10px;
    right: 200px;
    transform: rotate(10deg);
    filter: blur(3px);
  }
`;

export const LurryCoin2 = styled.img`
  position: absolute;
  z-index: -1;
  filter: blur(3px);
  width: 340px;
  height: 340px;
  opacity: 1;
  bottom: 200px;
  right: 120px;
  transform: rotate(72deg);
  /* animation: ${lurryCoin2Animation} 20s ease-in-out infinite; */
  /* border: 3px solid orange; */

  @media ${device.md} {
    height: 320px;
    width: 320px;
    bottom: 350px;
    right: 80px;
    transform: rotate(25deg);
  }

  @media ${device.sm} {
    bottom: 300px;
    left: -50px;
    height: 270px;
    width: 270px;
    animation: ${lurryCoin2AnimationMobile} 11s ease-in-out infinite;
  }
`;

export const LurryCoin3 = styled.img`
  position: absolute;
  z-index: -1;
  filter: blur(1px);
  width: 350px;
  height: 350px;
  opacity: 0.98;
  top: 200px;
  right: 500px;
  animation: ${lurryCoin3Animation} 12s ease-in-out infinite;
  /* border: 1px solid green; */

  @media ${device.md} {
    top: 80px;
    left: 20px;
    filter: blur(1.5px);
  }

  @media ${device.sm} {
    opacity: 0;
  }
`;

export const LurryCoin4 = styled.img`
  position: absolute;
  z-index: -1;
  filter: blur(1.5px);
  width: 228px;
  height: 228px;
  opacity: 1;
  top: 300px;
  left: 200px;
  transform: rotate(-34deg);
  /* animation: ${lurryCoin4Animation} 8s ease-in-out infinite; */
  /* border: 1px solid red; */

  @media ${device.md} {
    filter: blur(5px);
    width: 120px;
    height: 120px;
    top: 300px;
    left: 420px;
  }

  @media ${device.sm} {
    top: 100px;
    left: 200px;
    height: 240px;
    width: 240px;
    filter: blur(4px);
  }
`;

export const LurryCoin5 = styled.img`
  position: absolute;
  z-index: -1;
  filter: blur(3px);
  width: 100px;
  height: 100px;
  opacity: 0.9;
  bottom: 230px;
  left: 180px;
  transform: rotate(30deg);
  /* animation: ${lurryCoin5Animation} 8s ease-in-out infinite; */
  /* border: 1px solid purple; */

  @media ${device.md} {
    left: 140px;
    bottom: 220px;
    transform: rotate(40deg);
    height: 170px;
    width: 170px;
  }

  @media ${device.sm} {
    height: 130px;
    width: 130px;
    bottom: 180px;
    left: 120px;
    transform: rotate(-50deg);
    filter: blur(3px);
    /* animation: ${lurryCoin5AnimationMobile} 10s ease-in-out infinite; */
  }
`;

export const LurryCoin6 = styled.img`
  position: absolute;
  z-index: -2;
  filter: blur(2.85px);
  width: 150px;
  height: 174px;
  opacity: 1;
  top: 30px;
  left: 500px;
  transform: rotate(70deg);
  /* animation: ${lurryCoin6Animation} 12s ease-in-out infinite; */
  /* border: 1px solid yellow; */

  @media ${device.md} {
    top: -20px;
  }

  @media ${device.sm} {
    opacity: 0;
  }
`;

export const LurryCoin7 = styled.img`
  position: absolute;
  z-index: -1;
  width: 500px;
  height: 600px;
  opacity: 1;
  bottom: -180px;
  left: 300px;
  animation: ${lurryCoin7Animation} 6s ease-in-out infinite;
  /* border: 2px solid black; */

  @media ${device.md} {
    overflow: hidden;
    bottom: -50px;
    width: 550px;
    height: 650px;
  }

  @media ${device.sm} {
    left: 230px;
    bottom: -40px;
  }
`;

export const LurryCoin8 = styled.img`
  position: absolute;
  z-index: -1;
  filter: blur(1px);
  width: 160px;
  height: 170px;
  opacity: 0.9;
  top: 120px;
  left: 820px;
  animation: ${lurryCoin8Animation} 9s ease-in-out infinite;
  /* border: 3px solid red; */

  @media ${device.md} {
    top: 100px;
    left: 700px;
    filter: blur(2px);
  }

  @media ${device.sm} {
    opacity: 0;
  }
`;

export const LurryCoin9 = styled.img`
  position: absolute;
  z-index: -1;
  transform: rotate(-28.3deg);
  /* filter: blur(0.5px); */
  width: 313px;
  height: 313px;
  opacity: 0.95;
  bottom: 10px;
  right: 480px;
  /* animation: ${lurryCoin9Animation} 8s ease-in-out infinite; */
  /* border: 3px solid teal; */

  @media ${device.md} {
    opacity: 0;
  }

  @media ${device.sm} {
    opacity: 0;
  }
`;
// STYLES

export const BuyButton = styled.button`
  cursor: pointer;
  width: 240px;
  height: 80px;
  border-radius: 50px;
  /* background: linear-gradient(to right, #f7c600, #fff8dc); */
  background: #f7c600;
  border: 1px solid #ffcd00;
  color: #000;
  font-family: "handjet-semibold";
  font-size: 24px;
  text-transform: uppercase;
  margin-top: 75px;
  /* z-index: 100000; */
  opacity: 0.9;

  &:hover {
    color: #fff;
    transition: all ease-in 0.1s;
  }
`;

// export const LurryImage = styled.img`
//   position: absolute;
//   height: 900px;
//   right: -400px;
//   transform: rotate(-90deg);
//   animation: ${slideAnimation} 15s linear infinite;
// `;
