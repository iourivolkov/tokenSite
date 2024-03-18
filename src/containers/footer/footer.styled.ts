import styled from "styled-components";
import { device } from "../../constants/breakpoints";
import { SectionTitle } from "../../components/section-title/section-title.component";

export const FooterPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  /* min-height: 100dvh; */
  position: relative;
  overflow: hidden;
  margin-top: 100px;
  padding-bottom: 100px;
`;

export const FooterQuotesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30%;
  height: 100px;
  width: 100%;
  max-width: 1024px;
`;

export const FurryLurryQuote = styled.p`
  font-family: "handjet-regular";
  font-size: 28px;
  transform: rotate(30deg);
`;

export const YetiLurryQuote = styled.p`
  font-family: "handjet-regular";
  font-size: 40px;
  transform: rotate(-30deg);
`;

export const Heading = styled(SectionTitle)`
  margin-top: 70px;
`;

export const Subheading = styled.p`
  text-align: center;
  font-family: "handjet-regular";
  font-size: 20px;
  margin-top: 20px;
  color: #000;

  @media ${device.xs} {
    width: 80%;
  }
`;

export const SocialButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 20px;
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

export const IceLurryImage = styled.img`
  position: absolute;
  transform: rotate(40deg);
  width: 800px;
  left: -300px;
  z-index: -1;

  @media ${device.md} {
  }

  @media ${device.sm} {
    width: 700px;
    left: -280px;
  }

  @media ${device.xs} {
    left: -150px;
  }
`;

export const FurryLurryImage = styled.img`
  position: absolute;
  transform: rotate(-34deg);
  width: 800px;
  right: -350px;
  z-index: -1;

  @media ${device.md} {
  }

  @media ${device.sm} {
    width: 700px;
    right: -350px;
  }

  @media ${device.xs} {
    right: -200px;
  }
`;
