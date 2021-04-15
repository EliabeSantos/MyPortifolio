import styled from "styled-components";

export const ItemContainer = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  overflow: hidden;

  a {
    text-decoration: none;
    :hover {
      cursor: pointer;
      -webkit-transform: scale(1.1);
      -ms-transform: scale(1.1);
      transform: scale(1.1);
      transition: 1s ease;
    }
  }
`;
export const ItemImg = styled.img`
  width: 100px;
`;
