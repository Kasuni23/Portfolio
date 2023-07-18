import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Linkdin from "@iconscout/react-unicons/icons/uil-linkedin";
import Github from "@iconscout/react-unicons/icons/uil-github";
import { MdLocationPin } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";
const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="footer-container">
        <div style={{ display: "flex" }}>
          <div style={{ marginTop: "160px", marginLeft: "35px" }}>
            <h1>About me</h1>
            <div style={{ textAlign: "justify", width: "550px" }}>
              <p>
                As an enthusiastic undergraduate, I possess a deep passion for
                Information Technology and constantly seek opportunities to
                expand my knowledge and skills in this field. I approach every
                task with ambition, demonstrating a mature and responsible
                mindset. I am committed to applying my existing knowledge and
                dedicating myself to self-study, complemented by hard work.
              </p>
            </div>
            <div className="f-icons">
            <a href=""> <Insta color="white" size="3rem" /></a> 
             <a href="https://www.linkedin.com/in/kasuni-maheshika/"><Linkdin color="white" size="3rem" /></a>  
             <a href="https://github.com/Kasuni23"> <Github color="white" size="3rem" /></a> 
            </div>
          </div>
          <div
            style={{
              marginTop: "160px",
              marginLeft: "85px",
              marginRight: "35px",
            }}
          >
            <h1>Quick Links</h1>
            <ul style={{ listStyleType: "none"  }}>
              <li style={{marginBottom:"10px" }}>
                <a href="#" style={{textDecoration:"none" ,color:"white"}}>About Us</a>
              </li>
              <li style={{marginBottom:"10px"}}>
                <a href="#" style={{textDecoration:"none",color:"white"}}>Services</a>
              </li>
              <li style={{marginBottom:"10px"}}>
                <a href="#"style={{textDecoration:"none",color:"white"}}>Projects</a>
              </li>
              <li style={{marginBottom:"10px"}}>
                <a href="#" style={{textDecoration:"none",color:"white"}}>Blogs</a>
              </li>
              <li style={{marginBottom:"10px"}}>
                <a href="#"style={{textDecoration:"none",color:"white"}}>Contact Us</a>
              </li>

              {/* Add more quick links here */}
            </ul>
          </div>
          <div
            style={{
              marginTop: "160px",
              marginLeft: "255px",
              marginRight: "35px",
            }}
          >
            <h1>Contact info</h1>
            <div style={{ display: "flex", alignItems: "center" }}>
              <MdLocationPin style={{ fontSize: "30px" }} />
              <div style={{ marginLeft: "15px", marginTop: "5px" }}>
                <p>Diyabeduma</p>
                <p>Polonnaruwa</p>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <IoIosCall style={{ fontSize: "30px" }} />
              <div style={{ marginLeft: "15px", marginTop: "5px" }}>
                <p>077 - 520 3736</p>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <AiOutlineMail style={{ fontSize: "30px" }} />
              <div style={{ marginLeft: "15px", marginTop: "5px" }}>
                <p>kasunimgamage@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
