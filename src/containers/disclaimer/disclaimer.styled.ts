import styled from "styled-components";

import { SectionTitle } from "../../components/section-title/section-title.component";
import { device } from "../../constants/breakpoints";

// STYLES
export const LorePageContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding-block: 200px;

  @media ${device.md} {
    padding-top: 0px;
  }
`;

export const Heading = styled(SectionTitle)``;

export const Subheading = styled.p`
  font-family: "handjet-regular";
  font-size: 20px;
  color: #000;
`;

export const Text = styled.p`
  font-family: "handjet-regular";
  font-size: 48px;
  color: #000;
  margin-top: 50px;
  text-align: center;
  width: 40ch;

  @media ${device.md} {
    font-size: 32px;
    width: 80%;
  }
`;
