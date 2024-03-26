import { HeaderNav } from "./components/header-nav/header-nav.component";
import { FooterContainer } from "./containers/footer/footer.component";
import { HeroContainer } from "./containers/hero/hero.component";
import { LandingComponent } from "./containers/landing/landing.component";
import { TokenomicsContainer } from "./containers/tokenomics/tokenomics.component";
import { DisclaimerContainer } from "./containers/disclaimer/disclaimer.component";

function App() {
  return (
    <>
      <HeaderNav />
      <LandingComponent />
      <DisclaimerContainer />
      <HeroContainer />
      <TokenomicsContainer />

      <FooterContainer />
    </>
  );
}

export default App;
