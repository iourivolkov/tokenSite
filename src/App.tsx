import { HeaderNav } from "./components/header-nav/header-nav.component";
import { FooterContainer } from "./containers/footer/footer.component";
import { HeroContainer } from "./containers/hero/hero.component";
import { LandingComponent } from "./containers/landing/landing.component";
import { TokenomicsContainer } from "./containers/tokenomics/tokenomics.component";
import MobileNav from "./components/mobile-nav/mobile-nav.component";

// @TODO - check if screen size is = mobile, if yes -> display mobile nav

// @TODO - if screen size !== mobile (tablet or desktop) -> display header nav

function App() {
  return (
    <>
      <MobileNav />
      <HeaderNav />
      <LandingComponent />
      <HeroContainer />
      <TokenomicsContainer />
      <FooterContainer />
    </>
  );
}

export default App;
