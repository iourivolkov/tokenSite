import styled, { keyframes } from "styled-components";

const floatingAnimation = keyframes`
  0% {
    transform: translateX(100vw) ;
  }
  
  100% {
    transform: translateX(-100vw) ;
  }
`;

export const FooterPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #ffffff;
  position: relative;
`;

export const Heading = styled.h1`
  color: #7abbbc;
  font-family: "gochi-hand";
  font-size: 128px;
  margin-top: -300px;
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
  background: linear-gradient(rgb(86, 84, 233), rgb(23, 23, 142));
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 200px;
  z-index: 2;
`;

export const OgLurry = styled.img`
  position: absolute;
  z-index: 20;
  width: 250px;
  height: 250px;
  opacity: 1;
  bottom: 100px;
  animation: ${floatingAnimation} 15s ease-in-out infinite;
`;

export const OgLurrySmol1 = styled.img`
  position: absolute;
  z-index: 20;
  width: 150px;
  height: 150px;
  opacity: 1;
  bottom: 100px;
  animation: ${floatingAnimation} 9s ease-in-out infinite;
`;

export const FooterText2 = styled.p`
  font-family: "gochi-hand";
  color: #fff;
  font-size: 20px;
  position: absolute;
  bottom: 10px;
  left: 20px;
  opacity: 0.5;
`;
