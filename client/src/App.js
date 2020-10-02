import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import axios from "axios";
import { CookiesProvider } from "react-cookie";

import "./App.css";
import UserContext from "./context/UserContext";

import NavBar from "./components/Nav/Navbar/NavBar";
import HomeNavBar from "./components/Nav/HomeNav/HomeNavBar";
import Footer from "./components/Footer/Footer.jsx";

import HomePage from "./pages/HomePage";
import FollowHimPage from "./pages/FollowHimPage";
import PrivacyPolicy from "./pages/PrivacyPolicyPage";

import CookieModal from "./components/CustomModals/CookiesModal/CookiesModal";
import NotificationModal from "./components/CustomModals/NotificationsModal/NotificationsModal";

import VideosGospelPage from "./pages/VideoPages/VideoCardPages/VideosGospelPage";
import VideoSpiritualPage from "./pages/VideoPages/VideoCardPages/VideoSpiritualPage";
import VideoMissionPage from "./pages/VideoPages/VideoCardPages/VideoMissionPage";
import VideoLaityPage from "./pages/VideoPages/VideoCardPages/VideoLaityPage";
import VideoYouthPage from "./pages/VideoPages/VideoCardPages/VideoYouthPage";
import VideoFollowPage from "./pages/VideoPages/VideoCardPages/VideoFollowPage";
import VideoUpload from "./pages/VideoPages/VideoUploadPage";

import BlogCardsPage from "./pages/BlogPages/BlogCardsPage";
import BlogContentPage from "./pages/BlogPages/BlogContentPage";
import BlogUploadPage from "./pages/BlogPages/BlogUploadPage";
import BlogExamplePage from "./pages/BlogPages/BlogExamplePage";

import ContributorsJesuitsPage from "./pages/ContributorPages/ContributorCardPages/ContributorsJesuitsPage";
import ContributorsLaityPage from "./pages/ContributorPages/ContributorCardPages/ContributorsLaityPage";
import ContributorsBlogsPage from "./pages/ContributorPages/ContributorCardPages/ContributorsBlogsPage";
import ContributorsUploadPage from "./pages/ContributorPages/ContributosUploadPage";

import LoginPage from "./pages/Admin/LoginPage";

import AdminVideoPost from "./pages/Admin/Videos/VideoPostPage";
import AdminVideoUploadGet from "./pages/Admin/Videos/VideoUploadGet";

import AdminSpiritualVideoValidateCards from "./pages/Admin/Videos/VideoValidateCards/ValidateSpiritualCards";
import AdminGospelVideoValidateCards from "./pages/Admin/Videos/VideoValidateCards/ValidateGospelCards";
import AdminLaityVideoValidateCards from "./pages/Admin/Videos/VideoValidateCards/ValidateLaityCards";
import AdminMissionVideoValidateCards from "./pages/Admin/Videos/VideoValidateCards/ValidateMissionCards";
import AdminYouthVideoValidateCards from "./pages/Admin/Videos/VideoValidateCards/ValidateYouthCards";
import AdminFollowVideoValidateCards from "./pages/Admin/Videos/VideoValidateCards/ValidateFollowCards";

import AdminSpiritualVideoValidateDetails from "./pages/Admin/Videos/VideoValidateDetails/ValidateSpiritualDetails";
import AdminMissionVideoValidateDetails from "./pages/Admin/Videos/VideoValidateDetails/ValidateMissionDetails";
import AdminGospelVideoValidateDetails from "./pages/Admin/Videos/VideoValidateDetails/ValidateGospelDetails";
import AdminLaityVideoValidateDetails from "./pages/Admin/Videos/VideoValidateDetails/ValidateLaityDetails";
import AdminYouthVideoValidateDetails from "./pages/Admin/Videos/VideoValidateDetails/ValidateYouthDetails";
import AdminFollowVideoValidateDetails from "./pages/Admin/Videos/VideoValidateDetails/ValidateFollowDetails";

import AdminBlogValidateCards from "./pages/Admin/Blogs/BlogsValidateCardsPage";
import AdminBlogValidateDetails from "./pages/Admin/Blogs/BlogsValidateDetailsPage";

import AdminContributorsValidateCardsPage from "./pages/Admin/Contributors/ContributorsValidateCardsPage";
import AdminContributorsValidateJesuitDetailsPage from "./pages/Admin/Contributors/ContributorsValidateDetails/ContributorsValidateJesuitDetailsPage";
import AdminContributorsValidateLaityDetailsPage from "./pages/Admin/Contributors/ContributorsValidateDetails/ContributorsValidateLaityDetailsPage";
import AdminContributorsValidateBlogsDetailsPage from "./pages/Admin/Contributors/ContributorsValidateDetails/ContributorsValidateBlogDetailsPage";
import AdminContributorsJesuitAddVideoPage from "./pages/Admin/Contributors/ContributorsAdd/ContributorsJesuitsAddVideoPage";
import AdminContributorsLaityAddVideoPage from "./pages/Admin/Contributors/ContributorsAdd/ContributorsLaityAddVideoPage";

