import React, { useContext } from "react";
import "./Intro.css";
import DevVector from "../../img/cross-platform software-pana.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
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
          <span>Saad Qureshi</span>
          <span style={{ color: darkMode ? "white" : "" }}>
            REACT NATIVE | MERN STACK DEVELOPER
          </span>
          <span>
            My proficiency lies with React Native CLI, Redux, React JS, MongoDB,
            Firebase, and REST API. I can build a pixel-immaculate versatile UI
            and Mobile-friendly design. I will provide you with a Cross Platform
            Responsive React Native mobile App. With 3 years of experience in
            React Native with 12+ projects carried out.
            {/* React Native | MERN Stack Developer
            with high level of experience in web designing and development,
            producting the Quality work */}
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button s-button">Hire me</button>
        </Link>
        {/* social icons */}

        <div className="i-icons">
          <a
            href="https://www.linkedin.com/in/saad-qureshi-a12a64189/"
            target="_blank"
          >
            <img src={LinkedIn} alt="" />
          </a>
          <a href="https://github.com/msaadqureshi/" target="_blank">
            <img src={Github} alt="" />
          </a>
          {/* <img src={Instagram} alt="" /> */}
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img
          style={{
            width: "35rem",
            // height: "35rem",
          }}
          src={DevVector}
          alt=""
        />
        {/* <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" /> */}
        {/* animation */}
        <motion.img
          style={{ width: "10rem" }}
          initial={{ left: "-36%" }}
          whileInView={{ left: "-10%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />
        {/* animation */}
        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="React_Native" text2="Developer" />
        </motion.div>
        <motion.div
          initial={{ top: "20rem", left: "10rem" }}
          whileInView={{ left: "-2rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={thumbup} text1="MERN Stack" text2="Developer" />
        </motion.div>

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
