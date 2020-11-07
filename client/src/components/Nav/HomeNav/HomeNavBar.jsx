import React, { useState, useContext } from "react";
import { useHistory, Route } from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  Menu,
  MenuItem,
  makeStyles,
} from "@material-ui/core";
import UserContext from "../../../context/UserContext";

import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import DirectionsIcon from "@material-ui/icons/Directions";
import PlayCircleFilledRoundedIcon from "@material-ui/icons/PlayCircleFilledRounded";
import CreateRoundedIcon from "@material-ui/icons/CreateRounded";
import GroupRoundedIcon from "@material-ui/icons/GroupRounded";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

import "./HomeNav.css";
import "../Navbar/Navbar.css";
import logo from "../logo.png";

//import MassModal from "../MassModal/MassModal";

const useStyle = makeStyles({
  dropHoverItems: {
    fontSize: 10,
  },
});

const NavBar = (props) => {
  const [visible, setVisible] = useState(false);
  const [videoDrop, setDrop] = useState(false);
  const [modal, setModal] = useState();
  const [dropMenus, setDropMenus] = useState({
    videos: false,
    blog: false,
  });

  const classes = useStyle();
  const history = useHistory();
  const { userData } = useContext(UserContext);

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
  const fVideos = () => {
    history.push("/videos/follow");
    hideDrawer();
  };

  const followHim = () => {
    history.push("/follow-him");
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
  const login = () => history.push("/login");
  const massModalToggle = () => {
    setModal(!modal);
  };

  const navLinks = [
    { name: "Home", link: home },
    { name: "Videos", icon: true },
    { name: "Blogs", link: blogs },
    { name: "Contributors", link: contributors },
    { name: "Follow Him", link: followHim },
    // { name: "Login", link: login },
  ];

  const drawerLinks = [
    { name: "Home", link: home, icon: <HomeRoundedIcon /> },
    {
      name: "Videos",
      link: () => setDrop(!videoDrop),
      icon: <PlayCircleFilledRoundedIcon />,
    },
    { name: "Blogs", link: blogs, icon: <CreateRoundedIcon /> },
    { name: "Contributors", link: contributors, icon: <GroupRoundedIcon /> },
    { name: "Follow Him", link: followHim, icon: <DirectionsIcon /> },
  ];

  const videoDropLinks = [
    { name: "Daily Mass", link: "" },
    { name: "Gospel Insights", link: gVideos },
    { name: "Ignatian Spirituality", link: sVideos },
    { name: "Ignatian Mission", link: mVideos },
    { name: "SJ Laity", link: lVideos },
    { name: "Follow Him", link: fVideos },
  ];

  const drawerDropVideos = () => (
    <div className="drawer-drop-content">
      <span> Daily Mass </span>
      <span onClick={gVideos}> Gospel Insights </span>
      <span onClick={sVideos}> Ignatian Spirituality </span>
      <span onClick={mVideos}> Ignatian Mission </span>
      <span onClick={lVideos}> SJ Laity </span>
      <span onClick={yVideos}> Youth </span>
      <span onClick={fVideos}> Follow Him </span>
    </div>
  );

  return (
    <>
      <nav className="nav-strip">
        <div>
          <img src={logo} className="navbar-logo" alt="logo" />
        </div>

        <div className="main-nav-div">
          <div className="nav-mobile-nav">
            <i className="fa fa-navicon" onClick={() => setVisible(true)} />
          </div>

          <Drawer anchor="top" open={visible} onClose={hideDrawer}>
            <List>
              {drawerLinks.map((item) => (
                <>
                  <ListItem onClick={item.link} button>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.name} />
                    {item.name === "Videos" ? (
                      !videoDrop ? (
                        <ExpandMore />
                      ) : (
                        <ExpandLess />
                      )
                    ) : null}
                  </ListItem>
                  {item.name === "Videos" && (
                    <Collapse in={videoDrop} timeout="auto" unmountOnExit>
                      <List
                        component="div"
                        style={{ paddingLeft: "6rem" }}
                        disablePadding
                      >
                        {videoDropLinks.map((item) => (
                          <ListItem button>
                            <ListItemText
                              primary={item.name}
                              onClick={item.link}
                            />
                          </ListItem>
                        ))}
                      </List>
                    </Collapse>
                  )}
                </>
              ))}
            </List>
          </Drawer>

          <div className="desktop-nav">
            <div onClick={home}>Home</div>
            <div className="nav-drop-item">
              <span onClick={() => setDropMenus({ videos: !dropMenus.videos })}>
                Videos
              </span>{" "}
              {!dropMenus.videos ? (
                <ExpandMore
                  onClick={() => setDropMenus({ videos: !dropMenus.videos })}
                />
              ) : (
                <ExpandLess
                  onClick={() => setDropMenus({ videos: !dropMenus.videos })}
                />
              )}
              {dropMenus.videos && (
                <div className="nav-drop-menu">
                  <List component="div" disablePadding>
                    {videoDropLinks.map((item) => (
                      <ListItem button>
                        <ListItemText primary={item.name} onClick={item.link} />
                      </ListItem>
                    ))}
                  </List>
                </div>
              )}
            </div>
            <div>Blogs</div>
            <div>Follow Him</div>
            <div>Contributors</div>
          </div>
        </div>
      </nav>
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
