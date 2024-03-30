import {
  Navigation,
  NavItemContainer,
  NavItemSpan,
  NavLogoSpan,
} from "./header-nav.styled";
import { Link } from "react-scroll";
import { useState, useEffect } from "react";
import { MobileNavOpen } from "../mobile-nav/mobile-nav.styled";
import MobileNav from "../mobile-nav/mobile-nav.component";

import useSound from "use-sound";
import quack from "../../assets/sounds/quackTrimmed.mp3";
import { LanguageSelector } from "../language-seletor/language-seletor.component";

export const HeaderNav = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const [playQuack] = useSound(quack);

  useEffect(() => {
    const scrollStatus = () => {
      setIsScrolling(window.scrollY > 10);
    };

    window.addEventListener("scroll", scrollStatus);

    return () => {
      window.removeEventListener("scroll", scrollStatus);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function openMobileNav() {
    playQuack();
    setIsMobileNavOpen(true);
  }

  function closeMobileNav() {
    playQuack();
    setIsMobileNavOpen(false);
  }

  function handleQuack() {
    playQuack();
  }

  return (
    <>
      <Navigation
        $isHidden={!isScrolling}
        $isScrolling={isScrolling}
        $isMobileNavOpen={isMobileNavOpen}
      >
        <NavLogoSpan>
          <Link
            spy={true}
            smooth={true}
            duration={100}
            to="home-page"
            onClick={closeMobileNav}
          >
            Lurry
          </Link>
        </NavLogoSpan>
        {!isMobileView && (
          <NavItemContainer>
            <NavItemSpan>
              <Link
                activeClass="active"
                spy={true}
                smooth={true}
                duration={100}
                to="hero-page"
                onClick={handleQuack}
              >
                about
              </Link>
            </NavItemSpan>
            <NavItemSpan>
              <Link
                activeClass="active"
                spy={true}
                smooth={true}
                duration={100}
                to="tokenomics-page"
                onClick={handleQuack}
              >
                tokenomics
              </Link>
            </NavItemSpan>
            <NavItemSpan>
              <Link
                activeClass="active"
                spy={true}
                smooth={true}
                duration={100}
                to="footer-page"
                onClick={handleQuack}
              >
                community
              </Link>
            </NavItemSpan>
            <NavItemSpan>
              <LanguageSelector />
            </NavItemSpan>
          </NavItemContainer>
        )}

        {isMobileView && (
          <MobileNavOpen
            onClick={() =>
              isMobileNavOpen ? closeMobileNav() : openMobileNav()
            }
          >
            {isMobileNavOpen ? "Close" : "Menu"}
          </MobileNavOpen>
        )}
      </Navigation>

      {isMobileNavOpen && (
        <MobileNav
          setIsMobileNavOpen={setIsMobileNavOpen}
          isMobileNavOpen={isMobileNavOpen}
        />
      )}
    </>
  );
};
