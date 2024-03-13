import styled from "styled-components";

export const FooterPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #edfffe;
`;

export const Heading = styled.h1`
  color: #7abbbc;
  font-family: "gochi-hand";
  font-size: 128px;
  margin-bottom: -15px;
`;

export const Subheading = styled.p`
  font-family: "gochi-hand";
  font-size: 20px;
  margin-top: 20px;
  color: #7abbbc;
`;

export const SocialButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-top: 20px;
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
  background-color: linear-gradient(#5d8bb5, #7cbdad);
  height: 400px;
  width: 100%;
`;
