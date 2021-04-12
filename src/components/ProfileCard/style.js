import styled from "styled-components";

export const ProfileCardContainer = styled.div`
  width: 26rem;
  height: 26rem;
  background-color: #4a4545;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @keyframes slideInFromLeft {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
    }
  }

  animation: 1s ease-out 0s 1 slideInFromLeft;
`;

export const ProfileImageContainer = styled.div`
  width: 15rem;
  height: 15rem;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProfilePhoto = styled.img`
  width: 80%;
  height: 80%;
  border-radius: 100%;

  background-color: white;
`;

export const Titles = styled.h3`
  color: #ffff;
  font-weight: normal;
  font-size: 30px;
  margin: 1rem 0 0 0;

  @media (max-width: 300px) {
    text-align: center;
    margin: 0;
    font-size: 25px;
  }
`;

export const Description = styled.h3`
  color: #ff8b19;
  font-weight: bold;
  font-size: 25px;
  margin: 0.5rem 0 0 0;
  @media (max-width: 300px) {
    text-align: center;
    margin: 0;
    font-size: 25px;
  }
`;

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Contact = styled.p`
  color: white;
  font-size: 35px;
  margin: 1rem 1rem 0 1rem;

  text-decoration: none;

  a {
    text-decoration: none;
    color: white;
  }
  :hover {
    -webkit-transform: scale(1.2);
    -ms-transform: scale(1.2);
    transform: scale(1.2);
    transition: 1s ease;
  }
`;
