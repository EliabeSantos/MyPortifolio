import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #4a4545;
  overflow-x: hidden;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 800px) {
    height: auto;
  }
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
  justify-content: space-around;
  flex-wrap: wrap;
`;
