import React, { useState } from "react";
import { Drawer, Menu, Dropdown } from "antd";
import { useHistory, Route } from "react-router-dom";

import "./HomeNav.css";
import logo from "./logo.png";

const HomeNavBar = (props) => {
  const [visible, setVisible] = useState(false);
  const [videoDrop, setDrop] = useState(false);
  const history = useHistory();

  const showDrawer = () => {
    setVisible(true);
  };
  const hideDrawer = () => {
    setVisible(false);
    setDrop(false);
  };

  const home = () => {
    history.push("/");
    hideDrawer();
  };
  const sVideos = () => {
    history.push("/videos/spiritual");
    hideDrawer();
  };
  const mVideos = () => {
    history.push("/videos/mission");
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

  const dropVideos = (
    <Menu>
      <Menu.ItemGroup>
        <Menu.Item key="1" className="desktop-dropdown-items">
          Daily Mass
        </Menu.Item>
        <Menu.Item key="2" className="desktop-dropdown-items">
          Gospel Insights
        </Menu.Item>
        <Menu.Item key="3" onClick={mVideos} className="desktop-dropdown-items">
          Ignatian Mission
        </Menu.Item>
        <Menu.Item key="4" onClick={sVideos} className="desktop-dropdown-items">
          Ignatian Spirituality
        </Menu.Item>
      </Menu.ItemGroup>
    </Menu>
  );

  const drawerDropVideos = () => {
    if (videoDrop) {
      return (
        <div className="drawer-drop-content">
          <span> > Daily Mass </span>
          <span> > Gospel Insights </span>
          <span onClick={sVideos}> > Ignatian Spirituality </span>
          <span onClick={mVideos}> > Ignatian Mission </span>
        </div>
      );
    }
  };

  return (
    <>
      <div id="home-nav-bar">
        <div>
          <img src={logo} className="navbar-logo" alt="logo" />
        </div>
        <div className="main-nav-div">
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
              closeIcon={
                <i
                  className="fa fa-close"
                  style={{ color: "#fff", fontSize: "20px" }}
                />
              }
            >
              <div className="home-drawer-nav-links">
                <span onClick={home}>
                  <i className="fa fa-home" /> Home
                </span>
                <span onClick={() => setDrop(!videoDrop)}>
                  <i className="fa fa-video-camera" /> Videos &nbsp; &nbsp;
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <i className="fa fa-angle-down" />
                </span>
                {drawerDropVideos()}
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
            <nav className="main-nav">
              <div>
                <span onClick={home}> Home </span>
              </div>

              <Dropdown overlay={dropVideos}>
                <div>
                  <span>
                    Videos &nbsp;
                    <i className="fa fa-angle-down" />
                  </span>
                </div>
              </Dropdown>

              <div>
                <span onClick={blogs}> Blogs </span>
              </div>
              <div>
                <span onClick={contributors}> Contributors </span>
              </div>
            </nav>
          </div>
        </div>
      </div>

      <div>{props.children}</div>
    </>
  );
};

const MainNavRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return (
          <HomeNavBar>
            <Component {...props} />
          </HomeNavBar>
        );
      }}
    />
  );
};
export default MainNavRoute;
