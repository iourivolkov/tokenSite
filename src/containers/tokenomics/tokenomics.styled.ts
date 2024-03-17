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
  slideAnimation,
} from "./tokenomics.anim";

// ANIMATED COINS

export const LurryCoin1 = styled.img`
  position: absolute;
  z-index: 1;
  filter: blur(4px);
  width: 200px;
  height: 500px;
  opacity: 0.9;
  top: 20px;
  right: 100px;
  animation: ${lurryCoin1Animation} 8s ease-in-out infinite;
  border: 1px solid blue;
`;

export const LurryCoin2 = styled.img`
  position: absolute;
  z-index: 1;
  filter: blur(2px);
  width: 200px;
  height: 80px;
  opacity: 0.7;
  bottom: 100px;
  right: 300px;
  animation: ${lurryCoin2Animation} 8s ease-in-out infinite;
  border: 1px solid orange;
`;

export const LurryCoin3 = styled.img`
  position: absolute;
  z-index: 1;
  filter: blur(3px);
  width: 120px;
  height: 400px;
  opacity: 1;
  bottom: -200px;
  left: 500px;
  animation: ${lurryCoin3Animation} 8s ease-in-out infinite;
  border: 1px solid green;
`;

export const LurryCoin4 = styled.img`
  position: absolute;
  z-index: 1;
  filter: blur(2px);
  width: 200px;
  height: 100px;
  opacity: 0.8;
  top: 500px;
  left: 100px;
  animation: ${lurryCoin4Animation} 8s ease-in-out infinite;
  border: 1px solid red;
`;

export const LurryCoin5 = styled.img`
  position: absolute;
  z-index: 1;
  filter: blur(1px);
  width: 100px;
  height: 100px;
  opacity: 0.9;
  bottom: 300px;
  left: 600px;
  animation: ${lurryCoin5Animation} 8s ease-in-out infinite;
  border: 1px solid purple;
`;

export const LurryCoin6 = styled.img`
  position: absolute;
  z-index: 2;
  filter: blur(1px);
  width: 100px;
  height: 250px;
  opacity: 1;
  top: 200px;
  left: 600px;
  animation: ${lurryCoin6Animation} 8s ease-in-out infinite;
  border: 1px solid yellow;
`;

export const LurryCoin7 = styled.img`
  position: absolute;
  z-index: 1;
  /* filter: blur(1px); */
  width: 300px;
  height: 790px;
  opacity: 1;
  top: 290px;
  right: 300px;
  animation: ${lurryCoin7Animation} 8s ease-in-out infinite;
  border: 1px solid black;
`;

export const LurryCoin8 = styled.img`
  position: absolute;
  z-index: 1;
  /* filter: blur(6px); */
  width: 250px;
  height: 200px;
  opacity: 0.7;
  top: 200px;
  left: -100px;
  animation: ${lurryCoin8Animation} 8s ease-in-out infinite;
  border: 3px solid red;
`;

// STYLES

export const TokenomicsPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: #ffffff;
`;

export const Heading = styled.h1`
  font-family: "handjet-bold";
  font-size: 200px;
  color: #000;
  margin-bottom: -15px;
  z-index: 10;
`;

export const Subheading = styled.p`
  font-family: "handjet-regular";
  font-size: 20px;
  color: #000;
  z-index: 10;
`;

export const Text = styled.p`
  font-family: "handjet-regular";
  font-size: 48px;
  color: #000;
  margin-bottom: -10px;
  z-index: 10;
`;

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
  z-index: 100000;
  opacity: 0.8;

  &:hover {
    color: #fff;
    transition: all ease-in 0.2s;
  }
`;

export const LurryImage = styled.img`
  position: absolute;
  height: 900px;
  right: -400px;
  transform: rotate(-90deg);
  animation: ${slideAnimation} 15s linear infinite;
`;

export const TokenomicsTextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 30%;
`;
