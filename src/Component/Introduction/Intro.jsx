import React from "react";
import './Intro.css';
import Github from '../../img/github.png';
import LinkdIn from '../../img/linkedin.png';
import Medium from '../../img/medium.png'; 
const Intro = () => {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hi ! I Am </span>
          <span>Kasuni Maheshika</span>
          <span>
            <div style={{fontWeight: "bold" , color: "black" , fontSize: "22px"}} >IT Undergraduate | University Of Moratuwa<br/></div>
            <br/>I am a versatile developer experienced in both frontend and backend
            development, proficient in multiple programming languages.
          </span>
        </div>

        <button className="button i-button">Hire Me</button>
        <div className="i-icons">
         <a href="https://github.com/Kasuni23"> <img src={Github} alt=""/></a>
         <a href="https://www.linkedin.com/in/kasuni-maheshika/"> <img src={LinkdIn} alt=""/></a> 
         <a href="https://medium.com/@kasunimaheshika2325">  <img src={Medium} alt=""/></a>
        </div>
      </div>
      <div className="i-right"></div>
    </div>
  );
};

export default Intro;
