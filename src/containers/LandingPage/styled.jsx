import styled from "styled-components";

export const CloudsAndSunDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
`;

export const LandingPageDiv = styled.div`
  background-color: #edfffe;
  width: 100%;
  height: 100vh;
`;

export const Clouds = styled.img`
  position: relative;
  object-fit: contain;
  top: 0;
  width: clamp(10rem, 30vw, 50rem);
  width: 50%;
`;

export const LurrySun = styled.img`
  position: absolute;
  width: clamp(45rem, 20vw, 30rem);
  right: 20%;
  top: 0rem;
  z-index: 2;
`;
