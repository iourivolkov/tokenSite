import React from "react";
import styled, { keyframes } from "styled-components";
import "../../styles/fonts.css";

// SLIDEIN ANIMATION

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

export const HeroPageContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  text-align: center;
  width: 35ch;
`;

export const LorePageContainer = styled.div`
  position: relative;
`;

export const LurryImage = styled.img`
  position: absolute;
  height: 1000px;
  top: -200px;
  right: -600px;
  z-index: 2;
  transform: rotate(-55deg);
  /* animation: ${slideAnimation} 15s linear infinite; */
`;
