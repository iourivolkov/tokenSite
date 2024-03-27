import {
  LorePageContainer,
  Heading,
  Subheading,
  Text,
} from "./disclaimer.styled.ts";

export const DisclaimerContainer = () => {
  return (
    <LorePageContainer>
      <Heading>Disclaimer</Heading>
      <Subheading>Lurry can't read, but you should.</Subheading>
      <Text>
        $Lurry was created by lab-engineered rubber ducks who have no knowledge
        of economics or monetary systems. As such, $lurry has no value and is a
        meme coin meant for entertainment purposes only. Do not risk money you
        are afraid of losing. Just like a Lurry bobbing in the pond, the price
        may go up or it may go down. We take no responsibility for the price
        action.
      </Text>
    </LorePageContainer>
  );
};
