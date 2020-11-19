import React, { useState } from "react";
import axios from "axios";
import {
  TextField,
  Select,
  MenuItem,
  Button,
  makeStyles,
} from "@material-ui/core";

import "./VideoPost.css";
import BuildRoundedIcon from "@material-ui/icons/BuildRounded";

const useStyles = makeStyles((theme) => ({
  form: {
    "& div": {
      margin: theme.spacing(1),
    },
    "& .MuiTextField-root": {
      width: "100%",
    },
  },
  buttons: {
    width: "30%",
    [theme.breakpoints.down("xs")]: {
      width: "60%",
    },
  },
  select: {
    width: "40%",
    "& .MuiOutlinedInput-input": {
      padding: "3px 0",
    },
  },
}));

const VideoPost = () => {
  const [state, setState] = useState({
    uploader: "",
    caption: "",
    title: "",
    embedLink: "",
    videoURL: "",
  });
  const [path, setPath] = useState();
  const [ytUrl, setUrl] = useState("");

  const classes = useStyles();

  const ytApiKey = "AIzaSyDBX0aq_cztB34O0uJvfFJvn6q6Howyexw";
  const { uploader, caption, title, embedLink, videoURL } = state;

  const handleSubmit = async () => {
    const token = localStorage.getItem("auth-token");
    axios
      .post(
        `/api/videos-${path}`,
        {
          uploader: uploader,
          caption: caption,
          title: title,
          embedLink: embedLink,
          videoURL: videoURL,
        },
        { headers: { "x-auth-token": token } }
      )
      .then(() => {
        successMessage();
        setState({ uploader: "" });
      })
      .catch((err) => {
        console.log(err);
        errorMessage();
      });
  };

  const successMessage = () => {
    // return message.success("Video posted successfully. Thank You", 5);
  };

  const errorMessage = () => {
    // return message.error("There was a problem in posting the video. Sorry", 5);
  };

  const handleChange = (evt) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  };

  const handlePath = (evt) => {
    setPath(evt.target.value);
  };

  const handleNotification = () => {
    const url = "https://bombayjesuitstoday.com/videos/gospel";
    axios
      .post("/api/subs/send", {
        title: "New Videos Have Been Posted",
        message: "Don't miss out!",
        badge: "https://bombayjesuitstoday.com/images/dove.png",
        url: url,
      })
      //  .then(() => message.success("Notification sent"))
      .catch((err) => console.log(err));
  };

  const getId = (url) => {
    const query = {};
    const pairs = (url[0] === "?" ? url.substr(1) : url).split("&");
    for (let i = 0; i < pairs.length; i++) {
      let pair = pairs[i].split("=");
      query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || "");
    }
    return query;
  };

  const processUrl = () => {
    if (ytUrl === "") return;
    const videoId = Object.values(getId(ytUrl));
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId[0]}&key=${ytApiKey}`
      )
      .then((res) => {
        const data = res.data.items[0].snippet;

        const name = processUploader(data.channelId);
        setState({
          uploader: name,
          caption: data.description,
          title: data.title,
          embedLink: "https://www.youtube.com/embed/" + videoId[0],
          videoURL: ytUrl,
        });
      })
      .catch((err) => console.log(err));
  };

  const processUploader = (channelId) => {
    let name;
    switch (channelId) {
      case "UCejo1B53RYH9X2a9RtAsYtA":
        name = "Fr. Errol Fernandes SJ";
        setPath("gospel");
        break;
      case "UCkXNQpNd4bfbXaQuxNGQ1yw":
        name = "Fr. Vijay Gonsalves SJ";
        break;
      case "UCEypxIaduGt4NU3-h9ZgRFA":
        name = "Fr. Gerard Rodricks SJ";
        setPath("spiritual");
        break;
      case "UCa20s0nm63xe-trJQ10V63g":
        name = "Holy Family Church";
        setPath("laity");
        break;
      case "UCFVsEgVPGTEnxZK7Gx0YN5A":
        name = "Br. Sumit D'souza SJ";
        break;
      case "UCVGPM2WMUjO8_dVa6IFLy9A":
        name = "Fr. Ivan D'souza SJ";
        break;
      default:
        name = "null";
        break;
    }
    return name;
  };

  return (
    <div className="video-post-form">
      <h2> Post Video </h2>

      <form className={classes.form}>
        <div>
          <label htmlFor="link-processor">
            Paste link here and click on icon :
          </label>
          <TextField
            variant="outlined"
            color="secondary"
            size="small"
            name="link-processor"
            value={ytUrl}
            onChange={(e) => setUrl(e.target.value)}
            InputProps={{
              endAdornment: (
                <div
                  style={{ margin: 0, cursor: "pointer" }}
                  onClick={processUrl}
                >
                  <BuildRoundedIcon />
                </div>
              ),
            }}
          />
        </div>
        <div>
          <label htmlFor="uploader">Uploader's Name :</label>
          <br />
          <TextField
            variant="outlined"
            color="secondary"
            size="small"
            name="uploader"
            placeholder="Name"
            onChange={handleChange}
            value={uploader}
            required
          />
        </div>
        <div>
          <label htmlFor="title">Title of the Video: </label>
          <br />
          <TextField
            variant="outlined"
            size="small"
            color="secondary"
            placeholder="Title"
            name="title"
            onChange={handleChange}
            value={title}
            required
          />
        </div>
        <div>
          <label htmlFor="caption">Caption :</label>
          <br />
          <TextField
            variant="outlined"
            size="small"
            color="secondary"
            value={caption}
            name="caption"
            placeholder="Caption..."
            rows={3}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="embedLink">Embed Link :</label>
          <br />
          <TextField
            variant="outlined"
            size="small"
            color="secondary"
            placeholder="Link"
            name="embedLink"
            value={embedLink}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="videoURL">Video URL :</label>
          <br />
          <TextField
            variant="outlined"
            size="small"
            color="secondary"
            name="videoURL"
            placeholder="URL"
            value={videoURL}
            onChange={handleChange}
            required
          />
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "2rem",
          }}
        >
          <label htmlFor="videoURL">Select Path :</label>
          <Select
            variant="outlined"
            color="secondary"
            value={path}
            className={classes.select}
            onChange={handlePath}
          >
            <MenuItem value="gospel">Gospel</MenuItem>
            <MenuItem value="spiritual">Spiritual</MenuItem>
            <MenuItem value="mission">Mission</MenuItem>
            <MenuItem value="laity">SJ Laity</MenuItem>
            <MenuItem value="youth">Youth</MenuItem>
            <MenuItem value="follow">Follow Him</MenuItem>
          </Select>
        </div>

        <Button
          variant="contained"
          color="primary"
          className={classes.buttons}
          onClick={handleSubmit}
        >
          Post
        </Button>
        <br />
        <br />
        <Button
          variant="contained"
          style={{ backgroundColor: "rgb(45, 180, 15)", color: "#fff" }}
          className={classes.buttons}
          onClick={handleNotification}
        >
          Send Notification
        </Button>
      </form>
    </div>
  );
};

export default VideoPost;
