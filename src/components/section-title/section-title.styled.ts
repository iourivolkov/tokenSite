import styled from "styled-components";
import { device } from "../../constants/breakpoints";

export const SectionTitleStyled = styled.h2`
  color: #000;
  font-family: "handjet-bold";
  font-size: 150px;

  @media ${device.md} {
    font-size: 150px;
  }

  @media ${device.sm} {
    font-size: 80px;
  }
`;
