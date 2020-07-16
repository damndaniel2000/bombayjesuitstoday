import React from "react";
import "./HomeNav.css";
import logo from "./logo.png";

const HomeNavBar = () => {
  return (
    <>
      <div id="home-nav-bar">
        <div className="home-nav-strip">
          <div>
            <img className="navbar-logo" src={logo} alt="logo" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeNavBar;
