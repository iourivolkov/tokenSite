import styled from "styled-components";

export const LandingPageDiv = styled.div`
  background-color: #bce8f7;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CloudsAndSunDiv = styled.div`
  display: flex;

  align-items: flex-start;
  width: 100%;
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
`;

export const LurrySun = styled.img`
  position: absolute;
  width: clamp(50rem, 20vw, 30rem);
  right: 20%;
  margin-top: -90px;
  z-index: 2;
`;
