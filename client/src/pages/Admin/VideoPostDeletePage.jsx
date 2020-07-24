import React, { useContext } from "react";
import UserContext from "../../context/UserContext";

import VideoDelete from "../../components/Admin/VideoPostDelete/VideoPostDelete";
import NotFoundPage from "../NotFoundPage";

const VideoDeletePage = () => {
  const { userData } = useContext(UserContext);

  return <>{!userData.user ? <NotFoundPage /> : <VideoDelete />}</>;
};

export default VideoDeletePage;
