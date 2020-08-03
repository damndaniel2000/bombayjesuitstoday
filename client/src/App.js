import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import axios from "axios";

import "./App.css";
import UserContext from "./context/UserContext";

import NavBar from "./components/Navbar/NavBar";
import HomeNavBar from "./components/HomeNav/HomeNavBar";
import Footer from "./components/Footer/Footer.jsx";

import HomePage from "./pages/HomePage";

import VideosGospelPage from "./pages/VideosGospelPage";
import VideoSpiritualPage from "./pages/VideoSpiritualPage";
import VideoMissionPage from "./pages/VideoMissionPage";
import VideoLaityPage from "./pages/VideoLaityPage";
import VideoUpload from "./pages/VideoPost";

import BlogPage from "./pages/BlogsPage";

import ContributorsPage from "./pages/ContributorsPage";
import ContributorsUploadPage from "./pages/ContributosUploadPage";

import LoginPage from "./pages/Admin/LoginPage";
import AdminVideoPost from "./pages/Admin/VideoPostPage";
import AdminVideoPostDelete from "./pages/Admin/VideoPostDeletePage";
import AdminVideoUploadGet from "./pages/Admin/VideoUploadGet";

import NotFound from "./pages/NotFoundPage";

const App = () => {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenRes = await axios.post("/api/users/tokenIsValid", null, {
        headers: { "x-auth-token": token },
      });
      if (tokenRes.data) {
        const userRes = await axios.get("/api/users/", {
          headers: { "x-auth-token": token },
        });
        setUserData({
          token,
          user: userRes.data,
        });
      }
    };

    checkLoggedIn();
  }, []);

  return (
    <Router>
      <UserContext.Provider value={{ userData, setUserData }}>
        <Switch>
          <HomeNavBar exact path="/" component={HomePage} />
          <NavBar exact path="/videos/gospel" component={VideosGospelPage} />
          <NavBar
            exact
            path="/videos/spiritual"
            component={VideoSpiritualPage}
          />
          <NavBar exact path="/videos/laity" component={VideoLaityPage} />
          <NavBar exact path="/videos/mission" component={VideoMissionPage} />
          <NavBar exact path="/videos/upload" component={VideoUpload} />

          <NavBar exact path="/contributors" component={ContributorsPage} />
          <NavBar
            exact
            path="/contributors/upload-details"
            component={ContributorsUploadPage}
          />

          <NavBar exact path="/blogs" component={BlogPage} />

          <NavBar exact path="/login" component={LoginPage} />
          <NavBar exact path="/videos/post" component={AdminVideoPost} />
          <NavBar
            exact
            path="/videos/post/delete"
            component={AdminVideoPostDelete}
          />
          <NavBar
            exact
            path="/videos/uploads"
            component={AdminVideoUploadGet}
          />

          <NavBar component={NotFound} />
        </Switch>
        <Footer />
      </UserContext.Provider>
    </Router>
  );
};

export default App;
