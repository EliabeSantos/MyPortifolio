import styled from "styled-components";

export const MainContainer = styled.div`
  width: 40%;
  height: 22%;
  border-radius: 40px;
  background-color: #232323;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const IconContainer = styled.div`
  width: 5rem;
  height: 5rem;
  background-color: white;
  border-radius: 100%;
  margin: 0 1rem 0 1rem;
  font-size: 4rem;
  color: #232323;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ExpBarr = styled.div`
  width: 60%;
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
