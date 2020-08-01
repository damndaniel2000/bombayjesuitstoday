import React, { useContext } from "react";
import UserContext from "../../context/UserContext";

import SpiritualVideoDelete from "../../components/Admin/VideoPostDelete/VideoSpiritualPostDelete";
import MissionVideoDelete from "../../components/Admin/VideoPostDelete/VideoMissionPostDelete";
import NotFoundPage from "../NotFoundPage";

const VideoDeletePage = () => {
  const { userData } = useContext(UserContext);

  return (
    <div style={{ minHeight: "150vh" }}>
      {!userData.user ? (
        <NotFoundPage />
      ) : (
        <>
          <SpiritualVideoDelete />
          <MissionVideoDelete />
        </>
      )}
    </div>
  );
};

export default VideoDeletePage;
