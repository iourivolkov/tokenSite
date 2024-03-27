import {
  Heading,
  Subheading,
  Text,
  LorePageContainer,
  LurryImage,
} from "./hero.styled";

const HeroPageText = {
  heading: "Lurry-lore",
  subheading: "All about Lurry's not-so-dramatic past",
  paragraph: `On the planet of Lurdonia, a group of scientists engineered an army of mutated rubber ducks, they primed for Galactic conquest.  

    Yet, the Lurry's wanted no part in global conquest, and were desperate to escape. 
    
    The Lurry's devised a plan to leave the planet of Lurdonia and travel by spaceship to earth. But there was a problem, the Lurry's had no money to build a ship - until they discovered crypto... 
    `,
};

export const HeroContainer = () => {
  return (
    <LorePageContainer id="hero-page">
      <LurryImage src="/assets/susLurry.png" />

      <Heading>{HeroPageText.heading}</Heading>
      <Subheading>{HeroPageText.subheading}</Subheading>
      <Text>{HeroPageText.paragraph}</Text>
    </LorePageContainer>
  );
};
