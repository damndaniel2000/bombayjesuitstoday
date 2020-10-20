import React, { useState } from "react";
import axios from "axios";
import { Form, Input, Radio, message } from "antd";

import "./VideoPost.css";

const VideoPost = () => {
  const [state, setState] = useState({
    uploader: "",
    caption: "",
    title: "",
    embedLink: "",
    videoURL: "",
  });
  const [path, setPath] = useState();
  const [ytUrl, setUrl] = useState();
  const ytApiKey = "AIzaSyDBX0aq_cztB34O0uJvfFJvn6q6Howyexw";
  const [hello, setHello] = useState();
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
    return message.success("Video posted successfully. Thank You", 5);
  };

  const errorMessage = () => {
    return message.error("There was a problem in posting the video. Sorry", 5);
  };

  const handleChange = (evt) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  };

  const handleRadios = (evt) => {
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
      .then(() => message.success("Notification sent"))
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
    const videoId = Object.values(getId(ytUrl));
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId[0]}&key=${ytApiKey}`
      )
      .then((res) => {
        const data = res.data.items[0].snippet;
        console.log(data);
        setState({
          caption: data.description,
          title: data.title,
          embedLink: "https://www.youtube.com/embed/" + videoId[0],
          videoURL: ytUrl,
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="video-post-form">
      <h1> Post Video </h1>
      <Form layout="vertical" size="large">
        <Form.Item name="uploader">
          <label htmlFor="uploader">Uploader's Name :</label>

          <Input
            placeholder="Name"
            name="uploader"
            onChange={handleChange}
            value={uploader}
            required
          />
        </Form.Item>

        <Form.Item name="title">
          <label htmlFor="title">Title of the Video: </label>
          <Input
            placeholder="Title"
            name="title"
            onChange={handleChange}
            value={title}
            required
          />
        </Form.Item>

        <Form.Item name="caption">
          <label htmlFor="caption">Caption :</label>
          <Input.TextArea
            value={caption}
            name="caption"
            placeholder="Caption..."
            rows={3}
            onChange={handleChange}
            required
          />
        </Form.Item>

        <Form.Item name="embedLink">
          <label htmlFor="embedLink">Embed Link :</label>

          <Input
            placeholder="Link"
            name="embedLink"
            value={embedLink}
            onChange={handleChange}
            required
          />
        </Form.Item>
        <p className="form-extra">
          Go to your video -> Share -> Embed -> Copy the link inside src=' ' and
          paste it here
        </p>

        <Form.Item name="videoURL">
          <label htmlFor="videoURL">Video URL :</label>

          <Input
            name="videoURL"
            placeholder="URL"
            value={videoURL}
            onChange={handleChange}
            required
          />
        </Form.Item>
        <p className="form-extra">
          This is the link to the page your video is on. This appears in the
          searchbar on top
        </p>

        <div>
          <Radio.Group onChange={handleRadios}>
            <Radio.Button value="gospel"> Gospel </Radio.Button>
            <Radio.Button value="spiritual"> Spiritual </Radio.Button>
            <Radio.Button value="mission"> Misson </Radio.Button>
            <Radio.Button value="laity"> SJ Laity </Radio.Button>
            <Radio.Button value="youth"> Youth </Radio.Button>
            <Radio.Button value="follow"> Follow Him </Radio.Button>
          </Radio.Group>
        </div>

        <button
          className="video-post-form-button"
          type="primary"
          onClick={handleSubmit}
        >
          Post
        </button>
        <br />
        <button
          style={{ backgroundColor: "green" }}
          className="video-post-form-button"
          type="primary"
          onClick={handleNotification}
        >
          Send Notification
        </button>
      </Form>
      <input value={ytUrl} onChange={(e) => setUrl(e.target.value)} />
      <button onClick={processUrl}> Process </button>
      <iframe
        width="600"
        height="340"
        src={hello}
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default VideoPost;
