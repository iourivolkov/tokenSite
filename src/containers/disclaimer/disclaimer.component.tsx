import { useTranslation } from "react-i18next";
import {
  LorePageContainer,
  Heading,
  Subheading,
  Text,
} from "./disclaimer.styled.ts";

export const DisclaimerContainer = () => {
  const { t } = useTranslation();
  return (
    <LorePageContainer>
      <Heading>{t("disclaimer.heading")}</Heading>
      <Subheading>{t("disclaimer.subheading")}</Subheading>
      <Text>{t("disclaimer.bodyText")}</Text>
    </LorePageContainer>
  );
};
