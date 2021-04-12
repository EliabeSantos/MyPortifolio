import { HeaderContainer, Titles, MenuOptions } from "./style";
import animateScrollTo from "animated-scroll-to";

const Header = () => {
  const vh = Math.max(
    document.documentElement.clientHeight || 0,
    window.innerHeight || 0
  );
  const scroll1 = () => {
    animateScrollTo(0).then((hasScrolledToPosition) => {
      if (hasScrolledToPosition) {
        // page is scrolled to a desired position
      }
    });
  };
  const scroll2 = () => {
    animateScrollTo(vh).then((hasScrolledToPosition) => {
      if (hasScrolledToPosition) {
        // page is scrolled to a desired position
      }
    });
  };
  const scroll3 = () => {
    animateScrollTo(vh * 2).then((hasScrolledToPosition) => {
      if (hasScrolledToPosition) {
        // page is scrolled to a desired position
      }
    });
  };

  return (
    <>
      <HeaderContainer>
        <Titles>Eliabe</Titles>
        <MenuOptions onClick={scroll1}>Home</MenuOptions>
        <MenuOptions onClick={scroll2}>About</MenuOptions>
        <MenuOptions onClick={scroll3}>Resume</MenuOptions>
        <MenuOptions>Portifolio</MenuOptions>
      </HeaderContainer>
    </>
  );
};

export default Header;
