import styled from "styled-components";

export const TokenomicsPageContainer = styled.div`
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
`;

export const BuyButton = styled.button`
  cursor: pointer;
  width: 240px;
  height: 80px;
  border-radius: 50px;
  background-color: #7abbbc;
  border: none;
  color: #fff;
  font-family: "gochi-hand";
  font-size: 24px;
  text-transform: uppercase;
  margin-top: 75px;
  z-index: 10;

  &:hover {
    background-color: #589b9c;
    transition: all ease-in 0.1s;
  }
`;

export const LurryImage = styled.img`
  position: absolute;
  width: 970px;
  height: 1000px;
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
  right: -650px;
`;
