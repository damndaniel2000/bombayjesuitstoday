import React, { useContext } from "react";
import UserContext from "../../../context/UserContext";

import SpiritualVideoDelete from "../../../components/Videos/VideoPostDelete/VideoSpiritualPostDelete";
import MissionVideoDelete from "../../../components/Videos/VideoPostDelete/VideoMissionPostDelete";
import GospelVideoDelete from "../../../components/Videos/VideoPostDelete/VideoGospelPostDelete";
import LaityVideoDelete from "../../../components/Videos/VideoPostDelete/VideoLaityPostDelete";
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
          <GospelVideoDelete />
          <LaityVideoDelete />
        </>
      )}
    </div>
  );
};

export default VideoDeletePage;
