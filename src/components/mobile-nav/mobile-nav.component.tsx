import {
  MobileNavContainer,
  MobileNavMenuItem,
  MobileNavOpen,
  MobileNavClose,
} from "./mobile-nav.styled";
import { Link } from "react-scroll";

// @TODO - close mobile nav when nav item is clicked

const MobileNav = () => {
  return (
    <MobileNavContainer>
      <MobileNavClose></MobileNavClose>
      <MobileNavMenuItem>
        <Link
          activeClass="active"
          spy={true}
          smooth={true}
          duration={100}
          to="hero-page"
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
        >
          community
        </Link>
      </MobileNavMenuItem>
    </MobileNavContainer>
  );
};

export default MobileNav;
