import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import NavBar from "./components/Navbar/NavBar";
import HomeNavBar from "./components/HomeNav/HomeNavBar";
import HomePage from "./pages/HomePage";
import VideoPage from "./pages/VideoPage";
import VideoUpload from "./pages/VideoPost";
import ContributorsPage from "./pages/Contributors";

import AdminVideoPost from "./pages/Admin/VideoPostPage";
import AdminVideoPostDelete from "./pages/Admin/VideoPostDeletePage";
import AdminVideoUploadDelete from "./pages/Admin/VideoUploadDelete";

const App = () => {
  return (
    <Router>
      <NavBar />
      <HomeNavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/videos" component={VideoPage} />
        <Route exact path="/videos/upload" component={VideoUpload} />
        <Route exact path="/contributors" component={ContributorsPage} />

        <Route exact path="/videos/post" component={AdminVideoPost} />
        <Route
          exact
          path="/videos/post/delete"
          component={AdminVideoPostDelete}
        />
        <Route
          exact
          path="/videos/upload/delete"
          component={AdminVideoUploadDelete}
        />
      </Switch>
    </Router>
  );
};

export default App;
