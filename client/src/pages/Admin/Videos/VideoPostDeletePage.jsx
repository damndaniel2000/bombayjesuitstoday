import React, { useContext } from "react";
import UserContext from "../../../context/UserContext";

import SpiritualVideoDelete from "../../../components/Videos/VideoPostDelete/VideoSpiritualPostDelete";
import MissionVideoDelete from "../../../components/Videos/VideoPostDelete/VideoMissionPostDelete";
import NotFoundPage from "../../NotFoundPage";

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
