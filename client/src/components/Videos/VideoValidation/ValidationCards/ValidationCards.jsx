import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Card,
  Button,
  ButtonGroup,
  useMediaQuery,
  useTheme,
  makeStyles,
  CircularProgress,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

import "./VideoValidateCards.css";

const useStyles = makeStyles((theme) => ({
  radios: {
    width: 120,
    padding: "10px 0",
    borderRadius: 0,
    [theme.breakpoints.down("xs")]: {
      width: 90,
    },
  },
}));

const VideoValidationCards = (props) => {
  const [videos, setVideos] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const theme = useTheme();
  const classes = useStyles();
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const history = useHistory();

  const radio = "/videos/validate/" + props.path;

  useEffect(() => {
    const getVideos = async () => {
      try {
        const res = await axios.get("/api/videos-" + props.path);
        setVideos(res.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    window.scrollTo(0, 0);
    getVideos();
  }, [props.path]);

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
      <ButtonGroup
        size={matchesXS ? "small" : "large"}
        color="secondary"
        style={{ display: "block" }}
      >
        <Button
          variant={props.path === "spiritual" ? "contained" : "outlined"}
          className={classes.radios}
          onClick={() => history.push("/videos/validate/spiritual")}
        >
          Spiritual
        </Button>
        <Button
          variant={props.path === "gospel" ? "contained" : "outlined"}
          className={classes.radios}
          onClick={() => history.push("/videos/validate/gospel")}
        >
          Gospel
        </Button>
        <Button
          variant={props.path === "mission" ? "contained" : "outlined"}
          className={classes.radios}
          onClick={() => history.push("/videos/validate/mission")}
        >
          Mission
        </Button>
      </ButtonGroup>
      <ButtonGroup
        size={matchesXS ? "small" : "large"}
        color="secondary"
        style={{ display: "block" }}
      >
        <Button
          variant={props.path === "laity" ? "contained" : "outlined"}
          className={classes.radios}
          onClick={() => history.push("/videos/validate/laity")}
        >
          Laity
        </Button>
        <Button
          variant={props.path === "youth" ? "contained" : "outlined"}
          className={classes.radios}
          onClick={() => history.push("/videos/validate/youth")}
        >
          Youth
        </Button>
        <Button
          variant={props.path === "follow" ? "contained" : "outlined"}
          className={classes.radios}
          onClick={() => history.push("/videos/validate/follow")}
        >
          Follow
        </Button>
      </ButtonGroup>
      <br />
      {isLoading && <CircularProgress />}
      <div className="validate-video-cards-container"> {videoCards}</div>
    </>
  );
};

export default VideoValidationCards;
