import {
  Navigation,
  NavItemContainer,
  NavItemSpan,
  NavLogoSpan,
} from "./header-nav.styled";
import { Link, animateScroll as scroll } from "react-scroll";
import { useEffect, useState } from "react";

export const HeaderNav = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const scrollStatus = () => {
      setIsScrolling(window.scrollY >= 0);
    };
    scrollStatus();
  }, []);

  return (
    <>
      <Navigation>
        <NavLogoSpan>
          <Link spy={true} smooth={true} duration={500} to="home-page">
            Lurry
          </Link>
        </NavLogoSpan>
        <NavItemContainer>
          <NavItemSpan>
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              duration={500}
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
              duration={500}
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
              duration={500}
              to="footer-page"
            >
              community
            </Link>
          </NavItemSpan>
        </NavItemContainer>
      </Navigation>
    </>
  );
};
