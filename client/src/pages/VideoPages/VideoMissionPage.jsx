import React from "react";
import VideoMissionCards from "../../components/Videos/VideoCards/VideoCards";

const VideoPage = () => {
  return (
    <div style={{ minHeight: "150vh" }}>
      <VideoMissionCards path="mission" />
    </div>
  );
};

export default VideoPage;
