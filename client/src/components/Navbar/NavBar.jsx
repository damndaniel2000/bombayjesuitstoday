import React, { useState } from "react";
import { Drawer } from "antd";
import { useHistory } from "react-router-dom";

import "./Navbar.css";
import logo from "./logo.png";

const NavBar = () => {
  const [visible, setVisible] = useState(false);
  const history = useHistory();

  const showDrawer = () => {
    setVisible(true);
  };
  const hideDrawer = () => {
    setVisible(false);
  };

  const home = () => history.push("/");
  const videos = () => history.push("/videos");
  const blogs = () => history.push("/blogs");
  const contributors = () => history.push("/contributors");

  return (
    <div id="nav-strip">
      <div>
        <img src={logo} className="navbar-logo" alt="logo" />
      </div>
      <div className="main-nav-div">
        <div className="mobile-nav">
          <i className="fa fa-navicon" onClick={showDrawer} />

          <Drawer
            placement="left"
            visible={visible}
            onClose={hideDrawer}
            key="left"
          >
            <div className="drawer-nav-links">
              <span onClick={home}> Home </span>
              <span onClick={videos}> Videos </span>
              <span onClick={blogs}> Blogs </span>
              <span onClick={contributors}> Contributors </span>
            </div>
          </Drawer>
        </div>
        <div className="desktop-nav">
          <nav className="main-nav">
            <span onClick={home}> Home </span>
            <span onClick={videos}> Videos </span>
            <span onClick={blogs}> Blogs </span>
            <span onClick={contributors}> Contributors </span>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
