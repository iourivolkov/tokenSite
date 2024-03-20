import { MobileNavContainer, MobileNavMenuItem } from "./mobile-nav.styled";
import { Link } from "react-scroll";
import { useEffect } from "react";

const MobileNav = ({ setIsMobileNavOpen, isMobileNavOpen }: any) => {
  useEffect(() => {
    const handleBodyOverflow = () => {
      if (isMobileNavOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    };

    handleBodyOverflow();

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileNavOpen]);

  function closeMobileNav() {
    setIsMobileNavOpen(false);
  }

  return (
    <MobileNavContainer>
      <MobileNavMenuItem>
        <Link
          activeClass="active"
          spy={true}
          smooth={true}
          duration={100}
          to="hero-page"
          onClick={closeMobileNav}
        >
          about
        </Link>
      </MobileNavMenuItem>
      <MobileNavMenuItem>
        <Link
          activeClass="active"
          spy={true}
          smooth={true}
          duration={100}
          to="tokenomics-page"
          onClick={closeMobileNav}
        >
          tokenomics
        </Link>
      </MobileNavMenuItem>
      <MobileNavMenuItem>
        <Link
          activeClass="active"
          spy={true}
          smooth={true}
          duration={100}
          to="footer-page"
          onClick={closeMobileNav}
        >
          community
        </Link>
      </MobileNavMenuItem>
    </MobileNavContainer>
  );
};

export default MobileNav;
