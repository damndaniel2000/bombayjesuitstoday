import React, { useState } from "react";
import "./VideoPost.css";
import axios from "axios";
import { Form, Input, message } from "antd";

const VideoPost = () => {
  const [state, setState] = useState({
    uploader: "",
    caption: "",
    embedLink: "",
    videoURL: "",
  });
  const { uploader, caption, embedLink, videoURL } = state;

  const handleSubmit = async () => {
    axios
      .post("/api/videos-post", {
        uploader: uploader,
        caption: caption,
        embedLink: embedLink,
        videoURL: videoURL,
      })
      .then(() => successMessage())
      .catch((err) => {
        console.log(err);
        errorMessage();
      });
  };

  const successMessage = () => {
    return message.success("Video posted successfully. Thank You", 5);
  };

  const errorMessage = () => {
    return message.error(
      "There was a problem in uploading the video. Sorry",
      5
    );
  };

  const handleChange = (evt) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
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
            placeholder="Embed Link"
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
            placeholder="Video URL"
            value={videoURL}
            onChange={handleChange}
            required
          />
        </Form.Item>
        <p className="form-extra">
          This is the link to the page your video is on. This appears in the
          searchbar on top
        </p>

        <button className="video-post-form-button" type="primary">
          Post
        </button>
      </Form>
    </div>
  );
};

export default VideoPost;
