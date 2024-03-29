import {
  Heading,
  Subheading,
  FooterPageContainer,
  SocialButton,
  SocialButtonContainer,
  IceLurryImage,
  FurryLurryImage,
  FurryLurryQuote,
  YetiLurryQuote,
  FooterQuotesContainer,
  FooterBottomContainer,
  FooterBottomText,
  DexToolsImage,
} from "./footer.styled";

import dexTools from "../../assets/dexTools.png";

import useSound from "use-sound";

import quack from "../../assets/sounds/quackTrimmed.mp3";
import { data } from "../../data";
import { useAnalytics } from "../../hooks/use-analytics";

const FooterText = {
  heading: "Lurry-frens",
  subheading: "Come join the flock, or whatever a pack of ducks is called",
  xButton: "X",
  tgButton: "Tg",
  FooterText: "Powered by LurryLabs",
};

// @TODO - add social link for telegram group

export const FooterContainer = () => {
  const [playQuack] = useSound(quack);
  const { logEvent } = useAnalytics();

  function handleClick(buttonName: string) {
    playQuack();
    logEvent(`click_${buttonName}`, {
      buttonName,
    });
  }

  return (
    <FooterPageContainer id="footer-page">
      <FooterQuotesContainer>
        <FurryLurryQuote>wagmi?</FurryLurryQuote>
        <YetiLurryQuote>no cap fr fr</YetiLurryQuote>
      </FooterQuotesContainer>

      <IceLurryImage src="/assets/yetiLurry.png" />
      <FurryLurryImage src="/assets/furryLurry.png" />

      <Heading>{FooterText.heading}</Heading>
      <Subheading>{FooterText.subheading}</Subheading>

      <SocialButtonContainer>
        <SocialButton
          target="_blank"
          href={data.twitterLink}
          onClick={() => handleClick("twitter")}
        >
          {FooterText.xButton}
        </SocialButton>
        <SocialButton
          target="_blank"
          href={data.dexToolsLink}
          onClick={() => handleClick("dextools")}
        >
          <DexToolsImage src={dexTools} />
        </SocialButton>
        <SocialButton
          target="_blank"
          href={data.telegramLink}
          onClick={() => handleClick("telegram")}
        >
          {FooterText.tgButton}
        </SocialButton>
      </SocialButtonContainer>
      <FooterBottomContainer>
        <FooterBottomText>Powered by Lurry Labs</FooterBottomText>
        <FooterBottomText>&copy; Copyright Lurry Labs</FooterBottomText>
        <FooterBottomText>lurrylabs@gmail.com</FooterBottomText>
      </FooterBottomContainer>
    </FooterPageContainer>
  );
};
