import styled from "styled-components";

export const ProfileCardContainer = styled.div`
  width: 30%;
  height: 60vh;
  background-color: #4a4545;
  margin-top: 12rem;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
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
`;

export const Titles = styled.h3`
  color: #ffff;
  font-weight: normal;
  font-size: 30px;
  margin: 1rem 0 0 0;
`;

export const Description = styled.h3`
  color: #ff8b19;
  font-weight: bold;
  font-size: 25px;
  margin: 0.5rem 0 0 0;
`;

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Contact = styled.p`
  color: white;
  font-size: 40px;
  margin: 1rem 1rem 0 1rem;

  text-decoration: none;

  a {
    text-decoration: none;
    color: white;
  }
`;
