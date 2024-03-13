import styled, { keyframes } from "styled-components";
import "../../styles/fonts.css";

const floatingAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0);
  }
`;

export const HeroPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #edfffe;
`;

export const Heading = styled.h1`
  font-family: "gochi-hand";
  font-size: 128px;
  color: #7abbbc;
  margin-bottom: -15px;
  z-index: 10;
`;

export const Subheading = styled.p`
  font-family: "gochi-hand";
  font-size: 20px;
  color: #7abbbc;
  z-index: 10;
`;

export const Text = styled.p`
  font-family: "gochi-hand";
  font-size: 48px;
  color: #7abbbc;
  margin-bottom: -10px;
  z-index: 10;
  text-align: center;
  width: 30ch;
`;

export const ToobieAccessory = styled.img`
  position: absolute;
  transform: rotate(140deg);
  z-index: 1;
  filter: blur(3px);
  width: 700px;
  height: 800px;
  opacity: 0.7;
  animation: ${floatingAnimation} 8s ease-in-out infinite;
`;

export const AquariumAccessory = styled.img`
  position: absolute;
  transform: rotate(20deg);
  z-index: 3;
  filter: blur(1px);
  height: 400px;
  width: 400px;
  opacity: 0.8;
  animation: ${floatingAnimation} 8s ease-in-out infinite;
`;

export const OrangeFishAccessory = styled.img`
  position: absolute;
  transform: rotate(10deg);
  z-index: 5;
  height: 800px;
  width: 700px;
  opacity: 0.9;
  animation: ${floatingAnimation} 6s ease-in-out infinite;
`;

export const BananaHatAccessory = styled.img`
  position: absolute;
  transform: rotate(10deg);
  z-index: 3;
  height: 800px;
  width: 700px;
  opacity: 0.7;
  animation: ${floatingAnimation} 3s ease-in-out infinite;
`;

export const IcecreamAccessory = styled.img`
  position: absolute;
  transform: rotate(50deg);
  z-index: 7;
  height: 300px;
  width: 300px;
  opacity: 0.9;
  animation: ${floatingAnimation} 9s ease-in-out infinite;
`;
