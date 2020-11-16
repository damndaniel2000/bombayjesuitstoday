import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Card, useMediaQuery, useTheme, makeStyles } from "@material-ui/core";
import { Skeleton, Pagination } from "@material-ui/lab";

import ShareButton from "./ShareButton";
import "./VideoCards.css";

const useStyles = makeStyles((theme) => ({
  video: {
    height: 400,
    width: "100%",
    marginTop: "1rem",
    [theme.breakpoints.down("xs")]: {
      height: 300,
      width: "95%",
      margin: "0 auto",
    },
  },
  title: {
    marginBottom: 10,
    width: "80%",
  },
  uploader: {
    marginTop: "1.5rem",
    width: "15%",
    marginBottom: 10,
  },
  date: {
    width: "15%",
    marginBottom: "1rem",
  },
  caption: {
    marginBottom: 10,
  },
}));

const VideoCards = (props) => {
  const [videos, setVideos] = useState([]);
  const [pageVids, setPageVids] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(Number);
  const [isLoading, setLoading] = useState(true);

  const history = useHistory();
  const classes = useStyles();
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const radio = "/videos/" + props.path;

  useEffect(() => {
    const getVideos = async () => {
      try {
        const res = await axios.get("/api/videos-" + props.path);
        setVideos(res.data);
        setTotal(res.data.length);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    getVideos();
  }, [props.path]);

  useEffect(() => {
    if (videos.length >= 5) {
      let currentItems = (page - 1) * 5;
      if (page === 1) currentItems = 0;
      setPageVids(videos.slice(currentItems, currentItems + 5));
      pageVids.reverse();
    } else setPageVids(videos);
  }, [videos, page]);

  const [gData, setGdata] = useState({});
  const channelID = "UCEypxIaduGt4NU3-h9ZgRFA";
  const reqURL = "https://www.youtube.com/feeds/videos.xml?channel_id=";

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(
          "https://api.rss2json.com/v1/api.json?rss_url=" +
            encodeURIComponent(reqURL) +
            channelID
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

  const detectDevice = (link) => {
    if (window.screen.width < 800) {
      let newLink = link.replace("https://", "");
      return `intent://${newLink}#Intent;scheme=vnd.youtube;package=com.google.android.youtube;S.browser_fallback_url=market://details?id=com.google.android.youtube;end;`;
    } else return link;
  };

  const videoCards = () => {
    return pageVids.map((card) => {
      const postDate = new Date(card.date);
      const date = postDate.getDate();
      const month = postDate.toLocaleString("default", { month: "long" });
      const year = postDate.getFullYear();
      const uploadTime = `${date} ${month}, ${year}`;

      return (
        <Card className="video-card-div" key={card._id}>
          <div className="video-card-content">
            <span className="video-card-title">{card.title}</span>
            <p className="video-card-uploader">
              By <b>{card.uploader}</b>
            </p>
            <p className="video-card-time">{uploadTime}</p>
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
            <ShareButton videoUrl={card.videoURL} detectDevice={detectDevice} />
          </div>
        </Card>
      );
    });
  };

  const GVideoCard = () => {
    return (
      <Card className="video-card-div">
        <div className="video-card-content">
          <span className="video-card-title">{gData.title}</span>
          <p className="video-card-uploader">
            By <b>Fr. Gerard Rodricks SJ</b>
          </p>
          <p className="video-card-time">Today</p>
        </div>
        <iframe
          className="video-card-video"
          frameBorder="0"
          src={gData.embedLink}
          title={gData._id}
          allowFullScreen
        ></iframe>
        <div className="video-card-sharebuttons">
          <ShareButton videoUrl={gData.videoURL} detectDevice={detectDevice} />
        </div>
      </Card>
    );
  };

  return (
    <>
      {isLoading &&
        [0, 0, 0, 0, 0].map(() => (
          <Card className="video-card-div">
            <div className="video-card-content">
              <Skeleton variant="rect" className={classes.title} />
              <Skeleton variant="rect" className={classes.uploader} />
              <Skeleton variant="rect" className={classes.date} />
              <Skeleton variant="rect" className={classes.caption} />
              <Skeleton variant="rect" className={classes.caption} />
              <Skeleton variant="rect" className={classes.caption} />
            </div>
            <Skeleton variant="rect" className={classes.video} />
          </Card>
        ))}
      {props.path === "spiritual" && page === 1 && !isLoading && GVideoCard()}
      {!isLoading && total > 0 && (
        <>
          {videoCards()}
          <div className="pagination-container">
            <Pagination
              count={Math.floor(total / 5)}
              color="secondary"
              size={matchesXS ? "small" : "large"}
              page={page}
              onChange={(e, page) => setPage(page)}
            />
          </div>
        </>
      )}
    </>
  );
};

export default VideoCards;
