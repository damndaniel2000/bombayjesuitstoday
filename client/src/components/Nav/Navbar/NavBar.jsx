import React, { useState, useContext } from "react";
import { useHistory, Route } from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  Zoom,
  Tooltip,
  withStyles,
  ClickAwayListener,
} from "@material-ui/core";
import UserContext from "../../../context/UserContext";

import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import DirectionsIcon from "@material-ui/icons/Directions";
import PlayCircleFilledRoundedIcon from "@material-ui/icons/PlayCircleFilledRounded";
import CreateRoundedIcon from "@material-ui/icons/CreateRounded";
import GroupRoundedIcon from "@material-ui/icons/GroupRounded";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

import "./Navbar.css";
import logo from "../logo.png";

const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: "white",
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    borderTop: "solid 3px #061178",
  },
  tooltipPlacementBottom: {
    margin: "2.2rem 0",
  },
}))(Tooltip);

//import MassModal from "../MassModal/MassModal";

const NavBar = (props) => {
  const [visible, setVisible] = useState(false);
  const [videoDrop, setDrop] = useState(false);
  const [modal, setModal] = useState();
  const [dropMenus, setDropMenus] = useState({
    videos: false,
    blog: false,
  });

  const history = useHistory();
  const { userData } = useContext(UserContext);

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
    history.push("/contributors");
    hideDrawer();
  };
  const login = () => history.push("/login");

  const massModalToggle = () => {
    setModal(!modal);
  };

  const drawerLinks = [
    { id: 1, name: "Home", link: home, icon: <HomeRoundedIcon /> },
    {
      id: 2,
      name: "Videos",
      link: () => setDrop(!videoDrop),
      icon: <PlayCircleFilledRoundedIcon />,
    },
    { id: 3, name: "Blogs", link: blogs, icon: <CreateRoundedIcon /> },
    {
      id: 4,
      name: "Contributors",
      link: contributors,
      icon: <GroupRoundedIcon />,
    },
    { id: 5, name: "Follow Him", link: followHim, icon: <DirectionsIcon /> },
  ];

  const videoDropLinks = [
    { id: 1, name: "Daily Mass", link: "" },
    { id: 2, name: "Gospel Insights", link: gVideos },
    { id: 3, name: "Ignatian Spirituality", link: sVideos },
    { id: 4, name: "Ignatian Mission", link: mVideos },
    { id: 5, name: "SJ Laity", link: lVideos },
    { id: 6, name: "Follow Him", link: fVideos },
    { id: 7, name: "Youth Talk", link: yVideos },
  ];

  const videoDropMenu = (
    <div className="nav-drop-menu">
      <List component="div" disablePadding>
        {videoDropLinks.map((item) => (
          <ListItem key={item.id} button>
            <ListItemText
              primary={item.name}
              onClick={() => {
                item.link();
                setDropMenus({ videos: false });
              }}
            />
          </ListItem>
        ))}
      </List>
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
                  <ListItem onClick={item.link} key={item.id} button>
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
                          <ListItem key={item.id} button>
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

            <ClickAwayListener
              onClickAway={() => setDropMenus({ videos: false })}
            >
              <LightTooltip
                title={videoDropMenu}
                PopperProps={{
                  disablePortal: true,
                }}
                onClose={() => setDropMenus({ video: true })}
                open={dropMenus.videos}
                disableFocusListener
                disableHoverListener
                disableTouchListener
                interactive
              >
                <div className="nav-drop-item">
                  <span onClick={() => setDropMenus({ videos: true })}>
                    Videos
                  </span>
                </div>
              </LightTooltip>
            </ClickAwayListener>

            <div onClick={blogs}>Blogs</div>
            <div onClick={followHim}>Follow Him</div>
            <div onClick={contributors}>Contributors</div>
            <div onClick={login}>Login</div>
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
