import { HeaderNav } from "./components/header-nav/header-nav.component";
import { FooterContainer } from "./containers/footer/footer.component";
import { HeroContainer } from "./containers/hero/hero.component";
import { LandingComponent } from "./containers/landing/landing.component";
import { TokenomicsContainer } from "./containers/tokenomics/tokenomics.component";
import { DisclaimerContainer } from "./containers/disclaimer/disclaimer.component";

// import i18n (needs to be bundled ;))
import "./i18n";
import { Suspense } from "react";
import { Loader } from "./components/loader/loader.component";

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <HeaderNav />
      <LandingComponent />
      <DisclaimerContainer />
      <HeroContainer />
      <TokenomicsContainer />

      <FooterContainer />
    </Suspense>
  );
}

export default App;
