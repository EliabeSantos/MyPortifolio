import styled from "styled-components";

export const MainContainer = styled.div`
  width: 49%;
  height: 7rem;
  border-radius: 40px;
  background-color: #232323;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 800px) {
    width: 100%;
    margin: 5px 0 5px 0;
  }
  @media (max-width: 300px) {
    flex-direction: column;
    height: 10rem;
  }
`;

export const IconContainer = styled.div`
  width: 5rem;
  height: 5rem;
  background-color: white;
  border-radius: 100%;
  font-size: 4rem;
  color: #232323;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ExpBarr = styled.div`
  width: 50%;
  height: 12px;
  background-color: black;
  padding: 2px;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const InnerExpBarr = styled.div`
  width: ${(props) => props.exp};
  height: 10px;
  background-color: white;
`;

export const ExpText = styled.p`
  color: white;
  margin: 0 0 0 1rem;
`;
