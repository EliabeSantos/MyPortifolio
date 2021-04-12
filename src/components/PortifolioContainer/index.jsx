import { MainContainer, Title } from "./style";
import Carousel from "../Carousel/index";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const PortifolioContainer = () => {
  return (
    <>
      <MainContainer>
        <Title>My Portifolio</Title>
        <Carousel />
      </MainContainer>
    </>
  );
};
export default PortifolioContainer;
