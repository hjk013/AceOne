import "./Navbar.scss";
import React from "react";

const Navbar = () => (
  <div id="navbar">
    <div>
      <span className="menu-logo">Logo Goes Here</span>
      <ul className="main-menu">
        <li className="menu-item">Home</li>
        <li className="menu-item">Services</li>
        <li className="menu-item">Who We Are</li>
        <li className="menu-item">Contact Us</li>
      </ul>
    </div>
  </div>
);

export default Navbar;
