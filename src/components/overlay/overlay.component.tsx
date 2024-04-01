import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import styled, { css } from "styled-components";
import useSound from "use-sound";
import quack from "../../assets/sounds/quackTrimmed.mp3";
import bgMusic from "../../assets/sounds/lurryBgMusic.mp3";
import { LanguageSelector } from "../language-seletor/language-seletor.component";

const INITIAL_OPACITY = 0.1;

function isMobileBrowser() {
  const mobileRegex =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  return mobileRegex.test(navigator.userAgent);
}

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

  return (
    <>
      <OverlayWrapper $fadeOut={fadeOut}>
        <OverlayImage opacity={opacity}>
          <EarthImg src="assets/Earth.png" alt="earth" />
          <LurdoniaImg src="assets/Lurdonia.png" alt="lurdonia" />
        </OverlayImage>
        <LangSelectorWrapper>
          <LanguageSelector color="white" withBackground />
        </LangSelectorWrapper>
        <OverlayTextWrapper opacity={opacity} onClick={handleClick}>
          <OverlayHeading>
            {isMobileBrowser()
              ? t("landingOverlay.headingActionTouch")
              : t("landingOverlay.headingActionClick")}{" "}
            {t("landingOverlay.heading")}
          </OverlayHeading>
          <OverlayText>
            {t("landingOverlay.subheading")}{" "}
            {isMobileBrowser()
              ? t("landingOverlay.subheadingActionTouch")
              : t("landingOverlay.subheadingActionClick")}{" "}
            {t("landingOverlay.subheading2")}
          </OverlayText>
        </OverlayTextWrapper>
      </OverlayWrapper>
    </>
  );
}

const LangSelectorWrapper = styled.div`
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

const OverlayWrapper = styled.div<{ $fadeOut: boolean }>`
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

const OverlayImage = styled.div<{ opacity: number }>`
  background-image: url("assets/Sky.png");
  opacity: ${({ opacity }) => opacity};
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
`;

const LurdoniaImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  min-width: 750px;

  @media (min-width: 596px) {
    max-width: 1500px;
    width: 100vw;
  }
`;

const EarthImg = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  min-width: 450px;

  @media (min-width: 596px) {
    max-width: 1200px;
    width: 100vw;
  }
`;

const OverlayTextWrapper = styled.div<{ opacity: number }>`
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

const OverlayText = styled.span`
  font-family: "handjet-regular";
  max-width: 500px;
  font-size: 24px;

  @media (min-width: 596px) {
    font-size: 32px;
    max-width: 1000px;
  }
`;

const OverlayHeading = styled(OverlayText)`
  font-size: 30px;
  font-family: "handjet-bold";

  @media (min-width: 596px) {
    font-size: 40px;
  }
`;
