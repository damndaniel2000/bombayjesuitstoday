import React, { useContext } from "react";
import UserContext from "../../../context/UserContext";

import NotFoundPage from "../../NotFoundPage";
import VideoPost from "../../../components/Videos/VideoPost/VideoPost";

const VideoPostPage = () => {
  const { userData } = useContext(UserContext);

  return !userData.user ? <NotFoundPage /> : <VideoPost />;
};

export default VideoPostPage;
