import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #4a4545;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ResumeTitle = styled.h1`
  font-weight: normal;
  color: white;
  padding: 3rem;
`;

export const CardsContainer = styled.div`
  width: 90%;
  height: 80%;
  display: flex;

  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;
