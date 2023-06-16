import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import me from "../../img/mee.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import dribble from "@iconscout/react-unicons/icons/uil-dribbble";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
          <span>Thamodya Ranasinghe</span>
          <span className="intro_para" style={{lineHeight:"25px"}}>
          As a UI/UX engineer with close to one year of industrial 
          experience in UI design, development, and software engineering,
           I possess a profound understanding of the UI/UX field. With a 
           degree in Information Systems and an unwavering passion for 
           staying abreast of the latest trends, I am dedicated to 
           delivering innovative solutions that cater to the requirements 
           of clients and end users. I take pride in my contributions to 
           bringing numerous projects to fruition and remain eager to 
           make a positive impact in the ever-evolving UI/UX space.
          </span>
        </div>
        <Link to="footer" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
          <a href="https://github.com/thamo2020"><img src={Github} alt="" /></a>
          <a href="https://www.linkedin.com/in/thamodya-ranasinghe-659032181/"><img src={LinkedIn} alt="" /></a>
          <a href="http://"></a>
          <img src={dribble} alt="" />
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={me} alt="" style={{paddingRight:"270px", width:"470px"}}  />
        {/* animation */}
        {/* <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        /> */}

        {/* <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="Web" text2="Developer" />
        </motion.div> */}

        {/* animation */}
        {/* <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        > */}
          {/* floatinDiv mein change hy dark mode ka */}
          {/* <FloatinDiv img={thumbup} text1="Best Design" text2="Award" />
        </motion.div> */}

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
