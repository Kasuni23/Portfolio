import React from "react";
import "./Project.css";
import p1 from "../../img/p1.PNG";
import p2 from "../../img/p2.PNG";
import hotel from "../../img/p3.PNG";
import b1 from "../../img/b1.jpg";

import card from "../Card/Card";

const Project = () => {
  
  return (
    <div className="projects">
      <div className="projectname" id="projects">Projects</div>

      <div className="cards">
        <div style={{ left: "-5rem", top: "8rem" }}>
          <div className="box">
            <h2>Software Project Management System</h2>
            <img
              src={p1}
              alt="Box Image"
              style={{ width: "15rem", height: "10rem" }}
            />
            <span>
              A software project management system built with ReactJS, Node.js,
              and MongoDB is a comprehensive tool that enables efficient
              planning, organization, and tracking of software projects,
              facilitating collaboration and enhancing productivity.
            </span>

            <a href="https://github.com/UserSampath/Lenzz-SPMS">
              <button className="button p-button">More Details</button>
            </a>
          </div>
        </div>
        <div style={{ left: "22rem", top: "8rem" }}>
          <div className="box">
            <h2>Automated Shoe Polish Mashine</h2>
            <img
              src={p2}
              alt="Box Image"
              style={{ width: "15rem", height: "10rem" }}
            />
            <span>
              An automated shoe polish machine utilizes C programming language,
              Atmel Studio, and Protues for development and simulation of
              microcontroller-based functionalities to automate the shoe
              polishing process.
            </span>
            <a href="https://github.com/Kasuni23/Level-1-Hardware-Project">
              <button className="button p-button">More Details</button>
            </a>
          </div>
        </div>

        <div style={{ left: "48rem", top: "8rem" }}>
          <div className="box">
            <h2>Hotel Mahi</h2>
            <img
              src={hotel}
              alt="Box Image"
              style={{ width: "15rem", height: "10rem" }}
            />
            <span>
              Hotel Mahi is a visually appealing website designed with HTML and
              CSS.This marks a significant milestone for me as I embark on my
              journey as a web developer, as I proudly present my inaugural
              venture into website creation.
            </span>
           <a href="https://github.com/Kasuni23/Hotel-Web-Page">
              <button className="button p-button">More Details</button>
            </a>
          </div>
        </div>

        <div style={{ left: "24rem", top: "25rem" }}></div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Project;
