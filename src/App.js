import logo from "./logo.svg";
import "./App.css";
import MainPage from "./pages/MainPage";
import AboutMe from "./pages/AboutMe";
import MyResume from "./pages/MyResume";

function App() {
  return (
    <div className="App">
      <MainPage />
      <AboutMe />
      <MyResume />
    </div>
  );
}

export default App;
