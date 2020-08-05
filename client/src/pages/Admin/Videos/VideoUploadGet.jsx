import React, { useContext } from "react";
import UserContext from "../../../context/UserContext";

import NotFoundPage from "../../NotFoundPage";
import VideoDelete from "../../../components/Videos/VideoUploadGet/VideoUploadGet";

const VideoUploadDelete = () => {
  const { userData } = useContext(UserContext);

  return (
    <div style={{ minHeight: "150vh" }}>
      {!userData.user ? <NotFoundPage /> : <VideoDelete />}
    </div>
  );
};

export default VideoUploadDelete;
