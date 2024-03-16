import {
  Heading,
  Subheading,
  Text,
  HeroPageContainer,
  LorePageContainer,
  LurryImage,
} from "./styled";

const HeroPageText = {
  heading: "Lurry-lore",
  subheading: "All about Lurry's not-so-dramatic past",
  paragraph:
    "Lurry was a simple duck until one day, he discovered crypto twitter. Since then, Lurry spent all his days thinking about meme coins. Instead of quacking, he started saying things like 'wagmi' and calling other ducks 'poors'. Lurry was never the same since. ",
};

// @TODO - adjust position of randomly dispered elements -> ideally, they should be fixed to the lore page component

const HeroPage = () => {
  return (
    <LorePageContainer id="hero-page">
      <LurryImage src="/assets/susLurry.png" />
      <HeroPageContainer>
        <Heading>{HeroPageText.heading}</Heading>
        <Subheading>{HeroPageText.subheading}</Subheading>
        <Text>{HeroPageText.paragraph}</Text>
      </HeroPageContainer>
    </LorePageContainer>
  );
};

export default HeroPage;
