import styled, { css } from "styled-components";
import { device } from "../../constants/breakpoints";

export const Navigation = styled.ul<{
  isHidden: boolean;
  isScrolling: boolean;
  isMobileNavOpen: boolean;
}>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  /* background: ${({ isScrolling, isMobileNavOpen }) =>
    isScrolling && !isMobileNavOpen ? "rgba(255,255,255,0.8)" : "none"}; */
  top: 0px;
  width: 100%;
  z-index: 102;
  transition: transform 0.6s ease-in-out;
  padding: 40px 60px;

  ${({ isHidden }) =>
    isHidden &&
    css`
      transform: translateY(-100%);
    `}

  @media ${device.sm} {
    padding: 40px 60px;
  }
`;

export const NavItemContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const NavItemSpan = styled.span`
  font-size: 20px;
  font-family: "handjet-regular";
  text-transform: uppercase;
  cursor: pointer;
  color: #000;

  &:hover {
    color: #ffcd00;
  }
`;

export const NavLogoSpan = styled.span`
  font-size: 20px;
  font-family: "handjet-regular";
  text-transform: uppercase;
  cursor: pointer;
  color: #000;
  z-index: 101;
`;
