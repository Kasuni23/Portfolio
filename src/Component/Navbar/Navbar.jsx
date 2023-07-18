import React from "react";
import "./Navbar.css";
const Navbar = () => {
   const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Kasuni</div>
        <span>toggle</span>
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li onClick={() => scrollToSection("home")}>Home</li>
            <li onClick={() => scrollToSection("services")}>Services</li>
            <li onClick={() => scrollToSection("projects")}>Projects</li>
            <li onClick={() => scrollToSection("blogs")}>Blogs</li>
          </ul>
        </div>
        <button className="button n-button" onClick={() => scrollToSection("contact")}>Contact</button>
      </div>
    </div>
  );
};

export default Navbar;
