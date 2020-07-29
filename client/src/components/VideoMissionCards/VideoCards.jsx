import React, { useState, useEffect } from "react";
import axios from "axios";
import { trackPromise, usePromiseTracker } from "react-promise-tracker";
import { Spin } from "antd";

import ShareButton from "./ShareButton";
import "./VideoCards.css";

const VideoCards = () => {
  const [videos, setVideos] = useState([]);
  const { promiseInProgress } = usePromiseTracker();

  useEffect(() => {
    window.scrollTo(0, 0);
    getVideos();
  }, []);

  const getVideos = async () => {
    try {
      const res = await trackPromise(axios.get("/api/videos-mission"));
      setVideos(res.data);
    } catch (err) {
      console.log(err);
    }
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
          src={card.embedLink}
          title={card._id}
        ></iframe>

        <div className="video-card-sharebuttons">
          <ShareButton videoUrl={card.videoURL} />
          <a href={card.videoURL} target="_blank" rel="noopener noreferrer">
            Not Loading? Click here to view in Youtube{" "}
            <i className="fa fa-youtube-play" />
          </a>
        </div>
      </div>
    );
  });
  return (
    <>
      <br />
      <br />
      {promiseInProgress && <Spin size="large" />}
      {videoCards}
    </>
  );
};

export default VideoCards;
