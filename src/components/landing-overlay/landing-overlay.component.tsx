import {
  OverlayContainer,
  OverlayHeading,
  OverlaySubheading,
} from "./landing-overlay.styled";

import { useState } from "react";

const LandingOverlay = () => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(true);

  function handleCloseOverlay() {
    setIsOverlayOpen(false);
  }

  return (
    <>
      {isOverlayOpen && (
        <OverlayContainer>
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
