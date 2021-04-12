import React from "react";
import { Carousel } from "react-responsive-carousel";
import { ItemContainer, ItemImg } from "./style";

export default () => (
  <Carousel autoPlay centerMode={true} width={500} infiniteLoop={true}>
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
