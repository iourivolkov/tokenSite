import {
  Navigation,
  NavItemContainer,
  NavItemSpan,
  NavLogoSpan,
} from "./header-nav.styled";
import { Link } from "react-scroll";
import { useState, useEffect } from "react";
import { MobileNavClose, MobileNavOpen } from "../mobile-nav/mobile-nav.styled";
import MobileNav from "../mobile-nav/mobile-nav.component";

export const HeaderNav = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

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
    setIsMobileNavOpen(true);
  }

  function closeMobileNav() {
    setIsMobileNavOpen(false);
  }

  return (
    <>
      <Navigation
        isHidden={!isScrolling}
        isScrolling={isScrolling}
        isMobileNavOpen={isMobileNavOpen}
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
        {!isMobileView ? (
          <NavItemContainer>
            <NavItemSpan>
              <Link
                activeClass="active"
                spy={true}
                smooth={true}
                duration={100}
                to="hero-page"
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
              >
                community
              </Link>
            </NavItemSpan>
          </NavItemContainer>
        ) : !isMobileNavOpen ? (
          <MobileNavOpen onClick={openMobileNav}>Menu</MobileNavOpen>
        ) : (
          <MobileNavClose onClick={closeMobileNav}>Close</MobileNavClose>
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
