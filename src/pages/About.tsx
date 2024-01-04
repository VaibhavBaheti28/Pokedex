import React from "react";
import Wrapper from "../sections/Wrapper";
import avatarImage from "../assets/me.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import LaunchRoundedIcon from "@mui/icons-material/LaunchRounded";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
function About() {
  return (
    <div className="profile">
      <img src={avatarImage} alt="ME" className="profile-image" />
      <h1 className="profile-text">Hi I am Vaibhav Baheti</h1>
      <h2 className="profile-text">
        I optimized this awesome pokedex. Older Site:
        <a href="https://vaibhavbaheti28.github.io/react-pokedex/">
          <ArrowOutwardIcon />
        </a>
      </h2>

      <div className="profile-links">
        <a href="https://github.com/VaibhavBaheti28?tab=repositories">
          <FaGithub />
        </a>

        <a href="https://www.linkedin.com/in/vaibhav-baheti-5027412a7/">
          <FaLinkedin />
        </a>
        <a href="https://vaibhavbaheti28.github.io/gambit/">
          <LaunchRoundedIcon />
        </a>
      </div>
    </div>
  );
}

export default Wrapper(About);
