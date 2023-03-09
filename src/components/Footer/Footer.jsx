import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import { UilLinkedin, UilGithub } from "@iconscout/react-unicons";

const Footer = () => {
  return (
    <div className="footer">
      {/* <img src={Wave} alt="" style={{ width: "100%" }} /> */}
      <div className="f-content">
        {/* <span>saad.qureshi51.sq@gmail.com</span> */}
        <div className="f-icons">
          {/* <Insta color="white" size={"3rem"} /> */}
          {/* <Facebook color="white" size={"3rem"} /> */}
          <a
            href="https://www.linkedin.com/in/saad-qureshi-a12a64189/"
            target="_blank"
          >
            <UilLinkedin color="white" size={"3rem"} />
          </a>
          <a href="https://github.com/msaadqureshi/" target="_blank">
            <UilGithub color="white" size={"3rem"} />
          </a>
        </div>
        <span style={{ color: "gray" }}>
          2023 © SAAD QURESHI | saad.qureshi51.sq@gmail.com
        </span>
      </div>
    </div>
  );
};

export default Footer;
