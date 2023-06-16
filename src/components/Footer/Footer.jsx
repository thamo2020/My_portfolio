import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-dribbble";
import Facebook from "@iconscout/react-unicons/icons/uil-linkedin";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>thamodya01@gmail.com</span>
        <div className="f-icons">
          <a href="https://dribbble.com/Thamodya"> <Insta color="white" size={"3rem"} /></a>
          <a href="https://www.linkedin.com/in/thamodya-ranasinghe-659032181/"><Facebook color="white" size={"3rem"} /></a>
          <a href="https://github.com/thamo2020"><Gitub color="white" size={"3rem"} /></a>
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
