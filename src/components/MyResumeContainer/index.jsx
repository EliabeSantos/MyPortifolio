import { MainContainer, CardsContainer, ResumeTitle } from "./style";
import MyResumeCard from "../MyResumeCard";

const MyResumeContainer = () => {
  return (
    <>
      <MainContainer>
        <ResumeTitle>My Resume</ResumeTitle>
        <CardsContainer>
          <MyResumeCard icon={"html"} exp="95%" />
          <MyResumeCard icon={"css"} exp="80%" />
          <MyResumeCard icon={"js"} exp="85%" />
          <MyResumeCard icon={"react"} exp="75%" />
          <MyResumeCard icon={"python"} exp="60%" />
          <MyResumeCard icon={"git"} exp="95%" />
        </CardsContainer>
      </MainContainer>
    </>
  );
};
export default MyResumeContainer;
