import styled, { keyframes } from "styled-components";

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

export const FooterPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh; /* Change height to min-height */
  background-color: #edfffe;
  position: relative; /* Add relative positioning */
`;

export const Heading = styled.h1`
  color: #7abbbc;
  font-family: "gochi-hand";
  font-size: 128px;
  margin-top: -400px;
  margin-bottom: -15px;
  z-index: 10;
`;

export const Subheading = styled.p`
  font-family: "gochi-hand";
  font-size: 20px;
  margin-top: 20px;
  color: #7abbbc;
  z-index: 10;
`;

export const SocialButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-top: 20px;
  z-index: 10;
`;

export const SocialButton = styled.button`
  border-radius: 60%;
  color: #fff;
  background-color: #7abbbc;
  height: 65px;
  width: 65px;
  border: none;
  font-family: "gochi-hand";
  font-size: 36px;
  cursor: pointer;

  &:hover {
    background-color: #589b9c;
    transition: all ease-in 0.2s;
  }
`;

export const FooterSea = styled.div`
  background: linear-gradient(rgb(93, 139, 181), rgb(124, 189, 173));
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 400px;
  z-index: 2;
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
