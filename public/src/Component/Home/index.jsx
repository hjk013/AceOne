import "./Home.scss";
import React from "react";
const logo = require("../../../dist/assets/img/AceOne_Logo.png");

const Home = () => (
  <div id="home">
    <div>
      <img className="home-logo" src={logo} />
    </div>
    <div className="home-container">
      <div className="text-box">
        <h1 className="heading-primary">
          <span className="heading-primary-main">Truck & Trailer Repair</span>
          <span className="heading-primary-sub">
            Getting you back on the road
          </span>
        </h1>
      </div>
    </div>
  </div>
);

//set first div id as the same name as the component

//
// const Home = () => {
//     render (

//     )
// }
export default Home;