import NotFound from "./pages/NotFoundPage";

const App = () => {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });
  const [count, setCount] = useState();

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

    axios.put("/api/counter/5f3fe7c67c551223a7bf6d94").then((counter) => {
      setCount(counter.data.count);
    });
  }, []);

  return (
    <CookiesProvider>
      <Router>
        <CookieModal />
        <NotificationModal />
        <UserContext.Provider value={{ userData, setUserData }}>
          <Switch>
            <HomeNavBar
              exact
              path="/"
              component={() => <HomePage count={count} />}
            />
            <HomeNavBar exact path="/follow-him" component={FollowHimPage} />
            <NavBar exact path="/privacy-policy" component={PrivacyPolicy} />

            <NavBar exact path="/videos/gospel" component={VideosGospelPage} />
            <NavBar
              exact
              path="/videos/spiritual"
              component={VideoSpiritualPage}
            />
            <NavBar exact path="/videos/laity" component={VideoLaityPage} />
            <NavBar exact path="/videos/mission" component={VideoMissionPage} />
            <NavBar exact path="/videos/youth" component={VideoYouthPage} />
            <NavBar exact path="/videos/follow" component={VideoFollowPage} />
            <NavBar exact path="/videos/upload" component={VideoUpload} />

            <NavBar
              exact
              path="/contributors/jesuits"
              component={ContributorsJesuitsPage}
            />
            <NavBar
              exact
              path="/contributors/laity"
              component={ContributorsLaityPage}
            />
            <NavBar
              exact
              path="/contributors/blogs"
              component={ContributorsBlogsPage}
            />
            <NavBar
              exact
              path="/contributors/upload-details"
              component={ContributorsUploadPage}
            />
            <NavBar exact path="/blogs" component={BlogCardsPage} />
            <NavBar
              exact
              path="/blogs/content/:id"
              component={BlogContentPage}
            />
            <NavBar exact path="/blogs/upload" component={BlogUploadPage} />
            <NavBar exact path="/blogs/example" component={BlogExamplePage} />

            <NavBar exact path="/login" component={LoginPage} />

            <NavBar exact path="/videos/post" component={AdminVideoPost} />
            <NavBar
              exact
              path="/videos/uploads"
              component={AdminVideoUploadGet}
            />
            <NavBar
              exact
              path="/videos/validate/spiritual"
              component={AdminSpiritualVideoValidateCards}
            />
            <NavBar
              exact
              path="/videos/validate/gospel"
              component={AdminGospelVideoValidateCards}
            />
            <NavBar
              exact
              path="/videos/validate/mission"
              component={AdminMissionVideoValidateCards}
            />
            <NavBar
              exact
              path="/videos/validate/laity"
              component={AdminLaityVideoValidateCards}
            />
            <NavBar
              exact
              path="/videos/validate/youth"
              component={AdminYouthVideoValidateCards}
            />
            <NavBar
              exact
              path="/videos/validate/follow"
              component={AdminFollowVideoValidateCards}
            />
            <NavBar
              exact
              path="/videos/validate/spiritual/:id"
              component={AdminSpiritualVideoValidateDetails}
            />
            <NavBar
              exact
              path="/videos/validate/gospel/:id"
              component={AdminGospelVideoValidateDetails}
            />
            <NavBar
              exact
              path="/videos/validate/mission/:id"
              component={AdminMissionVideoValidateDetails}
            />
            <NavBar
              exact
              path="/videos/validate/laity/:id"
              component={AdminLaityVideoValidateDetails}
            />
            <NavBar
              exact
              path="/videos/validate/youth/:id"
              component={AdminYouthVideoValidateDetails}
            />
            <NavBar
              exact
              path="/videos/validate/follow/:id"
              component={AdminFollowVideoValidateDetails}
            />

            <NavBar
              exact
              path="/blogs/validate"
              component={AdminBlogValidateCards}
            />
            <NavBar
              exact
              path="/blogs/validate/:id"
              component={AdminBlogValidateDetails}
            />

            <NavBar
              exact
              path="/contributors/validate"
              component={AdminContributorsValidateCardsPage}
            />
            <NavBar
              exact
              path="/contributors/validate/jesuits/:id"
              component={AdminContributorsValidateJesuitDetailsPage}
            />
            <NavBar
              exact
              path="/contributors/validate/laity/:id"
              component={AdminContributorsValidateLaityDetailsPage}
            />
            <NavBar
              exact
              path="/contributors/validate/blogs/:id"
              component={AdminContributorsValidateBlogsDetailsPage}
            />
            <NavBar
              exact
              path="/contributors-jesuits/videos/:id/add"
              component={AdminContributorsJesuitAddVideoPage}
            />
            <NavBar
              exact
              path="/contributors-laity/videos/:id/add"
              component={AdminContributorsLaityAddVideoPage}
            />

            <NavBar component={NotFound} />
          </Switch>
          <Footer />
        </UserContext.Provider>
      </Router>
    </CookiesProvider>
  );
};

export default App;
