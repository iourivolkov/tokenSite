import { HeaderNav } from "./components/header-nav/header-nav.component";
import { FooterContainer } from "./containers/footer/footer.component";
import { HeroContainer } from "./containers/hero/hero.component";
import { LandingComponent } from "./containers/landing/landing.component";
import { TokenomicsContainer } from "./containers/tokenomics/tokenomics.component";

// @TODO - landing page -> add up/down /side to side animations for sun and clouds -> stop animations once user scrolls -> do parallax effect
// @TODO - custom cursor -> crayon? *optional*
// @TODO - community page -> adjust asset positions + create "dialogue" b/w lurries *optional*

function App() {
  return (
    <>
      {/* <HeaderNav /> */}
      {/* <LandingComponent /> */}
      <HeroContainer />
      <TokenomicsContainer />
      <FooterContainer />
    </>
  );
}

export default App;
