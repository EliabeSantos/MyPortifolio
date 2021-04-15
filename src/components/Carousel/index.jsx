import React from "react";
import { Carousel } from "react-responsive-carousel";
import { ItemContainer, ItemImg } from "./style";
import Project01 from "../../Images/Project_01.svg";
import Project02 from "../../Images/Project_02.svg";
import Project03 from "../../Images/Project_03.svg";

const vw = Math.max(
  document.documentElement.clientWidth || 0,
  window.innerWidth || 0
);

const teste = () => {
  if (vw <= 600) {
    return vw - 20;
  }
  return vw / 2;
};

const CarouselFunc = () => (
  <Carousel
    autoPlay
    centerMode={true}
    width={teste()}
    infiniteLoop={true}
    showStatus={false}
    showThumbs={false}
  >
    <ItemContainer>
      <ItemImg alt="" src={Project01} />
      <a
        className="legend"
        target="_blank"
        rel="noreferrer"
        href="https://easy-wash.vercel.app/"
        showThumbs={false}
      >
        Easy Wash
      </a>
    </ItemContainer>
    <ItemContainer>
      <ItemImg alt="" src={Project02} />
      <a
        target="_blank"
        rel="noreferrer"
        href="https://kenziehubmaster.vercel.app/"
        className="legend"
        showThumbs={false}
      >
        Kenzie Hub
      </a>
    </ItemContainer>
    <ItemContainer>
      <ItemImg alt="" src={Project03} />
      <a
        target="_blank"
        rel="noreferrer"
        href="https://lig-4-tau.vercel.app/"
        className="legend"
        showThumbs={false}
      >
        Lig-4
      </a>
    </ItemContainer>
  </Carousel>
);

export default CarouselFunc;
