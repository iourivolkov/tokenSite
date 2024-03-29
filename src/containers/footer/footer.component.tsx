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

import dexTools from "../../../public/assets/dexTools.png";

import useSound from "use-sound";

import quack from "../../assets/sounds/quackTrimmed.mp3";

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

  function handleClick() {
    playQuack();
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
        <a target="_blank" href="https://twitter.com/lurrytheduck">
          <SocialButton onClick={handleClick}>
            {FooterText.xButton}
          </SocialButton>
        </a>
        <a
          target="_blank"
          href="https://www.dextools.io/app/en/solana/pair-explorer/b1jUX3eWHceJHpm2gAEF9iDHmxx5kMg2V2kpZ1CvmCf?t=1711687720365"
        >
          <SocialButton onClick={handleClick}>
            <DexToolsImage src={dexTools} />
          </SocialButton>
        </a>
        <a target="_blank" href="https://t.me/lurrylabs">
          <SocialButton onClick={handleClick}>
            {FooterText.tgButton}
          </SocialButton>
        </a>
      </SocialButtonContainer>
      <FooterBottomContainer>
        <FooterBottomText>Powered by Lurry Labs</FooterBottomText>
        <FooterBottomText>&copy; Copyright Lurry Labs</FooterBottomText>
        <FooterBottomText>lurrylabs@gmail.com</FooterBottomText>
      </FooterBottomContainer>
    </FooterPageContainer>
  );
};
