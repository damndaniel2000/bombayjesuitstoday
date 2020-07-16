import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import NavBar from "./components/Navbar/NavBar";
import HomeNavBar from "./components/HomeNav/HomeNavBar";
import HomePage from "./pages/HomePage";
import VideoPage from "./pages/VideoPage";
import VideoPost from "./pages/VideoPostPage";
import VideoDelete from "./pages/VideoDeletePage";

const App = () => {
  return (
    <Router>
      <NavBar />
      <HomeNavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/videos" component={VideoPage} />
        <Route exact path="/videos/post" component={VideoPost} />
        <Route exact path="/videos/delete" component={VideoDelete} />
      </Switch>
    </Router>
  );
};

export default App;
