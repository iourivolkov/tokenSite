import styled, { css } from "styled-components";

export const LangSelectorWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100px;
  top: 0;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  padding-right: 20px;
  padding-top: 20px;
  z-index: 10000;
  background-color: transparent;
`;

export const OverlayWrapper = styled.div<{ $fadeOut: boolean }>`
  background-color: black;
  height: 100dvh;
  width: 100dvw;
  position: fixed;
  top: 0;
  z-index: 100;
  transition: opacity 1s ease;

  ${(props) =>
    props.$fadeOut &&
    css`
      opacity: 0;
    `}
`;

export const OverlayVideo = styled.video<{ opacity: number }>`
  opacity: ${({ opacity }) => opacity};
  height: 1000px;
  width: 2000px;
  position: relative;
`;

export const OverlayTextWrapper = styled.div<{ opacity: number }>`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  opacity: ${({ opacity }) => 1 - opacity};
  color: white;
  padding-inline: 50px;
  gap: 50px;
`;

export const OverlayText = styled.span`
  font-family: "handjet-regular";
  max-width: 500px;
  font-size: 24px;

  @media (min-width: 596px) {
    font-size: 32px;
    max-width: 1000px;
  }
`;

export const OverlayHeading = styled(OverlayText)`
  font-size: 30px;
  font-family: "handjet-bold";

  @media (min-width: 596px) {
    font-size: 40px;
  }
`;
