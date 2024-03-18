import styled, { css } from "styled-components";

export const Navigation = styled.ul<{ isHidden: boolean }>`
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  align-items: center;
  position: fixed;
  top: 0px;
  width: 100%;
  z-index: 15;
  transition: transform 0.6s ease-in-out;

  ${({ isHidden }) =>
    isHidden &&
    css`
      transform: translateY(-100%);
    `}
`;

export const NavItemContainer = styled.div`
  display: flex;
  margin: 40px 60px 40px 60px;
`;

export const NavItemSpan = styled.span`
  font-size: 20px;
  font-family: "handjet-regular";
  margin: 0 10px 0 10px;
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
  margin: 0 60px 0 60px;
  text-transform: uppercase;
  cursor: pointer;
  color: #000;
`;
