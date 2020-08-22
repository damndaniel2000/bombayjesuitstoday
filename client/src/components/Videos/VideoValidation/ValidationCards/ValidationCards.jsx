import React, { useState, useEffect } from "react";
import axios from "axios";
import { trackPromise, usePromiseTracker } from "react-promise-tracker";
import { Spin, Radio } from "antd";
import { useHistory } from "react-router-dom";

import "./VideoValidateCards.css";

const VideoValidationCards = (props) => {
  const [videos, setVideos] = useState([]);
  const { promiseInProgress } = usePromiseTracker();
  const history = useHistory();
  const radio = "/videos/validate/" + props.path;

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

  const videoCards = videos.map((card) => {
    const postDate = new Date(card.date);
    const date = postDate.getDate();
    const month = postDate.toLocaleString("default", { month: "long" });
    const year = postDate.getFullYear();
    const uploadTime = `${date} ${month}, ${year}`;

    return (
      <div className="validate-video-card-div" key={card._id}>
        <div className="video-card-content">
          <span className="video-card-title">{card.title}</span>
          <p className="video-card-uploader">
            By <b>{card.uploader}</b>
          </p>
          <p className="video-card-time">
            <i className="fa fa-clock-o" /> {uploadTime}
          </p>
        </div>
        <button
          onClick={() =>
            history.push(`/videos/validate/${props.path}/` + card._id)
          }
        >
          Edit
        </button>
      </div>
    );
  });

  return (
    <>
      <br />
      <br />
      <div>
        <Radio.Group onChange={handleRadios} defaultValue={radio}>
          <Radio.Button
            value="/videos/validate/gospel"
            className="page-radio-buttons"
          >
            Gospel
          </Radio.Button>
          <Radio.Button
            value="/videos/validate/spiritual"
            className="page-radio-buttons"
          >
            Spiritual
          </Radio.Button>
          <Radio.Button
            value="/videos/validate/mission"
            className="page-radio-buttons"
          >
            Mission
          </Radio.Button>
          <br />
          <Radio.Button
            value="/videos/validate/laity"
            className="page-radio-buttons"
          >
            SJ Laity
          </Radio.Button>
          <Radio.Button
            value="/videos/validate/youth"
            className="page-radio-buttons"
          >
            Youth
          </Radio.Button>
          <Radio.Button
            value="/videos/validate/follow"
            className="page-radio-buttons"
          >
            Follow Me
          </Radio.Button>
        </Radio.Group>
      </div>
      <br />
      {promiseInProgress && (
        <div className="spinner">
          <Spin size="large" />
        </div>
      )}
      <div className="validate-video-cards-container"> {videoCards}</div>
    </>
  );
};

export default VideoValidationCards;
