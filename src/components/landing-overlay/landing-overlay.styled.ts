import styled, { css } from "styled-components";

export const OverlayContainer = styled.div<{ fadeOut: boolean }>`
  background: #ffcd00;
  opacity: 1;
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 100;
  transition: opacity 1s ease; /* Adjust timing as needed */

  ${(props) =>
    props.fadeOut &&
    css`
      opacity: 0;
    `}
`;

export const OverlayHeading = styled.button`
  font-family: "handjet-bold";
  font-size: 200px;
  border: none;
  background: none;
  cursor: pointer;

  &:hover {
    color: #fff;
  }
`;

export const OverlaySubheading = styled.p`
  font-family: "handjet-regular";
  font-size: 24px;
`;
