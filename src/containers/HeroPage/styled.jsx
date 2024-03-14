import React from "react";
import styled, { keyframes } from "styled-components";
import "../../styles/fonts.css";

const bananaAnimation = keyframes`
  0% {
    transform: translateY(0) rotate(40deg) ;
  }
  50% {
    transform: translateY(-20px) rotate(40deg);
  }
  100% {
    transform: translateY(0) rotate(40deg);
  }
`;
const toobieAnimation = keyframes`
  0% {
    transform: translateY(0) rotate(-20deg) ;
  }
  50% {
    transform: translateY(-20px) rotate(-20deg);
  }
  100% {
    transform: translateY(0) rotate(-20deg);
  }
`;
const aquariumAnimation = keyframes`
  0% {
    transform: translateY(0) rotate(2deg) ;
  }
  50% {
    transform: translateY(-20px) rotate(2deg);
  }
  100% {
    transform: translateY(0) rotate(2deg);
  }
`;
const icecreamAnimation = keyframes`
  0% {
    transform: translateY(0) rotate(-45deg) ;
  }
  50% {
    transform: translateY(-20px) rotate(-45deg);
  }
  100% {
    transform: translateY(0) rotate(-45deg);
  }
`;
const fishhatAnimation = keyframes`
  0% {
    transform: translateY(0) rotate(25deg) ;
  }
  50% {
    transform: translateY(-20px) rotate(25deg);
  }
  100% {
    transform: translateY(0) rotate(25deg);
  }
`;
const branchAnimation = keyframes`
  0% {
    transform: translateY(0) rotate(25deg) ;
  }
  50% {
    transform: translateY(-20px) rotate(25deg);
  }
  100% {
    transform: translateY(0) rotate(25deg);
  }
`;
const polkaAnimation = keyframes`
  0% {
    transform: translateY(0) rotate(20deg) ;
  }
  50% {
    transform: translateY(-20px) rotate(20deg);
  }
  100% {
    transform: translateY(0) rotate(20deg);
  }
`;
const canhatAnimation = keyframes`
  0% {
    transform: translateY(0) rotate(25deg) ;
  }
  50% {
    transform: translateY(-20px) rotate(25deg);
  }
  100% {
    transform: translateY(0) rotate(25deg);
  }
`;

export const HeroPageContainer = styled.div`
  position: relative;
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

// const getRandomPosition = () => `${Math.random() * 100}vw`;

export const LorePageContainer = styled.div`
  position: relative;
`;

export const PolkaToobieAccessory = styled.img`
  position: absolute;
  transform: rotate(140deg);
  z-index: 1;
  filter: blur(6px);
  width: 1000px;
  height: 900px;
  opacity: 0.7;
  top: 200px;
  left: -100px;
  animation: ${polkaAnimation} 8s ease-in-out infinite;
`;

export const BranchAccessory = styled.img`
  position: absolute;
  transform: rotate(140deg);
  z-index: 9;
  filter: blur(1.5px);
  width: 700px;
  height: 800px;
  opacity: 0.8;
  top: 10px;
  left: 100px;
  animation: ${branchAnimation} 12s ease-in-out infinite;
`;

export const ToobieAccessory = styled.img`
  position: absolute;
  transform: rotate(140deg);
  z-index: 1;
  filter: blur(4px);
  width: 700px;
  height: 800px;
  opacity: 0.7;
  top: 0px;
  left: 1000px;
  animation: ${toobieAnimation} 6s ease-in-out infinite;
`;

export const OrangeFishAccessory = styled.img`
  position: absolute;
  transform: rotate(10deg);
  z-index: 11;
  height: 400px;
  width: 350px;
  opacity: 0.9;
  top: 800px;
  filter: blur(2px);
  right: 150px;
  animation: ${fishhatAnimation} 11s ease-in-out infinite;
`;

export const BananaHatAccessory = styled.img`
  position: absolute;
  transform: rotate(10deg);
  z-index: 11;
  /* filter: blur(1px); */
  height: 1500px;
  width: 1500px;
  opacity: 1;
  top: -200px;
  right: -20px;
  animation: ${bananaAnimation} 15s ease-in-out infinite;
`;

// UNUSED

export const CanhatAccessory = styled.img`
  position: absolute;
  transform: rotate(140deg);
  z-index: 1;
  filter: blur(3px);
  width: 700px;
  height: 800px;
  opacity: 0.7;
  top: 100px;
  left: 500px;
  animation: ${canhatAnimation} 8s ease-in-out infinite;
`;

export const AquariumAccessory = styled.img`
  position: absolute;
  transform: rotate(20deg);
  z-index: 3;
  filter: blur(1px);
  height: 400px;
  width: 400px;
  opacity: 0.8;
  top: 300px;
  left: 900px;
  animation: ${aquariumAnimation} 8s ease-in-out infinite;
`;

export const IcecreamAccessory = styled.img`
  position: absolute;
  transform: rotate(50deg);
  z-index: 7;
  height: 300px;
  width: 300px;
  opacity: 0.9;
  filter: blur(2px);
  top: 400px;
  left: 9px;
  animation: ${icecreamAnimation} 9s ease-in-out infinite;
`;
