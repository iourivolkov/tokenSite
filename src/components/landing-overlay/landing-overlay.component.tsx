import {
  OverlayContainer,
  OverlayHeading,
  OverlaySubheading,
} from "./landing-overlay.styled";

import { useState, useEffect } from "react";

// @ts-expect-error - pkg doesn't have types
import useSound from "use-sound";
import quack from "../../assets/sounds/quackTrimmed.mp3";
import bgMusic from "../../assets/sounds/lurryBgMusic.mp3";

const LandingOverlay = () => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  const [playQuack] = useSound(quack);
  const [playBg] = useSound(bgMusic, {
    volume: 0.2,
    duration: 5000,
  });

  useEffect(() => {
    if (isOverlayOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOverlayOpen]);

  function handleCloseOverlay() {
    playQuack();
    playBg();
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
            It means "click" in duckspeak...duh
          </OverlaySubheading>
        </OverlayContainer>
      )}
    </>
  );
};

export default LandingOverlay;
