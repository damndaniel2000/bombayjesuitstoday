import React from "react";
import VideoGospelCards from "../../components/Videos/VideoCards/VideoCards";

const VideoPage = () => {
  return (
    <div style={{ minHeight: "150vh" }}>
      <VideoGospelCards path="gospel" />
    </div>
  );
};

export default VideoPage;
