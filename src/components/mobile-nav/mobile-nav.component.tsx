import { MobileNavContainer, MobileNavMenuItem } from "./mobile-nav.styled";
import { Link } from "react-scroll";
import { useEffect } from "react";

import useSound from "use-sound";
import quack from "../../assets/sounds/quackTrimmed.mp3";
import { LanguageSelector } from "../language-seletor/language-seletor-mobile.component";
import { useTranslation } from "react-i18next";

interface MobileNavProps {
  setIsMobileNavOpen: (value: boolean) => void;
  isMobileNavOpen: boolean;
}

const MobileNav = ({ setIsMobileNavOpen, isMobileNavOpen }: MobileNavProps) => {
  const [playQuack] = useSound(quack);
  const { t } = useTranslation();

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
    playQuack();
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
          {t("nav.about")}
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
          {t("nav.tokenomics")}
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
          {t("nav.community")}
        </Link>
      </MobileNavMenuItem>
      <MobileNavMenuItem>
        <LanguageSelector />
      </MobileNavMenuItem>
    </MobileNavContainer>
  );
};

export default MobileNav;
