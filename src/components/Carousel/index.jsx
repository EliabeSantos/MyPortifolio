import React from "react";
import { Carousel } from "react-responsive-carousel";
import { ItemContainer, ItemImg } from "./style";
const vw = Math.max(
  document.documentElement.clientWidth || 0,
  window.innerWidth || 0
);

const teste = () => {
  if (vw <= 600) {
    return vw / 1.5;
  }
  return vw / 2;
};

export default () => (
  <Carousel
    autoPlay
    centerMode={true}
    width={teste()}
    infiniteLoop={true}
    showStatus={false}
  >
    <ItemContainer>
      <ItemImg alt="" src="https://picsum.photos/1200/1200" />
      <p className="legend">Lig-4</p>
    </ItemContainer>
    <ItemContainer>
      <ItemImg alt="" src="https://picsum.photos/1200/1200" />
      <p className="legend">Kenzie Hub</p>
    </ItemContainer>
    <ItemContainer>
      <ItemImg alt="" src="https://picsum.photos/1200/1200" />
      <p className="legend">Easy Wash</p>
    </ItemContainer>
    <ItemContainer>
      <ItemImg alt="" src="https://picsum.photos/1200/1200" />
      <p className="legend">Legend 4</p>
    </ItemContainer>
  </Carousel>
);
