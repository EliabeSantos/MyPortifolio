import MainPageContainer from "../../components/MainPageContainer";
import AboutMe from "../AboutMe";
import MyResume from "../MyResume";
import Portifolio from "../Portifolio";

import { ContentContainer } from "./style";

const MainPage = () => {
  return (
    <ContentContainer>
      <MainPageContainer />
      <AboutMe />
      <MyResume />
      <Portifolio />
    </ContentContainer>
  );
};

export default MainPage;
