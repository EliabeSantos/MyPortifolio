import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 3rem;
  background-color: #23232350;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  position: absolute;
  top: 0;

  @media (max-width: 600px) {
    justify-content: center;
  }
`;

export const Titles = styled.h3`
  color: #ff8b19;
  font-weight: normal;
  font-size: 25px;
  width: 70%;
  margin: 0;
  padding-left: 2rem;
  @media (max-width: 600px) {
    width: auto;
    text-align: center;
    padding: 0;
  }
`;

export const MenuOptions = styled.h3`
  color: white;
  font-weight: normal;
  margin: 0;
  padding: 0 1rem 0 0;
  @media (max-width: 600px) {
    display: none;
  }
`;
