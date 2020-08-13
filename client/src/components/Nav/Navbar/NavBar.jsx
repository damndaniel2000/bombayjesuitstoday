import React, { useState } from "react";
import { Drawer, Menu, Dropdown } from "antd";
import { useHistory, Route } from "react-router-dom";

import "./Navbar.css";
import MassModal from "../MassModal/MassModal";
import logo from "../logo.png";

const NavBar = (props) => {
  const [visible, setVisible] = useState(false);
  const [videoDrop, setDrop] = useState(false);
  const [modal, setModal] = useState();
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
  const gVideos = () => {
    history.push("/videos/gospel");
    hideDrawer();
  };
  const lVideos = () => {
    history.push("/videos/laity");
    hideDrawer();
  };
  const yVideos = () => {
    history.push("/videos/youth");
    hideDrawer();
  };
  const blogs = () => {
    history.push("/blogs");
    hideDrawer();
  };
  const contributors = () => {
    history.push("/contributors/jesuits");
    hideDrawer();
  };
  const massModalToggle = () => {
    setModal(!modal);
  };

  const dropVideos = (
    <Menu>
      <Menu.ItemGroup>
        <Menu.Item
          key="1"
          onClick={() => setModal(!modal)}
          className="desktop-dropdown-items"
        >
          Daily Mass
        </Menu.Item>
        <Menu.Item key="2" onClick={gVideos} className="desktop-dropdown-items">
          Gospel Insights
        </Menu.Item>
        <Menu.Item key="3" onClick={mVideos} className="desktop-dropdown-items">
          Ignatian Mission
        </Menu.Item>
        <Menu.Item key="4" onClick={sVideos} className="desktop-dropdown-items">
          Ignatian Spirituality
        </Menu.Item>
        <Menu.Item key="5" onClick={lVideos} className="desktop-dropdown-items">
          SJ Laity
        </Menu.Item>
        <Menu.Item key="6" onClick={yVideos} className="desktop-dropdown-items">
          Youth Talk
        </Menu.Item>
      </Menu.ItemGroup>
    </Menu>
  );

  const drawerDropVideos = () => {
    if (videoDrop) {
      return (
        <div className="drawer-drop-content">
          <span onClick={() => setModal(!modal)}> Daily Mass </span>
          <span onClick={gVideos}> Gospel Insights </span>
          <span onClick={sVideos}> Ignatian Spiritualit </span>
          <span onClick={mVideos}> Ignatian Mission </span>
          <span onClick={lVideos}> SJ Laity </span>
          <span onClick={yVideos}>Youth Talk </span>
        </div>
      );
    }
  };

  return (
    <>
      {modal && <MassModal visible={modal} modalToggler={massModalToggle} />}

      <div id="nav-strip">
        <div>
          <img src={logo} className="navbar-logo" alt="logo" />
        </div>
        <div className="main-nav-div">
          <div className="mobile-nav">
            <i className="fa fa-navicon" onClick={showDrawer} />

            <Drawer
              bodyStyle={{
                backgroundColor: "#152256",
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
              <div className="drawer-nav-links">
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

const NavRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return (
          <NavBar>
            <Component {...props} />
          </NavBar>
        );
      }}
    />
  );
};
export default NavRoute;
