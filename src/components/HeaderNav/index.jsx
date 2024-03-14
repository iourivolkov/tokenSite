import {
  Navigation,
  NavigationItem,
  NavItemContainer,
  NavItemSpan,
} from "./styled";

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
        <NavigationItem>Lurry</NavigationItem>
        <NavItemContainer>
          <NavItemSpan>lurry lore</NavItemSpan>
          <NavItemSpan>lurrynomics</NavItemSpan>
          <NavItemSpan>lurry frens</NavItemSpan>
        </NavItemContainer>
      </Navigation>
    </>
  );
};

export default HeaderNav;
