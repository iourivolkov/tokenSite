import { SectionTitle } from "../../components/section-title/section-title.component";
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
} from "./footer.styled";

const FooterText = {
  heading: "Lurry-frens",
  subheading: "Come join the flock, or whatever a pack of ducks is called",
  xButton: "X",
  tgButton: "Tg",
  FooterText: "Powered by LurryLabs",
};

// @TODO - add social link for telegram group

export const FooterContainer = () => {
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
          <SocialButton>{FooterText.xButton}</SocialButton>
        </a>
        <a target="_blank" href="https://t.me/lurrylabs">
          <SocialButton>{FooterText.tgButton}</SocialButton>
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
