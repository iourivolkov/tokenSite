import {
  Heading,
  Subheading,
  Text,
  HeroPageContainer,
  ToobieAccessory,
  AquariumAccessory,
  OrangeFishAccessory,
  BananaHatAccessory,
  IcecreamAccessory,
} from "./styled";

const HeroPageText = {
  heading: "Lurry-lore",
  subheading: "All about Lurry's not-so-dramatic past",
  paragraph:
    "Lurry was a simple duck until one day, he discovered crypto twitter. Since then, Lurry spent all his days thinking about meme coins. Instead of quacking, he started saying things like 'wagmi' and calling other ducks 'poors'. Lurry was never the same since. ",
};

// @TODO - rotate and position elements across the page
// @TODO - adjust z-index, opacity,blur, size of each element to create 3d effect

const HeroPage = () => {
  return (
    <>
      <BananaHatAccessory src="/assets/bananaHat.png" />
      <IcecreamAccessory src="/assets/iceCream.png" />
      <AquariumAccessory src="/assets/fishBowl.png" />
      <ToobieAccessory src="/assets/bananaToobie.png" />
      <OrangeFishAccessory src="/assets/orangeFish.png" />
      <HeroPageContainer>
        <Heading>{HeroPageText.heading}</Heading>
        <Subheading>{HeroPageText.subheading}</Subheading>
        <Text>{HeroPageText.paragraph}</Text>
      </HeroPageContainer>
    </>
  );
};

export default HeroPage;
