import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import NavBar from "./components/Navbar/NavBar";
import HomeNavBar from "./components/HomeNav/HomeNavBar";
import HomePage from "./pages/HomePage";
import VideoPage from "./pages/VideoPage";
import VideoUpload from "./pages/VideoPost";

import AdminVideoPost from "./pages/Admin/VideoPostPage";
import AdminVideoDelete from "./pages/Admin/VideoDeletePage";

const App = () => {
  return (
    <Router>
      <NavBar />
      <HomeNavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/videos" component={VideoPage} />
        <Route exact path="/videos/upload" component={VideoUpload} />

        <Route exact path="/videos/post" component={AdminVideoPost} />
        <Route exact path="/videos/delete" component={AdminVideoDelete} />
      </Switch>
    </Router>
  );
};

export default App;
