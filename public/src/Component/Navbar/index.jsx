import "./Navbar.scss";
import React from "react";
import logo from "../../../dist/assets/img/AceOne_Logo.png";

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
        <li className="menu-item">
          <a href="#who">Who We Are</a>
        </li>
        <li className="menu-item">
          <a href="#contact">Contact Us</a>
        </li>
      </ul>
    </div>
  </div>
);

export default Navbar;
