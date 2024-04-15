import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import useSound from "use-sound";
import quack from "../../assets/sounds/quackTrimmed.mp3";
import bgMusic from "../../assets/sounds/lurryBgMusic.mp3";
import { LanguageSelector } from "../language-seletor/language-seletor.component";
import {
  LangSelectorWrapper,
  OverlayWrapper,
  OverlayVideo,
  OverlayTextWrapper,
  OverlayText,
  OverlayHeading,
} from "./overlay.styled";

import lurryVideo from "../../../public/assets/lurryNYAd.mp4";

const INITIAL_OPACITY = 0.1;

// function isMobileBrowser() {
//   const mobileRegex =
//     /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
//   return mobileRegex.test(navigator.userAgent);
// }

export function Overlay() {
  const [opacity, setOpacity] = useState(INITIAL_OPACITY);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const [fadeOut, setFadeOut] = useState(false);
  const [isOverlayOpen, setIsOverlayOpen] = useState(true);
  const { t } = useTranslation();

  const [playQuack] = useSound(quack);
  const [playBg] = useSound(bgMusic, {
    volume: 0.2,
    duration: 5000,
  });

  const animationStarted = opacity > INITIAL_OPACITY;
  const animationEnded = opacity >= 1;

  const handleClick = () => {
    if (!animationStarted) {
      playBg();
    }

    playQuack();
    if (animationStarted) {
      setFadeOut(true);
      setTimeout(() => {
        setIsOverlayOpen(false);
      }, 1000);

      return;
    }

    timerRef.current = setInterval(() => {
      setOpacity((prev) => prev + 0.01);
    }, 20);
  };

  if (animationEnded) {
    clearInterval(timerRef.current!);
  }

  useEffect(() => {
    if (isOverlayOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOverlayOpen]);

  useEffect(() => {
    return () => {
      clearInterval(timerRef.current!);
    };
  }, []);

  if (!isOverlayOpen) return null;

  // const video = document.querySelector("video");

  // video?.addEventListener("ended", (event: any) => {
  //   setFadeOut(true);
  // });

  return (
    <>
      <OverlayWrapper $fadeOut={fadeOut}>
        <OverlayVideo opacity={opacity} autoPlay>
          <source src={lurryVideo} type="audio/mpeg" />
        </OverlayVideo>
        <LangSelectorWrapper>
          <LanguageSelector color="white" withBackground />
        </LangSelectorWrapper>
        <OverlayTextWrapper opacity={opacity} onClick={handleClick}>
          <OverlayHeading>
            {t("landingOverlay.heading")}
            {/* {isMobileBrowser()
              ? t("landingOverlay.headingActionTouch")
              : t("landingOverlay.headingActionClick")}{" "}
            {t("landingOverlay.heading")} */}
          </OverlayHeading>
          <OverlayText>
            {t("landingOverlay.subheading")}
            {/* {isMobileBrowser()
              ? t("landingOverlay.subheadingActionTouch")
              : t("landingOverlay.subheadingActionClick")}{" "}
            {t("landingOverlay.subheading2")} */}
          </OverlayText>
        </OverlayTextWrapper>
      </OverlayWrapper>
    </>
  );
}
