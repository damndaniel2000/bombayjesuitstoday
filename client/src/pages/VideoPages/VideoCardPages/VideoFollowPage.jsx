import React from "react";
import VideoFollowCards from "../../../components/Videos/VideoCards/VideoCards";

const VideoPage = () => {
  return (
    <div style={{ minHeight: "150vh" }}>
      <VideoFollowCards path="follow" />
    </div>
  );
};

export default VideoPage;
