import React, { useState, useEffect } from "react";
import axios from "axios";
import { withRouter } from "react-router";
import { useHistory } from "react-router-dom";
import {
  TextField,
  Select,
  MenuItem,
  Button,
  CircularProgress,
  makeStyles,
} from "@material-ui/core";

import Alert from "../../../Custom/Alerts";

const useStyles = makeStyles((theme) => ({
  form: {
    "& div": {
      margin: theme.spacing(1),
      marginLeft: 0,
    },
    "& .MuiTextField-root": {
      width: "100%",
      borderRadius: 0,
    },
    "& .MuiOutlinedInput-root": {
      borderRadius: 0,
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

const BlogDetails = (props) => {
  const [video, setVideo] = useState([]);
  const [uploader, setUploader] = useState();
  const [title, setTitle] = useState();
  const [caption, setCaption] = useState();
  const [embedLink, setEmbed] = useState();
  const [videoURL, setURL] = useState();
  const [postDate, setDate] = useState();
  const [path, setPath] = useState(props.path);

  const [load, setLoad] = useState(true);
  const [render, setRender] = useState(true);

  const [notification, setNotification] = useState({
    showNotification: false,
    severity: "",
    msg: "",
  });

  const classes = useStyles();

  const token = localStorage.getItem("auth-token");
  const history = useHistory();

  useEffect(() => {
    const getVideo = () => {
      axios
        .get(`/api/videos-${props.path}/` + props.match.params.id)
        .then((res) => {
          setVideo(res.data);
          setRender(false);
          setUploader(video.uploader);
          setTitle(video.title);
          setCaption(video.caption);
          setEmbed(video.embedLink);
          setURL(video.videoURL);
          setDate(video.date);
          setLoad(false);
        })
        .catch((err) => console.log(err));
    };

    getVideo();

    window.scrollTo(0, 0);
    //eslint-disable-next-line
  }, [render]);

  const handleSubmit = () => {
    axios
      .put(
        `/api/videos-${props.path}/` + props.match.params.id,
        {
          uploader: uploader,
          title: title,
          caption: caption,
          embedLink: embedLink,
          videoURL: videoURL,
          date: postDate,
        },
        { headers: { "x-auth-token": token } }
      )
      .then(() =>
        setNotification({
          showNotification: true,
          severity: "success",
          msg: "Posted Successfully",
        })
      )
      .catch(() =>
        setNotification({
          showNotification: true,
          severity: "error",
          msg: "There was an error while posting",
        })
      );
  };

  const handleDelete = (id) => {
    const token = localStorage.getItem("auth-token");
    const confirm = prompt("Types YES in the input below");
    if (confirm === "YES") {
      axios
        .delete(`/api/videos-${props.path}/` + props.match.params.id, {
          headers: { "x-auth-token": token },
        })
        .then(() => {
          history.push("/validate/spiritual");
        })
        .catch((err) =>
          setNotification({
            showNotification: true,
            severity: "error",
            msg: "There was an error while posting",
          })
        );
    } else {
      setNotification({
        showNotification: true,
        severity: "error",
        msg: "There was an error while posting",
      });
    }
  };

  const handlePath = (evt) => {
    setPath(evt.target.value);
  };

  return (
    <>
      {!load ? (
        <div className="video-post-form">
          <h2> Update Video Details </h2>

          <form className={classes.form}>
            <div>
              <label htmlFor="uploader">Uploader's Name :</label>
              <br />
              <TextField
                variant="outlined"
                color="secondary"
                size="small"
                name="uploader"
                placeholder="Name"
                onChange={(e) => setUploader(e.target.value)}
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
                onChange={(e) => setTitle(e.target.value)}
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
                onChange={(e) => setCaption(e.target.value)}
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
                onChange={(e) => setEmbed(e.target.value)}
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
                onChange={(e) => setURL(e.target.value)}
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
              <label htmlFor="videoURL">Select Path : </label>
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
              Update
            </Button>
            <br />
            <br />
            <Button
              variant="contained"
              style={{ backgroundColor: "rgb(191, 41, 41)", color: "#fff" }}
              className={classes.buttons}
              onClick={handleDelete}
            >
              Delete
            </Button>
          </form>
          <Alert
            open={notification.showNotification}
            setNotification={setNotification}
            severity={notification.severity}
            message={notification.msg}
          />
        </div>
      ) : (
        <div style={{ minHeight: "100vh" }}>
          <CircularProgress />
        </div>
      )}
    </>
  );
};

export default withRouter(BlogDetails);
