/*eslint-disable*/

import React, { useState, useEffect } from "react";
import axios from "axios";
import { withRouter } from "react-router";
import { Radio, message } from "antd";

import "./ContribuorsAddVideos.css";

const AddVideos = (props) => {
  const [videos, setVideos] = useState([]);
  const [contriVids, setContriVids] = useState([]);
  const [selectedVids, setSelected] = useState([]);
  const [render, setRender] = useState(true);
  const [model, setModel] = useState();

  useEffect(() => {
    const getVideos = async () => {
      try {
        const res = await axios.get("/api/videos-gospel");
        setVideos(res.data);
        setModel("VideosGospel");
      } catch (err) {
        console.log(err);
      }
    };
    getVideos();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    const getContri = async () => {
      try {
        const res = await axios.get(
          "/api/contributors-jesuits/" + props.match.params.id
        );

        setContriVids(res.data.videos);
      } catch (err) {
        console.log(err);
      }
    };
    if (render) {
      getContri();
    }
    if (contriVids !== []) {
      setRender(false);
    }
  }, [contriVids]);

  useEffect(() => {
    if (!render && contriVids !== [])
      contriVids.map((item) => {
        selectedVids.push(item.videoID);
      });
  }, [contriVids]);

  const handleRadios = async (e) => {
    const path = e.target.value;
    try {
      const res = await axios.get("/api/videos-" + path);
      setVideos(res.data);
    } catch (err) {
      console.log("ERR", path);
    }
    switch (path) {
      case "gospel":
        setModel("VideosGospel");
        break;
      case "spiritual":
        setModel("VideosSpiritual");
        break;
      case "laity":
        setModel("VideosLaity");
        break;
      case "youth":
        setModel("VideosYouth");
        break;
      case "follow":
        setModel("VideosFollow");
        break;
      default:
        break;
    }
  };

  const addVideo = async (id) => {
    try {
      const res = await axios.post(
        `/api/contributors-jesuits/${props.match.params.id}/videos`,
        {
          videoID: id,
          onModel: model,
        }
      );
      message.success(res.data.message);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteVideo = async (id) => {
    try {
      const res = await axios.delete(
        `/api/contributors-jesuits/${props.match.params.id}/videos/${id}`
      );
      message.success(res.data.message);
    } catch (err) {
      console.log(err);
    }
  };

  const videoCards = videos.map((card) => {
    const postDate = new Date(card.date);
    const date = postDate.getDate();
    const month = postDate.toLocaleString("default", { month: "long" });
    const year = postDate.getFullYear();
    const uploadTime = `${date} ${month}, ${year}`;

    const check = selectedVids.includes(card._id);
    let borderStyle = {};
    if (check) borderStyle = { borderColor: "blue" };

    return (
      <div
        className="contri-video-card"
        key={card._id}
        style={borderStyle}
        onClick={() => {
          if (!check) addVideo(card._id);
          else deleteVideo(card._id);
        }}
      >
        <div className="contri-video-card-content">
          {card.title}
          <br />
          By <b>{card.uploader}</b>
          <br />
          <i className="fa fa-clock-o" /> {uploadTime}
        </div>
      </div>
    );
  });

  return (
    <>
      <div>
        <Radio.Group onChange={handleRadios} defaultValue="gospel">
          <Radio.Button value="gospel" className="page-radio-buttons">
            Gospel
          </Radio.Button>
          <Radio.Button value="spiritual" className="page-radio-buttons">
            Spiritual
          </Radio.Button>
          <Radio.Button value="mission" className="page-radio-buttons">
            Mission
          </Radio.Button>
          <br />
          <Radio.Button value="laity" className="page-radio-buttons">
            SJ Laity
          </Radio.Button>
          <Radio.Button value="youth" className="page-radio-buttons">
            Youth
          </Radio.Button>
          <Radio.Button value="follow" className="page-radio-buttons">
            Follow Him
          </Radio.Button>
        </Radio.Group>
      </div>

      <div className="contri-video-card-container"> {videoCards}</div>
    </>
  );
};

export default withRouter(AddVideos);
