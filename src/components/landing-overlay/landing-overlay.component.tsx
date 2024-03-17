import {
  OverlayContainer,
  OverlayHeading,
  OverlaySubheading,
} from "./landing-overlay.styled";

import { useState } from "react";

const LandingOverlay = () => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  function handleCloseOverlay() {
    setFadeOut(true);
    setTimeout(() => {
      setIsOverlayOpen(false);
    }, 1000);
  }

  return (
    <>
      {isOverlayOpen && (
        <OverlayContainer fadeOut={fadeOut}>
          <OverlayHeading onClick={handleCloseOverlay}>Quack!</OverlayHeading>
          <OverlaySubheading>
            It means "press the button" in duckspeak...duh
          </OverlaySubheading>
        </OverlayContainer>
      )}
    </>
  );
};

export default LandingOverlay;
