import styled, { keyframes } from "styled-components";

const floatingAnimation = keyframes`
  0% {
    transform: translateX(100vw) ;
  }
  
  100% {
    transform: translateX(-100vw) ;
  }
`;

export const FooterPageTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50%;
  justify-content: center;
  align-items: center;
`;

export const FooterPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #ffffff;
  position: relative;
`;

export const Heading = styled.h1`
  color: #000;
  font-family: "handjet-bold";
  font-size: 200px;
  margin-top: -300px;
  margin-bottom: -15px;
  z-index: 10;
`;

export const Subheading = styled.p`
  font-family: "handjet-regular";
  font-size: 20px;
  margin-top: 20px;
  color: #000;
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
  color: #000;
  background-color: #f7c600;
  height: 65px;
  width: 65px;
  border: none;
  font-family: "handjet-regular";
  font-size: 36px;
  cursor: pointer;

  &:hover {
    color: #fff;
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

export const FooterText2 = styled.p`
  font-family: "handjet-regular";
  color: #000;
  font-size: 20px;
  position: absolute;
  bottom: 10px;
  left: 20px;
  opacity: 0.5;
`;

export const IceLurryImage = styled.img`
  position: absolute;
  height: 1000px;
  bottom: -80px;
  left: -500px;
  z-index: 2;
  transform: rotate(30deg) scaleX(-1);
`;

export const FurryLurryImage = styled.img`
  position: absolute;
  height: 1000px;
  bottom: -80px;
  right: -500px;
  z-index: 2;
  transform: rotate(-34deg);
`;

export const FurryLurryQuote = styled.p`
  font-family: "handjet-regular";
  font-size: 28px;
  top: 300px;
  left: 250px;
  transform: rotate(30deg);
  position: absolute;
`;

export const YetiLurryQuote = styled.p`
  font-family: "handjet-regular";
  font-size: 40px;
  top: 250px;
  right: 250px;
  transform: rotate(-30deg);
  position: absolute;
`;
