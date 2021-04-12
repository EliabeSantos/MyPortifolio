import Header from "../../components/Header";
import MainPageContainer from "../../components/MainPageContainer";
import AboutMe from "../AboutMe";
import MyResume from "../MyResume";

import { ContentContainer } from "./style";

const MainPage = () => {
  return (
    <ContentContainer>
      <Header></Header>
      <MainPageContainer />
      <AboutMe />
      <MyResume />
    </ContentContainer>
  );
};

export default MainPage;
