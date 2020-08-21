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
  return (
    <div className="video-post-form">
      <h1> Post Video </h1>
      <Form onFinish={handleSubmit} layout="vertical" size="large">
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
            <Radio.Button value="follow"> Follow Me </Radio.Button>
          </Radio.Group>
        </div>

        <button className="video-post-form-button" type="primary">
          Post
        </button>
      </Form>
    </div>
  );
};

export default VideoPost;
