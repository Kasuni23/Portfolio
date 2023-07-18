import React from 'react'
import './Services.css';
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from '../Card/Card';
import Resume from "./Resume.pdf";

const Services = () => {
  return (
    <div className="services">
        <div className="awesome">
            <span>My Awesome</span>
            <span id="services">Services</span>
            <span>
                I provide comprehensive solutions that expertly combine aesthetically
                 pleasing designs <br/>with powerful functionality to produce engaging and user-friendly websites
                and  <br/>applications. I am a skilled web developer, UI/UX designer, and programmer.
            </span>
            <a href={Resume} download>
                <button className='button s-button'>Download CV</button> </a>
            
            <div className='blur s-blur' style={{background:"#ABF1FF94"}}></div>
        </div>
        <div className="cards">
            <div style={{left:'24rem', top:'4rem'}}>
                <Card
                emoji={HeartEmoji}
                heading = {'Design'}
                detail ={"Figma, Sketch , Photoshop, Gimp"}

                />
            </div>
            <div style={{left:'-15rem', top:'20rem'}}>
                <Card
                emoji={Glasses}
                heading = {'Developer'}
                detail ={"Html, Css, JavaScript, React, Node"}

                />
            </div>

              <div style={{left:'5.5rem', top:'15rem'}}>
                <Card
                emoji={Humble}
                heading = {'UI/UX'}
                detail ={"Discover the Perfect Blend of Beauty and Usability using UI/UX Design"}

                />
            </div>

            <div style={{left:'24rem', top:'25rem'}}>
                <Card
                emoji={Glasses}
                heading = {'Programmer'}
                detail ={"Dive deep into C and Java as a language explorer"}

                />
            </div>
            <div className='blur s-blur2' style={{background: "var(--purple)"}}></div>
        </div>
    </div>
  )
}

export default Services
