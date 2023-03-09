import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
const navbar = () => {
  return (
    <>
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <div className="n-name">Shoaib</div>
        
      </div>
      {/* right */} 
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li className="nav-li">
              <Link activeClass="active" to="intro" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li className="nav-li">
              <Link to="services" spy={true} smooth={true}>
                Serivces
              </Link>
            </li>
            <li className="nav-li">
              <Link to="works" spy={true} smooth={true}>
                Experience
              </Link>
            </li>
            <li className="nav-li">
              <Link to="portfolio" spy={true} smooth={true}>
                Portfolio
              </Link>
            </li>
            <li className="nav-li">
              <Link to="contact" spy={true} smooth={true}>
              Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="tog">
        <Toggle />
        </div>
      </div>
    </div>
        </>
  );
};

export default navbar;
