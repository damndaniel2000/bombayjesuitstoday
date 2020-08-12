import React, { useState, useEffect } from "react";
import axios from "axios";
import { trackPromise, usePromiseTracker } from "react-promise-tracker";
import { Spin, Radio } from "antd";
import { useHistory } from "react-router-dom";

import ShareButton from "./ShareButton";
import "./VideoCards.css";

const VideoCards = (props) => {
  const [videos, setVideos] = useState([]);
  const { promiseInProgress } = usePromiseTracker();
  const history = useHistory();
  const radio = "/videos/" + props.path;

  useEffect(() => {
    window.scrollTo(0, 0);
    getVideos();
  }, []);

  const getVideos = async () => {
    try {
      const res = await trackPromise(axios.get("/api/videos-" + props.path));
      setVideos(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleRadios = (evt) => {
    history.push(evt.target.value);
  };

  const detectDevice = (link) => {
    if (window.screen.width < 800) {
      let newLink = link.replace("https://", "");
      return `intent://${newLink}#Intent;scheme=vnd.youtube;package=com.google.android.youtube;S.browser_fallback_url=market://details?id=com.google.android.youtube;end;`;
    } else return link;
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
          <a
            href={detectDevice(card.videoURL)}
            target="_blank"
            rel="noopener noreferrer"
          >
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
      <div>
        <Radio.Group onChange={handleRadios} defaultValue={radio}>
          <Radio.Button value="/videos/gospel" className="page-radio-buttons">
            Gospel
          </Radio.Button>
          <Radio.Button
            value="/videos/spiritual"
            className="page-radio-buttons"
          >
            Spiritual
          </Radio.Button>
          <Radio.Button value="/videos/mission" className="page-radio-buttons">
            Mission
          </Radio.Button>
          <br />
          <Radio.Button value="/videos/laity" className="page-radio-buttons">
            SJ Laity
          </Radio.Button>
          <Radio.Button value="/videos/youth" className="page-radio-buttons">
            Youth Talk
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
