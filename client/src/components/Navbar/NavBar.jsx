import React from "react";
import "./Navbar.css";
import logo from "./logo.png";

const NavBar = () => {
  return (
    <div id="nav-strip">
      <div>
        <img src={logo} className="navbar-logo" alt="logo" />
      </div>
      <div>
        <nav>
          <a href="https://www.npmjs.com/package/react-share"> Videos </a>
          <a href="https://www.npmjs.com/package/react-share"> Blogs </a>
          <a href="https://www.npmjs.com/package/react-share"> About Us </a>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
