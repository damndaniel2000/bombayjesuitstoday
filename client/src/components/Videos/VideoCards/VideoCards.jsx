import React, { useState, useEffect } from "react";
import axios from "axios";
import { trackPromise, usePromiseTracker } from "react-promise-tracker";
import { Spin, Radio, Pagination } from "antd";
import { useHistory } from "react-router-dom";

import ShareButton from "./ShareButton";
import "./VideoCards.css";

const VideoCards = (props) => {
  const [videos, setVideos] = useState([]);

  const [pageVids, setPageVids] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(Number);

  const { promiseInProgress } = usePromiseTracker();

  const history = useHistory();

  const radio = "/videos/" + props.path;

  useEffect(() => {
    const getVideos = async () => {
      try {
        const res = await trackPromise(axios.get("/api/videos-" + props.path));
        setVideos(res.data);
        setTotal(res.data.length);
      } catch (err) {
        console.log(err);
      }
    };
    window.scrollTo(0, 0);
    getVideos();
  }, [props.path]);

  useEffect(() => {
    if (videos.length >= 5) {
      let currentItems = (page - 1) * 5;
      if (page === 1) currentItems = 0;
      setPageVids(videos.slice(currentItems, currentItems + 5));
      pageVids.reverse();
      backtop();
    } else setPageVids(videos);
  }, [videos, page]);

  const [gData, setGdata] = useState({});
  const channelID = "UCEypxIaduGt4NU3-h9ZgRFA";
  const reqURL = "https://www.youtube.com/feeds/videos.xml?channel_id=";

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await trackPromise(
          axios.get(
            "https://api.rss2json.com/v1/api.json?rss_url=" +
              encodeURIComponent(reqURL) +
              channelID
          )
        );
        const data = res.data.items[0];
        const idObj = getId(data.link);
        const id = Object.values(idObj);
        const gVidData = {
          id: 12312,
          title: data.title,
          uploader: "Demo",
          embedLink: `https://www.youtube.com/embed/${id[0]}`,
          videoURL: data.link,
        };
        setGdata(gVidData);
      } catch (err) {
        console.log(err);
      }
    };

    if (props.path === "spiritual") {
      getData();
    }
  }, [videos, props.path]);

  const getId = (url) => {
    const query = {};
    const pairs = (url[0] === "?" ? url.substr(1) : url).split("&");
    for (let i = 0; i < pairs.length; i++) {
      let pair = pairs[i].split("=");
      query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || "");
    }
    return query;
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

  const backtop = () => {
    var scrollStep = -window.scrollY / (100 / 15),
      scrollInterval = setInterval(function () {
        if (window.scrollY !== 0) {
          window.scrollBy(0, scrollStep);
        } else clearInterval(scrollInterval);
      }, 15);
  };

  const videoCards = () => {
    return pageVids.map((card) => {
      const postDate = new Date(card.date);
      const date = postDate.getDate();
      const month = postDate.toLocaleString("default", { month: "long" });
      const year = postDate.getFullYear();
      const uploadTime = `${date} ${month}, ${year}`;

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
          <div className="backtop" onClick={backtop}>
            Back To Top <i className="fa fa-arrow-up" />
          </div>
        </div>
      );
    });
  };

  const GVideoCard = () => {
    return (
      <div className="video-card-div">
        <div className="video-card-content">
          <span className="video-card-title">{gData.title}</span>
          <p className="video-card-uploader">
            By <b>Fr. Gerard Rodricks SJ</b>
          </p>
          <p className="video-card-time">
            <i className="fa fa-clock-o" /> Today
          </p>
        </div>
        <iframe
          className="video-card-video"
          frameBorder="0"
          src={gData.embedLink}
          title={gData._id}
          allowFullScreen
        ></iframe>
        <div className="video-card-sharebuttons">
          <ShareButton videoUrl={gData.videoURL} />
          <a
            href={detectDevice(gData.videoURL)}
            target="_blank"
            rel="noopener noreferrer"
          >
            Not Loading? Click here to view in Youtube{" "}
            <i className="fa fa-youtube-play" />
          </a>
        </div>
        <div className="backtop" onClick={backtop}>
          Back To Top <i className="fa fa-arrow-up" />
        </div>
      </div>
    );
  };

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
            Youth
          </Radio.Button>
          <Radio.Button value="/videos/follow" className="page-radio-buttons">
            Follow Him
          </Radio.Button>
        </Radio.Group>
      </div>
      <br />
      {promiseInProgress && (
        <div className="spinner">
          <Spin size="large" />
        </div>
      )}
      {props.path === "spiritual" && page === 1 && GVideoCard()}
      {videoCards()}
      <Pagination
        current={page}
        total={total}
        hideOnSinglePage={true}
        defaultPageSize={5}
        responsive={true}
        showSizeChanger={false}
        onChange={(page) => {
          setPage(page);
        }}
        style={{ margin: "80px auto" }}
      />
    </>
  );
};

export default VideoCards;
