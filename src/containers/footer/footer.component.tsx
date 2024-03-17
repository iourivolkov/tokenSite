import {
  Heading,
  Subheading,
  FooterPageContainer,
  SocialButton,
  SocialButtonContainer,
  //   FooterSea,
  //   OgLurry,
  //   OgLurrySmol1,
  //   FooterText2,
  FooterPageTextContainer,
  IceLurryImage,
  FurryLurryImage,
  FurryLurryQuote,
  YetiLurryQuote,
} from "./footer.styled";

const FooterText = {
  heading: "Lurry-frens",
  subheading: "Come join the flock, or whatever a pack of ducks is called",
  xButton: "X",
  tgButton: "Tg",
  FooterText: "Powered by LurryLabs",
};

// @TODO - complete footer component w/ gradient & assets
// @TODO - add social link for telegram group

export const FooterContainer = () => {
  return (
    <FooterPageContainer id="footer-page">
      <FooterPageTextContainer>
        <FurryLurryQuote>wagmi?</FurryLurryQuote>
        <YetiLurryQuote>no cap fr fr</YetiLurryQuote>
        <IceLurryImage src="/assets/yetiLurry.png" />
        <FurryLurryImage src="/assets/furryLurry.png" />
        <Heading>{FooterText.heading}</Heading>
        <Subheading>{FooterText.subheading}</Subheading>
        <SocialButtonContainer>
          <a target="_blank" href="https://twitter.com/lurrytheduck">
            <SocialButton>{FooterText.xButton}</SocialButton>
          </a>
          <a target="_blank" href="">
            <SocialButton>{FooterText.tgButton}</SocialButton>
          </a>
        </SocialButtonContainer>
      </FooterPageTextContainer>
    </FooterPageContainer>
  );
};
