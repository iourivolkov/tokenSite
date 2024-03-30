import { useTranslation } from "react-i18next";
import {
  Heading,
  Subheading,
  Text,
  LorePageContainer,
  LurryImage,
} from "./hero.styled";

export const HeroContainer = () => {
  const { t } = useTranslation();

  return (
    <LorePageContainer id="hero-page">
      <LurryImage src="/assets/susLurry.png" />

      <Heading>{t("hero.heading")}</Heading>
      <Subheading>{t("hero.subheading")}</Subheading>
      <Text>{t("hero.bodyText")}</Text>
    </LorePageContainer>
  );
};
