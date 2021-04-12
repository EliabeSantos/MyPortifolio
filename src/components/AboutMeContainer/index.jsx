import {
  MainContainer,
  InfoContainer,
  DescriptionContainer,
  AboutMeTitle,
  AboutMeDescription,
  AboutMeText,
} from "./style";

const AboutmeConteiner = () => {
  return (
    <>
      <MainContainer>
        <InfoContainer>
          <DescriptionContainer>
            <AboutMeTitle>About Me</AboutMeTitle>
            <AboutMeDescription>I am a full Stack developer</AboutMeDescription>
            <AboutMeText>
              Full stack developer and front-end specialist.
              <br /> I am 20 years old, brazilian citizen and for now live in
              Paraná. <br />
              Started in programming in 2012 with python, html and css. In 2019
              i started a online and campus-based course where i improve mi
              skills in html, css, javascript, react, python, clean code, solve
              problems, creativity, team work and some react components.
            </AboutMeText>
          </DescriptionContainer>
        </InfoContainer>
      </MainContainer>
    </>
  );
};
export default AboutmeConteiner;
