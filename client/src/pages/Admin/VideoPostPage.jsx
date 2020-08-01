import React, { useContext } from "react";
import UserContext from "../../context/UserContext";

import NotFoundPage from "../NotFoundPage";
import VideoPost from "../../components/Admin/VideoPost/VideoPost";

const VideoPostPage = () => {
  const { userData } = useContext(UserContext);

  return (
    <div style={{ minHeight: "150vh" }}>
      {!userData.user ? <NotFoundPage /> : <VideoPost />}
    </div>
  );
};

export default VideoPostPage;
