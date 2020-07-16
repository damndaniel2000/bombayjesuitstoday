import React, { useState, useEffect } from "react";
import axios from "axios";

import ShareButton from "./ShareButton";
import "./VideoCards.css";

const VideoCards = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = () => {
    axios
      .get("/api/videos")
      .then((res) => setVideos(res.data))
      .catch((err) => console.log(err));
  };

  const videoCards = videos.map((card) => {
    const timestamp = card._id.toString().substring(0, 8);
    const hours = new Date(
      parseInt(timestamp, 16) * 1000
    ).toLocaleString("en-US", { hour: "numeric", minute: "numeric" });
    const day = new Date(parseInt(timestamp, 16) * 1000).getDate().toString();
    const monthOG = new Date(
      parseInt(timestamp, 16) * 1000
    ).toLocaleString("default", { month: "long" });
    const uploadTime = `${day} ${monthOG} at ${hours}`;

    return (
      <div className="video-card-div" key={card._id}>
        <div className="video-card-content">
          <span className="video-card-title">{card.uploader}</span>
          <p> {uploadTime} </p>
          <p className="video-card-caption">{card.caption}</p>
        </div>
        <iframe
          className="video-card-video"
          frameBorder="0"
          src="https://www.youtube.com/embed/wk92BtfnWqE"
          title={card._id}
        ></iframe>

        <div className="video-card-sharebuttons">
          <ShareButton videoUrl="https://www.youtube.com/embed/wk92BtfnWqE" />
          <a href={card.videoURL} target="_blank" rel="noopener noreferrer">
            Not Loading? Click here to view in Youtube
            <i className="fa fa-youtube-play" />
          </a>
        </div>
      </div>
    );
  });
  return <>{videoCards}</>;
};

export default VideoCards;
