import React, { useContext } from "react";
import UserContext from "../../context/UserContext";

import NotFoundPage from "../NotFoundPage";
import VideoDelete from "../../components/Admin/VideoUploadDelete/VideoUploadDelete";

const VideoUploadDelete = () => {
  const { userData } = useContext(UserContext);

  return <>{!userData.user ? <NotFoundPage /> : <VideoDelete />}</>;
};

export default VideoUploadDelete;
