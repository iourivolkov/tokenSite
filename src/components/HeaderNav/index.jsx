import { Navigation, NavItemContainer, NavItemSpan } from "./styled";

import Link from "next/link";

const HeaderNav = () => {
  // useEffect(() => {
  //   const scrollStatus = () => {
  //     setIsScrolling(window.scrollY >= 20);
  //   };
  // }, []);
  // function scrollToTop() {
  //   window.scroll({ top: 0, behavior: "smooth" });
  // }

  return (
    <>
      <Navigation>
        <NavItemSpan>
          <Link href="#home-page">Lurry</Link>
        </NavItemSpan>
        <NavItemContainer>
          <NavItemSpan>
            <Link href="#hero-page">about</Link>
          </NavItemSpan>
          <NavItemSpan>
            <Link href="#tokenomics-page">tokenomics</Link>
          </NavItemSpan>
          <NavItemSpan>
            <Link href="#footer-page">community</Link>
          </NavItemSpan>
        </NavItemContainer>
      </Navigation>
    </>
  );
};

export default HeaderNav;
