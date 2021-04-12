import {
  ProfileCardContainer,
  ProfileImageContainer,
  ProfilePhoto,
  Titles,
  Description,
  Contact,
  ContactContainer,
} from "./style";
import MyPhoto from "../../Images/MyPhoto.svg";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const ProfileCard = () => {
  return (
    <>
      <ProfileCardContainer>
        <ProfileImageContainer>
          <ProfilePhoto src={MyPhoto}></ProfilePhoto>
        </ProfileImageContainer>
        <Titles>&lt;Eliabe Santos/&gt; </Titles>
        <Description>Full Stack Developer</Description>
        <ContactContainer>
          <Contact>
            <a
              target="_blank"
              href={"https://api.whatsapp.com/send?phone=55+41+996460846"}
            >
              <IoLogoWhatsapp />
            </a>
          </Contact>
          <Contact>
            <a target="_blank" href={"https://github.com/EliabeSantos"}>
              <AiFillGithub />
            </a>
          </Contact>
          <Contact>
            <a
              target="_blank"
              href={"https://www.linkedin.com/in/eliabe-santos/"}
            >
              <AiFillLinkedin />
            </a>
          </Contact>
        </ContactContainer>
      </ProfileCardContainer>
    </>
  );
};
export default ProfileCard;
