import {
  LorePageContainer,
  Heading,
  Subheading,
  Text,
} from "./disclaimer.styled.ts";

const disclaimerText = {
  heading: "Disclaimer",
  subheading: "Lurry didn't read, but you should.",
  bodyText: `$Lurry was created by lab-engineered rubber ducks who have no knowledge of economics or monetary systems. As such, $Lurry has no value and is a meme coin meant for entertainment purposes only. Do not risk money you are afraid of losing. Just like a duck bobbing in the water, the price may go up or it may go down. We take no responsibility for the price action. `,
};

export const DisclaimerContainer = () => {
  return (
    <LorePageContainer>
      <Heading>{disclaimerText.heading}</Heading>
      <Subheading>{disclaimerText.subheading}</Subheading>
      <Text>{disclaimerText.bodyText}</Text>
    </LorePageContainer>
  );
};
