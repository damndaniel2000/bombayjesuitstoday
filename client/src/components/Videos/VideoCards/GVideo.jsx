import React, { useState, useEffect } from "react";
import axios from "axios";

import ShareButton from "./ShareButton";

const GVid = (props) => {
  const [gVid, setGVid] = useState({
    title: "",
    caption: "",
    link: "",
    watchLink: "",
    date: "",
  });

  const getId = (url) => {
    const query = {};
    const pairs = (url[0] === "?" ? url.substr(1) : url).split("&");
    for (let i = 0; i < pairs.length; i++) {
      let pair = pairs[i].split("=");
      query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || "");
    }
    return query;
  };

  const processUrl = (videoId) => {
    const ytApiKey = "AIzaSyDBX0aq_cztB34O0uJvfFJvn6q6Howyexw";
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${ytApiKey}`
      )
      .then((res) => {
        const data = res.data.items[0].snippet;
        const postDate = new Date(data.date);
        const date = postDate.getDate();
        const month = postDate.toLocaleString("default", { month: "long" });
        const year = postDate.getFullYear();
        const uploadTime = `${date} ${month}, ${year}`;
        setGVid({
          title: data.title,
          caption: data.description,
          data: postDate,
        });
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    var channelID = "UCEypxIaduGt4NU3-h9ZgRFA";
    var reqURL = "https://www.youtube.com/feeds/videos.xml?channel_id=";

    axios
      .get(
        "https://api.rss2json.com/v1/api.json?rss_url=" +
          encodeURIComponent(reqURL) +
          channelID
      )
      .then((res) => {
        const id = Object.values(getId(res.data.items[0].link));
        setGVid({ link: `https://www.youtube.com/embed/${id[0]}` });
        processUrl(id[0]);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="video-card-div">
        <div className="video-card-content">
          <span className="video-card-title">{gVid.title}</span>
          <p className="video-card-uploader">
            By <b>Fr G</b>
          </p>
          <p className="video-card-time">
            <i className="fa fa-clock-o" /> {gVid.date}
          </p>
          <p className="video-card-caption">{gVid.caption}</p>
        </div>
        <iframe
          className="video-card-video"
          frameBorder="0"
          src={gVid.link}
          allowFullScreen
        ></iframe>
        <div className="video-card-sharebuttons">
          <ShareButton />
          <a
            href={props.detectDevice("w")}
            target="_blank"
            rel="noopener noreferrer"
          >
            Not Loading? Click here to view in Youtube{" "}
            <i className="fa fa-youtube-play" />
          </a>
        </div>
        <div className="backtop" onClick={props.backtop}>
          Back To Top <i className="fa fa-arrow-up" />
        </div>
      </div>
    </>
  );
};

export default GVid;
