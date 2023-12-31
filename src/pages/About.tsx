import React from "react";
import Wrapper from "../sections/Wrapper";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function About() {
  return (
    <div className="profile">
      <img src="/assets/pikachu.png" alt="pikachu" className="profile-image" />
      <h1 className="profile-text">Hi I am Vaibhav Baheti</h1>
      <h2 className="profile-text">The creator of this awesome pokedex</h2>

      <div className="profile-links">
        <a href="https://github.com/VaibhavBaheti28?tab=repositories">
          <FaGithub />
        </a>

        <a href="https://www.linkedin.com/in/vaibhav-baheti-5027412a7/">
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}

export default Wrapper(About);
