import styled from "styled-components";
import { device } from "../../constants/breakpoints";
import { SectionTitle } from "../../components/section-title/section-title.component";

export const FooterPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  margin-top: 200px;
`;

export const FooterQuotesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 50%;
  height: 100px;
  width: 100%;
  max-width: 1024px;

  @media ${device.xs} {
    gap: 50%;
  }
`;

export const FurryLurryQuote = styled.p`
  font-family: "handjet-regular";
  font-size: 28px;
  transform: rotate(30deg);

  @media ${device.md} {
  }

  @media ${device.xs} {
    font-size: 20px;
    bottom: 400px;
    left: 50px;
  }
`;

export const YetiLurryQuote = styled.p`
  font-family: "handjet-regular";
  font-size: 40px;
  transform: rotate(-30deg);

  @media ${device.md} {
  }

  @media ${device.xs} {
    font-size: 30px;
    bottom: 400px;
    right: 30px;
  }
`;

export const Heading = styled(SectionTitle)`
  margin-top: 70px;

  @media ${device.xs} {
    margin-top: 20px;
  }
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

export const FooterBottomContainer = styled.div`
  width: 100%;
  margin-top: 200px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  padding: 40px 60px;

  @media ${device.xs} {
    flex-direction: column;
    gap: 5px;
    margin-top: 100px;
  }
`;

export const FooterBottomText = styled.p`
  font-family: "handjet-regular";
  font-size: 18px;
  color: #000;

  @media ${device.xs} {
    font-size: 14px;

    &:first-child,
    &:last-child {
      display: none;
    }
  }
`;

export const IceLurryImage = styled.img`
  position: absolute;
  transform: rotate(40deg) scaleX(-1);
  width: 800px;
  left: -350px;
  z-index: -1;

  @media ${device.md} {
  }

  @media ${device.sm} {
    width: 700px;
    left: -300px;
  }

  @media ${device.xs} {
    left: -200px;
  }
`;

export const FurryLurryImage = styled.img`
  position: absolute;
  transform: rotate(-34deg);
  width: 800px;
  right: -380px;
  z-index: -1;

  @media ${device.md} {
  }

  @media ${device.sm} {
    width: 700px;
    right: -300px;
  }

  @media ${device.xs} {
    right: -200px;
  }
`;
