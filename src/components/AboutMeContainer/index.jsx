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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ex
              ligula, pretium non justo at, varius bibendum lorem. Duis varius
              mauris non diam scelerisque tempor. Etiam hendrerit, tellus nec
              vulputate sagittis, lorem quam mattis mauris, at tempus est felis
              ac ipsum. Nulla facilisi. Suspendisse lacinia diam vel neque
              hendrerit tempor. Mauris est orci, sagittis ac quam vel, luctus
              finibus magna. Aenean id sodales nulla, eu fringilla mauris. Ut
              consequat vehicula enim, ornare gravida tellus venenatis id. Donec
              vulputate velit et neque lacinia tempus. Nullam bibendum blandit
              sem. Vestibulum vitae pharetra nulla. In ante turpis, feugiat quis
              leo sit amet, posuere facilisis magna. In hac habitasse platea
              dictumst.
            </AboutMeText>
          </DescriptionContainer>
        </InfoContainer>
      </MainContainer>
    </>
  );
};
export default AboutmeConteiner;
