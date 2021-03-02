import { MainContainer, CardsContainer, ResumeTitle } from "./style";
import MyResumeCard from "../MyResumeCard";

const MyResumeContainer = () => {
  return (
    <>
      <MainContainer>
        <ResumeTitle>My Resume</ResumeTitle>
        <CardsContainer>
          <MyResumeCard icon={"html"} exp="100%" />
          <MyResumeCard icon={"css"} exp="90%" />
          <MyResumeCard icon={"js"} exp="100%" />
          <MyResumeCard icon={"react"} exp="85%" />
          <MyResumeCard icon={"python"} exp="40%" />
          <MyResumeCard icon={"git"} exp="100%" />
        </CardsContainer>
      </MainContainer>
    </>
  );
};
export default MyResumeContainer;
