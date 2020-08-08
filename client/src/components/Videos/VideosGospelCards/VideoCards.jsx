import React, { useState, useEffect } from "react";
import axios from "axios";
import { trackPromise, usePromiseTracker } from "react-promise-tracker";
import { Spin, Radio } from "antd";
import { useHistory } from "react-router-dom";

import ShareButton from "./ShareButton";

const VideoCards = () => {
  const [videos, setVideos] = useState([]);
  const { promiseInProgress } = usePromiseTracker();
  const history = useHistory();

  useEffect(() => {
    window.scrollTo(0, 0);
    getVideos();
  }, []);

  const getVideos = async () => {
    try {
      const res = await trackPromise(axios.get("/api/videos-gospel"));
      setVideos(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleRadios = (evt) => {
    history.push(evt.target.value);
  };

  const videoCards = videos.length ? (
    videos.map((card) => {
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
            <span className="video-card-title">{card.title}</span>
            <p className="video-card-uploader">
              By <b>{card.uploader}</b>
            </p>
            <p className="video-card-time">
              <i className="fa fa-clock-o" /> {uploadTime}
            </p>
            <p className="video-card-caption">{card.caption}</p>
          </div>
          <iframe
            className="video-card-video"
            frameBorder="0"
            src={card.embedLink}
            title={card._id}
            allowFullScreen
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
    })
  ) : (
    <h1> There Will Be New Videos Here Soon </h1>
  );

  return (
    <>
      <br />
      <br />
      <div>
        <Radio.Group onChange={handleRadios} defaultValue="/videos/gospel">
          <Radio.Button value="/videos/gospel" className="page-radio-buttons">
            Gospel
          </Radio.Button>
          <Radio.Button
            value="/videos/spiritual"
            className="page-radio-buttons"
          >
            Spiritual
          </Radio.Button>
          <br />
          <Radio.Button value="/videos/mission" className="page-radio-buttons">
            Mission
          </Radio.Button>
          <Radio.Button value="/videos/laity" className="page-radio-buttons">
            SJ Laity
          </Radio.Button>
        </Radio.Group>
      </div>
      <br />
      {promiseInProgress && (
        <div className="spinner">
          <Spin size="large" />
        </div>
      )}
      {videoCards}
    </>
  );
};

export default VideoCards;
