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
import { useTranslation } from "react-i18next";

export const FooterContainer = () => {
  const [playQuack] = useSound(quack);
  const { logEvent } = useAnalytics();
  const { t } = useTranslation();

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

      <Heading>{t("footer.heading")}</Heading>
      <Subheading>{t("footer.subheading")}</Subheading>

      <SocialButtonContainer>
        <SocialButton
          target="_blank"
          href={data.twitterLink}
          onClick={() => handleClick("twitter")}
        >
          X
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
          Tg
        </SocialButton>
      </SocialButtonContainer>
      <FooterBottomContainer>
        <FooterBottomText>{t("footer.footerText")}</FooterBottomText>
        <FooterBottomText>{t("footer.copyright")}</FooterBottomText>
        <FooterBottomText>{t("footer.email")}</FooterBottomText>
      </FooterBottomContainer>
    </FooterPageContainer>
  );
};
