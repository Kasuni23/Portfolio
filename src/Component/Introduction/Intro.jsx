import React from "react";
import './Intro.css';
import Github from '../../img/github.png';
import LinkdIn from '../../img/linkedin.png';
import Medium from '../../img/medium.png'; 
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import girl from '../../img/girl.png';
import thumbup from '../../img/thumbup.png';
import crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from "../FloatingDiv/FloatingDiv";

const Intro = () => {
    const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="intro" to="home">
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

        <button className="button i-button" onClick={() => scrollToSection("contact")}>Hire Me</button>
        <div className="i-icons">
         <a href="https://github.com/Kasuni23"> <img src={Github} alt=""/></a>
         <a href="https://medium.com/@kasunimaheshika2325">  <img src={Medium} alt="" style={{scale:"1.4"}}/></a>
         <a href="https://www.linkedin.com/in/kasuni-maheshika/"> <img src={LinkdIn} alt=""/></a> 
         
        </div>
      </div>
      <div className="i-right">
        <img src={Vector2} alt=""/>
        <img src={Vector1} alt=""/>
        <img src={girl} alt=""/>
        <img src={glassesimoji} alt=""/>
        <div style={{top:'7.5%' , left:'64%' }}>
          <FloatingDiv image={crown} txt1='Web' txt2='Developer'/>
        </div>
        <div style={{top:'89%' , left:'-6%' }}>
          <FloatingDiv image={thumbup} txt1='Programmer'/>
        </div>

        <div className="blur " style={{background: "rgb(238 210 255)"}}></div>
        <div className="blur " style={{background: "#C1F5FF",top:'22rem', width:'21rem',height:'11rem', left:'-9rem' }}></div>
      </div>
    </div>
  );
};

export default Intro;
