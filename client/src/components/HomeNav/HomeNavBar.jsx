import React, { useState } from "react";
import { Drawer } from "antd";
import { useHistory } from "react-router-dom";

import "./HomeNav.css";
import logo from "./logo.png";

const HomeNavBar = () => {
  const [visible, setVisible] = useState(false);
  const history = useHistory();

  const showDrawer = () => {
    setVisible(true);
  };
  const hideDrawer = () => {
    setVisible(false);
  };

  const home = () => {
    history.push("/");
    hideDrawer();
  };
  const videos = () => {
    history.push("/videos");
    hideDrawer();
  };
  const blogs = () => {
    history.push("/blogs");
    hideDrawer();
  };
  const contributors = () => {
    history.push("/contributors");
    hideDrawer();
  };

  return (
    <>
      <div id="home-nav-bar">
        <div className="home-nav-strip">
          <div>
            <img className="navbar-logo" src={logo} alt="logo" />
          </div>
          <div>
            <div className="mobile-nav">
              <i className="fa fa-navicon" onClick={showDrawer} />

              <Drawer
                bodyStyle={{
                  backgroundColor: "#000",
                  color: "#fff",
                  padding: 0,
                }}
                placement="left"
                visible={visible}
                onClose={hideDrawer}
                key="left"
              >
                <div className="drawer-nav-links">
                  <span onClick={home}>
                    <i className="fa fa-home" /> Home
                  </span>
                  <span onClick={videos}>
                    <i className="fa fa-video-camera" /> Videos
                  </span>
                  <span onClick={blogs}>
                    <i className="fa fa-pencil" /> Blogs
                  </span>
                  <span onClick={contributors}>
                    <i className="fa fa-users" /> Contributors
                  </span>
                </div>
              </Drawer>
            </div>
            <div className="desktop-nav">
              <nav className="home-main-nav">
                <span onClick={home}> Home </span>
                <span onClick={videos}> Videos </span>
                <span onClick={blogs}> Blogs </span>
                <span onClick={contributors}> Contributors </span>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeNavBar;
