import "./Navbar.scss";
import React from "react";
import logo from "../../../dist/assets/img/AceOne_Logo_Light.png";

const Navbar = () => (
  <div id="navbar">
    <div>
      <span className="menu-logo">
        <img className="menu-logo-img" src={logo} />
      </span>
      <ul className="main-menu">
        <li className="menu-item">
          <a href="#home"> Home</a>
        </li>
        <li className="menu-item">
          <a href="#services">Services</a>
        </li>
        <li className="menu-item">Who We Are</li>
        <li className="menu-item">Contact Us</li>
      </ul>
    </div>
  </div>
);

export default Navbar;
