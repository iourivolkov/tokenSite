import {
  Heading,
  Subheading,
  FooterPageContainer,
  SocialButton,
  SocialButtonContainer,
  FooterSea,
  OgLurry,
  OgLurrySmol1,
  FooterText2,
} from "./styled";
import Link from "next/link";

const FooterText = {
  heading: "Lurry-frens",
  subheading: "Come join the flock, or whatever a pack of ducks is called",
  xButton: "X",
  tgButton: "Tg",
  FooterText: "Powered by LurryLabs",
};

// @TODO - complete footer component w/ gradient & assets
// @TODO - add social link for telegram group

const FooterPage = () => {
  return (
    <FooterPageContainer>
      <OgLurry src="/assets/originalLurry.png" />
      <OgLurrySmol1 src="/assets/originalLurry.png" />
      <Heading>{FooterText.heading}</Heading>
      <Subheading>{FooterText.subheading}</Subheading>
      <SocialButtonContainer>
        <Link target="_blank" href="https://twitter.com/lurrytheduck">
          <SocialButton>{FooterText.xButton}</SocialButton>
        </Link>
        <Link target="_blank" href="">
          <SocialButton>{FooterText.tgButton}</SocialButton>
        </Link>
      </SocialButtonContainer>
      <FooterSea>
        <FooterText2>Powered by LurryLabs</FooterText2>
      </FooterSea>
    </FooterPageContainer>
  );
};

export default FooterPage;
