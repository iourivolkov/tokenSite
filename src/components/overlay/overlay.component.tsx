import { useState, useRef, useEffect } from "react";
import background from "../../assets/LurryRoadmap.png";
import styled from "styled-components";

const INITIAL_OPACITY = 0.1;

export function Overlay() {
  const [opacity, setOpacity] = useState(INITIAL_OPACITY);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const animationStarted = opacity >= 1;

  const handleMouseEnter = () => {
    if (animationStarted) return;

    timerRef.current = setInterval(() => {
      setOpacity((prev) => prev + 0.01);
    }, 20);
  };

  if (animationStarted) {
    clearInterval(timerRef.current!);
  }

  useEffect(() => {
    return () => {
      clearInterval(timerRef.current!);
    };
  }, []);

  return (
    <OverlayWrapper onMouseEnter={handleMouseEnter}>
      <OverlayImage opacity={opacity}></OverlayImage>
      <OverlayTextWrapper opacity={opacity}>
        <h1>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium
          ab fuga repellat modi voluptas eaque, mollitia quaerat odit asperiores
          voluptate a optio vero tenetur quo sit. Quibusdam veniam dolorem
          aliquam.
        </h1>
      </OverlayTextWrapper>
    </OverlayWrapper>
  );
}

const OverlayWrapper = styled.div`
  background-color: black;
  height: 100dvh;
  width: 100dvw;
  position: relative;
`;

const OverlayImage = styled.div.attrs<{ opacity: number }>(() => ({
  style: {
    backgroundImage: background,
  },
}))`
  background-image: url(${background});
  opacity: ${({ opacity }) => opacity};
  height: 100%;
  width: 100%;
`;

const OverlayTextWrapper = styled.div<{ opacity: number }>`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 1;
  display: flex;
  place-items: center;
  text-align: center;
  opacity: 1 - ${({ opacity }) => opacity};
  color: white;
  padding-inline: 100px;
`;
