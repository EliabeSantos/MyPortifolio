import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: #232323;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InfoContainer = styled.div`
  width: 80%;
  height: 80%;
`;

export const DescriptionContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const AboutMeTitle = styled.h2`
  font-weight: normal;
  color: #ff8b19;
`;

export const AboutMeDescription = styled.h3`
  font-weight: normal;
  color: white;
`;

export const AboutMeText = styled.p`
  color: white;
  padding: 2rem 0 0 0;
`;
