import {
  MainContainer,
  IconContainer,
  ExpBarr,
  InnerExpBarr,
  ExpText,
} from "./style";
import { AiFillHtml5, AiFillGitlab } from "react-icons/ai";
import { FaCss3Alt, FaPython, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";

const MyResumeCard = ({ icon, exp }) => {
  return (
    <>
      <MainContainer>
        <IconContainer>
          {icon === "html" && <AiFillHtml5 />}
          {icon === "css" && <FaCss3Alt />}
          {icon === "js" && <IoLogoJavascript />}
          {icon === "react" && <FaReact />}
          {icon === "python" && <FaPython />}
          {icon === "git" && <AiFillGitlab />}
        </IconContainer>
        <ExpBarr>
          <InnerExpBarr exp={exp}></InnerExpBarr>
        </ExpBarr>
        <ExpText>{exp}</ExpText>
      </MainContainer>
    </>
  );
};

export default MyResumeCard;
