import React, { useContext } from "react";
import UserContext from "../../../context/UserContext";

import VideoDelete from "../../../components/Videos/VideoPostDelete/VideoPostDelete";
import NotFoundPage from "../../NotFoundPage";

const VideoDeletePage = () => {
  const { userData } = useContext(UserContext);

  return (
    <div style={{ minHeight: "150vh" }}>
      {!userData.user ? (
        <NotFoundPage />
      ) : (
        <>
          <p className="contributors-page-title">Spiritual</p>
          <VideoDelete path="spiritual" />
          <p className="contributors-page-title">Gospel</p>
          <VideoDelete path="gospel" />
          <p className="contributors-page-title">Laity</p>
          <VideoDelete path="laity" />
          <p className="contributors-page-title">Mission</p>
          <VideoDelete path="mission" />
        </>
      )}
    </div>
  );
};

export default VideoDeletePage;
